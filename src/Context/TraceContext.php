<?php

namespace Kanary\AiObservatory\Context;

class TraceContext
{
    private ?string $currentTraceId = null;

    /** @var list<string> */
    private array $spanStack = [];

    /** @var array<string, mixed> */
    private array $attributes = [];

    public function start(string $traceId, string $rootSpanId): void
    {
        $this->currentTraceId = $traceId;
        $this->spanStack = [$rootSpanId];
    }

    public function currentTraceId(): ?string
    {
        return $this->currentTraceId;
    }

    public function currentSpanId(): ?string
    {
        return $this->spanStack[array_key_last($this->spanStack)] ?? null;
    }

    public function enterSpan(string $spanId): void
    {
        if (! in_array($spanId, $this->spanStack, true)) {
            $this->spanStack[] = $spanId;
        }
    }

    public function leaveSpan(string $spanId): void
    {
        $position = array_search($spanId, $this->spanStack, true);

        if ($position !== false) {
            array_splice($this->spanStack, $position, 1);
        }
    }

    public function tag(string $key, mixed $value): void
    {
        $this->attributes[$key] = $value;
    }

    /** @return array<string, mixed> */
    public function attributes(): array
    {
        return $this->attributes;
    }

    public function clear(?string $traceId = null): void
    {
        if ($traceId !== null && $this->currentTraceId !== $traceId) {
            return;
        }

        $this->currentTraceId = null;
        $this->spanStack = [];
        $this->attributes = [];
    }
}
