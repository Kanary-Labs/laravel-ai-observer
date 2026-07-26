<?php

namespace Kanary\AiObservatory\Recording;

use Kanary\AiObservatory\Contracts\Recorder;
use Kanary\AiObservatory\Contracts\Redactor;
use Kanary\AiObservatory\Data\EventRecorded;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Sampling\SamplingRecorder;
use Kanary\AiObservatory\Support\PayloadLimiter;

class RecordingPipeline implements Recorder
{
    public function __construct(
        private readonly SamplingRecorder $recorder,
        private readonly Redactor $redactor,
        private readonly PayloadLimiter $limiter,
    ) {}

    public function record(object $event): void
    {
        $this->recorder->record(match (true) {
            $event instanceof SpanStarted => $this->spanStarted($event),
            $event instanceof SpanFinished => $this->spanFinished($event),
            $event instanceof EventRecorded => new EventRecorded(
                $event->traceId,
                $event->spanId,
                $event->eventType,
                $event->occurredAt,
                $this->process('event', $event->payload),
            ),
            default => $event,
        });
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
            $event->attributes,
        );
    }

    private function spanFinished(SpanFinished $event): SpanFinished
    {
        $response = $event->response;

        if (! config('ai-observatory.capture.responses', true)) {
            unset($response['text']);
        }

        if (
            isset($response['result'])
            && ! config('ai-observatory.capture.tool_results', true)
        ) {
            unset($response['result']);
        }

        return new SpanFinished(
            $event->traceId,
            $event->spanId,
            $event->endedAt,
            $event->status,
            $this->process('response', $response),
            $event->usage,
            $event->error,
            $event->attributes,
        );
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    private function process(string $root, array $payload): array
    {
        $wrapped = $this->redactor->redact([$root => $payload]);

        if (! is_array($wrapped)) {
            return [];
        }

        $processed = is_array($wrapped[$root] ?? null) ? $wrapped[$root] : [];

        return $this->limiter->limit($processed);
    }
}
