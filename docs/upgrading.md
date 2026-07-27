---
title: Upgrading
weight: 5
---

Update the package through Composer:

```bash
composer update kanary/laravel-ai-observatory
```

Then publish any new migrations and run the application's normal migration
command:

```bash
php artisan ai-observatory:install
php artisan migrate
php artisan ai-observatory:status
```

The install command is idempotent for the existing migration set. It does not
create duplicate migrations when matching files have already been published.

## Configuration changes

The install command does not overwrite an existing published configuration file
unless you explicitly pass `--force`:

```bash
php artisan ai-observatory:install --force
```

Using `--force` replaces local configuration customizations. Compare the
package's current `config/ai-observatory.php` with your application copy before
running it.

## Upgrading from 0.1 to 1.0

Version 1.0 establishes the stable public API commitment. Runtime behavior and
the database schema are unchanged from 0.1.0, so no special data migration is
required.

## Laravel AI SDK upgrades

Run `ai-observatory:status` after changing `laravel/ai`. Do not assume a new
pre-1.0 SDK release is compatible. AI Observatory reports unsupported versions
and ignores unknown events rather than inventing event mappings.
