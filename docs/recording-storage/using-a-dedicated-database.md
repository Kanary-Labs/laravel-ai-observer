---
title: Using a dedicated database
weight: 4
---

By default, AI Observatory uses the application's default database connection.
Set a Laravel connection name to isolate observability data:

```dotenv
AI_OBSERVATORY_DB_CONNECTION=observability
```

The connection must exist in `config/database.php`.

Configure it before publishing and running migrations:

```bash
php artisan ai-observatory:install
php artisan migrate
php artisan ai-observatory:status
```

Package models, trace queries, maintenance commands, and schema checks all use
the configured connection.

## Foreign-key behavior

Span and event trace foreign keys use restrictive deletion rules rather than
cascades. A trace cannot be accidentally deleted while child spans or events
still exist.

The prune and clear commands delete events and spans before traces in bounded
transactions.

## Supported databases

The migrations and queries are tested with SQLite, MySQL, and PostgreSQL.
Search uses database-specific text casting where necessary.
