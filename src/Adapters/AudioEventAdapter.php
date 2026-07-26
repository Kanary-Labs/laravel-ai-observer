<?php

namespace Kanary\AiObservatory\Adapters;

use Kanary\AiObservatory\Adapters\Concerns\MapsLaravelAiV010Data;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Enums\TraceStatus;
use Laravel\Ai\Events\AudioGenerated;
use Laravel\Ai\Events\GeneratingAudio;

class AudioEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiV010Data;

    public function supports(object $event): bool
    {
        return $event instanceof GeneratingAudio || $event instanceof AudioGenerated;
    }

    public function adapt(object $event): array
    {
        $now = $this->now();

        if ($event instanceof GeneratingAudio) {
            $attributes = [
                'provider' => $event->provider->name(),
                'model' => $event->model,
                'operation' => 'audio.generate',
            ];

            return [
                new TraceStarted($event->invocationId, $event->invocationId, 'Audio generation', $now, $attributes),
                new SpanStarted(
                    $event->invocationId,
                    $event->invocationId,
                    null,
                    SpanType::Audio,
                    'Audio generation',
                    $now,
                    [
                        'text' => $event->prompt->text,
                        'voice' => $event->prompt->voice,
                        'instructions' => $event->prompt->instructions,
                    ],
                    $attributes,
                ),
            ];
        }

        if ($event instanceof AudioGenerated) {
            return [
                new SpanFinished(
                    $event->invocationId,
                    $event->invocationId,
                    $now,
                    SpanStatus::Successful,
                    [
                        'mime_type' => $event->response->mimeType(),
                        'encoded_bytes' => strlen($event->response->audio),
                        'audio_recorded' => false,
                    ],
                    attributes: [
                        'provider' => $event->provider->name(),
                        'model' => $event->model,
                    ],
                ),
                new TraceFinished($event->invocationId, $now, TraceStatus::Successful),
            ];
        }

        return [];
    }
}
