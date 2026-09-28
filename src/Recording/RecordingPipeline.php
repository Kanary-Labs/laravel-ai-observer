<?php

namespace Kanary\AiObservatory\Recording;

use Illuminate\Database\Eloquent\Model;
use Kanary\AiObservatory\Context\TraceContext;
use Kanary\AiObservatory\Contracts\Recorder;
use Kanary\AiObservatory\Contracts\Redactor;
use Kanary\AiObservatory\Data\EventRecorded;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\ThrowableData;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Support\PayloadLimiter;

class RecordingPipeline implements Recorder
{
    public function __construct(
        private readonly PersistenceRecorder $recorder,
        private readonly Redactor $redactor,
        private readonly PayloadLimiter $limiter,
        private readonly TraceContext $context,
    ) {}

    public function record(object $event): void
    {
        if ($event instanceof TraceStarted) {
            $processed = $this->traceStarted($event);
            $this->context->start($event->traceId, $event->spanId);
            $this->recorder->record($processed);

            return;
        }

        if ($event instanceof SpanStarted) {
            $this->context->enterSpan($event->spanId);
            $this->recorder->record($this->spanStarted($event));

            return;
        }

        if ($event instanceof SpanFinished) {
            try {
                $this->recorder->record($this->spanFinished($event));
            } finally {
                $this->context->leaveSpan($event->spanId);
            }

            return;
        }

        if ($event instanceof TraceFinished) {
            try {
                $this->recorder->record($this->traceFinished($event));
            } finally {
                $this->context->clear($event->traceId);
            }

            return;
        }

        if ($event instanceof EventRecorded) {
            $this->recorder->record(new EventRecorded(
                $event->traceId ?? $this->context->currentTraceId(),
                $event->spanId ?? $this->context->currentSpanId(),
                $event->eventType,
                $event->occurredAt,
                $this->process('event', $event->payload),
            ));

            return;
        }

        $this->recorder->record($event);
    }

    private function traceStarted(TraceStarted $event): TraceStarted
    {
        $snapshot = $this->context->snapshot();
        $spanStack = $snapshot['span_stack'];
        $attributes = $snapshot['attributes'];

        return new TraceStarted(
            $event->traceId,
            $event->spanId,
            $event->name,
            $event->startedAt,
            $this->process('metadata', $event->attributes),
            [
                'parent_trace_id' => is_string($snapshot['trace_id'])
                    ? $snapshot['trace_id']
                    : null,
                'parent_span_id' => $spanStack === [] ? null : $spanStack[array_key_last($spanStack)],
                'attributes' => $this->process(
                    'tags',
                    $this->normalizeContextAttributes($attributes),
                ),
            ],
        );
    }

    private function traceFinished(TraceFinished $event): TraceFinished
    {
        return new TraceFinished(
            $event->traceId,
            $event->endedAt,
            $event->status,
            $this->error($event->error),
            $this->process('metadata', $event->attributes),
        );
    }

    private function spanStarted(SpanStarted $event): SpanStarted
    {
        $request = $event->request;

        if (! config('ai-observatory.capture.prompts', true)) {
            unset($request['prompt'], $request['text'], $request['inputs'], $request['query'], $request['documents']);
        }

        if (
            in_array($event->type, [SpanType::Tool, SpanType::Mcp], true)
            && ! config('ai-observatory.capture.tool_arguments', true)
        ) {
            unset($request['arguments']);
        }

        return new SpanStarted(
            $event->traceId,
            $event->spanId,
            $event->parentSpanId,
            $event->type,
            $event->name,
            $event->startedAt,
            $this->process('request', $request),
            $this->process('metadata', $event->attributes),
        );
    }

    private function spanFinished(SpanFinished $event): SpanFinished
    {
        $response = $event->response;

        if (! config('ai-observatory.capture.responses', true)) {
            unset($response['text'], $response['answers']);
        }

        if (
            isset($response['result'])
            && ! config('ai-observatory.capture.tool_results', true)
        ) {
            unset($response['result']);
        }

        if (! config('ai-observatory.capture.tool_arguments', true)) {
            $response = $this->withoutToolArguments($response);
        }

        return new SpanFinished(
            $event->traceId,
            $event->spanId,
            $event->endedAt,
            $event->status,
            $this->process('response', $response),
            $event->usage,
            $this->error($event->error),
            $this->process('metadata', $event->attributes),
        );
    }

    /**
     * @param  array<string, mixed>  $response
     * @return array<string, mixed>
     */
    private function withoutToolArguments(array $response): array
    {
        $toolCalls = $response['tool_calls'] ?? null;

        if (! is_array($toolCalls)) {
            return $response;
        }

        foreach ($toolCalls as $index => $toolCall) {
            if (is_array($toolCall)) {
                unset($toolCall['arguments']);
                $toolCalls[$index] = $toolCall;
            }
        }

        $response['tool_calls'] = $toolCalls;

        return $response;
    }

    private function error(?ThrowableData $error): ?ThrowableData
    {
        if ($error === null) {
            return null;
        }

        $processed = $this->process('error', [
            'type' => $error->type,
            'message' => $error->message,
            'stack' => config('ai-observatory.capture.stack_traces', false)
                ? $error->stack
                : null,
        ]);

        if (($processed['_truncated'] ?? false) === true) {
            return new ThrowableData(
                $error->type,
                'Error details were truncated before storage.',
            );
        }

        return new ThrowableData(
            is_string($processed['type'] ?? null) ? $processed['type'] : $error->type,
            is_string($processed['message'] ?? null)
                ? $processed['message']
                : '[REDACTED]',
            is_string($processed['stack'] ?? null) ? $processed['stack'] : null,
        );
    }

    /**
     * @param  array<string, mixed>  $attributes
     * @return array<string, mixed>
     */
    private function normalizeContextAttributes(array $attributes): array
    {
        foreach (['user', 'tenant'] as $identity) {
            $value = $attributes[$identity] ?? null;

            if ($value instanceof Model) {
                $attributes["{$identity}_id"] = (string) $value->getKey();
                $attributes["{$identity}_type"] = $value->getMorphClass();
                unset($attributes[$identity]);
            } elseif (is_string($value) || is_int($value)) {
                $attributes["{$identity}_id"] = (string) $value;
                unset($attributes[$identity]);
            } elseif (is_array($value)) {
                $id = $value['id'] ?? null;
                $type = $value['type'] ?? null;

                if (is_string($id) || is_int($id)) {
                    $attributes["{$identity}_id"] = (string) $id;
                }

                if (is_string($type)) {
                    $attributes["{$identity}_type"] = $type;
                }

                unset($attributes[$identity]);
            }
        }

        return $attributes;
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    private function process(string $root, array $payload): array
    {
        $normalized = $this->limiter->normalize([$root => $payload]);
        $wrapped = $this->redactor->redact($normalized);

        if (! is_array($wrapped)) {
            return [];
        }

        $processed = is_array($wrapped[$root] ?? null) ? $wrapped[$root] : [];

        return $this->limiter->limit($processed);
    }
}
