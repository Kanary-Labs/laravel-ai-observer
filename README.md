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

## Maintenance

```bash
php artisan ai-observatory:status
php artisan ai-observatory:prune
php artisan ai-observatory:prune --days=30
php artisan ai-observatory:clear
```

Prune and clear delete events, spans, and traces explicitly in bounded
transactions. Foreign keys restrict accidental parent deletion.

## SDK compatibility

| Laravel AI SDK | Status | Adapter |
| --- | --- | --- |
| 0.10.1 | Source verified and contract tested | `LaravelAiSdkV010Adapter` |

See the [verified SDK event inventory](docs/sdk-events-v0.10.1.md).
