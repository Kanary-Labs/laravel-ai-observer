<?php

namespace Kanary\AiObservatory\Http\Controllers;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;
use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;

final class OverviewController
{
    public function __invoke(): JsonResponse
    {
        $today = CarbonImmutable::now()->startOfDay();
        $traces = Trace::query()->where('started_at', '>=', $today);
        $traceCount = (clone $traces)->count();
        $failureCount = (clone $traces)->where('status', 'failed')->count();
        $pricedTraceCount = (clone $traces)->whereNotNull('estimated_cost')->count();
        $currencies = (clone $traces)
            ->whereNotNull('estimated_cost')
            ->whereNotNull('currency')
            ->distinct()
            ->pluck('currency');
        $currencyValue = $currencies->first();
        $currency = $pricedTraceCount > 0
            && $currencies->count() === 1
            && is_string($currencyValue)
            && (clone $traces)
                ->whereNotNull('estimated_cost')
                ->whereNull('currency')
                ->doesntExist()
                ? $currencyValue
                : null;
        $durations = (clone $traces)
            ->whereNotNull('duration_ms')
            ->orderBy('duration_ms')
            ->pluck('duration_ms')
            ->map(fn (mixed $duration): int => (int) $duration)
            ->values();

        return response()->json([
            'data' => [
                'metrics' => [
                    'trace_count' => $traceCount,
                    'failure_count' => $failureCount,
                    'failure_rate' => $traceCount > 0
                        ? round(($failureCount / $traceCount) * 100, 1)
                        : 0.0,
                    'total_tokens' => $this->nullableIntegerSum($traces, 'total_tokens'),
                    'estimated_cost' => $currency !== null
                        ? (string) (clone $traces)
                            ->where('currency', $currency)
                            ->sum('estimated_cost')
                        : null,
                    'currency' => $currency,
                    'average_duration_ms' => $durations->isEmpty()
                        ? null
                        : (int) round($durations->sum() / $durations->count()),
                    'p95_duration_ms' => $this->percentile($durations, 95),
                ],
                'top_agents' => $this->topTraces($today, 'agent_class'),
                'top_models' => $this->topModels($today),
                'top_tools' => $this->topTools($today),
                'recent_failures' => Trace::query()
                    ->where('status', 'failed')
                    ->orderByDesc('started_at')
                    ->limit(5)
                    ->get([
                        'trace_id',
                        'name',
                        'agent_class',
                        'provider',
                        'model',
                        'duration_ms',
                        'started_at',
                    ])
                    ->map(fn (Trace $trace): array => [
                        'trace_id' => $trace->getAttribute('trace_id'),
                        'name' => $trace->getAttribute('name'),
                        'agent_class' => $trace->getAttribute('agent_class'),
                        'provider' => $trace->getAttribute('provider'),
                        'model' => $trace->getAttribute('model'),
                        'duration_ms' => $trace->getAttribute('duration_ms'),
                        'started_at' => $trace->started_at?->toIso8601String(),
                    ])
                    ->values()
                    ->all(),
            ],
        ]);
    }

    /** @param Builder<Trace> $query */
    private function nullableIntegerSum(Builder $query, string $column): ?int
    {
        if ((clone $query)->whereNotNull($column)->doesntExist()) {
            return null;
        }

        return (int) (clone $query)->sum($column);
    }

    /** @param Collection<int, int> $values */
    private function percentile(Collection $values, int $percentile): ?int
    {
        if ($values->isEmpty()) {
            return null;
        }

        $index = max(0, (int) ceil($values->count() * ($percentile / 100)) - 1);

        return $values->get($index);
    }

    /**
     * @return array<int, array<string, int|string|null>>
     */
    private function topTraces(CarbonImmutable $today, string $column): array
    {
        return Trace::query()
            ->where('started_at', '>=', $today)
            ->whereNotNull($column)
            ->selectRaw("{$column} as name, COUNT(*) as trace_count, SUM(total_tokens) as total_tokens")
            ->groupBy($column)
            ->orderByDesc('trace_count')
            ->limit(5)
            ->get()
            ->map(fn (Trace $trace): array => [
                'name' => $trace->getAttribute('name'),
                'trace_count' => (int) $trace->getAttribute('trace_count'),
                'total_tokens' => $trace->getAttribute('total_tokens') === null
                    ? null
                    : (int) $trace->getAttribute('total_tokens'),
            ])
            ->values()
            ->all();
    }

    /**
     * @return array<int, array<string, int|string|null>>
     */
    private function topModels(CarbonImmutable $today): array
    {
        return Trace::query()
            ->where('started_at', '>=', $today)
            ->whereNotNull('model')
            ->selectRaw('provider, model, COUNT(*) as trace_count, SUM(total_tokens) as total_tokens')
            ->groupBy('provider', 'model')
            ->orderByDesc('trace_count')
            ->limit(5)
            ->get()
            ->map(fn (Trace $trace): array => [
                'name' => $trace->getAttribute('model'),
                'provider' => $trace->getAttribute('provider'),
                'trace_count' => (int) $trace->getAttribute('trace_count'),
                'total_tokens' => $trace->getAttribute('total_tokens') === null
                    ? null
                    : (int) $trace->getAttribute('total_tokens'),
            ])
            ->values()
            ->all();
    }

    /**
     * @return array<int, array<string, int|string|null>>
     */
    private function topTools(CarbonImmutable $today): array
    {
        return Span::query()
            ->where('started_at', '>=', $today)
            ->whereIn('type', ['tool', 'mcp'])
            ->selectRaw('name, COUNT(*) as call_count')
            ->groupBy('name')
            ->orderByDesc('call_count')
            ->limit(5)
            ->get()
            ->map(fn (Span $span): array => [
                'name' => $span->getAttribute('name'),
                'call_count' => (int) $span->getAttribute('call_count'),
            ])
            ->values()
            ->all();
    }
}
