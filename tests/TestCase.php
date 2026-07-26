<?php

namespace Kanary\AiObservatory\Tests;

use Kanary\AiObservatory\AiObservatoryServiceProvider;
use Laravel\Ai\AiServiceProvider;
use Orchestra\Testbench\Concerns\InteractsWithPublishedFiles;
use Orchestra\Testbench\TestCase as Orchestra;
use Workbench\App\Providers\WorkbenchServiceProvider;

abstract class TestCase extends Orchestra
{
    use InteractsWithPublishedFiles;

    protected function setUp(): void
    {
        parent::setUp();

        $this->artisan('vendor:publish', [
            '--tag' => 'ai-observatory-migrations',
            '--force' => true,
        ])->assertSuccessful();

        $this->artisan('migrate:fresh', ['--database' => 'testing'])->run();
    }

    protected function getPackageProviders($app): array
    {
        return [
            AiServiceProvider::class,
            AiObservatoryServiceProvider::class,
            WorkbenchServiceProvider::class,
        ];
    }

    protected function defineEnvironment($app): void
    {
        $driver = env('AI_OBSERVATORY_TEST_DB', 'sqlite');

        $app['config']->set('database.default', 'testing');
        $app['config']->set('app.key', 'base64:'.base64_encode(str_repeat('a', 32)));
        $app['config']->set('ai-observatory.enabled', true);
        $app['config']->set('ai-observatory.connection', 'testing');
        $app['config']->set('database.connections.testing', match ($driver) {
            'mysql' => [
                'driver' => 'mysql',
                'host' => env('DB_HOST', '127.0.0.1'),
                'port' => env('DB_PORT', '3306'),
                'database' => env('DB_DATABASE', 'ai_observatory'),
                'username' => env('DB_USERNAME', 'root'),
                'password' => env('DB_PASSWORD', ''),
                'charset' => 'utf8mb4',
                'collation' => 'utf8mb4_unicode_ci',
                'prefix' => '',
                'strict' => true,
            ],
            'pgsql' => [
                'driver' => 'pgsql',
                'host' => env('DB_HOST', '127.0.0.1'),
                'port' => env('DB_PORT', '5432'),
                'database' => env('DB_DATABASE', 'ai_observatory'),
                'username' => env('DB_USERNAME', 'postgres'),
                'password' => env('DB_PASSWORD', 'postgres'),
                'charset' => 'utf8',
                'prefix' => '',
                'schema' => 'public',
            ],
            default => [
                'driver' => 'sqlite',
                'database' => ':memory:',
                'prefix' => '',
                'foreign_key_constraints' => true,
            ],
        });
    }
}
