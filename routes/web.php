<?php

use Illuminate\Support\Facades\Route;
use Kanary\AiObservatory\Http\Controllers\AssetController;
use Kanary\AiObservatory\Http\Controllers\DashboardController;
use Kanary\AiObservatory\Http\Controllers\OverviewController;
use Kanary\AiObservatory\Http\Controllers\TraceController;
use Kanary\AiObservatory\Http\Middleware\Authorize;

$middleware = config('ai-observatory.middleware', ['web']);
$middleware = is_array($middleware) ? $middleware : ['web'];
$path = trim((string) config('ai-observatory.path', 'ai-observatory'), '/');

Route::prefix($path)
    ->middleware([...$middleware, Authorize::class])
    ->name('ai-observatory.')
    ->group(function (): void {
        Route::get('/assets/{asset}', AssetController::class)
            ->where('asset', 'ai-observatory\\.(css|js)')
            ->name('assets');

        Route::get('/api/traces', [TraceController::class, 'index'])
            ->name('api.traces.index');
        Route::get('/api/traces/{traceId}', [TraceController::class, 'show'])
            ->whereUuid('traceId')
            ->name('api.traces.show');
        Route::get('/api/overview', OverviewController::class)
            ->name('api.overview');

        Route::get('/', [DashboardController::class, 'redirect'])
            ->name('home');
        Route::get('/overview', DashboardController::class)
            ->name('overview');
        Route::get('/traces/{traceId?}', DashboardController::class)
            ->whereUuid('traceId')
            ->name('traces');
    });
