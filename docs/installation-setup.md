---
title: Base installation
weight: 2
---

Install AI Observatory as a development dependency:

```bash
composer require kanary/laravel-ai-observatory --dev
```

Publish the configuration and ordered migration set:

```bash
php artisan ai-observatory:install
php artisan migrate
```

The package service provider is discovered automatically. You do not need to
register it manually or replace any Laravel AI calls.

## Open the dashboard

In a local environment, visit:

```text
/ai-observatory
```

The root route redirects to the overview. Traces are available at:

```text
/ai-observatory/traces
```

The dashboard is enabled and authorized automatically only when the application
environment is `local`.

## Verify the installation

Run:

```bash
php artisan ai-observatory:status
```

The command reports whether recording is enabled, whether all package tables
exist, the detected Laravel AI SDK version and adapter, the database and queue
settings, retention, dashboard path, and authorization mode.

## Published migrations

The install command publishes one migration for traces, one for spans, and one
for events. Their timestamps are ordered so parent tables are created first.
Running the install command again reuses existing matching migration files
instead of creating duplicates.

Do not rename individual published migrations. If you use a separate database
connection, configure it before running `php artisan migrate`.

For production configuration, continue with the
[production checklist](privacy-security/production-checklist.md).
