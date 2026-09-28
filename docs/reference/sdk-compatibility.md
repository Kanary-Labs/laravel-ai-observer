---
title: Laravel AI SDK compatibility
weight: 5
---

AI Observatory isolates Laravel AI event mapping behind adapters. Observatory
1.1 adds SDK 1.x support while retaining compatibility with SDK 0.10.x.

| Laravel AI SDK | Status                              | Adapter                          |
| -------------- | ----------------------------------- | -------------------------------- |
| 0.10.1         | Source verified and contract tested | Laravel AI SDK v0.10 adapter set |
| 0.10.2, 0.10.3 | Contract tested                     | Laravel AI SDK v0.10 adapter set |
| 1.0.0          | Source verified and contract tested | Laravel AI SDK v1 adapter set    |

Composer accepts `^0.10.1 || ^1.0`. Releases in those ranges outside the tested
versions above are reported as `untested`. Other ranges are `unsupported`, and
no compatibility adapter is claimed. Observatory 1.0.x only supports SDK 0.10.x.

CI tests SDK 0.10.1 and 1.0.0 across PHP 8.3–8.5, Laravel 12/13, and SQLite,
MySQL, and PostgreSQL. SDK 0.10.2 and 0.10.3 also run on PHP 8.4 and both Laravel
versions with SQLite.

Check the installed version:

```bash
php artisan ai-observatory:status
```

The package never persists raw SDK event objects. Supported events are adapted
into stable trace, span, event, usage, and error DTOs first.

Unknown events are ignored safely. Enable `AI_OBSERVATORY_DEBUG=true`
temporarily to log adapter failures while diagnosing an SDK change.

Source-verified mappings are available in the
[SDK 1.0.0 event inventory](sdk-events-v1.0.0.md) and the
[SDK 0.10.1 event inventory](sdk-events-v0.10.1.md).
