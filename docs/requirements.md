---
title: Requirements
weight: 4
---

AI Observatory 1.x requires:

- PHP 8.3 or newer.
- Laravel 12 or 13.
- Laravel AI SDK ^0.10.1 or ^1.0 (SDK 1.x requires Observatory 1.1+).
- MySQL 8+, PostgreSQL 14+, or SQLite.

Compatibility baselines are source verified for SDK 0.10.1 and 1.0.0. The test
matrix also covers SDK 0.10.2 and 0.10.3. Composer resolves the Laravel patch
versions required by the chosen SDK. Run your application test suite whenever
the SDK changes; see the [compatibility table](reference/sdk-compatibility.md).

## Dashboard assets

The compiled React dashboard is distributed with the Composer package. Host
applications do not need Node.js, npm, Vite, or a frontend build step.

## Queue requirements

The default `sync` recording mode does not require a queue worker. The `queue`
mode requires a configured Laravel queue connection and an active worker
consuming the configured queue name.

## Database connection

By default, Observatory uses the host application's default database
connection. A dedicated Laravel database connection can be configured with:

```dotenv
AI_OBSERVATORY_DB_CONNECTION=observability
```

Configure the connection before publishing and running the migrations.
