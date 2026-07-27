<?php

use Illuminate\Database\Eloquent\Model;
use Kanary\AiObservatory\AiObservatory;
use Kanary\AiObservatory\Context\TraceContext;
use Kanary\AiObservatory\Contracts\Recorder;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Enums\TraceStatus;
use Kanary\AiObservatory\Listeners\CaptureAiSdkEvent;
use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;
use Kanary\AiObservatory\Tests\Fixtures\ToolCallingAgent;
use Laravel\Ai\Events\PromptingAgent;
use Laravel\Ai\Prompts\AgentPrompt;
use Laravel\Ai\Responses\Data\ToolCall;

it('records a fake tool calling agent as one correctly nested trace', function () {
    ToolCallingAgent::fake([
        new ToolCall('call-weather', 'WeatherTool', ['city' => 'Amman']),
        'It is sunny in Amman.',
    ]);

    $response = (new ToolCallingAgent)->prompt('What is the weather?');

    $trace = Trace::query()->sole();
    $spans = Span::query()
        ->where('trace_id', $trace->trace_id)
        ->orderBy('sequence')
        ->get();

    expect($response->text)->toBe('It is sunny in Amman.')
        ->and($trace->status)->toBe('successful')
        ->and($trace->agent_class)->toBe(ToolCallingAgent::class)
        ->and($spans->where('type', SpanType::Agent->value))->toHaveCount(1)
        ->and($spans->where('type', SpanType::Model->value))->toHaveCount(2)
        ->and($spans->where('type', SpanType::Tool->value))->toHaveCount(1);

    $root = $spans->firstWhere('type', SpanType::Agent->value);

    expect($spans->where('type', '!=', SpanType::Agent->value))
        ->each(fn ($span) => $span->parent_span_id->toBe($root->span_id))
        ->and($spans->pluck('sequence')->all())->toBe([1, 2, 3, 4])
        ->and($trace->total_tokens)->toBe(0);
});

it('does not double count agent usage in trace totals', function () {
    ToolCallingAgent::fake(['Simple response']);

    (new ToolCallingAgent)->prompt('Hello');

    $trace = Trace::query()->sole();
    $modelTotal = Span::query()
        ->where('trace_id', $trace->trace_id)
        ->where('type', SpanType::Model->value)
        ->sum('total_tokens');

    expect($trace->total_tokens)->toBe((int) $modelTotal);
});

it('normalizes public user tenant and feature context into indexed trace columns', function () {
    $user = Mockery::mock(Model::class);
    $user->allows('getKey')->andReturn(42);
    $user->allows('getMorphClass')->andReturn('users');
    ToolCallingAgent::fake(['Correlated response']);

    AiObservatory::user($user);
    AiObservatory::tenant('tenant-7');
    AiObservatory::feature('ticket-reply');

    (new ToolCallingAgent)->prompt('Correlate this run');

    $trace = Trace::query()->sole();

    expect($trace->user_id)->toBe('42')
        ->and($trace->user_type)->toBe('users')
        ->and($trace->tenant_id)->toBe('tenant-7')
        ->and($trace->tenant_type)->toBeNull()
        ->and($trace->feature)->toBe('ticket-reply');
});

it('does not persist tool arguments through reconstructed model responses when disabled', function () {
    config()->set('ai-observatory.capture.tool_arguments', false);
    ToolCallingAgent::fake([
        new ToolCall('call-weather-private', 'WeatherTool', [
            'city' => 'Amman',
            'password' => 'tool-secret',
        ]),
        'Done.',
    ]);

    (new ToolCallingAgent)->prompt('Use a private tool');

    $tool = Span::query()->where('type', SpanType::Tool->value)->sole();
    $model = Span::query()
        ->where('type', SpanType::Model->value)
        ->whereJsonLength('response_payload->tool_calls', '>', 0)
        ->sole();

    expect($tool->request_payload)->not->toHaveKey('arguments')
        ->and($model->response_payload['tool_calls'][0])->not->toHaveKey('arguments');
});

it('restores parent trace context between sequential nested traces', function () {
    $recorder = app(Recorder::class);
    $context = app(TraceContext::class);
    $now = now()->toImmutable();
    $parentTraceId = '018f47a2-4f4e-7d10-9c2f-6f447d7a5101';
    $parentSpanId = '018f47a2-4f4e-7d10-9c2f-6f447d7a5102';

    $recorder->record(new TraceStarted(
        $parentTraceId,
        $parentSpanId,
        'Parent trace',
        $now,
    ));
    $recorder->record(new SpanStarted(
        $parentTraceId,
        $parentSpanId,
        null,
        SpanType::Agent,
        'Parent agent',
        $now,
    ));

    foreach ([1, 2] as $index) {
        $childTraceId = "018f47a2-4f4e-7d10-9c2f-6f447d7a511{$index}";
        $childSpanId = "018f47a2-4f4e-7d10-9c2f-6f447d7a512{$index}";

        $recorder->record(new TraceStarted(
            $childTraceId,
            $childSpanId,
            "Child trace {$index}",
            $now,
        ));
        $recorder->record(new SpanStarted(
            $childTraceId,
            $childSpanId,
            null,
            SpanType::Agent,
            "Child agent {$index}",
            $now,
        ));
        $recorder->record(new SpanFinished(
            $childTraceId,
            $childSpanId,
            $now->addSecond(),
            SpanStatus::Successful,
        ));
        $recorder->record(new TraceFinished(
            $childTraceId,
            $now->addSecond(),
            TraceStatus::Successful,
        ));

        expect($context->currentTraceId())->toBe($parentTraceId)
            ->and($context->currentSpanId())->toBe($parentSpanId);
    }

    $children = Trace::query()
        ->where('trace_id', '!=', $parentTraceId)
        ->orderBy('trace_id')
        ->get();

    expect($children)->toHaveCount(2);

    foreach ($children as $child) {
        expect($child->metadata['propagated_context']['parent_trace_id'])->toBe($parentTraceId);
    }

    $recorder->record(new SpanFinished(
        $parentTraceId,
        $parentSpanId,
        $now->addSeconds(2),
        SpanStatus::Successful,
    ));
    $recorder->record(new TraceFinished(
        $parentTraceId,
        $now->addSeconds(2),
        TraceStatus::Successful,
    ));

    expect($context->currentTraceId())->toBeNull();
});

it('clears trace context after a completed run', function () {
    ToolCallingAgent::fake(['Done']);

    (new ToolCallingAgent)->prompt('Hello');

    expect(app(TraceContext::class)->currentTraceId())->toBeNull()
        ->and(app(TraceContext::class)->currentSpanId())->toBeNull();
});

it('recovers a tool completion whose SDK invocation id was clobbered by a nested agent', function () {
    $recorder = app(Recorder::class);
    $now = now()->toImmutable();
    $traceId = '018f47a2-4f4e-7d10-9c2f-6f447d7a5201';
    $rootSpanId = '018f47a2-4f4e-7d10-9c2f-6f447d7a5202';
    $toolSpanId = '018f47a2-4f4e-7d10-9c2f-6f447d7a5203';

    $recorder->record(new TraceStarted($traceId, $rootSpanId, 'Nested tool', $now));
    $recorder->record(new SpanStarted(
        $traceId,
        $rootSpanId,
        null,
        SpanType::Agent,
        'Parent agent',
        $now,
    ));
    $recorder->record(new SpanStarted(
        $traceId,
        $toolSpanId,
        $rootSpanId,
        SpanType::Tool,
        'DelegatedAgent',
        $now,
    ));
    $recorder->record(new SpanFinished(
        $traceId,
        '018f47a2-4f4e-7d10-9c2f-6f447d7a5299',
        $now->addSecond(),
        SpanStatus::Successful,
        response: ['result' => 'Completed'],
        attributes: ['tool_name' => 'DelegatedAgent'],
    ));

    $tool = Span::query()->where('span_id', $toolSpanId)->sole();

    expect($tool->status)->toBe('successful')
        ->and($tool->response_payload)->toBe(['result' => 'Completed'])
        ->and(app(TraceContext::class)->currentSpanId())->toBe($rootSpanId);
});

it('swallows recorder failures without changing SDK event behavior', function () {
    $recorder = Mockery::mock(Recorder::class);
    $recorder->allows('record')->andThrow(new RuntimeException('Database unavailable'));
    app()->instance(Recorder::class, $recorder);

    $listener = app(CaptureAiSdkEvent::class);
    $prompt = Mockery::mock(AgentPrompt::class);

    expect(fn () => $listener->handle(new PromptingAgent('invocation', $prompt)))
        ->not->toThrow(Throwable::class);
});
