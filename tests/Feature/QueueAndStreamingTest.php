<?php

use Carbon\CarbonImmutable;
use Illuminate\Contracts\Queue\Factory as QueueFactory;
use Illuminate\Http\Request;
use Illuminate\Support\Defer\DeferredCallbackCollection;
use Illuminate\Support\Facades\Context;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Str;
use Illuminate\Support\Testing\Fakes\QueueFake;
use Kanary\AiObservatory\Adapters\ModelEventAdapter;
use Kanary\AiObservatory\AiObservatory;
use Kanary\AiObservatory\Context\TraceContext;
use Kanary\AiObservatory\Contracts\Recorder;
use Kanary\AiObservatory\Contracts\Sampler;
use Kanary\AiObservatory\Data\EventRecorded;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\ThrowableData;
use Kanary\AiObservatory\Data\TokenUsage;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Enums\TraceStatus;
use Kanary\AiObservatory\Jobs\PersistRecordedEvents;
use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;
use Kanary\AiObservatory\Queue\PropagateAiTraceContext;
use Kanary\AiObservatory\Recording\DatabaseRecorder;
use Kanary\AiObservatory\Recording\InternalEventSerializer;
use Kanary\AiObservatory\Recording\PersistenceRecorder;
use Kanary\AiObservatory\Recording\RecordingPipeline;
use Kanary\AiObservatory\Sampling\SamplingRecorder;
use Kanary\AiObservatory\Support\PayloadLimiter;
use Kanary\AiObservatory\Tests\Fixtures\ToolCallingAgent;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\Providers\TextProvider;
use Laravel\Ai\Events\AgentStreamed;
use Laravel\Ai\Prompts\AgentPrompt;
use Laravel\Ai\Responses\Data\Meta;
use Laravel\Ai\Responses\StreamedAgentResponse;
use Laravel\Ai\Streaming\Events\Error as StreamError;
use Laravel\Ai\Streaming\Events\StreamEnd;
use Laravel\Ai\Streaming\Events\StreamStart;

const QUEUE_STREAM_INVOCATION_ID = '018f47a2-4f4e-7d10-9c2f-6f447d7a2001';
const QUEUE_TRACE_ID = '018f47a2-4f4e-7d10-9c2f-6f447d7a2002';
const QUEUE_ROOT_SPAN_ID = '018f47a2-4f4e-7d10-9c2f-6f447d7a2003';
const PARENT_TRACE_ID = '018f47a2-4f4e-7d10-9c2f-6f447d7a2004';
const PARENT_SPAN_ID = '018f47a2-4f4e-7d10-9c2f-6f447d7a2005';
const CHILD_TRACE_ID = '018f47a2-4f4e-7d10-9c2f-6f447d7a2006';
const CHILD_ROOT_SPAN_ID = '018f47a2-4f4e-7d10-9c2f-6f447d7a2007';

it('round trips every supported internal event through queue-safe arrays', function () {
    $serializer = app(InternalEventSerializer::class);
    $now = CarbonImmutable::now();
    $events = [
        new TraceStarted('trace', 'root', 'Queued trace', $now, ['feature' => 'support']),
        new SpanStarted('trace', 'span', 'root', SpanType::Tool, 'Search', $now, [
            'arguments' => ['query' => 'order'],
        ]),
        new SpanFinished(
            'trace',
            'span',
            $now->addSecond(),
            SpanStatus::Failed,
            ['result' => 'unavailable'],
            new TokenUsage(8, 3, 2, 1, 11),
            new ThrowableData(RuntimeException::class, 'Failed safely'),
        ),
        new EventRecorded('trace', 'span', 'provider_failed', $now, ['attempt' => 1]),
        new TraceFinished(
            'trace',
            $now->addSecond(),
            TraceStatus::Failed,
            new ThrowableData(RuntimeException::class, 'Failed safely'),
        ),
    ];

    foreach ($events as $event) {
        $payload = $serializer->serialize($event);
        $restored = $serializer->unserialize($payload);

        expect($payload)->toBeArray()
            ->and($restored)->toEqual($event);
    }
});

it('persists after the response without delaying agent execution', function () {
    config()->set('ai-observatory.recording_mode', 'after_response');
    ToolCallingAgent::fake(['Deferred response']);

    $response = (new ToolCallingAgent)->prompt('Hello later');

    expect($response->text)->toBe('Deferred response')
        ->and(Trace::query()->count())->toBe(0);

    app(DeferredCallbackCollection::class)->invoke();

    expect(Trace::query()->sole()->status)->toBe('successful')
        ->and(Span::query()->count())->toBe(2);
});

it('dispatches one redacted internal event batch to the configured queue', function () {
    Queue::fake();
    config()->set('ai-observatory.recording_mode', 'queue');
    config()->set('ai-observatory.queue.name', 'observatory');
    app()->forgetInstance(PersistenceRecorder::class);
    app()->forgetInstance(RecordingPipeline::class);
    app()->forgetInstance(Recorder::class);
    $now = CarbonImmutable::now();
    $recorder = app(Recorder::class);
    $recorder->record(new TraceStarted(
        QUEUE_TRACE_ID,
        QUEUE_ROOT_SPAN_ID,
        'Queued trace',
        $now,
    ));
    $recorder->record(new SpanStarted(
        QUEUE_TRACE_ID,
        QUEUE_ROOT_SPAN_ID,
        null,
        SpanType::Agent,
        'Queued agent',
        $now,
        ['password' => 'queue-secret'],
    ));
    $recorder->record(new SpanFinished(
        QUEUE_TRACE_ID,
        QUEUE_ROOT_SPAN_ID,
        $now->addSecond(),
        SpanStatus::Successful,
    ));
    $recorder->record(new TraceFinished(
        QUEUE_TRACE_ID,
        $now->addSecond(),
        TraceStatus::Successful,
    ));

    expect(app(QueueFactory::class))->toBeInstanceOf(QueueFake::class)
        ->and(app(DeferredCallbackCollection::class)->count())->toBeGreaterThan(0);

    app(DeferredCallbackCollection::class)->invoke();

    Queue::assertPushedOn('observatory', PersistRecordedEvents::class);

    $job = Queue::pushed(PersistRecordedEvents::class)->first();
    $payloads = $job->payloads();

    expect($payloads)->not->toBeEmpty()
        ->and($payloads[0]['type'])->toBe('trace_started')
        ->and($payloads[1]['request']['password'])->toBe('[REDACTED]')
        ->and(collect($payloads)->every(fn (mixed $event): bool => is_array($event)))->toBeTrue()
        ->and(json_decode((string) json_encode($payloads), true))->toBe($payloads)
        ->and($job->payloadBytes())->toBeLessThan(
            strlen((string) json_encode($payloads)) + 2_000,
        )
        ->and(Trace::query()->count())->toBe(0);

    app()->call([$job, 'handle']);

    expect(Trace::query()->sole()->status)->toBe('successful')
        ->and(Span::query()->count())->toBe(1);
});

it('falls back to deferred local persistence when a queue payload is too large', function () {
    Queue::fake();
    config()->set('ai-observatory.recording_mode', 'queue');
    config()->set('ai-observatory.queue.max_payload_bytes', 1);
    app()->forgetInstance(PersistenceRecorder::class);
    app()->forgetInstance(RecordingPipeline::class);
    app()->forgetInstance(Recorder::class);

    $now = CarbonImmutable::now();
    $recorder = app(Recorder::class);
    $recorder->record(new TraceStarted(
        QUEUE_TRACE_ID,
        QUEUE_ROOT_SPAN_ID,
        'Oversized queued trace',
        $now,
    ));
    $recorder->record(new SpanStarted(
        QUEUE_TRACE_ID,
        QUEUE_ROOT_SPAN_ID,
        null,
        SpanType::Agent,
        'Oversized queued agent',
        $now,
    ));
    $recorder->record(new SpanFinished(
        QUEUE_TRACE_ID,
        QUEUE_ROOT_SPAN_ID,
        $now->addSecond(),
        SpanStatus::Successful,
    ));
    $recorder->record(new TraceFinished(
        QUEUE_TRACE_ID,
        $now->addSecond(),
        TraceStatus::Successful,
    ));

    app(DeferredCallbackCollection::class)->invoke();

    Queue::assertNothingPushed();
    expect(Trace::query()->sole()->status)->toBe('successful');
});

it('persists a fake agent end to end through the sync queue connection', function () {
    config()->set('ai-observatory.recording_mode', 'queue');
    config()->set('ai-observatory.queue.connection', 'sync');
    ToolCallingAgent::fake(['Queued end-to-end response']);

    $response = (new ToolCallingAgent)->prompt('Run through the queue');

    expect($response->text)->toBe('Queued end-to-end response')
        ->and(Trace::query()->count())->toBe(0);

    app(DeferredCallbackCollection::class)->invoke();

    expect(Trace::query()->sole()->status)->toBe('successful')
        ->and(Span::query()->count())->toBe(2);
});

it('preserves redacted business context through deferred persistence modes', function (string $mode) {
    config()->set('ai-observatory.recording_mode', $mode);
    config()->set('ai-observatory.queue.connection', 'sync');
    ToolCallingAgent::fake(['Context-aware response']);

    AiObservatory::withContext([
        'feature' => 'ticket-reply',
        'user_id' => 'user-42',
        'user_type' => 'App\\Models\\User',
        'tenant_id' => 'tenant-7',
        'tenant_type' => 'App\\Models\\Organization',
        'api_key' => 'context-secret',
    ], function (): void {
        (new ToolCallingAgent)->prompt('Keep this context');
    });

    expect(Trace::query()->count())->toBe(0);

    app(DeferredCallbackCollection::class)->invoke();

    $trace = Trace::query()->sole();

    expect($trace->feature)->toBe('ticket-reply')
        ->and($trace->user_id)->toBe('user-42')
        ->and($trace->user_type)->toBe('App\\Models\\User')
        ->and($trace->tenant_id)->toBe('tenant-7')
        ->and($trace->tenant_type)->toBe('App\\Models\\Organization')
        ->and($trace->tags['api_key'])->toBe('[REDACTED]');
})->with(['after_response', 'queue']);

it('ignores malformed queued event data without failing the recording job', function () {
    $job = new PersistRecordedEvents([
        ['type' => 'span_finished', 'ended_at' => 'not-a-date'],
        ['type' => 'unknown'],
    ]);

    expect(fn () => app()->call([$job, 'handle']))
        ->not->toThrow(Throwable::class);
});

it('swallows queue dispatch failures', function () {
    $queues = Mockery::mock(QueueFactory::class);
    $queues->allows('connection')->andThrow(
        new RuntimeException('Queue unavailable'),
    );
    $recorder = new PersistenceRecorder(
        app(SamplingRecorder::class),
        app(InternalEventSerializer::class),
        $queues,
    );
    $event = new TraceStarted(
        'dispatch-failure',
        'dispatch-failure',
        'Dispatch failure',
        CarbonImmutable::now(),
    );

    expect(function () use ($recorder, $event): void {
        $recorder->record($event);
        $recorder->flush('queue');
    })->not->toThrow(Throwable::class);
});

it('swallows after-response persistence failures', function () {
    $database = Mockery::mock(DatabaseRecorder::class);
    $database->allows('record')->andThrow(
        new RuntimeException('Database unavailable'),
    );
    $recorder = new PersistenceRecorder(
        new SamplingRecorder($database, app(Sampler::class)),
        app(InternalEventSerializer::class),
        app(QueueFactory::class),
    );
    $event = new TraceStarted(
        '018f47a2-4f4e-7d10-9c2f-6f447d7a2010',
        '018f47a2-4f4e-7d10-9c2f-6f447d7a2011',
        'Persistence failure',
        CarbonImmutable::now(),
    );

    expect(function () use ($recorder, $event): void {
        $recorder->record($event);
        $recorder->flush('after_response');
    })->not->toThrow(Throwable::class);
});

it('propagates trace context through Laravel queue context and clears it after a job', function () {
    $context = app(TraceContext::class);
    $context->start(PARENT_TRACE_ID, PARENT_SPAN_ID);
    $context->tag('feature', 'ticket-reply');
    $dehydrated = Context::dehydrate();

    $context->clear();
    Context::flush();
    Context::hydrate($dehydrated);

    $observed = null;

    (new PropagateAiTraceContext)->handle(
        new stdClass,
        function () use (&$observed): void {
            $jobContext = app(TraceContext::class);
            $observed = $jobContext->snapshot();
            $now = CarbonImmutable::now();
            $recorder = app(DatabaseRecorder::class);
            $recorder->record(new TraceStarted(
                CHILD_TRACE_ID,
                CHILD_ROOT_SPAN_ID,
                'Queued child trace',
                $now,
            ));
            $recorder->record(new SpanStarted(
                CHILD_TRACE_ID,
                CHILD_ROOT_SPAN_ID,
                null,
                SpanType::Agent,
                'Queued child agent',
                $now,
            ));
            $recorder->record(new SpanFinished(
                CHILD_TRACE_ID,
                CHILD_ROOT_SPAN_ID,
                $now->addSecond(),
                SpanStatus::Successful,
            ));
            $recorder->record(new TraceFinished(
                CHILD_TRACE_ID,
                $now->addSecond(),
                TraceStatus::Successful,
            ));
        },
    );

    $trace = Trace::query()->where('trace_id', CHILD_TRACE_ID)->sole();

    expect($observed['trace_id'])->toBe(PARENT_TRACE_ID)
        ->and($observed['span_stack'])->toBe([PARENT_SPAN_ID])
        ->and($observed['attributes']['feature'])->toBe('ticket-reply')
        ->and($trace->feature)->toBe('ticket-reply')
        ->and($trace->tags['feature'])->toBe('ticket-reply')
        ->and($trace->metadata['propagated_context']['parent_trace_id'])->toBe(PARENT_TRACE_ID)
        ->and($trace->metadata['propagated_context']['parent_span_id'])->toBe(PARENT_SPAN_ID)
        ->and($context->currentTraceId())->toBeNull()
        ->and($context->attributes())->toBe([])
        ->and(Context::hasHidden(TraceContext::LARAVEL_CONTEXT_KEY))->toBeFalse();
});

it('restores existing scoped context after inline queue middleware execution', function () {
    $context = app(TraceContext::class);
    $context->start(PARENT_TRACE_ID, PARENT_SPAN_ID);
    $context->tag('feature', 'parent-feature');

    Context::addHidden(TraceContext::LARAVEL_CONTEXT_KEY, [
        'trace_id' => CHILD_TRACE_ID,
        'span_stack' => [CHILD_ROOT_SPAN_ID],
        'attributes' => ['feature' => 'child-feature'],
        'trace_stack' => [],
    ]);

    $observedTraceId = null;

    (new PropagateAiTraceContext)->handle(
        new stdClass,
        function () use (&$observedTraceId): void {
            $observedTraceId = app(TraceContext::class)->currentTraceId();
        },
    );

    expect($observedTraceId)->toBe(CHILD_TRACE_ID)
        ->and($context->currentTraceId())->toBe(PARENT_TRACE_ID)
        ->and($context->currentSpanId())->toBe(PARENT_SPAN_ID)
        ->and($context->attributes()['feature'])->toBe('parent-feature');
});

it('stores only redacted serializable values in Laravel queue context', function () {
    $context = app(TraceContext::class);
    $context->start(PARENT_TRACE_ID, PARENT_SPAN_ID);
    $context->tag('api_key', 'queue-secret');
    $context->tag('request', Request::create('/sensitive', 'POST'));

    $snapshot = Context::getHidden(TraceContext::LARAVEL_CONTEXT_KEY);

    expect($snapshot)->toBeArray()
        ->and($snapshot['trace_id'])->toBe(PARENT_TRACE_ID)
        ->and($snapshot['attributes']['api_key'])->toBe('[REDACTED]')
        ->and($snapshot['attributes']['request'])->toBeArray()
        ->and(fn () => Context::dehydrate())->not->toThrow(Throwable::class);
});

it('preserves correlation when a context tag cannot be serialized', function () {
    $context = app(TraceContext::class);
    $context->start(PARENT_TRACE_ID, PARENT_SPAN_ID);

    expect(fn () => $context->tag('callback', fn (): string => 'unsafe'))
        ->not->toThrow(Throwable::class);

    $snapshot = Context::getHidden(TraceContext::LARAVEL_CONTEXT_KEY);

    expect($snapshot['trace_id'])->toBe(PARENT_TRACE_ID)
        ->and($snapshot['span_stack'])->toBe([PARENT_SPAN_ID])
        ->and($snapshot['attributes'])->toBe([]);
});

it('limits queued application context without losing trace correlation', function () {
    config()->set('ai-observatory.payloads.max_bytes', 100);
    app()->forgetInstance(PayloadLimiter::class);
    $context = app(TraceContext::class);
    $context->start(PARENT_TRACE_ID, PARENT_SPAN_ID);
    $context->tag('large', str_repeat('x', 1_000));

    $snapshot = Context::getHidden(TraceContext::LARAVEL_CONTEXT_KEY);

    expect($snapshot['trace_id'])->toBe(PARENT_TRACE_ID)
        ->and($snapshot['span_stack'])->toBe([PARENT_SPAN_ID])
        ->and($snapshot['attributes'])->toBe([
            '_truncated' => true,
            '_original_bytes' => 1_012,
        ]);
});

it('restores manual context after scoped execution even when it throws', function () {
    AiObservatory::tag('request_id', 'before');

    expect(fn () => AiObservatory::withContext(
        ['feature' => 'temporary'],
        fn () => throw new RuntimeException('Stop'),
    ))->toThrow(RuntimeException::class);

    expect(app(TraceContext::class)->attributes())->toBe([
        'request_id' => 'before',
    ]);
});

it('maps failed streamed responses with lifecycle timing and provider errors', function () {
    $events = collect([
        (new StreamStart('start', 'openai', 'gpt-test', 1_700_000_000))
            ->withInvocationId(QUEUE_STREAM_INVOCATION_ID),
        (new StreamError(
            'error',
            'provider_error',
            'Provider stopped',
            false,
            1_700_000_001,
        ))->withInvocationId(QUEUE_STREAM_INVOCATION_ID),
        (new StreamEnd('end', 'error', sdkUsage(8, 0), 1_700_000_002))
            ->withInvocationId(QUEUE_STREAM_INVOCATION_ID),
    ]);
    $response = new StreamedAgentResponse(
        QUEUE_STREAM_INVOCATION_ID,
        $events,
        new Meta('openai', 'gpt-test'),
    );

    $adapted = (new ModelEventAdapter)->adapt(
        new AgentStreamed(
            QUEUE_STREAM_INVOCATION_ID,
            queueStreamingAgentPrompt(),
            $response,
        ),
    );
    $finished = collect($adapted)->first(
        fn (object $event): bool => $event instanceof SpanFinished,
    );

    expect($finished->status)->toBe(SpanStatus::Failed)
        ->and($finished->error->type)->toBe('provider_error')
        ->and($finished->attributes['response_completed_at'])->not->toBeNull()
        ->and(collect($adapted)->contains(
            fn (object $event): bool => $event instanceof EventRecorded
                && $event->eventType === 'response_completed',
        ))->toBeTrue();
});

it('recovers stale running traces and spans in bounded chunks', function () {
    $old = createRunningTrace(now()->subMinutes(30)->toImmutable());
    $fresh = createRunningTrace(now()->subMinutes(2)->toImmutable());

    $this->artisan('ai-observatory:recover-stale', [
        '--minutes' => 15,
        '--chunk' => 1,
    ])
        ->expectsOutputToContain('Recovered 1 trace(s) and 1 span(s).')
        ->assertSuccessful();

    $oldTrace = Trace::query()->where('trace_id', $old)->sole();
    $oldSpan = Span::query()->where('trace_id', $old)->sole();

    expect($oldTrace->status)->toBe('cancelled')
        ->and($oldTrace->ended_at)->not->toBeNull()
        ->and($oldTrace->metadata['stale_recovery']['reason'])->toBe('incomplete_trace')
        ->and($oldSpan->status)->toBe('cancelled')
        ->and($oldSpan->duration_ms)->toBeGreaterThan(0)
        ->and(Trace::query()->where('trace_id', $fresh)->sole()->status)->toBe('running')
        ->and(Span::query()->where('trace_id', $fresh)->sole()->status)->toBe('running');
});

it('rejects invalid stale recovery options', function () {
    $this->artisan('ai-observatory:recover-stale', ['--minutes' => 0])
        ->expectsOutputToContain('Minutes and chunk must be greater than zero.')
        ->assertFailed();
});

function createRunningTrace(CarbonImmutable $startedAt): string
{
    $traceId = (string) Str::uuid7();
    $spanId = (string) Str::uuid7();

    Trace::query()->create([
        'trace_id' => $traceId,
        'root_span_id' => $spanId,
        'name' => 'Interrupted stream',
        'status' => 'running',
        'started_at' => $startedAt,
    ]);
    Span::query()->create([
        'trace_id' => $traceId,
        'span_id' => $spanId,
        'type' => 'agent',
        'name' => 'Streaming agent',
        'status' => 'running',
        'sequence' => 1,
        'started_at' => $startedAt,
    ]);

    return $traceId;
}

function queueStreamingAgentPrompt(): AgentPrompt
{
    $provider = Mockery::mock(TextProvider::class);
    $provider->allows('name')->andReturn('openai');

    return new AgentPrompt(
        Mockery::mock(Agent::class),
        'Stream this',
        [],
        $provider,
        'gpt-test',
    );
}
