<?php

namespace Kanary\AiObservatory\Recording;

use Illuminate\Database\Eloquent\Builder;
use Kanary\AiObservatory\Context\TraceContext;
use Kanary\AiObservatory\Contracts\CostCalculator;
use Kanary\AiObservatory\Contracts\Recorder;
use Kanary\AiObservatory\Data\EventRecorded;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Models\ObservatoryEvent;
use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;

class DatabaseRecorder implements Recorder
{
    public function __construct(
        private readonly TraceContext $context,
        private readonly CostCalculator $costCalculator,
    ) {}

    public function record(object $event): void
    {
        match (true) {
            $event instanceof TraceStarted => $this->startTrace($event),
            $event instanceof SpanStarted => $this->startSpan($event),
            $event instanceof SpanFinished => $this->finishSpan($event),
            $event instanceof EventRecorded => $this->recordEvent($event),
            $event instanceof TraceFinished => $this->finishTrace($event),
            default => null,
        };
    }

    private function startTrace(TraceStarted $event): void
    {
        $capturedContext = $event->context;
        $capturedAttributes = $capturedContext['attributes'] ?? null;
        $contextAttributes = is_array($capturedAttributes)
            ? $capturedAttributes
            : $this->context->attributes();
        $capturedTraceId = $capturedContext['parent_trace_id'] ?? null;
        $capturedSpanId = $capturedContext['parent_span_id'] ?? null;
        $propagatedTraceId = is_string($capturedTraceId)
            ? $capturedTraceId
            : $this->context->currentTraceId();
        $propagatedSpanId = is_string($capturedSpanId)
            ? $capturedSpanId
            : $this->context->currentSpanId();
        $this->context->start($event->traceId, $event->spanId);

        $trace = $this->newTraceQuery()->firstOrNew(['trace_id' => $event->traceId]);
        $trace->fill([
            'root_span_id' => $event->spanId,
            'name' => $event->name,
            'operation' => $event->attributes['operation'] ?? null,
            'status' => 'running',
            'provider' => $event->attributes['provider'] ?? null,
            'model' => $event->attributes['model'] ?? null,
            'agent_class' => $event->attributes['agent_class'] ?? null,
            'user_id' => $this->nullableString($contextAttributes['user_id'] ?? null),
            'user_type' => $this->nullableString($contextAttributes['user_type'] ?? null),
            'tenant_id' => $this->nullableString($contextAttributes['tenant_id'] ?? null),
            'tenant_type' => $this->nullableString($contextAttributes['tenant_type'] ?? null),
            'feature' => $event->attributes['feature']
                ?? $contextAttributes['feature']
                ?? null,
            'environment' => app()->environment(),
            'started_at' => $event->startedAt,
            'metadata' => [
                ...$event->attributes,
                ...($propagatedTraceId === null || $propagatedTraceId === $event->traceId
                    ? []
                    : ['propagated_context' => [
                        'parent_trace_id' => $propagatedTraceId,
                        'parent_span_id' => $propagatedSpanId,
                    ]]),
            ],
            'tags' => $contextAttributes,
        ]);
        $trace->save();
    }

    private function startSpan(SpanStarted $event): void
    {
        $this->context->enterSpan($event->spanId);

        $span = $this->newSpanQuery()->firstOrNew([
            'trace_id' => $event->traceId,
            'span_id' => $event->spanId,
        ]);
        $span->fill([
            'parent_span_id' => $event->parentSpanId,
            'type' => $event->type->value,
            'name' => $event->name,
            'status' => 'running',
            'provider' => $event->attributes['provider'] ?? null,
            'model' => $event->attributes['model'] ?? null,
            'sequence' => $span->exists
                ? $span->sequence
                : $this->nextSequence($event->traceId),
            'started_at' => $event->startedAt,
            'request_payload' => $event->request ?: null,
            'metadata' => $event->attributes ?: null,
        ]);
        $span->save();
    }

    private function finishSpan(SpanFinished $event): void
    {
        $span = $this->newSpanQuery()
            ->where('trace_id', $event->traceId)
            ->where('span_id', $event->spanId)
            ->first();

        if ($span === null) {
            return;
        }

        $usage = $event->usage;
        $provider = $event->attributes['provider'] ?? $span->provider;
        $model = $event->attributes['model'] ?? $span->model;
        $cost = $this->supportsUsageCost($span->type)
            && is_string($provider)
            && is_string($model)
            && $usage !== null
                ? $this->costCalculator->calculate($provider, $model, $usage)
                : null;
        $span->fill([
            'status' => $event->status->value,
            'ended_at' => $event->endedAt,
            'duration_ms' => $span->started_at === null
                ? null
                : (int) round($span->started_at->diffInMilliseconds($event->endedAt, true)),
            'input_tokens' => $usage?->input,
            'output_tokens' => $usage?->output,
            'cached_input_tokens' => $usage?->cachedInput,
            'reasoning_tokens' => $usage?->reasoning,
            'total_tokens' => $usage?->total,
            'estimated_cost' => $cost?->amount,
            'response_payload' => $event->response ?: null,
            'metadata' => [
                ...($span->metadata ?? []),
                ...$event->attributes,
                ...($cost === null ? [] : ['pricing' => [
                    'currency' => $cost->currency,
                    'catalog_version' => $cost->catalogVersion,
                    'effective_date' => $cost->effectiveDate,
                    'estimated' => true,
                ]]),
            ],
            'error_type' => $event->error?->type,
            'error_message' => $event->error?->message,
            'error_stack' => $event->error?->stack,
        ]);
        $span->save();

        $this->context->leaveSpan($event->spanId);
    }

    private function finishTrace(TraceFinished $event): void
    {
        $trace = $this->newTraceQuery()->where('trace_id', $event->traceId)->first();

        if ($trace === null) {
            $this->context->clear($event->traceId);

            return;
        }

        $usageSpans = $this->usageSpans($trace);
        $cost = $this->aggregateCost(clone $usageSpans);

        $trace->fill([
            'status' => $event->status->value,
            'ended_at' => $event->endedAt,
            'duration_ms' => $trace->started_at === null
                ? null
                : (int) round($trace->started_at->diffInMilliseconds($event->endedAt, true)),
            'input_tokens' => $this->nullableSum(clone $usageSpans, 'input_tokens'),
            'output_tokens' => $this->nullableSum(clone $usageSpans, 'output_tokens'),
            'cached_input_tokens' => $this->nullableSum(clone $usageSpans, 'cached_input_tokens'),
            'reasoning_tokens' => $this->nullableSum(clone $usageSpans, 'reasoning_tokens'),
            'total_tokens' => $this->nullableSum(clone $usageSpans, 'total_tokens'),
            'estimated_cost' => $cost['amount'],
            'currency' => $cost['currency'],
            'metadata' => [
                ...($trace->metadata ?? []),
                ...$event->attributes,
                ...($cost['mixed_currencies'] ? ['cost_aggregation' => 'mixed_currencies'] : []),
                ...($event->error === null ? [] : ['error' => [
                    'type' => $event->error->type,
                    'message' => $event->error->message,
                ]]),
            ],
        ]);
        $trace->save();

        $this->context->clear($event->traceId);
    }

    private function recordEvent(EventRecorded $event): void
    {
        $traceId = $event->traceId ?? $this->context->currentTraceId();

        if ($traceId === null || ! $this->newTraceQuery()->where('trace_id', $traceId)->exists()) {
            return;
        }

        $observatoryEvent = new ObservatoryEvent;
        $observatoryEvent->setConnection($this->connection());
        $observatoryEvent->fill([
            'trace_id' => $traceId,
            'span_id' => $event->spanId ?? $this->context->currentSpanId(),
            'event_type' => $event->eventType,
            'occurred_at' => $event->occurredAt,
            'payload' => $this->normalize($event->payload),
        ]);
        $observatoryEvent->save();
    }

    private function nextSequence(string $traceId): int
    {
        return ((int) $this->newSpanQuery()
            ->where('trace_id', $traceId)
            ->max('sequence')) + 1;
    }

    /** @return Builder<Span> */
    private function usageSpans(Trace $trace): Builder
    {
        $query = $this->newSpanQuery()->where(
            'trace_id',
            $trace->getAttribute('trace_id'),
        );

        if ($trace->getAttribute('agent_class') !== null) {
            return $query->where('type', SpanType::Model->value);
        }

        return $query->where(function (Builder $usage): void {
            $usage->whereNotNull('input_tokens')
                ->orWhereNotNull('output_tokens')
                ->orWhereNotNull('cached_input_tokens')
                ->orWhereNotNull('reasoning_tokens')
                ->orWhereNotNull('total_tokens');
        });
    }

    private function supportsUsageCost(string $type): bool
    {
        return in_array($type, [
            SpanType::Model->value,
            SpanType::Embedding->value,
            SpanType::Rerank->value,
            SpanType::Image->value,
            SpanType::Audio->value,
            SpanType::Transcription->value,
        ], true);
    }

    private function nullableString(mixed $value): ?string
    {
        return is_string($value) || is_int($value)
            ? (string) $value
            : null;
    }

    /** @param Builder<Span> $query */
    private function nullableSum(Builder $query, string $column): ?int
    {
        if (! (clone $query)->whereNotNull($column)->exists()) {
            return null;
        }

        return (int) $query->sum($column);
    }

    /**
     * @param  Builder<Span>  $query
     * @return array{amount: string|null, currency: string|null, mixed_currencies: bool}
     */
    private function aggregateCost(Builder $query): array
    {
        if (! (clone $query)->exists() || (clone $query)->whereNull('estimated_cost')->exists()) {
            return [
                'amount' => null,
                'currency' => null,
                'mixed_currencies' => false,
            ];
        }

        $spans = $query->get(['estimated_cost', 'metadata']);
        $currencies = $spans
            ->map(fn (Span $span): mixed => $span->metadata['pricing']['currency'] ?? null)
            ->filter(fn (mixed $currency): bool => is_string($currency))
            ->unique()
            ->values();

        if ($currencies->count() !== 1) {
            return [
                'amount' => null,
                'currency' => null,
                'mixed_currencies' => $currencies->count() > 1,
            ];
        }

        return [
            'amount' => number_format(
                $spans->sum(fn (Span $span): float => (float) $span->estimated_cost),
                8,
                '.',
                '',
            ),
            'currency' => $currencies->first(),
            'mixed_currencies' => false,
        ];
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    private function normalize(array $payload): array
    {
        return json_decode(
            (string) json_encode($payload, JSON_THROW_ON_ERROR),
            true,
            flags: JSON_THROW_ON_ERROR,
        );
    }

    /** @return Builder<Trace> */
    private function newTraceQuery(): Builder
    {
        $model = new Trace;
        $model->setConnection($this->connection());

        return $model->newQuery();
    }

    /** @return Builder<Span> */
    private function newSpanQuery(): Builder
    {
        $model = new Span;
        $model->setConnection($this->connection());

        return $model->newQuery();
    }

    private function connection(): ?string
    {
        return config('ai-observatory.connection');
    }
}
