<?php

use Carbon\CarbonImmutable;
use Kanary\AiObservatory\Contracts\CostCalculator;
use Kanary\AiObservatory\Contracts\Recorder;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\TokenUsage;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Enums\TraceStatus;
use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;

it('drops a successful trace when its trace-level sampling decision is false', function () {
    config()->set('ai-observatory.sampling.rate', 0.0);
    config()->set('ai-observatory.sampling.always_record_failures', false);
    config()->set('ai-observatory.sampling.always_record_slow_traces_ms', null);

    recordTrace(TraceStatus::Successful);

    expect(Trace::query()->count())->toBe(0)
        ->and(Span::query()->count())->toBe(0);
});

it('makes the sampling decision only once at trace start', function () {
    config()->set('ai-observatory.sampling.rate', 0.0);
    config()->set('ai-observatory.sampling.always_record_failures', false);
    config()->set('ai-observatory.sampling.always_record_slow_traces_ms', null);

    $recorder = app(Recorder::class);
    $startedAt = now()->toImmutable();
    $traceId = '018f47a2-4f4e-7d10-9c2f-6f447d7a4201';
    $spanId = '018f47a2-4f4e-7d10-9c2f-6f447d7a4202';

    $recorder->record(new TraceStarted($traceId, $spanId, 'Fixed decision', $startedAt));
    config()->set('ai-observatory.sampling.rate', 1.0);
    $recorder->record(new SpanStarted(
        $traceId,
        $spanId,
        null,
        SpanType::Agent,
        'Fixed decision agent',
        $startedAt,
    ));
    $recorder->record(new SpanFinished(
        $traceId,
        $spanId,
        $startedAt->addSecond(),
        SpanStatus::Successful,
    ));
    $recorder->record(new TraceFinished(
        $traceId,
        $startedAt->addSecond(),
        TraceStatus::Successful,
    ));

    expect(Trace::query()->count())->toBe(0)
        ->and(Span::query()->count())->toBe(0);
});

it('promotes a failed trace even when its sampling decision is false', function () {
    config()->set('ai-observatory.sampling.rate', 0.0);
    config()->set('ai-observatory.sampling.always_record_failures', true);
    config()->set('ai-observatory.sampling.always_record_slow_traces_ms', null);

    recordTrace(
        TraceStatus::Failed,
        request: ['password' => 'buffered-secret'],
    );

    expect(Trace::query()->sole()->status)->toBe('failed')
        ->and(Span::query()->sole()->status)->toBe('failed')
        ->and(Span::query()->sole()->request_payload)->toBe([
            'password' => '[REDACTED]',
        ]);
});

it('promotes a slow successful trace even when its sampling decision is false', function () {
    config()->set('ai-observatory.sampling.rate', 0.0);
    config()->set('ai-observatory.sampling.always_record_failures', false);
    config()->set('ai-observatory.sampling.always_record_slow_traces_ms', 1_000);

    recordTrace(
        TraceStatus::Successful,
        now()->subSeconds(2)->toImmutable(),
        now()->toImmutable(),
    );

    expect(Trace::query()->sole()->status)->toBe('successful');
});

it('calculates configured input output and cached-input prices', function () {
    configurePricing();

    $cost = app(CostCalculator::class)->calculate(
        'test-provider',
        'test-model',
        new TokenUsage(input: 1_000, output: 500, cachedInput: 200, total: 1_500),
    );

    expect($cost)->not->toBeNull()
        ->and($cost?->amount)->toBe('0.01840000')
        ->and($cost?->currency)->toBe('USD')
        ->and($cost?->catalogVersion)->toBe('test-v1')
        ->and($cost?->effectiveDate)->toBe('2026-07-01');
});

it('returns null when pricing or required usage categories are unknown', function () {
    configurePricing();

    expect(app(CostCalculator::class)->calculate(
        'test-provider',
        'unknown-model',
        new TokenUsage(input: 100, output: 100),
    ))->toBeNull();

    config()->set(
        'ai-observatory.pricing.test-provider.test-model.cached_input_per_million',
        null,
    );

    expect(app(CostCalculator::class)->calculate(
        'test-provider',
        'test-model',
        new TokenUsage(input: 100, output: 100, cachedInput: 50),
    ))->toBeNull();

    config()->set('ai-observatory.pricing.test-provider.test-model', [
        'input_per_million' => null,
        'output_per_million' => null,
        'cached_input_per_million' => null,
        'currency' => 'USD',
    ]);

    expect(app(CostCalculator::class)->calculate(
        'test-provider',
        'test-model',
        new TokenUsage(input: 0, output: 0),
    ))->toBeNull();
});

it('stores and aggregates estimated model costs without double counting', function () {
    configurePricing();

    $recorder = app(Recorder::class);
    $startedAt = now()->toImmutable();
    $traceId = '018f47a2-4f4e-7d10-9c2f-6f447d7a4001';
    $rootSpanId = '018f47a2-4f4e-7d10-9c2f-6f447d7a4002';

    $recorder->record(new TraceStarted(
        $traceId,
        $rootSpanId,
        'Priced trace',
        $startedAt,
    ));

    foreach ([1, 2] as $index) {
        $spanId = "018f47a2-4f4e-7d10-9c2f-6f447d7a401{$index}";
        $attributes = ['provider' => 'test-provider', 'model' => 'test-model'];

        $recorder->record(new SpanStarted(
            $traceId,
            $spanId,
            $rootSpanId,
            SpanType::Model,
            'test-provider/test-model',
            $startedAt,
            attributes: $attributes,
        ));
        $recorder->record(new SpanFinished(
            $traceId,
            $spanId,
            $startedAt->addSecond(),
            SpanStatus::Successful,
            usage: new TokenUsage(input: 1_000, output: 500, cachedInput: 200, total: 1_500),
            attributes: $attributes,
        ));
    }

    $recorder->record(new TraceFinished(
        $traceId,
        $startedAt->addSeconds(2),
        TraceStatus::Successful,
    ));

    $trace = Trace::query()->sole();
    $spans = Span::query()->where('type', SpanType::Model->value)->get();

    expect($spans)->toHaveCount(2)
        ->and($spans->pluck('estimated_cost')->all())->each->toBe('0.01840000')
        ->and($trace->estimated_cost)->toBe('0.03680000')
        ->and($trace->currency)->toBe('USD')
        ->and($trace->total_tokens)->toBe(3_000)
        ->and($spans->first()->metadata['pricing'])->toMatchArray([
            'currency' => 'USD',
            'catalog_version' => 'test-v1',
            'effective_date' => '2026-07-01',
            'estimated' => true,
        ]);
});

it('aggregates usage and cost for standalone AI operation spans', function () {
    configurePricing();

    $recorder = app(Recorder::class);
    $startedAt = now()->toImmutable();
    $traceId = '018f47a2-4f4e-7d10-9c2f-6f447d7a4021';
    $spanId = '018f47a2-4f4e-7d10-9c2f-6f447d7a4022';
    $attributes = ['provider' => 'test-provider', 'model' => 'test-model'];

    $recorder->record(new TraceStarted(
        $traceId,
        $spanId,
        'Standalone embeddings',
        $startedAt,
        $attributes,
    ));
    $recorder->record(new SpanStarted(
        $traceId,
        $spanId,
        null,
        SpanType::Embedding,
        'Standalone embeddings',
        $startedAt,
        attributes: $attributes,
    ));
    $recorder->record(new SpanFinished(
        $traceId,
        $spanId,
        $startedAt->addSecond(),
        SpanStatus::Successful,
        usage: new TokenUsage(input: 1_000, output: 500, total: 1_500),
        attributes: $attributes,
    ));
    $recorder->record(new TraceFinished(
        $traceId,
        $startedAt->addSecond(),
        TraceStatus::Successful,
    ));

    $trace = Trace::query()->sole();
    $span = Span::query()->sole();

    expect($span->estimated_cost)->toBe('0.02000000')
        ->and($trace->input_tokens)->toBe(1_000)
        ->and($trace->output_tokens)->toBe(500)
        ->and($trace->total_tokens)->toBe(1_500)
        ->and($trace->estimated_cost)->toBe('0.02000000')
        ->and($trace->currency)->toBe('USD');
});

function recordTrace(
    TraceStatus $status,
    ?CarbonImmutable $startedAt = null,
    ?CarbonImmutable $endedAt = null,
    array $request = [],
): void {
    $recorder = app(Recorder::class);
    $startedAt ??= now()->toImmutable();
    $endedAt ??= $startedAt->addSecond();
    $traceId = '018f47a2-4f4e-7d10-9c2f-6f447d7a4101';
    $spanId = '018f47a2-4f4e-7d10-9c2f-6f447d7a4102';
    $spanStatus = $status === TraceStatus::Failed
        ? SpanStatus::Failed
        : SpanStatus::Successful;

    $recorder->record(new TraceStarted($traceId, $spanId, 'Sampled trace', $startedAt));
    $recorder->record(new SpanStarted(
        $traceId,
        $spanId,
        null,
        SpanType::Agent,
        'Sampled agent',
        $startedAt,
        request: $request,
    ));
    $recorder->record(new SpanFinished(
        $traceId,
        $spanId,
        $endedAt,
        $spanStatus,
    ));
    $recorder->record(new TraceFinished(
        $traceId,
        $endedAt,
        $status,
    ));
}

function configurePricing(): void
{
    config()->set('ai-observatory.pricing', [
        '_meta' => [
            'version' => 'test-v1',
            'effective_date' => '2026-07-01',
        ],
        'test-provider' => [
            'test-model' => [
                'input_per_million' => 10,
                'output_per_million' => 20,
                'cached_input_per_million' => 2,
                'currency' => 'USD',
            ],
        ],
    ]);
}
