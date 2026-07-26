<?php

namespace Kanary\AiObservatory\Console;

use Carbon\CarbonImmutable;
use Illuminate\Console\Command;
use Kanary\AiObservatory\Contracts\TraceRepository;

final class RecoverStaleCommand extends Command
{
    protected $signature = 'ai-observatory:recover-stale
        {--minutes= : Mark running operations older than this many minutes as cancelled}
        {--chunk=500 : Number of records recovered per transaction}';

    protected $description = 'Recover stale running AI Observatory traces and spans';

    public function handle(TraceRepository $traces): int
    {
        $minutes = $this->positiveInteger(
            $this->option('minutes')
                ?? config('ai-observatory.recovery.stale_after_minutes', 15),
        );
        $chunkSize = $this->positiveInteger($this->option('chunk'));

        if ($minutes === null || $chunkSize === null) {
            $this->components->error('Minutes and chunk must be greater than zero.');

            return self::FAILURE;
        }

        $recovered = $traces->recoverStaleBefore(
            CarbonImmutable::now()->subMinutes($minutes),
            $chunkSize,
        );

        $this->components->info(
            "Recovered {$recovered['traces']} trace(s) and {$recovered['spans']} span(s).",
        );

        return self::SUCCESS;
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
