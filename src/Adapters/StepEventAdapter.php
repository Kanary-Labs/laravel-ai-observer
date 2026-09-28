<?php

namespace Kanary\AiObservatory\Adapters;

use Illuminate\Support\Str;
use Kanary\AiObservatory\Adapters\Concerns\MapsLaravelAiData;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\ThrowableData;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Laravel\Ai\Events\AgentFailed;
use Laravel\Ai\Events\AgentPrompted;
use Laravel\Ai\Events\StartingStep;
use Laravel\Ai\Events\StepCompleted;
use Laravel\Ai\Events\StepFailed;

/** SDK 1.x model calls, observed as they happen, including failed attempts. */
class StepEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiData;

    /** @var array<string, array<int, string>> */
    private array $spans = [];

    public function supports(object $event): bool
    {
        return $event instanceof StartingStep
            || $event instanceof StepCompleted
            || $event instanceof StepFailed
            || $event instanceof AgentFailed
            || $event instanceof AgentPrompted;
    }

    public function adapt(object $event): array
    {
        if ($event instanceof AgentFailed || $event instanceof AgentPrompted) {
            unset($this->spans[$event->invocationId]);

            return [];
        }

        if ($event instanceof StartingStep) {
            $spanId = (string) Str::uuid7();
            $this->spans[$event->invocationId][$event->stepNumber] = $spanId;

            return [new SpanStarted(
                $event->invocationId,
                $spanId,
                $event->invocationId,
                SpanType::Model,
                $event->provider->name().'/'.$event->model,
                $this->now(),
                ['step' => $event->stepNumber],
                [
                    'provider' => $event->provider->name(),
                    'model' => $event->model,
                    'is_final_step' => $event->isFinalStep,
                    'timing' => 'sdk_step_events',
                ],
            )];
        }

        if (! $event instanceof StepCompleted && ! $event instanceof StepFailed) {
            return [];
        }

        $spanId = $this->spans[$event->invocationId][$event->stepNumber] ?? null;
        unset($this->spans[$event->invocationId][$event->stepNumber]);

        if (($this->spans[$event->invocationId] ?? []) === []) {
            unset($this->spans[$event->invocationId]);
        }

        if ($spanId === null) {
            return [];
        }

        $attributes = [
            'provider' => $event->provider->name(),
            'model' => $event->model,
            'sdk_duration_ms' => $event->time,
            'timing' => 'sdk_step_events',
        ];

        if ($event instanceof StepFailed) {
            return [new SpanFinished(
                $event->invocationId,
                $spanId,
                $this->now(),
                SpanStatus::Failed,
                error: ThrowableData::fromThrowable($event->exception),
                attributes: $attributes,
            )];
        }

        $response = $event->response;
        $provider = $response->meta->provider ?? $event->provider->name();

        return [new SpanFinished(
            $event->invocationId,
            $spanId,
            $this->now(),
            SpanStatus::Successful,
            [
                'text' => $response->text,
                'finish_reason' => $response->finishReason->value,
                'tool_calls' => array_map(fn ($call): array => [
                    'id' => $call->id,
                    'name' => $call->name,
                    'arguments' => $call->arguments,
                ], $response->toolCalls),
            ],
            $this->tokenUsage($response->usage, $provider),
            attributes: [
                ...$attributes,
                'provider' => $provider,
                'model' => $response->meta->model ?? $event->model,
            ],
        )];
    }

    public function reset(): void
    {
        $this->spans = [];
    }
}
