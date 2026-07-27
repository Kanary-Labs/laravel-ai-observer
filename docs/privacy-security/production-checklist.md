---
title: Production checklist
weight: 5
---

Recording is disabled outside local environments unless explicitly enabled:

```dotenv
AI_OBSERVATORY_ENABLED=true
```

Before enabling it, verify each item below.

## Access

- Define the `viewAiObservatory` gate or an authorization callback.
- Include appropriate authentication middleware.
- Confirm unauthorized and unauthenticated requests receive `403`.

## Data capture

- Disable unnecessary prompts, responses, tool data, and stack traces.
- Add application-specific sensitive keys and dot paths.
- Test redaction against realistic nested payloads.
- Choose a payload size appropriate for your data classification.

## Storage

- Consider a dedicated database connection.
- Choose `after_response` or `queue` when synchronous write latency is
  unacceptable.
- Verify the queue worker and queue name when using queue mode.
- Set sampling and retention based on expected traffic volume.

## Operations

- Schedule pruning.
- Schedule stale recovery when streaming or failure interruptions are possible.
- Monitor database growth and queue failures.
- Keep `AI_OBSERVATORY_DEBUG=false` unless diagnosing a problem.
- Run `php artisan ai-observatory:status` after deployments and SDK upgrades.

Observability failures are isolated from the application's AI execution, but
privacy and capacity remain application responsibilities.
