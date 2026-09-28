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
use Laravel\Ai\Events\GeneratingTranscription;
use Laravel\Ai\Events\TranscriptionGenerated;

class TranscriptionEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiData;

    public function supports(object $event): bool
    {
        return $event instanceof GeneratingTranscription || $event instanceof TranscriptionGenerated;
    }

    public function adapt(object $event): array
    {
        $now = $this->now();

        if ($event instanceof GeneratingTranscription) {
            $attributes = [
                'provider' => $event->provider->name(),
                'model' => $event->model,
                'operation' => 'transcription.generate',
            ];

            return [
                new TraceStarted($event->invocationId, $event->invocationId, 'Transcription', $now, $attributes),
                new SpanStarted(
                    $event->invocationId,
                    $event->invocationId,
                    null,
                    SpanType::Transcription,
                    'Transcription',
                    $now,
                    [
                        'audio_type' => $event->prompt->audio::class,
                        'language' => $event->prompt->language,
                        'diarize' => $event->prompt->diarize,
                    ],
                    $attributes,
                ),
            ];
        }

        if ($event instanceof TranscriptionGenerated) {
            return [
                new SpanFinished(
                    $event->invocationId,
                    $event->invocationId,
                    $now,
                    SpanStatus::Successful,
                    [
                        'text' => $event->response->text,
                        'segments_count' => $event->response->segments->count(),
                    ],
                    $this->tokenUsage($event->response->usage, $event->provider->name()),
                    attributes: [
                        'provider' => $event->provider->name(),
                        'model' => $event->model,
                        ...array_intersect_key($event->response->usage->toArray(), ['audio_seconds' => true]),
                    ],
                ),
                new TraceFinished($event->invocationId, $now, TraceStatus::Successful),
            ];
        }

        return [];
    }
}
