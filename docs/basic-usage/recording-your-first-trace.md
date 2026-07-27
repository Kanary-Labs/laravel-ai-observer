---
title: Recording your first trace
weight: 1
---

AI Observatory begins listening to supported Laravel AI events when the package
is installed and `ai-observatory.enabled` is `true`.

Run an agent exactly as you normally would:

```php
$response = SupportAgent::make()->prompt(
    'Summarize the latest customer message.',
);
```

No Observatory facade or custom agent base class is required.

Open `/ai-observatory/traces`. A completed agent operation normally produces:

1. One trace for the complete agent invocation.
2. One root agent span.
3. One or more model spans reconstructed from the response steps.
4. Tool or MCP spans when the agent invokes tools.
5. Instant events for supported failover, approval, and streaming lifecycle
   activity.

## Confirm recording is enabled

Local environments record by default. In any other environment, enable
recording explicitly:

```dotenv
AI_OBSERVATORY_ENABLED=true
```

Use `php artisan ai-observatory:status` to verify the setting, SDK
compatibility, migrations, and database connection.

## Standalone operations

Supported embedding, reranking, image, audio, and transcription operations
create their own traces. These traces do not require an enclosing agent.

## If the operation fails before completion

Laravel AI SDK 0.10.1 does not dispatch a terminal failure event for every
started agent or tool operation. A trace may remain `running` after an
exception. Use the [stale recovery command](../recording-storage/retention-and-recovery.md)
to mark abandoned operations as cancelled.
