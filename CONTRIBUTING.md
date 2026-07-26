# Contributing

## Local setup

```bash
composer install
npm ci
composer check
npm run build
```

The optional demo application is described in
[workbench/README.md](workbench/README.md).

## Required checks

Before submitting a change, run:

```bash
composer test
composer test:lint
composer test:types
npm run build
```

Database changes must be tested on SQLite, MySQL, and PostgreSQL. Compatibility
changes must be tested on each supported Laravel version.

## SDK compatibility rules

The Laravel AI SDK is pre-1.0. Before changing an event adapter:

1. Inspect the exact supported SDK source.
2. Record the event constructor and public payload in the inventory under
   `docs/`.
3. Add or update adapter contract tests.
4. Treat unknown events and malformed payloads as non-fatal.

Do not infer event names or properties from memory. Never persist raw SDK event
objects.

## Design and scope

AI Observatory is an independent observability package. Do not copy Laravel
Telescope source, assets, or branding. Recorder failures must never interrupt
the host application's AI request. New capture behavior must include privacy,
payload-size, correlation, and long-lived-worker tests.

Keep pull requests focused and update the changelog for user-visible changes.
