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
use Laravel\Ai\Events\Reranked;
use Laravel\Ai\Events\Reranking;

class RerankEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiData;

    public function supports(object $event): bool
    {
        return $event instanceof Reranking || $event instanceof Reranked;
    }

    public function adapt(object $event): array
    {
        $now = $this->now();

        if ($event instanceof Reranking) {
            $attributes = [
                'provider' => $event->provider->name(),
                'model' => $event->model,
                'operation' => 'rerank',
            ];

            return [
                new TraceStarted($event->invocationId, $event->invocationId, 'Reranking', $now, $attributes),
                new SpanStarted(
                    $event->invocationId,
                    $event->invocationId,
                    null,
                    SpanType::Rerank,
                    'Reranking',
                    $now,
                    [
                        'query' => $event->prompt->query,
                        'documents' => $event->prompt->documents,
                        'limit' => $event->prompt->limit,
                    ],
                    $attributes,
                ),
            ];
        }

        if ($event instanceof Reranked) {
            return [
                new SpanFinished(
                    $event->invocationId,
                    $event->invocationId,
                    $now,
                    SpanStatus::Successful,
                    [
                        'results' => array_map(
                            fn ($result): array => $result->toArray(),
                            $event->response->results,
                        ),
                    ],
                    usage: isset($event->response->usage) ? new TokenUsage(
                        input: $event->response->usage->inputTokens,
                        total: $event->response->usage->inputTokens,
                        outputApplicable: false,
                    ) : null,
                    attributes: [
                        'provider' => $event->provider->name(),
                        'model' => $event->model,
                        ...isset($event->response->usage) ? ['search_units' => $event->response->usage->searchUnits] : [],
                    ],
                ),
                new TraceFinished($event->invocationId, $now, TraceStatus::Successful),
            ];
        }

        return [];
    }
}
