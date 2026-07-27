---
title: Questions and issues
weight: 3
---

Before opening an issue, run:

```bash
php artisan ai-observatory:status
```

The output usually identifies disabled recording, missing migrations,
unsupported SDK versions, an unavailable database connection, or a queue
configuration problem.

Check the [troubleshooting guide](troubleshooting.md) for common recording,
authorization, migration, streaming, payload, and pricing problems.

## Reporting a bug

Use the
[GitHub issue tracker](https://github.com/Kanary-Labs/laravel-ai-observer/issues)
for reproducible package defects. Include:

- AI Observatory, Laravel, PHP, and Laravel AI SDK versions.
- Database driver and recording mode.
- The output of `ai-observatory:status`, with secrets removed.
- Minimal reproduction steps.
- Relevant logs when `AI_OBSERVATORY_DEBUG=true`.

Do not attach raw prompts, responses, tool payloads, credentials, or customer
data to a public issue.

## Security reports

Security vulnerabilities must be reported privately through GitHub security
advisories. Follow the repository [security policy](../SECURITY.md); never
publish exploit details or sensitive trace content in an issue.

## Unsupported SDK behavior

Laravel AI is pre-1.0. If a new SDK release changes events or payloads, open an
issue with the exact SDK version and the output of `ai-observatory:status`.
Unknown events are ignored safely rather than guessed.
