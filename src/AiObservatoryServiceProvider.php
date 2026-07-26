<?php

namespace Kanary\AiObservatory;

use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Facades\Gate;
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
use Kanary\AiObservatory\Authorization\Authorization;
use Kanary\AiObservatory\Console\ClearCommand;
use Kanary\AiObservatory\Console\InstallCommand;
use Kanary\AiObservatory\Console\PruneCommand;
use Kanary\AiObservatory\Console\RecoverStaleCommand;
use Kanary\AiObservatory\Console\StatusCommand;
use Kanary\AiObservatory\Context\TraceContext;
use Kanary\AiObservatory\Contracts\CostCalculator;
use Kanary\AiObservatory\Contracts\Recorder;
use Kanary\AiObservatory\Contracts\Redactor;
use Kanary\AiObservatory\Contracts\Sampler;
use Kanary\AiObservatory\Contracts\TraceQueryRepository;
use Kanary\AiObservatory\Contracts\TraceRepository;
use Kanary\AiObservatory\Listeners\CaptureAiSdkEvent;
use Kanary\AiObservatory\Pricing\ConfigCostCalculator;
use Kanary\AiObservatory\Recording\InternalEventSerializer;
use Kanary\AiObservatory\Recording\PersistenceRecorder;
use Kanary\AiObservatory\Recording\RecordingPipeline;
use Kanary\AiObservatory\Redaction\DefaultRedactor;
use Kanary\AiObservatory\Redaction\RedactionManager;
use Kanary\AiObservatory\Repositories\DatabaseTraceQueryRepository;
use Kanary\AiObservatory\Repositories\DatabaseTraceRepository;
use Kanary\AiObservatory\Sampling\ConfigSampler;
use Kanary\AiObservatory\Sampling\SamplingRecorder;
use Kanary\AiObservatory\Support\MigrationPublisher;
use Kanary\AiObservatory\Support\PayloadLimiter;

class AiObservatoryServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->replaceConfigRecursivelyFrom(
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

        $this->app->scoped(TraceContext::class);
        $this->app->singleton(Authorization::class);
        $this->app->singleton(CostCalculator::class, ConfigCostCalculator::class);
        $this->app->singleton(Sampler::class, ConfigSampler::class);
        $this->app->singleton(TraceRepository::class, DatabaseTraceRepository::class);
        $this->app->singleton(TraceQueryRepository::class, DatabaseTraceQueryRepository::class);
        $this->app->singleton(DefaultRedactor::class, fn () => new DefaultRedactor(
            config('ai-observatory.redaction.keys', []),
            config('ai-observatory.redaction.paths', []),
            config('ai-observatory.redaction.replacement', '[REDACTED]'),
        ));
        $this->app->singleton(RedactionManager::class);
        $this->app->alias(RedactionManager::class, Redactor::class);
        $this->app->singleton(PayloadLimiter::class, fn () => new PayloadLimiter(
            (int) config('ai-observatory.payloads.max_bytes', 100_000),
        ));
        $this->app->singleton(InternalEventSerializer::class);
        $this->app->scoped(SamplingRecorder::class);
        $this->app->scoped(PersistenceRecorder::class);
        $this->app->scoped(Recorder::class, RecordingPipeline::class);
    }

    public function boot(): void
    {
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'ai-observatory');
        $this->loadRoutesFrom(__DIR__.'/../routes/web.php');

        if (! Gate::has('viewAiObservatory')) {
            Gate::define(
                'viewAiObservatory',
                fn (mixed $user = null): bool => app()->environment('local'),
            );
        }

        if (config('ai-observatory.enabled')) {
            $this->app->make(Dispatcher::class)->listen('*', function (string $eventName, array $payload): void {
                $event = $payload[0] ?? null;

                if (is_object($event)) {
                    $this->app->make(CaptureAiSdkEvent::class)->handle($event);
                }
            });
        }

        if ($this->app->runningInConsole()) {
            $this->commands([
                InstallCommand::class,
                PruneCommand::class,
                ClearCommand::class,
                RecoverStaleCommand::class,
                StatusCommand::class,
            ]);

            $this->publishes([
                __DIR__.'/../config/ai-observatory.php' => config_path('ai-observatory.php'),
            ], 'ai-observatory-config');

            $this->publishes(
                (new MigrationPublisher)->paths(
                    __DIR__.'/../database/migrations',
                    database_path('migrations'),
                ),
                'ai-observatory-migrations',
            );
        }
    }
}
