<?php

namespace Kanary\AiObservatory\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Kanary\AiObservatory\Recording\InternalEventSerializer;
use Kanary\AiObservatory\Sampling\SamplingRecorder;
use Throwable;

final class PersistRecordedEvents implements ShouldQueue
{
    public int $tries = 3;

    /** @var list<array<string, mixed>> */
    public array $events = [];

    public string $encodedEvents = '';

    /** @param list<array<string, mixed>> $events */
    public function __construct(array $events)
    {
        $json = json_encode(
            $events,
            JSON_THROW_ON_ERROR | JSON_INVALID_UTF8_SUBSTITUTE,
        );
        $compressed = function_exists('gzencode')
            ? gzencode($json, 6)
            : false;
        $this->encodedEvents = $compressed === false
            ? 'json:'.base64_encode($json)
            : 'gzip:'.base64_encode($compressed);
    }

    /** @return list<int> */
    public function backoff(): array
    {
        return [1, 5];
    }

    public function payloadBytes(): int
    {
        return strlen($this->encodedEvents) + 2_000;
    }

    /** @return list<array<string, mixed>> */
    public function payloads(): array
    {
        if ($this->events !== []) {
            return $this->events;
        }

        $separator = strpos($this->encodedEvents, ':');

        if ($separator === false) {
            return [];
        }

        $encoding = substr($this->encodedEvents, 0, $separator);
        $decoded = base64_decode(
            substr($this->encodedEvents, $separator + 1),
            true,
        );

        if ($decoded === false) {
            return [];
        }

        if ($encoding === 'gzip') {
            $decoded = function_exists('gzdecode') ? gzdecode($decoded) : false;
        }

        if (! is_string($decoded)) {
            return [];
        }

        $payloads = json_decode($decoded, true);

        if (! is_array($payloads) || ! array_is_list($payloads)) {
            return [];
        }

        $normalized = [];

        foreach ($payloads as $payload) {
            $event = $this->stringKeyedArray($payload);

            if ($event !== null) {
                $normalized[] = $event;
            }
        }

        return $normalized;
    }

    public function handle(
        InternalEventSerializer $serializer,
        SamplingRecorder $recorder,
    ): void {
        foreach ($this->payloads() as $payload) {
            try {
                $event = $serializer->unserialize($payload);
            } catch (Throwable $throwable) {
                $this->debug(
                    'AI Observatory ignored a malformed queued event.',
                    $throwable,
                    $payload['type'] ?? null,
                );

                continue;
            }

            if ($event === null) {
                continue;
            }

            try {
                $recorder->record($event);
            } catch (Throwable $throwable) {
                $this->debug(
                    'AI Observatory failed to persist a queued event.',
                    $throwable,
                    $payload['type'] ?? null,
                );

                throw $throwable;
            }
        }
    }

    public function failed(?Throwable $throwable): void
    {
        if ($throwable !== null) {
            $this->debug(
                'AI Observatory exhausted retries for a queued event batch.',
                $throwable,
            );
        }
    }

    private function debug(
        string $message,
        Throwable $throwable,
        mixed $eventType = null,
    ): void {
        if (config('ai-observatory.debug')) {
            Log::debug($message, [
                'event_type' => $eventType,
                'exception' => $throwable,
            ]);
        }
    }

    /** @return array<string, mixed>|null */
    private function stringKeyedArray(mixed $value): ?array
    {
        if (! is_array($value)) {
            return null;
        }

        $normalized = [];

        foreach ($value as $key => $item) {
            if (! is_string($key)) {
                return null;
            }

            $normalized[$key] = $item;
        }

        return $normalized;
    }
}
