<?php

use Kanary\AiObservatory\Context\TraceContext;
use Kanary\AiObservatory\Contracts\Recorder;
use Kanary\AiObservatory\Enums\SpanType;
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

it('clears trace context after a completed run', function () {
    ToolCallingAgent::fake(['Done']);

    (new ToolCallingAgent)->prompt('Hello');

    expect(app(TraceContext::class)->currentTraceId())->toBeNull()
        ->and(app(TraceContext::class)->currentSpanId())->toBeNull();
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
