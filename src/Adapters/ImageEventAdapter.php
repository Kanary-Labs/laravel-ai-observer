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
use Laravel\Ai\Events\GeneratingImage;
use Laravel\Ai\Events\ImageGenerated;

class ImageEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiData;

    public function supports(object $event): bool
    {
        return $event instanceof GeneratingImage || $event instanceof ImageGenerated;
    }

    public function adapt(object $event): array
    {
        $now = $this->now();

        if ($event instanceof GeneratingImage) {
            $attributes = [
                'provider' => $event->provider->name(),
                'model' => $event->model,
                'operation' => 'image.generate',
            ];

            return [
                new TraceStarted($event->invocationId, $event->invocationId, 'Image generation', $now, $attributes),
                new SpanStarted(
                    $event->invocationId,
                    $event->invocationId,
                    null,
                    SpanType::Image,
                    'Image generation',
                    $now,
                    [
                        'prompt' => $event->prompt->prompt,
                        'size' => $event->prompt->size,
                        'quality' => $event->prompt->quality,
                        'attachments_count' => $event->prompt->attachments->count(),
                    ],
                    $attributes,
                ),
            ];
        }

        if ($event instanceof ImageGenerated) {
            return [
                new SpanFinished(
                    $event->invocationId,
                    $event->invocationId,
                    $now,
                    SpanStatus::Successful,
                    ['image_count' => $event->response->count()],
                    $this->tokenUsage($event->response->usage, $event->provider->name()),
                    attributes: [
                        'provider' => $event->provider->name(),
                        'model' => $event->model,
                        ...array_intersect_key($event->response->usage->toArray(), array_flip([
                            'image_input_tokens', 'image_output_tokens',
                        ])),
                    ],
                ),
                new TraceFinished($event->invocationId, $now, TraceStatus::Successful),
            ];
        }

        return [];
    }
}
