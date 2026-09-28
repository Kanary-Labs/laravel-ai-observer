<?php

namespace Kanary\AiObservatory\Adapters;

use Kanary\AiObservatory\Adapters\Concerns\MapsLaravelAiData;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\TokenUsage;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Enums\TraceStatus;
use Laravel\Ai\Events\EmbeddingsGenerated;
use Laravel\Ai\Events\GeneratingEmbeddings;

class EmbeddingEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiData;

    public function supports(object $event): bool
    {
        return $event instanceof GeneratingEmbeddings || $event instanceof EmbeddingsGenerated;
    }

    public function adapt(object $event): array
    {
        $now = $this->now();

        if ($event instanceof GeneratingEmbeddings) {
            $attributes = [
                'provider' => $event->provider->name(),
                'model' => $event->model,
                'operation' => 'embeddings.generate',
            ];

            return [
                new TraceStarted($event->invocationId, $event->invocationId, 'Embeddings generation', $now, $attributes),
                new SpanStarted(
                    $event->invocationId,
                    $event->invocationId,
                    null,
                    SpanType::Embedding,
                    'Embeddings generation',
                    $now,
                    [
                        'inputs' => $event->prompt->inputs,
                        'dimensions' => $event->prompt->dimensions,
                    ],
                    $attributes,
                ),
            ];
        }

        if ($event instanceof EmbeddingsGenerated) {
            $response = get_object_vars($event->response);
            $inputTokens = isset($response['usage'])
                ? $response['usage']->inputTokens
                : $response['tokens'];

            return [
                new SpanFinished(
                    $event->invocationId,
                    $event->invocationId,
                    $now,
                    SpanStatus::Successful,
                    [
                        'embedding_count' => count($event->response->embeddings),
                        'vectors_recorded' => false,
                    ],
                    new TokenUsage(
                        input: $inputTokens,
                        total: $inputTokens,
                        outputApplicable: false,
                    ),
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
