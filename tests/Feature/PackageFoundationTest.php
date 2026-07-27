<?php

use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Schema;
use Kanary\AiObservatory\Models\ObservatoryEvent;
use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;

it('loads the package configuration', function () {
    expect(config('ai-observatory.enabled'))->toBeTrue()
        ->and(config('ai-observatory.path'))->toBe('ai-observatory')
        ->and(config('ai-observatory.recording_mode'))->toBe('sync');
});

it('creates the portable trace and span schema', function () {
    $schema = Schema::connection(config('ai-observatory.connection'));

    expect($schema->hasColumns('ai_observatory_traces', [
        'id',
        'trace_id',
        'root_span_id',
        'status',
        'metadata',
    ]))->toBeTrue()
        ->and($schema->hasColumns('ai_observatory_spans', [
            'id',
            'trace_id',
            'span_id',
            'parent_span_id',
            'cache_write_input_tokens',
            'request_payload',
            'response_payload',
        ]))->toBeTrue();
});

it('publishes one idempotent migration set', function () {
    $migrationPath = database_path('migrations');
    $before = glob("{$migrationPath}/*_create_ai_observatory_*_table.php");

    $this->artisan('vendor:publish', [
        '--tag' => 'ai-observatory-migrations',
        '--force' => true,
    ])->assertSuccessful();

    $after = glob("{$migrationPath}/*_create_ai_observatory_*_table.php");
    $upgrades = glob("{$migrationPath}/*_upgrade_ai_observatory_*.php");

    expect($before)->toBeArray()->toHaveCount(3)
        ->and($after)->toBe($before)
        ->and($upgrades)->toBeArray()->toHaveCount(1);
});

it('uses the configured connection for package models', function () {
    expect((new Trace)->getConnectionName())->toBe('testing')
        ->and((new Span)->getConnectionName())->toBe('testing');
});

it('relates traces to their spans by trace id', function () {
    $trace = Trace::query()->create([
        'trace_id' => '018f47a2-4f4e-7d10-9c2f-6f447d7a2001',
        'root_span_id' => '018f47a2-4f4e-7d10-9c2f-6f447d7a2002',
        'name' => 'Test trace',
        'status' => 'running',
        'started_at' => now(),
    ]);

    Span::query()->create([
        'trace_id' => $trace->trace_id,
        'span_id' => $trace->root_span_id,
        'type' => 'agent',
        'name' => 'Test agent',
        'status' => 'running',
        'sequence' => 1,
        'started_at' => now(),
    ]);

    expect($trace->spans)->toHaveCount(1)
        ->and($trace->spans->first()->trace->is($trace))->toBeTrue();
});

it('restricts trace deletion while spans still exist', function () {
    $trace = Trace::query()->create([
        'trace_id' => '018f47a2-4f4e-7d10-9c2f-6f447d7a2003',
        'root_span_id' => '018f47a2-4f4e-7d10-9c2f-6f447d7a2004',
        'name' => 'Disposable trace',
        'status' => 'running',
        'started_at' => now(),
    ]);

    Span::query()->create([
        'trace_id' => $trace->trace_id,
        'span_id' => $trace->root_span_id,
        'type' => 'agent',
        'name' => 'Disposable agent',
        'status' => 'running',
        'sequence' => 1,
        'started_at' => now(),
    ]);

    expect(fn () => $trace->delete())->toThrow(QueryException::class);

    expect(Span::query()->where('trace_id', $trace->trace_id)->exists())->toBeTrue()
        ->and(Trace::query()->where('trace_id', $trace->trace_id)->exists())->toBeTrue();

    Span::query()->where('trace_id', $trace->trace_id)->delete();
    $trace->delete();

    expect(Trace::query()->where('trace_id', $trace->trace_id)->exists())->toBeFalse();
});

it('restricts trace deletion while events still exist', function () {
    $trace = Trace::query()->create([
        'trace_id' => '018f47a2-4f4e-7d10-9c2f-6f447d7a2005',
        'root_span_id' => '018f47a2-4f4e-7d10-9c2f-6f447d7a2006',
        'name' => 'Trace with event',
        'status' => 'running',
        'started_at' => now(),
    ]);

    ObservatoryEvent::query()->create([
        'trace_id' => $trace->trace_id,
        'event_type' => 'stream_started',
        'occurred_at' => now(),
    ]);

    expect(fn () => $trace->delete())->toThrow(QueryException::class);

    ObservatoryEvent::query()->where('trace_id', $trace->trace_id)->delete();
    $trace->delete();

    expect(Trace::query()->where('trace_id', $trace->trace_id)->exists())->toBeFalse();
});
