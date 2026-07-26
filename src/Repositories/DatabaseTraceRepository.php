<?php

namespace Kanary\AiObservatory\Repositories;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use Kanary\AiObservatory\Contracts\TraceRepository;
use Kanary\AiObservatory\Models\ObservatoryEvent;
use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;

final class DatabaseTraceRepository implements TraceRepository
{
    public function pruneBefore(CarbonImmutable $cutoff, int $chunkSize = 500): int
    {
        return $this->deleteInChunks(
            fn (): Builder => Trace::query()
                ->where('started_at', '<', $cutoff)
                ->orderBy('started_at')
                ->orderBy('trace_id'),
            $chunkSize,
        );
    }

    public function clear(int $chunkSize = 500): int
    {
        return $this->deleteInChunks(
            fn (): Builder => Trace::query()->orderBy('trace_id'),
            $chunkSize,
        );
    }

    public function recoverStaleBefore(
        CarbonImmutable $cutoff,
        int $chunkSize = 500,
    ): array {
        $chunkSize = max(1, $chunkSize);
        $now = CarbonImmutable::now();
        $recoveredSpans = 0;
        $recoveredTraces = 0;

        do {
            $spanIds = Span::query()
                ->where('status', 'running')
                ->where('started_at', '<', $cutoff)
                ->orderBy('started_at')
                ->orderBy('id')
                ->limit($chunkSize)
                ->pluck('id')
                ->all();

            if ($spanIds === []) {
                break;
            }

            $recoveredSpans += DB::connection(config('ai-observatory.connection'))
                ->transaction(function () use ($spanIds, $now): int {
                    $spans = Span::query()
                        ->whereIn('id', $spanIds)
                        ->where('status', 'running')
                        ->get();

                    foreach ($spans as $span) {
                        $span->fill([
                            'status' => 'cancelled',
                            'ended_at' => $now,
                            'duration_ms' => $span->started_at === null
                                ? null
                                : (int) round($span->started_at->diffInMilliseconds($now, true)),
                            'metadata' => [
                                ...($span->metadata ?? []),
                                'stale_recovery' => [
                                    'recovered_at' => $now->toIso8601String(),
                                    'reason' => 'incomplete_operation',
                                ],
                            ],
                        ])->save();
                    }

                    return $spans->count();
                });
        } while (true);

        do {
            $traceIds = Trace::query()
                ->where('status', 'running')
                ->where('started_at', '<', $cutoff)
                ->orderBy('started_at')
                ->orderBy('trace_id')
                ->limit($chunkSize)
                ->pluck('trace_id')
                ->all();

            if ($traceIds === []) {
                break;
            }

            $recoveredTraces += DB::connection(config('ai-observatory.connection'))
                ->transaction(function () use ($traceIds, $now): int {
                    $traces = Trace::query()
                        ->whereIn('trace_id', $traceIds)
                        ->where('status', 'running')
                        ->get();

                    foreach ($traces as $trace) {
                        $trace->fill([
                            'status' => 'cancelled',
                            'ended_at' => $now,
                            'duration_ms' => $trace->started_at === null
                                ? null
                                : (int) round($trace->started_at->diffInMilliseconds($now, true)),
                            'metadata' => [
                                ...($trace->metadata ?? []),
                                'stale_recovery' => [
                                    'recovered_at' => $now->toIso8601String(),
                                    'reason' => 'incomplete_trace',
                                ],
                            ],
                        ])->save();
                    }

                    return $traces->count();
                });
        } while (true);

        return [
            'traces' => $recoveredTraces,
            'spans' => $recoveredSpans,
        ];
    }

    /**
     * @param  callable(): Builder<Trace>  $query
     */
    private function deleteInChunks(callable $query, int $chunkSize): int
    {
        $chunkSize = max(1, $chunkSize);
        $deleted = 0;

        do {
            $traceIds = $query()
                ->limit($chunkSize)
                ->pluck('trace_id')
                ->map(fn (mixed $traceId): string => (string) $traceId)
                ->all();

            if ($traceIds === []) {
                break;
            }

            $deleted += DB::connection(config('ai-observatory.connection'))
                ->transaction(function () use ($traceIds): int {
                    ObservatoryEvent::query()->whereIn('trace_id', $traceIds)->delete();
                    Span::query()->whereIn('trace_id', $traceIds)->delete();

                    return Trace::query()->whereIn('trace_id', $traceIds)->delete();
                });
        } while (true);

        return $deleted;
    }
}
