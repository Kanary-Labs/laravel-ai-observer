---
title: Propagating queue context
weight: 2
---

Use `PropagateAiTraceContext` on application jobs that perform AI work and need
context established before dispatch:

```php
use Kanary\AiObservatory\Queue\PropagateAiTraceContext;

public function middleware(): array
{
    return [
        new PropagateAiTraceContext,
    ];
}
```

Set context before dispatching the job:

```php
use Kanary\AiObservatory\AiObservatory;

AiObservatory::withContext([
    'feature' => 'ticket-reply',
    'user' => auth()->user(),
    'tenant' => $organization,
], function () use ($job): void {
    dispatch($job);
});
```

AI Observatory stores its correlation snapshot in Laravel's hidden Context.
Laravel serializes that hidden context with the queued job. The middleware
restores it before the job runs and clears it afterward.

Context values are normalized, redacted, and size-limited before they enter
Laravel's hidden queue context. Values that cannot be serialized are omitted
while trace and parent-span correlation are preserved.

This middleware propagates application trace context into a queued job. It is
separate from `AI_OBSERVATORY_RECORDING_MODE=queue`, which controls how
Observatory itself persists captured events.

Always add the middleware to jobs that need propagation; selecting queue
recording mode does not add it to application jobs automatically.
