<?php

namespace Kanary\AiObservatory;

use Illuminate\Contracts\Events\Dispatcher;
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
use Kanary\AiObservatory\Context\TraceContext;
use Kanary\AiObservatory\Contracts\Recorder;
use Kanary\AiObservatory\Listeners\CaptureAiSdkEvent;
use Kanary\AiObservatory\Recording\DatabaseRecorder;

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

        $this->app->singleton(TraceContext::class);
        $this->app->singleton(Recorder::class, DatabaseRecorder::class);
    }

    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        if (config('ai-observatory.enabled')) {
            $this->app->make(Dispatcher::class)->listen('*', function (string $eventName, array $payload): void {
                $event = $payload[0] ?? null;

                if (is_object($event)) {
                    $this->app->make(CaptureAiSdkEvent::class)->handle($event);
                }
            });
        }

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
