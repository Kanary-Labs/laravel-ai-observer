<?php

namespace Kanary\AiObservatory;

use Illuminate\Support\ServiceProvider;

class AiObservatoryServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/ai-observatory.php',
            'ai-observatory',
        );
    }

    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/ai-observatory.php' => config_path('ai-observatory.php'),
            ], 'ai-observatory-config');

            $this->publishesMigrations([
                __DIR__.'/../database/migrations' => database_path('migrations'),
            ], 'ai-observatory-migrations');
        }
    }
}
