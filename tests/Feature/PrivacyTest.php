<?php

use Kanary\AiObservatory\AiObservatory;
use Kanary\AiObservatory\Contracts\Recorder;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\ThrowableData;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Enums\TraceStatus;
use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;
use Kanary\AiObservatory\Redaction\DefaultRedactor;
use Kanary\AiObservatory\Redaction\RedactionManager;
use Kanary\AiObservatory\Support\PayloadLimiter;

it('redacts sensitive keys recursively and case insensitively', function () {
    $redactor = new DefaultRedactor(['authorization', 'password'], []);

    expect($redactor->redact([
        'headers' => ['Authorization' => 'Bearer secret'],
        'user' => ['password' => 'secret', 'name' => 'Taylor'],
    ]))->toBe([
        'headers' => ['Authorization' => '[REDACTED]'],
        'user' => ['password' => '[REDACTED]', 'name' => 'Taylor'],
    ]);
});

it('redacts configured dot paths with wildcards', function () {
    $redactor = new DefaultRedactor([], [
        'request.tools.*.arguments.pin',
    ]);

    expect($redactor->redact([
        'request' => [
            'tools' => [
                ['arguments' => ['pin' => '1234', 'city' => 'Amman']],
                ['arguments' => ['pin' => '5678']],
            ],
        ],
    ]))->toBe([
        'request' => [
            'tools' => [
                ['arguments' => ['pin' => '[REDACTED]', 'city' => 'Amman']],
                ['arguments' => ['pin' => '[REDACTED]']],
            ],
        ],
    ]);
});

it('replaces oversized payloads with truncation metadata', function () {
    $limited = (new PayloadLimiter(20))->limit(['text' => str_repeat('x', 100)]);

    expect($limited['_truncated'])->toBeTrue()
        ->and($limited['_original_bytes'])->toBeGreaterThan(100);
});

it('runs custom redactors after default redaction', function () {
    AiObservatory::redactUsing(function (mixed $payload): mixed {
        if (is_array($payload)) {
            $payload['custom'] = '[MASKED]';
        }

        return $payload;
    });

    expect(app(RedactionManager::class)->redact(['custom' => 'secret']))
        ->toBe(['custom' => '[MASKED]']);
});

it('redacts and limits payloads before database persistence', function () {
    config()->set('ai-observatory.payloads.max_bytes', 60);
    config()->set('ai-observatory.redaction.paths', ['request.arguments.pin']);
    app()->forgetInstance(Recorder::class);
    app()->forgetInstance(RedactionManager::class);
    app()->forgetInstance(DefaultRedactor::class);
    app()->forgetInstance(PayloadLimiter::class);

    $recorder = app(Recorder::class);
    $traceId = '018f47a2-4f4e-7d10-9c2f-6f447d7a3001';
    $spanId = '018f47a2-4f4e-7d10-9c2f-6f447d7a3002';

    $recorder->record(new TraceStarted(
        $traceId,
        $spanId,
        'Privacy',
        now()->toImmutable(),
    ));
    $recorder->record(new SpanStarted(
        $traceId,
        $spanId,
        null,
        SpanType::Tool,
        'Secret tool',
        now()->toImmutable(),
        ['arguments' => ['pin' => '1234', 'large' => str_repeat('x', 100)]],
    ));
    $recorder->record(new SpanFinished(
        $traceId,
        $spanId,
        now()->toImmutable(),
        SpanStatus::Successful,
    ));

    $span = Span::query()->where('span_id', $spanId)->sole();

    expect($span->request_payload)->toBe([
        '_truncated' => true,
        '_original_bytes' => $span->request_payload['_original_bytes'],
    ]);
});

it('redacts metadata context and errors before database persistence', function () {
    config()->set('ai-observatory.capture.stack_traces', false);
    config()->set('ai-observatory.redaction.paths', ['error.message']);
    app()->forgetInstance(Recorder::class);
    app()->forgetInstance(RedactionManager::class);
    app()->forgetInstance(DefaultRedactor::class);

    AiObservatory::tag('api_key', 'context-secret');

    $recorder = app(Recorder::class);
    $traceId = '018f47a2-4f4e-7d10-9c2f-6f447d7a3011';
    $spanId = '018f47a2-4f4e-7d10-9c2f-6f447d7a3012';
    $now = now()->toImmutable();

    $recorder->record(new TraceStarted(
        $traceId,
        $spanId,
        'Private metadata',
        $now,
        ['authorization' => 'Bearer trace-secret'],
    ));
    $recorder->record(new SpanStarted(
        $traceId,
        $spanId,
        null,
        SpanType::Internal,
        'Private span',
        $now,
        attributes: ['client_secret' => 'span-secret'],
    ));
    $recorder->record(new SpanFinished(
        $traceId,
        $spanId,
        $now->addSecond(),
        SpanStatus::Failed,
        error: new ThrowableData(
            RuntimeException::class,
            'Error contained a credential',
            'Sensitive stack trace',
        ),
    ));
    $recorder->record(new TraceFinished(
        $traceId,
        $now->addSecond(),
        TraceStatus::Failed,
    ));

    $trace = Trace::query()->sole();
    $span = Span::query()->sole();

    expect($trace->metadata['authorization'])->toBe('[REDACTED]')
        ->and($trace->tags['api_key'])->toBe('[REDACTED]')
        ->and($span->metadata['client_secret'])->toBe('[REDACTED]')
        ->and($span->error_message)->toBe('[REDACTED]')
        ->and($span->error_stack)->toBeNull();
});

it('normalizes object payloads before redacting sensitive keys', function () {
    $recorder = app(Recorder::class);
    $traceId = '018f47a2-4f4e-7d10-9c2f-6f447d7a3021';
    $spanId = '018f47a2-4f4e-7d10-9c2f-6f447d7a3022';
    $now = now()->toImmutable();

    $recorder->record(new TraceStarted($traceId, $spanId, 'Object redaction', $now));
    $recorder->record(new SpanStarted(
        $traceId,
        $spanId,
        null,
        SpanType::Tool,
        'DTO tool',
        $now,
    ));
    $recorder->record(new SpanFinished(
        $traceId,
        $spanId,
        $now->addSecond(),
        SpanStatus::Successful,
        response: [
            'result' => (object) [
                'api_key' => 'sk-live-secret',
                'note' => 'safe',
            ],
        ],
    ));

    expect(Span::query()->where('span_id', $spanId)->sole()->response_payload)
        ->toMatchArray([
            'result' => [
                'api_key' => '[REDACTED]',
                'note' => 'safe',
            ],
        ]);
});

it('substitutes invalid UTF-8 without dropping the recorded span', function () {
    $recorder = app(Recorder::class);
    $traceId = '018f47a2-4f4e-7d10-9c2f-6f447d7a3031';
    $spanId = '018f47a2-4f4e-7d10-9c2f-6f447d7a3032';
    $now = now()->toImmutable();

    $recorder->record(new TraceStarted($traceId, $spanId, 'Invalid UTF-8', $now));
    $recorder->record(new SpanStarted(
        $traceId,
        $spanId,
        null,
        SpanType::Model,
        'Streamed response',
        $now,
    ));
    $recorder->record(new SpanFinished(
        $traceId,
        $spanId,
        $now->addSecond(),
        SpanStatus::Successful,
        response: ['text' => "partial \xC3\x28 response"],
    ));

    $span = Span::query()->where('span_id', $spanId)->sole();

    expect($span->status)->toBe('successful')
        ->and($span->response_payload['text'])->toContain("\u{FFFD}");
});

it('stores provider error messages up to the configured payload limit', function () {
    $recorder = app(Recorder::class);
    $traceId = '018f47a2-4f4e-7d10-9c2f-6f447d7a3041';
    $spanId = '018f47a2-4f4e-7d10-9c2f-6f447d7a3042';
    $now = now()->toImmutable();
    $message = str_repeat('provider-error-', 5_500);

    $recorder->record(new TraceStarted($traceId, $spanId, 'Large error', $now));
    $recorder->record(new SpanStarted(
        $traceId,
        $spanId,
        null,
        SpanType::Model,
        'Failed provider call',
        $now,
    ));
    $recorder->record(new SpanFinished(
        $traceId,
        $spanId,
        $now->addSecond(),
        SpanStatus::Failed,
        error: new ThrowableData(RuntimeException::class, $message),
    ));

    $span = Span::query()->where('span_id', $spanId)->sole();

    expect($span->status)->toBe('failed')
        ->and($span->error_message)->toBe($message)
        ->and(strlen($span->error_message))->toBeGreaterThan(65_535);
});
