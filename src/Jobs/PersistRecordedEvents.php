<?php

namespace Kanary\AiObservatory\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Kanary\AiObservatory\Recording\InternalEventSerializer;
use Kanary\AiObservatory\Sampling\SamplingRecorder;
use Throwable;

final class PersistRecordedEvents implements ShouldQueue
{
    public int $tries = 1;

    /** @param list<array<string, mixed>> $events */
    public function __construct(public array $events) {}

    public function handle(
        InternalEventSerializer $serializer,
        SamplingRecorder $recorder,
    ): void {
        foreach ($this->events as $payload) {
            try {
                $event = $serializer->unserialize($payload);

                if ($event !== null) {
                    $recorder->record($event);
                }
            } catch (Throwable $throwable) {
                if (config('ai-observatory.debug')) {
                    Log::debug('AI Observatory failed to persist a queued event.', [
                        'event_type' => $payload['type'] ?? null,
                        'exception' => $throwable,
                    ]);
                }
            }
        }
    }
}
