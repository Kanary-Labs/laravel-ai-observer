---
title: Laravel AI SDK compatibility
weight: 5
---

AI Observatory isolates Laravel AI event mapping behind adapters because the
SDK is pre-1.0.

| Laravel AI SDK | Status                              | Adapter                   |
| -------------- | ----------------------------------- | ------------------------- |
| 0.10.1         | Source verified and contract tested | `LaravelAiSdkV010Adapter` |

The current detector accepts the `0.10.x` range. A different SDK range is
reported as `unsupported`, and no compatibility adapter is claimed.

Check the installed version:

```bash
php artisan ai-observatory:status
```

The package never persists raw SDK event objects. Supported events are adapted
into stable trace, span, event, usage, and error DTOs first.

Unknown events are ignored safely. Enable `AI_OBSERVATORY_DEBUG=true`
temporarily to log adapter failures while diagnosing an SDK change.

The complete source-verified mapping is available in the
[Laravel AI SDK 0.10.1 event inventory](sdk-events-v0.10.1.md).
