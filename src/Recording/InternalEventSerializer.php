<?php

namespace Kanary\AiObservatory\Recording;

use Carbon\CarbonImmutable;
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

final class InternalEventSerializer
{
    /** @return array<string, mixed>|null */
    public function serialize(object $event): ?array
    {
        $payload = match (true) {
            $event instanceof TraceStarted => [
                'type' => 'trace_started',
                'trace_id' => $event->traceId,
                'span_id' => $event->spanId,
                'name' => $event->name,
                'started_at' => $event->startedAt->toISOString(),
                'attributes' => $event->attributes,
                'context' => $event->context,
            ],
            $event instanceof TraceFinished => [
                'type' => 'trace_finished',
                'trace_id' => $event->traceId,
                'ended_at' => $event->endedAt->toISOString(),
                'status' => $event->status->value,
                'error' => $this->serializeError($event->error),
                'attributes' => $event->attributes,
            ],
            $event instanceof SpanStarted => [
                'type' => 'span_started',
                'trace_id' => $event->traceId,
                'span_id' => $event->spanId,
                'parent_span_id' => $event->parentSpanId,
                'span_type' => $event->type->value,
                'name' => $event->name,
                'started_at' => $event->startedAt->toISOString(),
                'request' => $event->request,
                'attributes' => $event->attributes,
            ],
            $event instanceof SpanFinished => [
                'type' => 'span_finished',
                'trace_id' => $event->traceId,
                'span_id' => $event->spanId,
                'ended_at' => $event->endedAt->toISOString(),
                'status' => $event->status->value,
                'response' => $event->response,
                'usage' => $this->serializeUsage($event->usage),
                'error' => $this->serializeError($event->error),
                'attributes' => $event->attributes,
            ],
            $event instanceof EventRecorded => [
                'type' => 'event_recorded',
                'trace_id' => $event->traceId,
                'span_id' => $event->spanId,
                'event_type' => $event->eventType,
                'occurred_at' => $event->occurredAt->toISOString(),
                'payload' => $event->payload,
            ],
            default => null,
        };

        if ($payload === null) {
            return null;
        }

        $normalized = json_decode(
            (string) json_encode($payload, JSON_THROW_ON_ERROR),
            true,
            flags: JSON_THROW_ON_ERROR,
        );

        return is_array($normalized) ? $normalized : null;
    }

    /** @param array<string, mixed> $payload */
    public function unserialize(array $payload): ?object
    {
        return match ($this->string($payload, 'type')) {
            'trace_started' => new TraceStarted(
                $this->string($payload, 'trace_id'),
                $this->string($payload, 'span_id'),
                $this->string($payload, 'name'),
                $this->date($payload, 'started_at'),
                $this->array($payload, 'attributes'),
                $this->array($payload, 'context'),
            ),
            'trace_finished' => new TraceFinished(
                $this->string($payload, 'trace_id'),
                $this->date($payload, 'ended_at'),
                TraceStatus::from($this->string($payload, 'status')),
                $this->error($payload['error'] ?? null),
                $this->array($payload, 'attributes'),
            ),
            'span_started' => new SpanStarted(
                $this->string($payload, 'trace_id'),
                $this->string($payload, 'span_id'),
                $this->nullableString($payload['parent_span_id'] ?? null),
                SpanType::from($this->string($payload, 'span_type')),
                $this->string($payload, 'name'),
                $this->date($payload, 'started_at'),
                $this->array($payload, 'request'),
                $this->array($payload, 'attributes'),
            ),
            'span_finished' => new SpanFinished(
                $this->string($payload, 'trace_id'),
                $this->string($payload, 'span_id'),
                $this->date($payload, 'ended_at'),
                SpanStatus::from($this->string($payload, 'status')),
                $this->array($payload, 'response'),
                $this->usage($payload['usage'] ?? null),
                $this->error($payload['error'] ?? null),
                $this->array($payload, 'attributes'),
            ),
            'event_recorded' => new EventRecorded(
                $this->nullableString($payload['trace_id'] ?? null),
                $this->nullableString($payload['span_id'] ?? null),
                $this->string($payload, 'event_type'),
                $this->date($payload, 'occurred_at'),
                $this->array($payload, 'payload'),
            ),
            default => null,
        };
    }

    /** @return array<string, bool|int|null>|null */
    private function serializeUsage(?TokenUsage $usage): ?array
    {
        return $usage === null ? null : [
            'input' => $usage->input,
            'output' => $usage->output,
            'cached_input' => $usage->cachedInput,
            'cache_write_input' => $usage->cacheWriteInput,
            'reasoning' => $usage->reasoning,
            'total' => $usage->total,
            'input_includes_cached' => $usage->inputIncludesCached,
            'output_applicable' => $usage->outputApplicable,
        ];
    }

    /** @return array<string, string|null>|null */
    private function serializeError(?ThrowableData $error): ?array
    {
        return $error === null ? null : [
            'type' => $error->type,
            'message' => $error->message,
            'stack' => $error->stack,
        ];
    }

    private function usage(mixed $usage): ?TokenUsage
    {
        if (! is_array($usage)) {
            return null;
        }

        return new TokenUsage(
            input: $this->nullableInt($usage['input'] ?? null),
            output: $this->nullableInt($usage['output'] ?? null),
            cachedInput: $this->nullableInt($usage['cached_input'] ?? null),
            reasoning: $this->nullableInt($usage['reasoning'] ?? null),
            total: $this->nullableInt($usage['total'] ?? null),
            cacheWriteInput: $this->nullableInt($usage['cache_write_input'] ?? null),
            inputIncludesCached: is_bool($usage['input_includes_cached'] ?? null)
                ? $usage['input_includes_cached']
                : true,
            outputApplicable: is_bool($usage['output_applicable'] ?? null)
                ? $usage['output_applicable']
                : true,
        );
    }

    private function error(mixed $error): ?ThrowableData
    {
        if (! is_array($error)) {
            return null;
        }

        return new ThrowableData(
            $this->string($error, 'type'),
            $this->string($error, 'message'),
            $this->nullableString($error['stack'] ?? null),
        );
    }

    /** @param array<string, mixed> $payload */
    private function string(array $payload, string $key): string
    {
        $value = $payload[$key] ?? null;

        return is_string($value) ? $value : '';
    }

    private function nullableString(mixed $value): ?string
    {
        return is_string($value) ? $value : null;
    }

    private function nullableInt(mixed $value): ?int
    {
        return is_int($value) ? $value : null;
    }

    /** @param array<string, mixed> $payload */
    private function date(array $payload, string $key): CarbonImmutable
    {
        return CarbonImmutable::parse($this->string($payload, $key));
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    private function array(array $payload, string $key): array
    {
        $value = $payload[$key] ?? null;

        return is_array($value) ? $value : [];
    }
}
