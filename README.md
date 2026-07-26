# AI Observatory

AI Observatory is an independent, open-source observability and debugging
package for applications using the official Laravel AI SDK.

> AI prompts and responses can contain sensitive information. Review capture
> and redaction settings before enabling this package in production.

The package is under active development and is not ready for production use.

## Requirements

- PHP 8.3 or newer
- Laravel 12 or 13
- `laravel/ai` 0.10.x
- MySQL 8+, PostgreSQL 14+, or SQLite

## Installation

```bash
composer require kanary/laravel-ai-observatory --dev
php artisan ai-observatory:install
php artisan migrate
```

The install command publishes one idempotent, ordered migration set. Re-running
the command does not create duplicate migrations.

## Trace dashboard

Open `/ai-observatory/traces` to search and filter recorded AI operations. The
trace list includes status, agent, provider/model, tool count, token usage,
estimated cost, duration, user, tenant, and feature context.

Trace details display an ordered parent-child timeline. Select a span to inspect
its request, response, tool data, usage, metadata, and error information. Stored
payloads are redacted and size-limited again before they are returned to the
dashboard.

The React dashboard and its compiled assets are served directly by the package;
host applications do not need Node.js or an npm build step. Change the route
prefix with:

```dotenv
AI_OBSERVATORY_PATH=ai-observatory
```

## Production authorization

Recording and dashboard access default to local environments. Production
recording must be enabled explicitly:

```dotenv
AI_OBSERVATORY_ENABLED=true
```

Authorize future Observatory routes with the `viewAiObservatory` gate or a
request callback:

```php
use Illuminate\Http\Request;
use Kanary\AiObservatory\AiObservatory;

AiObservatory::auth(
    fn (Request $request): bool => $request->user()?->isAdmin() === true,
);
```

## Sampling

Sampling is decided once at trace start, and every child span follows that
decision. Unsampled traces are buffered after redaction and payload limiting
when failed- or slow-trace promotion is enabled.

```dotenv
AI_OBSERVATORY_SAMPLE_RATE=0.1
AI_OBSERVATORY_ALWAYS_RECORD_FAILURES=true
AI_OBSERVATORY_ALWAYS_RECORD_SLOW_TRACES_MS=10000
```

An interrupted unsampled trace that never emits a completion event cannot be
promoted. Scoped recorder state prevents that buffer from leaking into later
Octane requests or queue jobs.

## Estimated costs

Prices are configured locally and are never fetched automatically:

```php
'pricing' => [
    '_meta' => [
        'version' => 'internal-2026-07',
        'effective_date' => '2026-07-01',
    ],
    'provider-name' => [
        'model-name' => [
            'input_per_million' => 10,
            'output_per_million' => 30,
            'cached_input_per_million' => 1,
            'currency' => 'USD',
        ],
    ],
],
```

Unknown or incomplete prices produce `null`, never a zero-cost estimate. Trace
totals are calculated only when every model span is priced in the same currency.

## Recording modes

Synchronous recording is the local default. Production applications can defer
database work until after the response or send one normalized event batch to a
queue:

```dotenv
AI_OBSERVATORY_RECORDING_MODE=queue
AI_OBSERVATORY_QUEUE_CONNECTION=redis
AI_OBSERVATORY_QUEUE=observatory
```

Supported modes are `sync`, `after_response`, and `queue`. Prompt, response, and
tool payloads are redacted and size-limited before deferred or queued
persistence. Queue payloads contain package DTO arrays, never Laravel AI SDK
event objects. Queue dispatch and persistence failures do not affect the host
AI response.

## Queue context

Laravel Context carries Observatory correlation data in queue payloads. Add the
provided middleware to application jobs that invoke AI:

```php
use Kanary\AiObservatory\Queue\PropagateAiTraceContext;

public function middleware(): array
{
    return [
        new PropagateAiTraceContext,
    ];
}
```

Add business context around dispatch or execution:

```php
AiObservatory::withContext([
    'feature' => 'ticket-reply',
    'organization_id' => $organization->getKey(),
], fn () => SupportAgent::make()->prompt($message));
```

The middleware restores the context for the job and clears it afterward so
long-lived workers do not leak correlation data.

## Streaming

Completed streams record request start, first-token, and response-completion
timestamps plus time to first token. Stream text is buffered into the model
span; individual token records are not created.

When a client disconnects before the Laravel AI SDK emits `AgentStreamed`, the
running trace remains incomplete. Recover stale operations with:

```bash
php artisan ai-observatory:recover-stale
php artisan ai-observatory:recover-stale --minutes=30
```

Recovered traces and spans are marked `cancelled` and retain recovery metadata.

## Maintenance

```bash
php artisan ai-observatory:status
php artisan ai-observatory:prune
php artisan ai-observatory:prune --days=30
php artisan ai-observatory:recover-stale
php artisan ai-observatory:clear
```

Prune and clear delete events, spans, and traces explicitly in bounded
transactions. Foreign keys restrict accidental parent deletion.

## SDK compatibility

| Laravel AI SDK | Status | Adapter |
| --- | --- | --- |
| 0.10.1 | Source verified and contract tested | `LaravelAiSdkV010Adapter` |

See the [verified SDK event inventory](docs/sdk-events-v0.10.1.md).
