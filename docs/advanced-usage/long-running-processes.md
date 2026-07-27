---
title: Long-running processes
weight: 4
---

Trace context and persistence recorders are scoped Laravel container bindings.
This prevents state from being reused across normal request and job scopes.

For Octane, queue workers, and other long-running processes:

- Keep application context inside `AiObservatory::withContext()` where
  possible.
- Add `PropagateAiTraceContext` to queued application jobs that need inherited
  context.
- Allow the framework to terminate request and job scopes normally.
- Run stale recovery for operations that can end without an SDK completion
  event.

`withContext()` snapshots the existing context and restores it in a `finally`
block, including when the callback throws.

Avoid setting global context once during worker boot. Direct `tag`, `user`,
`tenant`, and `feature` calls apply to the current scope and should be made
close to the AI operation they describe.
