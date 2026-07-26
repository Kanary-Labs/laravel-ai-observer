<?php

namespace Kanary\AiObservatory\Console;

use Carbon\CarbonImmutable;
use Illuminate\Console\Command;
use Kanary\AiObservatory\Contracts\TraceRepository;

final class PruneCommand extends Command
{
    protected $signature = 'ai-observatory:prune
        {--days= : Delete traces older than this many days}
        {--chunk=500 : Number of traces deleted per transaction}';

    protected $description = 'Delete expired AI Observatory traces';

    public function handle(TraceRepository $traces): int
    {
        $days = $this->nonNegativeInteger(
            $this->option('days') ?? config('ai-observatory.retention.days', 14),
        );
        $chunkSize = $this->positiveInteger($this->option('chunk'));

        if ($days === null || $chunkSize === null) {
            $this->components->error('Days must be zero or greater and chunk must be greater than zero.');

            return self::FAILURE;
        }

        $deleted = $traces->pruneBefore(
            CarbonImmutable::now()->subDays($days),
            $chunkSize,
        );

        $this->components->info("Pruned {$deleted} trace(s).");

        return self::SUCCESS;
    }

    private function nonNegativeInteger(mixed $value): ?int
    {
        return filter_var($value, FILTER_VALIDATE_INT, [
            'options' => ['min_range' => 0],
        ]) === false
            ? null
            : (int) $value;
    }

    private function positiveInteger(mixed $value): ?int
    {
        return filter_var($value, FILTER_VALIDATE_INT, [
            'options' => ['min_range' => 1],
        ]) === false
            ? null
            : (int) $value;
    }
}
