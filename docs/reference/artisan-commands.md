---
title: Artisan commands
weight: 2
---

## Install

```bash
php artisan ai-observatory:install
php artisan ai-observatory:install --force
```

Publishes configuration and the ordered migration set. `--force` overwrites an
existing published configuration file.

## Status

```bash
php artisan ai-observatory:status
```

Reports enablement, installation, SDK compatibility, adapter, database status,
recording mode, queue, retention, recovery, dashboard path, and authorization.

## Prune

```bash
php artisan ai-observatory:prune
php artisan ai-observatory:prune --days=30 --chunk=500
```

Deletes traces older than the configured or supplied number of days. Days may
be zero or greater; chunk must be greater than zero.

## Clear

```bash
php artisan ai-observatory:clear
php artisan ai-observatory:clear --force --chunk=500
```

Deletes all Observatory traces child first. Confirmation is required outside
tests unless `--force` is provided.

## Recover stale

```bash
php artisan ai-observatory:recover-stale
php artisan ai-observatory:recover-stale --minutes=30 --chunk=500
```

Marks running traces and spans older than the threshold as cancelled. Minutes
and chunk must be greater than zero.
