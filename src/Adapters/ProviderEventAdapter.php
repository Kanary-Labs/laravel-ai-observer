<?php

namespace Kanary\AiObservatory\Adapters;

use Kanary\AiObservatory\Adapters\Concerns\MapsLaravelAiData;
use Kanary\AiObservatory\Data\EventRecorded;
use Kanary\AiObservatory\Data\ThrowableData;
use Laravel\Ai\Events\AgentFailedOver;
use Laravel\Ai\Events\ProviderFailedOver;

class ProviderEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiData;

    public function supports(object $event): bool
    {
        return $event instanceof ProviderFailedOver
            && ! $event instanceof AgentFailedOver;
    }

    public function adapt(object $event): array
    {
        if (! $event instanceof ProviderFailedOver || $event instanceof AgentFailedOver) {
            return [];
        }

        return [
            new EventRecorded(
                traceId: null,
                spanId: null,
                eventType: 'provider_failed_over',
                occurredAt: $this->now(),
                payload: [
                    'provider' => $event->provider->name(),
                    'model' => $event->model,
                    'error' => ThrowableData::fromThrowable($event->exception),
                ],
            ),
        ];
    }
}
