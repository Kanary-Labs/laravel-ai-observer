<?php

namespace Kanary\AiObservatory\Recording;

use Illuminate\Contracts\Queue\Factory as QueueFactory;
use Illuminate\Support\Facades\Log;
use Kanary\AiObservatory\Contracts\Recorder;
use Kanary\AiObservatory\Jobs\PersistRecordedEvents;
use Kanary\AiObservatory\Sampling\SamplingRecorder;
use Throwable;

use function Illuminate\Support\defer;

final class PersistenceRecorder implements Recorder
{
    /** @var list<object> */
    private array $events = [];

    private bool $scheduled = false;

    public function __construct(
        private readonly SamplingRecorder $recorder,
        private readonly InternalEventSerializer $serializer,
        private readonly QueueFactory $queues,
    ) {}

    public function record(object $event): void
    {
        $mode = $this->mode();

        if ($mode === 'sync') {
            $this->recorder->record($event);

            return;
        }

        $this->events[] = $event;

        if ($this->scheduled) {
            return;
        }

        $this->scheduled = true;

        defer(
            fn () => $this->flush($mode),
            'ai-observatory.persist.'.spl_object_id($this),
            always: true,
        );
    }

    public function flush(?string $mode = null): void
    {
        $events = $this->events;
        $this->events = [];
        $this->scheduled = false;

        if ($events === []) {
            return;
        }

        if (($mode ?? $this->mode()) === 'queue') {
            $this->dispatch($events);

            return;
        }

        foreach ($events as $event) {
            try {
                $this->recorder->record($event);
            } catch (Throwable $throwable) {
                $this->debug('AI Observatory failed to persist an after-response event.', $throwable);
            }
        }
    }

    /** @param list<object> $events */
    private function dispatch(array $events): void
    {
        try {
            $payloads = [];

            foreach ($events as $event) {
                $payload = $this->serializer->serialize($event);

                if ($payload !== null) {
                    $payloads[] = $payload;
                }
            }

            if ($payloads === []) {
                return;
            }

            $job = new PersistRecordedEvents($payloads);
            $maxPayloadBytes = max(
                1,
                (int) config(
                    'ai-observatory.queue.max_payload_bytes',
                    180_000,
                ),
            );

            if ($job->payloadBytes() > $maxPayloadBytes) {
                foreach ($events as $event) {
                    $this->recorder->record($event);
                }

                return;
            }

            $this->queues
                ->connection(config('ai-observatory.queue.connection'))
                ->push(
                    $job,
                    queue: (string) config('ai-observatory.queue.name', 'default'),
                );
        } catch (Throwable $throwable) {
            $this->debug('AI Observatory failed to dispatch queued recording.', $throwable);
        }
    }

    private function mode(): string
    {
        $mode = config('ai-observatory.recording_mode', 'sync');

        return in_array($mode, ['sync', 'after_response', 'queue'], true)
            ? $mode
            : 'sync';
    }

    private function debug(string $message, Throwable $throwable): void
    {
        if (config('ai-observatory.debug')) {
            Log::debug($message, ['exception' => $throwable]);
        }
    }
}
