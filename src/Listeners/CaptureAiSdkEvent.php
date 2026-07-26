<?php

namespace Kanary\AiObservatory\Listeners;

use Illuminate\Support\Facades\Log;
use Kanary\AiObservatory\Adapters\AiSdkEventAdapterRegistry;
use Kanary\AiObservatory\Contracts\Recorder;
use Throwable;

class CaptureAiSdkEvent
{
    public function __construct(
        private readonly AiSdkEventAdapterRegistry $adapters,
        private readonly Recorder $recorder,
    ) {}

    public function handle(object $event): void
    {
        try {
            $adapted = $this->adapters->adapt($event);
        } catch (Throwable $throwable) {
            $this->debug($throwable, $event);

            return;
        }

        foreach ($adapted as $internalEvent) {
            try {
                $this->recorder->record($internalEvent);
            } catch (Throwable $throwable) {
                $this->debug($throwable, $event);
            }
        }
    }

    private function debug(Throwable $throwable, object $event): void
    {
        if (! config('ai-observatory.debug')) {
            return;
        }

        Log::debug('AI Observatory failed to capture an SDK event.', [
            'sdk_event' => $event::class,
            'exception' => $throwable,
        ]);
    }
}
