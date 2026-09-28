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

## Upgrading from 1.0.1 to 1.1.0

Observatory 1.1 supports `laravel/ai:^0.10.1 || ^1.0`. Existing SDK 0.10
applications do not need to upgrade the SDK immediately. No new database
migration or configuration key is required for this compatibility update.

Update Observatory first, then explicitly
upgrade the SDK if your application's Composer constraint still targets 0.10:

```bash
composer update kanary/laravel-ai-observatory --with-all-dependencies
composer require laravel/ai:^1.0 --with-all-dependencies
php artisan ai-observatory:status
```

Ensure your Observatory constraint allows 1.1. Restart queue workers and Octane
after deploying. Run application tests: the SDK's usage objects and response
constructors changed in 1.0, including fakes constructed directly in tests.
Observatory adapts these changes internally; your own SDK usage may need changes.

New SDK 1.x traces use live model-step events for streamed and non-streamed
operations. Terminal agent/tool exceptions are recorded immediately. Older
stored traces remain readable. Pricing is still application-configured.

## Upgrading from 1.0.0 to 1.0.1

Version 1.0.1 publishes one ordered, idempotent compatibility migration. Run:

```bash
php artisan ai-observatory:install
php artisan migrate
```

The migration adds cache-write token columns, expands provider error storage,
and adds indexes used by pruning, ordering, and user or tenant filters. It
preserves the package's restrictive foreign keys and does not cascade trace
deletions.

New queue, sampling, API, and dashboard limits have safe runtime defaults even
when an application's published configuration predates 1.0.1. Compare the
published configuration before using `--force`. Add
`cache_write_input_per_million` to overridden pricing entries when the provider
charges separately for cache creation.

## Upgrading from 0.1 to 1.0

Version 1.0 establishes the stable public API commitment. Runtime behavior and
the database schema are unchanged from 0.1.0, so no special data migration is
required.

## Laravel AI SDK upgrades

Run `ai-observatory:status` after changing `laravel/ai`. Do not assume a new
SDK release is compatible. AI Observatory reports untested and unsupported versions
and ignores unknown events rather than inventing event mappings.
