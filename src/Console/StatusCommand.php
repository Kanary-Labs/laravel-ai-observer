<?php

namespace Kanary\AiObservatory\Console;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Schema;
use Kanary\AiObservatory\Authorization\Authorization;
use Kanary\AiObservatory\Support\AiSdkCompatibility;
use Throwable;

final class StatusCommand extends Command
{
    protected $signature = 'ai-observatory:status';

    protected $description = 'Display the AI Observatory installation status';

    public function handle(Authorization $authorization): int
    {
        $connection = config('ai-observatory.connection')
            ?? config('database.default');
        $compatibility = AiSdkCompatibility::current();
        $databaseStatus = 'available';

        try {
            $schema = Schema::connection(config('ai-observatory.connection'));
            $installed = collect([
                'ai_observatory_traces',
                'ai_observatory_spans',
                'ai_observatory_events',
            ])->every(fn (string $table): bool => $schema->hasTable($table));
        } catch (Throwable) {
            $installed = false;
            $databaseStatus = 'unavailable';
        }

        $this->table(['Setting', 'Value'], [
            ['Enabled', config('ai-observatory.enabled') ? 'yes' : 'no'],
            ['Installed', $installed ? 'yes' : 'no'],
            ['Laravel AI SDK', $compatibility->version ?? 'not installed'],
            ['Compatibility', $compatibility->status()],
            ['Adapter', $compatibility->adapter() ?? 'none'],
            ['Database connection', (string) $connection],
            ['Database status', $databaseStatus],
            ['Recording mode', (string) config('ai-observatory.recording_mode')],
            ['Queue connection', (string) (config('ai-observatory.queue.connection') ?? 'default')],
            ['Queue name', (string) config('ai-observatory.queue.name')],
            ['Retention', config('ai-observatory.retention.days').' day(s)'],
            ['Stale recovery', config('ai-observatory.recovery.stale_after_minutes').' minute(s)'],
            ['Dashboard path', '/'.trim((string) config('ai-observatory.path'), '/')],
            ['Authorization', $authorization->description()],
        ]);

        return self::SUCCESS;
    }
}
