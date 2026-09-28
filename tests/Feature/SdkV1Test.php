<?php

use Illuminate\Container\Container;
use Kanary\AiObservatory\Adapters\AiSdkEventAdapterRegistry;
use Kanary\AiObservatory\Adapters\StepEventAdapter;
use Kanary\AiObservatory\Context\TraceContext;
use Kanary\AiObservatory\Models\ObservatoryEvent;
use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;
use Kanary\AiObservatory\Recording\PersistenceRecorder;
use Kanary\AiObservatory\Tests\Fixtures\ToolCallingAgent;
use Laravel\Ai\Contracts\Providers\ClassificationProvider;
use Laravel\Ai\Events\Classified;
use Laravel\Ai\Events\Classifying;
use Laravel\Ai\Events\StartingStep;
use Laravel\Ai\Events\StepFailed;
use Laravel\Ai\Exceptions\RateLimitedException;
use Laravel\Ai\Prompts\ClassificationPrompt;
use Laravel\Ai\Responses\AgentResponse;
use Laravel\Ai\Responses\ClassificationResponse;
use Laravel\Ai\Responses\Data\BooleanAnswer;
use Laravel\Ai\Responses\Data\Meta;
use Laravel\Ai\Responses\Data\TextUsage;
use Laravel\Ai\Responses\Data\ToolCall;
use Workbench\App\Agents\FailingToolAgent;

beforeEach(function () {
    if (! class_exists(TextUsage::class)) {
        $this->markTestSkipped('These contracts were introduced in Laravel AI 1.0; shared tests cover SDK 0.10.');
    }
});

it('records live v1 model usage exactly once in each persistence mode', function (string $mode) {
    config()->set('ai-observatory.recording_mode', $mode);
    config()->set('ai-observatory.queue.connection', 'sync');
    config()->set('ai-observatory.pricing.openai.gpt-test', [
        'input_per_million' => 2,
        'output_per_million' => 10,
        'cached_input_per_million' => 0.5,
        'cache_write_input_per_million' => 3,
        'currency' => 'USD',
    ]);
    ToolCallingAgent::fake([new AgentResponse(
        'fake', 'Answer', new TextUsage(1000, 100, 600, 100, 40), new Meta('openai', 'gpt-test'),
    )]);

    (new ToolCallingAgent)->prompt('Question');
    app(PersistenceRecorder::class)->flush();

    $model = Span::query()->where('type', 'model')->sole();
    $trace = Trace::query()->sole();
    expect($model->input_tokens)->toBe(300)
        ->and($model->cached_input_tokens)->toBe(600)
        ->and($model->cache_write_input_tokens)->toBe(100)
        ->and($model->output_tokens)->toBe(100)
        ->and($model->reasoning_tokens)->toBe(40)
        ->and($model->total_tokens)->toBe(1100)
        ->and($trace->total_tokens)->toBe(1100)
        ->and($trace->estimated_cost)->toBe('0.00220000')
        ->and($model->metadata['timing'])->toBe('sdk_step_events')
        ->and($model->model)->toBe('gpt-test')
        ->and(app(TraceContext::class)->currentTraceId())->toBeNull();
})->with(['sync', 'after_response', 'queue']);

it('records v1 tool and agent failure without stale recovery', function () {
    FailingToolAgent::fake([new ToolCall('failed-tool', 'FailingTool', [])]);
    expect(fn () => (new FailingToolAgent)->prompt('Fail'))
        ->toThrow(RuntimeException::class, 'Intentional workbench tool failure.');

    $trace = Trace::query()->sole();
    $tool = Span::query()->where('type', 'tool')->sole();
    expect($trace->status)->toBe('failed')
        ->and($tool->status)->toBe('failed')
        ->and($tool->error_message)->toBe('Intentional workbench tool failure.')
        ->and(Span::query()->where('status', 'running')->count())->toBe(0)
        ->and(app(TraceContext::class)->currentTraceId())->toBeNull();

    ToolCallingAgent::fake(['Recovered']);
    (new ToolCallingAgent)->prompt('Next request');
    expect(Trace::query()->where('status', 'successful')->sole()->metadata['propagated_context']['parent_trace_id'] ?? null)->toBeNull();
});

it('records v1 provider exceptions for streamed and non-streamed calls', function (bool $streaming) {
    ToolCallingAgent::fake(fn () => throw new RuntimeException('Provider unavailable'));
    expect(function () use ($streaming) {
        $agent = new ToolCallingAgent;
        if ($streaming) {
            $agent->stream('Fail')->each(fn () => null);
        } else {
            $agent->prompt('Fail');
        }
    })->toThrow(RuntimeException::class, 'Provider unavailable');

    expect(Trace::query()->sole()->status)->toBe('failed')
        ->and(Span::query()->where('type', 'model')->sole()->error_message)->toBe('Provider unavailable')
        ->and(Span::query()->where('status', 'running')->count())->toBe(0)
        ->and(app(TraceContext::class)->currentTraceId())->toBeNull();
})->with([false, true]);

it('records each streamed v1 step without duplicating the final aggregate', function () {
    ToolCallingAgent::fake([
        new ToolCall('stream-tool', 'WeatherTool', ['city' => 'Amman']),
        new AgentResponse('fake', 'Sunny', new TextUsage(12, 5), new Meta('openai', 'gpt-test')),
    ]);
    (new ToolCallingAgent)->stream('Weather')->each(fn () => null);
    $models = Span::query()->where('type', 'model')->orderBy('sequence')->get();
    $root = Span::query()->where('type', 'agent')->sole();
    expect($models)->toHaveCount(2)
        ->and(Span::query()->where('type', 'tool')->count())->toBe(1)
        ->and(Trace::query()->sole()->total_tokens)->toBe(17)
        ->and($models->last()->cached_input_tokens)->toBeNull()
        ->and($root->metadata['time_to_first_token_ms'])->toBeGreaterThanOrEqual(0)
        ->and($root->metadata['response_completed_at'])->not->toBeNull();
});

it('keeps repeated step numbers and interleaved invocations separate', function () {
    $adapter = app(StepEventAdapter::class);
    $prompt = agentPrompt();
    $start = fn ($id) => new StartingStep($id, 1, $prompt->agent, $prompt->provider, 'gpt-test', false, [], null);
    $fail = fn ($id) => new StepFailed($id, 1, $prompt->agent, $prompt->provider, 'gpt-test', false, new RuntimeException('retry'), 2);
    $first = $adapter->adapt($start(INVOCATION_ID))[0];
    $other = $adapter->adapt($start(TOOL_INVOCATION_ID))[0];
    expect($adapter->adapt($fail(INVOCATION_ID))[0]->spanId)->toBe($first->spanId);
    $retry = $adapter->adapt($start(INVOCATION_ID))[0];
    expect($retry->spanId)->not->toBe($first->spanId)
        ->and($adapter->adapt($fail(TOOL_INVOCATION_ID))[0]->spanId)->toBe($other->spanId)
        ->and($adapter->adapt($fail(INVOCATION_ID))[0]->spanId)->toBe($retry->spanId);

    $adapter->adapt($start(INVOCATION_ID));
    app()->terminate();
    expect($adapter->adapt($fail(INVOCATION_ID)))->toBe([]);
});

it('records classification usage while respecting capture controls', function () {
    config()->set('ai-observatory.capture.prompts', false);
    config()->set('ai-observatory.capture.responses', false);
    $provider = concreteProvider();
    $prompt = new ClassificationPrompt(
        ['password' => 'private'], [], contractProvider(ClassificationProvider::class), 'classifier',
    );
    event(new Classifying(INVOCATION_ID, $provider, 'classifier', $prompt));
    event(new Classified(INVOCATION_ID, $provider, 'classifier', $prompt, new ClassificationResponse(
        ['sensitive' => new BooleanAnswer(0.8)], new TextUsage(10, 2), new Meta('openai', 'classifier'),
    )));
    $span = Span::query()->sole();
    expect($span->request_payload)->not->toHaveKey('prompt')
        ->and($span->response_payload)->toBeNull()
        ->and(Trace::query()->sole()->total_tokens)->toBe(12);
});

it('resolves stateful adapters from the current application scope even with cached event matches', function () {
    $original = app();
    $registry = app(AiSdkEventAdapterRegistry::class);
    $prompt = agentPrompt();
    $start = new StartingStep(INVOCATION_ID, 1, $prompt->agent, $prompt->provider, 'gpt-test', false, [], null);
    $fail = new StepFailed(INVOCATION_ID, 1, $prompt->agent, $prompt->provider, 'gpt-test', false, new RuntimeException('failure'), 2);
    $registry->adapt($start);
    $registry->adapt($fail);
    $registry->adapt($start);
    $scope = clone $original;
    $scope->forgetScopedInstances();

    try {
        Container::setInstance($scope);
        expect($registry->adapt($fail))->toBe([]);
        $started = $registry->adapt($start)[0];
        expect($registry->adapt($fail)[0]->spanId)->toBe($started->spanId);
    } finally {
        Container::setInstance($original);
    }

    expect($registry->adapt($fail))->toHaveCount(1);
});

it('keeps both model attempts and the original start time during v1 failover', function () {
    $attempt = 0;
    $this->travelTo(now()->startOfSecond());
    $startedAt = now()->toIso8601String();
    ToolCallingAgent::fake(function () use (&$attempt) {
        if ($attempt++ === 0) {
            $this->travel(2)->seconds();
            throw RateLimitedException::forProvider('openai');
        }

        return new AgentResponse('fake', 'Recovered', new TextUsage(8, 2), new Meta('anthropic', 'fallback'));
    });

    (new ToolCallingAgent)->prompt('Hello', provider: ['openai' => 'primary', 'anthropic' => 'fallback']);
    $trace = Trace::query()->sole();
    $root = Span::query()->where('type', 'agent')->sole();
    expect($trace->status)->toBe('successful')
        ->and($trace->provider)->toBe('anthropic')
        ->and($trace->model)->toBe('fallback')
        ->and($trace->started_at->toIso8601String())->toBe($startedAt)
        ->and($root->started_at->toIso8601String())->toBe($startedAt)
        ->and($root->duration_ms)->toBe(2000)
        ->and(Span::query()->where('type', 'model')->count())->toBe(2)
        ->and(Span::query()->where('type', 'model')->where('status', 'failed')->count())->toBe(1)
        ->and(ObservatoryEvent::query()->where('event_type', 'provider_failed_over')->sole()->trace_id)->toBe($trace->trace_id)
        ->and(app(TraceContext::class)->currentTraceId())->toBeNull();
});

it('does not leak v1 step tool arguments when capture is disabled', function () {
    config()->set('ai-observatory.capture.tool_arguments', false);
    config()->set('ai-observatory.capture.tool_results', false);
    ToolCallingAgent::fake([new ToolCall('private-call', 'WeatherTool', ['city' => 'PrivateCity']), 'Done']);
    (new ToolCallingAgent)->prompt('Weather');
    expect(Span::query()->get()->toJson())->not->toContain('PrivateCity');
});

it('closes the correct trace when all v1 failover attempts fail', function () {
    ToolCallingAgent::fake(fn () => throw RateLimitedException::forProvider('unavailable'));
    expect(fn () => (new ToolCallingAgent)->prompt('Hello', provider: ['openai' => 'primary', 'anthropic' => 'fallback']))
        ->toThrow(RateLimitedException::class);
    $trace = Trace::query()->sole();
    expect($trace->status)->toBe('failed')
        ->and($trace->provider)->toBe('anthropic')
        ->and($trace->model)->toBe('fallback')
        ->and(Span::query()->where('type', 'model')->where('status', 'failed')->count())->toBe(2)
        ->and(Span::query()->where('status', 'running')->count())->toBe(0)
        ->and(app(TraceContext::class)->currentTraceId())->toBeNull();
});
