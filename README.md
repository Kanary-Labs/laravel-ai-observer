# AI Observatory

AI Observatory is an independent, open-source observability and debugging
package for applications using the official Laravel AI SDK.

> AI prompts and responses can contain sensitive information. Review capture
> and redaction settings before enabling this package in production.

Version `1.0.0` is the first stable release. AI Observatory follows semantic
versioning for its documented public APIs while keeping Laravel AI SDK
compatibility isolated behind source-verified adapters.

## Requirements

- PHP 8.3 or newer
- Laravel 12 or 13
- `laravel/ai` 0.10.x
- MySQL 8+, PostgreSQL 14+, or SQLite

## Versioning and stability

The documented facade methods, extension contracts, configuration keys,
Artisan commands, and stored trace schema are covered by the `1.x` backwards
compatibility commitment. Breaking changes to those surfaces require a new
major release.

The Laravel AI SDK remains pre-1.0. Adapter internals may change as the SDK
evolves, but each supported SDK range is source verified and contract tested.
Untested or unsupported SDK versions are reported explicitly by
`ai-observatory:status`.

## Documentation

Read the
[Laravel AI Observatory documentation](https://kanarylabs.com/docs/laravel-ai-observatory/).
It covers installation, basic usage, trace concepts, privacy, recording modes,
dashboard workflows, advanced extensions, and complete configuration and
command references. The package-owned Markdown source is available in
[docs](docs/_index.md).

## Installation

```bash
composer require kanary/laravel-ai-observatory --dev
php artisan ai-observatory:install
php artisan migrate
```

The install command publishes one idempotent, ordered migration set. Re-running
the command does not create duplicate migrations.

The package uses its own tables and does not depend on Laravel Telescope
internals. Foreign keys use restrictive deletion rules; maintenance commands
delete children explicitly in bounded transactions.

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
            'cache_write_input_per_million' => 12.5,
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
event objects. Batches are compressed before dispatch. If one still exceeds
the safe queue-payload limit, the deferred callback persists it locally instead
of silently dropping it. Queue failures do not affect the host AI response.

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
    'user' => auth()->user(),
    'tenant' => $organization,
], fn () => SupportAgent::make()->prompt($message));
```

You may also set correlation fields directly with
`AiObservatory::user($user)`, `AiObservatory::tenant($organization)`, and
`AiObservatory::feature('ticket-reply')`. Model identities are normalized into
the indexed user and tenant columns used by dashboard filters.

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

## Privacy and redaction

Sensitive keys are masked recursively, explicit dot paths support wildcards,
and oversized payloads are replaced with truncation metadata. Embedding vectors
are not captured by default.

```php
use Kanary\AiObservatory\AiObservatory;

AiObservatory::redactUsing(function (mixed $payload): mixed {
    // Apply application-specific masking after the built-in redactor.
    return $payload;
});
```

Review `capture`, `redaction`, and `payloads` in the published
`config/ai-observatory.php` before enabling recording outside local
environments.

## Configuration

The published configuration controls enablement, dashboard path, database
connection, recording mode, queue, capture switches, payload limits, redaction,
sampling, retention, recovery, middleware, and the local pricing catalog.
Environment variables cover the common deployment settings; use the config
file for structured redaction paths and model prices.

## Custom SDK adapters

SDK event objects are never persisted directly. A custom adapter can translate
an application or future SDK event into the package's stable internal DTOs:

```php
use Kanary\AiObservatory\AiObservatory;

AiObservatory::registerEventAdapter(App\Observability\CustomAiEventAdapter::class);
```

Adapters implement `Kanary\AiObservatory\Adapters\AiSdkEventAdapter`. Unknown
events are ignored; enable `AI_OBSERVATORY_DEBUG=true` to log compatibility and
recorder diagnostics.

## Demo workbench

The included Orchestra Testbench application generates realistic traces with
Laravel AI SDK fakes and needs no API keys:

```bash
vendor/bin/testbench workbench:install
vendor/bin/testbench ai-observatory:install
vendor/bin/testbench migrate
vendor/bin/testbench ai-observatory:demo
vendor/bin/testbench serve
```

See [workbench/README.md](workbench/README.md) for real-provider opt-in notes.

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

| Laravel AI SDK | Status                              | Adapter                          |
| -------------- | ----------------------------------- | -------------------------------- |
| 0.10.1         | Source verified and contract tested | Laravel AI SDK v0.10 adapter set |

See the
[verified SDK event inventory](docs/reference/sdk-events-v0.10.1.md).

An SDK version outside the tested range is reported as untested or unsupported
by `ai-observatory:status`; it is never silently presented as compatible.

## Troubleshooting

See [Troubleshooting](docs/troubleshooting.md) for missing traces, queue,
database, authorization, and stale-stream checks.

## Security and contributing

Report vulnerabilities according to [SECURITY.md](SECURITY.md). Development
setup, source-verification rules, and the required quality checks are in
[CONTRIBUTING.md](CONTRIBUTING.md). Release changes are tracked in
[CHANGELOG.md](CHANGELOG.md).

## Acknowledgments

Documentation inspired by [Spatie](https://spatie.be/docs).

## Current limitations

- SDK compatibility is verified only for `laravel/ai` 0.10.1.
- Provider failover is recorded only to the extent exposed by official SDK
  events.
- Laravel AI SDK 0.10.1 has no terminal agent- or tool-failure event. Failed
  starts remain incomplete until request cleanup and stale recovery.
- Interrupted streams require stale-trace recovery.
- Automatic user, tenant, and feature resolver callbacks are planned; use the
  context or direct correlation APIs today.
- Prices are application-managed estimates and are never synchronized online.
