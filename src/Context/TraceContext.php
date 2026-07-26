<?php

namespace Kanary\AiObservatory\Context;

use Illuminate\Support\Facades\Context;

class TraceContext
{
    public const LARAVEL_CONTEXT_KEY = 'ai_observatory.trace_context';

    private ?string $currentTraceId = null;

    /** @var list<string> */
    private array $spanStack = [];

    /** @var array<string, mixed> */
    private array $attributes = [];

    /**
     * @var list<array{
     *     trace_id: string|null,
     *     span_stack: list<string>,
     *     attributes: array<string, mixed>
     * }>
     */
    private array $traceStack = [];

    public function start(string $traceId, string $rootSpanId): void
    {
        if (
            $this->currentTraceId !== $traceId
            && (
                $this->currentTraceId !== null
                || $this->spanStack !== []
                || $this->attributes !== []
            )
        ) {
            $this->traceStack[] = $this->currentSnapshot();
        }

        $this->currentTraceId = $traceId;
        $this->spanStack = [$rootSpanId];
        $this->syncLaravelContext();
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
            $this->syncLaravelContext();
        }
    }

    public function leaveSpan(string $spanId): void
    {
        $position = array_search($spanId, $this->spanStack, true);

        if ($position !== false) {
            array_splice($this->spanStack, $position, 1);
            $this->syncLaravelContext();
        }
    }

    public function tag(string $key, mixed $value): void
    {
        $this->attributes[$key] = $value;
        $this->syncLaravelContext();
    }

    /** @return array<string, mixed> */
    public function attributes(): array
    {
        return $this->attributes;
    }

    /**
     * @return array{
     *     trace_id: string|null,
     *     span_stack: list<string>,
     *     attributes: array<string, mixed>,
     *     trace_stack: list<array{
     *         trace_id: string|null,
     *         span_stack: list<string>,
     *         attributes: array<string, mixed>
     *     }>
     * }
     */
    public function snapshot(): array
    {
        return [
            ...$this->currentSnapshot(),
            'trace_stack' => $this->traceStack,
        ];
    }

    /** @param array<string, mixed> $snapshot */
    public function restore(array $snapshot): void
    {
        $traceId = $snapshot['trace_id'] ?? null;
        $spanStack = $snapshot['span_stack'] ?? [];
        $attributes = $snapshot['attributes'] ?? [];
        $traceStack = $snapshot['trace_stack'] ?? [];

        $this->currentTraceId = is_string($traceId) ? $traceId : null;
        $this->spanStack = is_array($spanStack)
            ? array_values(array_filter($spanStack, is_string(...)))
            : [];
        $this->attributes = is_array($attributes) ? $attributes : [];
        $this->traceStack = $this->normalizeTraceStack($traceStack);
        $this->syncLaravelContext();
    }

    /**
     * @template TReturn
     *
     * @param  array<string, mixed>  $attributes
     * @param  callable(): TReturn  $callback
     * @return TReturn
     */
    public function scope(array $attributes, callable $callback): mixed
    {
        $before = $this->snapshot();

        foreach ($attributes as $key => $value) {
            $this->tag($key, $value);
        }

        try {
            return $callback();
        } finally {
            $this->restore($before);
        }
    }

    public function clear(?string $traceId = null): void
    {
        if ($traceId !== null && $this->currentTraceId !== $traceId) {
            return;
        }

        if ($traceId !== null && $this->traceStack !== []) {
            $parent = array_pop($this->traceStack);
            $this->currentTraceId = $parent['trace_id'];
            $this->spanStack = $parent['span_stack'];
            $this->attributes = $parent['attributes'];
            $this->syncLaravelContext();

            return;
        }

        $this->currentTraceId = null;
        $this->spanStack = [];
        $this->attributes = [];
        $this->traceStack = [];
        $this->syncLaravelContext();
    }

    /**
     * @return array{
     *     trace_id: string|null,
     *     span_stack: list<string>,
     *     attributes: array<string, mixed>
     * }
     */
    private function currentSnapshot(): array
    {
        return [
            'trace_id' => $this->currentTraceId,
            'span_stack' => $this->spanStack,
            'attributes' => $this->attributes,
        ];
    }

    /**
     * @return list<array{
     *     trace_id: string|null,
     *     span_stack: list<string>,
     *     attributes: array<string, mixed>
     * }>
     */
    private function normalizeTraceStack(mixed $traceStack): array
    {
        if (! is_array($traceStack)) {
            return [];
        }

        $normalized = [];

        foreach ($traceStack as $snapshot) {
            if (! is_array($snapshot)) {
                continue;
            }

            $traceId = $snapshot['trace_id'] ?? null;
            $spanStack = $snapshot['span_stack'] ?? [];
            $attributes = $snapshot['attributes'] ?? [];

            $normalized[] = [
                'trace_id' => is_string($traceId) ? $traceId : null,
                'span_stack' => is_array($spanStack)
                    ? array_values(array_filter($spanStack, is_string(...)))
                    : [],
                'attributes' => is_array($attributes) ? $attributes : [],
            ];
        }

        return $normalized;
    }

    private function syncLaravelContext(): void
    {
        if (
            $this->currentTraceId === null
            && $this->spanStack === []
            && $this->attributes === []
        ) {
            Context::forgetHidden(self::LARAVEL_CONTEXT_KEY);

            return;
        }

        Context::addHidden(self::LARAVEL_CONTEXT_KEY, $this->snapshot());
    }
}
