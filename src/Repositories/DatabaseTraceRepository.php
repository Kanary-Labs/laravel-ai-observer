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
