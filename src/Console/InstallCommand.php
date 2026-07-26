<?php

namespace Kanary\AiObservatory\Console;

use Illuminate\Console\Command;

final class InstallCommand extends Command
{
    protected $signature = 'ai-observatory:install
        {--force : Overwrite an existing published configuration file}';

    protected $description = 'Publish the AI Observatory configuration and migrations';

    public function handle(): int
    {
        $configOptions = ['--tag' => 'ai-observatory-config'];

        if ($this->option('force')) {
            $configOptions['--force'] = true;
        }

        $this->call('vendor:publish', $configOptions);
        $this->call('vendor:publish', ['--tag' => 'ai-observatory-migrations']);

        $this->components->info('AI Observatory is installed. Run php artisan migrate.');

        return self::SUCCESS;
    }
}
