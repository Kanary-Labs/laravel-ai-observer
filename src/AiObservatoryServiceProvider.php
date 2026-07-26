<?php

namespace Kanary\AiObservatory;

use Illuminate\Support\ServiceProvider;
use Kanary\AiObservatory\Adapters\AgentEventAdapter;
use Kanary\AiObservatory\Adapters\AiSdkEventAdapterRegistry;
use Kanary\AiObservatory\Adapters\AudioEventAdapter;
use Kanary\AiObservatory\Adapters\EmbeddingEventAdapter;
use Kanary\AiObservatory\Adapters\ImageEventAdapter;
use Kanary\AiObservatory\Adapters\ModelEventAdapter;
use Kanary\AiObservatory\Adapters\ProviderEventAdapter;
use Kanary\AiObservatory\Adapters\RerankEventAdapter;
use Kanary\AiObservatory\Adapters\ToolEventAdapter;
use Kanary\AiObservatory\Adapters\TranscriptionEventAdapter;

class AiObservatoryServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/ai-observatory.php',
            'ai-observatory',
        );

        $this->app->singleton(AiSdkEventAdapterRegistry::class, fn ($app) => new AiSdkEventAdapterRegistry(
            $app,
            [
                ModelEventAdapter::class,
                AgentEventAdapter::class,
                ProviderEventAdapter::class,
                ToolEventAdapter::class,
                EmbeddingEventAdapter::class,
                ImageEventAdapter::class,
                AudioEventAdapter::class,
                TranscriptionEventAdapter::class,
                RerankEventAdapter::class,
            ],
        ));
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
