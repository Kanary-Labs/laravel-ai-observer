<?php

use Illuminate\Support\Facades\Schema;
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
            'request_payload',
            'response_payload',
        ]))->toBeTrue();
});

it('relates traces to their spans by trace id', function () {
    $trace = Trace::query()->create([
        'trace_id' => '01J00000000000000000000001',
        'root_span_id' => '01J00000000000000000000002',
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

it('cascades span deletion when a trace is removed', function () {
    $trace = Trace::query()->create([
        'trace_id' => '01J00000000000000000000003',
        'root_span_id' => '01J00000000000000000000004',
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

    $trace->delete();

    expect(Span::query()->where('trace_id', $trace->trace_id)->exists())->toBeFalse();
});
