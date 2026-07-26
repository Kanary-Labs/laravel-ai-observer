<?php

namespace Kanary\AiObservatory\Console;

use Illuminate\Console\Command;
use Kanary\AiObservatory\Contracts\TraceRepository;

final class ClearCommand extends Command
{
    protected $signature = 'ai-observatory:clear
        {--force : Delete all traces without confirmation}
        {--chunk=500 : Number of traces deleted per transaction}';

    protected $description = 'Delete all AI Observatory traces';

    public function handle(TraceRepository $traces): int
    {
        if (
            ! $this->option('force')
            && ! $this->laravel->environment('testing')
            && ! $this->confirm('Delete every AI Observatory trace?')
        ) {
            $this->components->warn('No traces were deleted.');

            return self::SUCCESS;
        }

        $chunkSize = filter_var($this->option('chunk'), FILTER_VALIDATE_INT, [
            'options' => ['min_range' => 1],
        ]);

        if ($chunkSize === false) {
            $this->components->error('Chunk must be greater than zero.');

            return self::FAILURE;
        }

        $deleted = $traces->clear((int) $chunkSize);

        $this->components->info("Cleared {$deleted} trace(s).");

        return self::SUCCESS;
    }
}
