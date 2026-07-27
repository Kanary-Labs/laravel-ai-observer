---
title: Requirements
weight: 4
---

AI Observatory 1.x requires:

- PHP 8.3 or newer.
- Laravel 12 or 13.
- Laravel AI SDK 0.10.x.
- MySQL 8+, PostgreSQL 14+, or SQLite.

Compatibility is source verified and contract tested against Laravel AI SDK
0.10.1. Other `0.10.x` patch releases are detected by the same adapter range,
but you should run your application test suite whenever the SDK changes.

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
