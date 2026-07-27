<?php

namespace Kanary\AiObservatory\Adapters;

use Carbon\CarbonImmutable;
use Illuminate\Support\Str;
use Kanary\AiObservatory\Adapters\Concerns\MapsLaravelAiV010Data;
use Kanary\AiObservatory\Data\EventRecorded;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\ThrowableData;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Laravel\Ai\Events\AgentPrompted;
use Laravel\Ai\Responses\Data\Step;
use Laravel\Ai\Responses\StreamedAgentResponse;
use Laravel\Ai\Streaming\Events\Error as StreamError;
use Laravel\Ai\Streaming\Events\StreamEnd;
use Laravel\Ai\Streaming\Events\StreamStart;
use Laravel\Ai\Streaming\Events\TextDelta;

class ModelEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiV010Data;

    public function supports(object $event): bool
    {
        return $event instanceof AgentPrompted;
    }

    public function adapt(object $event): array
    {
        if (! $event instanceof AgentPrompted) {
            return [];
        }

        if ($event->response instanceof StreamedAgentResponse) {
            return $this->adaptStreamed($event, $event->response);
        }

        $events = [];
        $observedAt = $this->now();

        foreach ($event->response->steps as $index => $step) {
            $events = [
                ...$events,
                ...$this->adaptStep($event, $step, $index, $observedAt),
            ];
        }

        return $events;
    }

    /** @return list<object> */
    private function adaptStep(
        AgentPrompted $event,
        Step $step,
        int $index,
        CarbonImmutable $observedAt,
    ): array {
        $spanId = (string) Str::uuid7();
        $provider = $step->meta->provider ?? $event->prompt->provider->name();
        $model = $step->meta->model ?? $event->prompt->model;

        return [
            new SpanStarted(
                traceId: $event->invocationId,
                spanId: $spanId,
                parentSpanId: $event->invocationId,
                type: SpanType::Model,
                name: $provider.'/'.$model,
                startedAt: $observedAt,
                request: ['step' => $index + 1],
                attributes: [
                    'provider' => $provider,
                    'model' => $model,
                    'timing' => 'reconstructed_at_completion',
                ],
            ),
            new SpanFinished(
                traceId: $event->invocationId,
                spanId: $spanId,
                endedAt: $observedAt,
                status: SpanStatus::Successful,
                response: [
                    'text' => $step->text,
                    'finish_reason' => $step->finishReason->value,
                    'tool_calls' => array_map(
                        fn ($toolCall): array => [
                            'id' => $toolCall->id,
                            'name' => $toolCall->name,
                            'arguments' => $toolCall->arguments,
                        ],
                        $step->toolCalls,
                    ),
                ],
                usage: $this->tokenUsage($step->usage, $provider),
                attributes: [
                    'provider' => $provider,
                    'model' => $model,
                    'timing' => 'reconstructed_at_completion',
                ],
            ),
        ];
    }

    /** @return list<object> */
    private function adaptStreamed(
        AgentPrompted $event,
        StreamedAgentResponse $response,
    ): array {
        $streamStart = $response->events->whereInstanceOf(StreamStart::class)->first();
        $streamEnd = $response->events->whereInstanceOf(StreamEnd::class)->last();
        $streamError = $response->events
            ->whereInstanceOf(StreamError::class)
            ->first(fn (StreamError $error): bool => ! $error->recoverable);

        if (
            ! $streamStart instanceof StreamStart
            || (
                ! $streamEnd instanceof StreamEnd
                && ! $streamError instanceof StreamError
            )
        ) {
            return [];
        }

        $spanId = (string) Str::uuid7();
        $firstToken = $response->events->whereInstanceOf(TextDelta::class)->first();
        $startedAt = CarbonImmutable::createFromTimestamp($streamStart->timestamp);
        $endedAt = CarbonImmutable::createFromTimestamp(
            $streamEnd instanceof StreamEnd
                ? $streamEnd->timestamp
                : $streamError->timestamp,
        );
        $firstTokenAt = $firstToken instanceof TextDelta
            ? CarbonImmutable::createFromTimestamp($firstToken->timestamp)
            : null;
        $timeToFirstToken = $firstTokenAt === null
            ? null
            : (int) round($startedAt->diffInMilliseconds($firstTokenAt, true));
        $successful = $streamEnd instanceof StreamEnd
            && $streamEnd->reason !== 'error'
            && ! $streamError instanceof StreamError;
        $error = $streamError instanceof StreamError
            ? new ThrowableData($streamError->type, $streamError->message)
            : null;

        return [
            new SpanStarted(
                traceId: $event->invocationId,
                spanId: $spanId,
                parentSpanId: $event->invocationId,
                type: SpanType::Model,
                name: $streamStart->provider.'/'.$streamStart->model,
                startedAt: $startedAt,
                request: ['streaming' => true],
                attributes: [
                    'provider' => $streamStart->provider,
                    'model' => $streamStart->model,
                    'request_started_at' => $startedAt->toIso8601String(),
                    'first_token_at' => $firstTokenAt?->toIso8601String(),
                    'time_to_first_token_ms' => $timeToFirstToken,
                ],
            ),
            new EventRecorded(
                traceId: $event->invocationId,
                spanId: $spanId,
                eventType: 'stream_started',
                occurredAt: $startedAt,
                payload: [
                    'provider' => $streamStart->provider,
                    'model' => $streamStart->model,
                ],
            ),
            ...($firstTokenAt === null ? [] : [
                new EventRecorded(
                    traceId: $event->invocationId,
                    spanId: $spanId,
                    eventType: 'first_token_received',
                    occurredAt: $firstTokenAt,
                    payload: [
                        'time_to_first_token_ms' => $timeToFirstToken,
                    ],
                ),
            ]),
            new SpanFinished(
                traceId: $event->invocationId,
                spanId: $spanId,
                endedAt: $endedAt,
                status: $successful ? SpanStatus::Successful : SpanStatus::Failed,
                response: [
                    'text' => $response->text,
                    'finish_reason' => $streamEnd instanceof StreamEnd
                        ? $streamEnd->reason
                        : 'error',
                ],
                usage: $streamEnd instanceof StreamEnd
                    ? $this->tokenUsage($response->usage, $streamStart->provider)
                    : null,
                error: $error,
                attributes: [
                    'provider' => $streamStart->provider,
                    'model' => $streamStart->model,
                    'response_completed_at' => $endedAt->toIso8601String(),
                    'time_to_first_token_ms' => $timeToFirstToken,
                ],
            ),
            new EventRecorded(
                traceId: $event->invocationId,
                spanId: $spanId,
                eventType: 'response_completed',
                occurredAt: $endedAt,
                payload: [
                    'finish_reason' => $streamEnd instanceof StreamEnd
                        ? $streamEnd->reason
                        : 'error',
                    'successful' => $successful,
                ],
            ),
        ];
    }
}
