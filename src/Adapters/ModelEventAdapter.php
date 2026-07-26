<?php

namespace Kanary\AiObservatory\Adapters;

use Carbon\CarbonImmutable;
use Illuminate\Support\Str;
use Kanary\AiObservatory\Adapters\Concerns\MapsLaravelAiV010Data;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Laravel\Ai\Events\AgentPrompted;
use Laravel\Ai\Responses\Data\Step;
use Laravel\Ai\Responses\StreamedAgentResponse;
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
                usage: $this->tokenUsage($step->usage),
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

        if (! $streamStart instanceof StreamStart || ! $streamEnd instanceof StreamEnd) {
            return [];
        }

        $spanId = (string) Str::uuid7();
        $firstToken = $response->events->whereInstanceOf(TextDelta::class)->first();
        $startedAt = CarbonImmutable::createFromTimestamp($streamStart->timestamp);
        $endedAt = CarbonImmutable::createFromTimestamp($streamEnd->timestamp);
        $successful = $streamEnd->reason !== 'error';

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
                    'first_token_at' => $firstToken instanceof TextDelta
                        ? CarbonImmutable::createFromTimestamp($firstToken->timestamp)->toIso8601String()
                        : null,
                ],
            ),
            new SpanFinished(
                traceId: $event->invocationId,
                spanId: $spanId,
                endedAt: $endedAt,
                status: $successful ? SpanStatus::Successful : SpanStatus::Failed,
                response: [
                    'text' => $response->text,
                    'finish_reason' => $streamEnd->reason,
                ],
                usage: $this->tokenUsage($streamEnd->usage),
                attributes: [
                    'provider' => $streamStart->provider,
                    'model' => $streamStart->model,
                ],
            ),
        ];
    }
}
