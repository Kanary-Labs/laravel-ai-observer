<?php

use Carbon\CarbonImmutable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Kanary\AiObservatory\AiObservatory;
use Kanary\AiObservatory\Authorization\Authorization;
use Kanary\AiObservatory\Http\Middleware\Authorize;
use Kanary\AiObservatory\Models\ObservatoryEvent;
use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;
use Kanary\AiObservatory\Support\AiSdkCompatibility;

it('authorizes local access and denies production access by default', function () {
    $authorization = app(Authorization::class);
    $request = Request::create('/ai-observatory');

    app()->instance('env', 'local');
    expect($authorization->check($request))->toBeTrue();

    app()->instance('env', 'production');
    expect($authorization->check($request))->toBeFalse();
});

it('supports a custom authorization callback', function () {
    app()->instance('env', 'production');
    AiObservatory::auth(
        fn (Request $request): bool => $request->headers->get('X-Observatory') === 'allowed',
    );

    expect(app(Authorization::class)->check(
        Request::create('/ai-observatory', server: ['HTTP_X_OBSERVATORY' => 'allowed']),
    ))->toBeTrue()
        ->and(app(Authorization::class)->check(
            Request::create('/ai-observatory'),
        ))->toBeFalse();
});

it('protects Observatory HTTP routes with the authorization middleware', function () {
    Route::middleware(Authorize::class)
        ->get('/_ai-observatory-authorization-test', fn () => response('allowed'));
    app()->instance('env', 'production');

    $this->get('/_ai-observatory-authorization-test')->assertForbidden();

    AiObservatory::auth(fn (Request $request): bool => true);

    $this->get('/_ai-observatory-authorization-test')
        ->assertOk()
        ->assertSeeText('allowed');
});

it('installs configuration and one migration set idempotently', function () {
    $this->artisan('ai-observatory:install', ['--force' => true])
        ->expectsOutputToContain('AI Observatory is installed')
        ->assertSuccessful();
    $this->artisan('ai-observatory:install')
        ->assertSuccessful();

    expect(config_path('ai-observatory.php'))->toBeFile()
        ->and(glob(database_path('migrations/*_create_ai_observatory_*_table.php')))
        ->toBeArray()
        ->toHaveCount(3)
        ->and(glob(database_path('migrations/*_upgrade_ai_observatory_*.php')))
        ->toBeArray()
        ->toHaveCount(1);
});

it('prunes expired traces child-first in bounded chunks', function () {
    $oldTraceId = createStoredTrace(now()->subDays(30)->toImmutable());
    $newTraceId = createStoredTrace(now()->toImmutable());

    $this->artisan('ai-observatory:prune', ['--days' => 14, '--chunk' => 1])
        ->expectsOutputToContain('Pruned 1 trace(s).')
        ->assertSuccessful();

    expect(Trace::query()->pluck('trace_id')->all())->toBe([$newTraceId])
        ->and(Span::query()->where('trace_id', $oldTraceId)->exists())->toBeFalse()
        ->and(ObservatoryEvent::query()->where('trace_id', $oldTraceId)->exists())->toBeFalse()
        ->and(Span::query()->where('trace_id', $newTraceId)->exists())->toBeTrue();
});

it('clears all traces child-first in bounded chunks', function () {
    createStoredTrace(now()->subDay()->toImmutable());
    createStoredTrace(now()->toImmutable());

    $this->artisan('ai-observatory:clear', ['--force' => true, '--chunk' => 1])
        ->expectsOutputToContain('Cleared 2 trace(s).')
        ->assertSuccessful();

    expect(Trace::query()->count())->toBe(0)
        ->and(Span::query()->count())->toBe(0)
        ->and(ObservatoryEvent::query()->count())->toBe(0);
});

it('requires confirmation before clearing outside tests', function () {
    createStoredTrace(now()->toImmutable());
    app()->instance('env', 'production');

    $this->artisan('ai-observatory:clear')
        ->expectsConfirmation('Delete every AI Observatory trace?', 'no')
        ->expectsOutputToContain('No traces were deleted.')
        ->assertSuccessful();

    expect(Trace::query()->count())->toBe(1);
});

it('reports package installation and SDK compatibility status', function () {
    $this->artisan('ai-observatory:status')
        ->expectsOutputToContain('Installed')
        ->expectsOutputToContain('tested')
        ->expectsOutputToContain(AiSdkCompatibility::current()->adapter())
        ->assertSuccessful();
});

function createStoredTrace(CarbonImmutable $startedAt): string
{
    $traceId = (string) Str::uuid7();
    $spanId = (string) Str::uuid7();

    Trace::query()->create([
        'trace_id' => $traceId,
        'root_span_id' => $spanId,
        'name' => 'Stored trace',
        'status' => 'successful',
        'started_at' => $startedAt,
        'ended_at' => $startedAt->addSecond(),
    ]);
    Span::query()->create([
        'trace_id' => $traceId,
        'span_id' => $spanId,
        'type' => 'agent',
        'name' => 'Stored span',
        'status' => 'successful',
        'sequence' => 1,
        'started_at' => $startedAt,
        'ended_at' => $startedAt->addSecond(),
    ]);
    ObservatoryEvent::query()->create([
        'trace_id' => $traceId,
        'span_id' => $spanId,
        'event_type' => 'stored',
        'occurred_at' => $startedAt,
    ]);

    return $traceId;
}
