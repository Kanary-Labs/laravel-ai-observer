<?php

namespace Kanary\AiObservatory\Adapters;

use Kanary\AiObservatory\Adapters\Concerns\MapsLaravelAiData;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Enums\TraceStatus;
use Laravel\Ai\Events\Classified;
use Laravel\Ai\Events\Classifying;

class ClassificationEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiData;

    public function supports(object $event): bool
    {
        return $event instanceof Classifying || $event instanceof Classified;
    }

    public function adapt(object $event): array
    {
        if (! $event instanceof Classifying && ! $event instanceof Classified) {
            return [];
        }

        $now = $this->now();
        $attributes = [
            'operation' => 'classification',
            'provider' => $event->provider->name(),
            'model' => $event->model,
        ];

        if ($event instanceof Classifying) {
            return [
                new TraceStarted($event->invocationId, $event->invocationId, 'Classification', $now, $attributes),
                new SpanStarted(
                    $event->invocationId, $event->invocationId, null, SpanType::Model,
                    'Classification', $now,
                    ['prompt' => $event->prompt->state, 'questions_count' => count($event->prompt->questions)],
                    $attributes,
                ),
            ];
        }

        return [
            new SpanFinished(
                $event->invocationId, $event->invocationId, $now, SpanStatus::Successful,
                ['answers' => array_map(fn ($answer): array => $answer->toArray(), $event->response->answers)],
                $this->tokenUsage($event->response->usage, $event->provider->name()),
                attributes: $attributes,
            ),
            new TraceFinished($event->invocationId, $now, TraceStatus::Successful),
        ];
    }
}
