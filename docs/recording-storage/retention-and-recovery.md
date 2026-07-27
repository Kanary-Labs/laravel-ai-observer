---
title: Retention and stale recovery
weight: 5
---

## Pruning old traces

The default retention period is 14 days:

```dotenv
AI_OBSERVATORY_RETENTION_DAYS=14
```

Delete expired traces with:

```bash
php artisan ai-observatory:prune
php artisan ai-observatory:prune --days=30
```

Use `--chunk` to control the number of traces deleted per transaction:

```bash
php artisan ai-observatory:prune --days=30 --chunk=250
```

Schedule pruning in the host application at a frequency suitable for its data
volume.

## Recovering running operations

The stale threshold defaults to 15 minutes:

```dotenv
AI_OBSERVATORY_STALE_AFTER_MINUTES=15
```

Recover abandoned traces and spans:

```bash
php artisan ai-observatory:recover-stale
php artisan ai-observatory:recover-stale --minutes=30 --chunk=500
```

Recovered records are marked `cancelled` rather than `failed`. This is useful
for interrupted streams and SDK operations that started without a corresponding
terminal event.

## Clearing all data

`ai-observatory:clear` removes every trace after confirmation. Use `--force`
only in intentional automation or disposable environments.
