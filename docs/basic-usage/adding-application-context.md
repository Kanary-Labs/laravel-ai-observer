---
title: Adding application context
weight: 3
---

Business context makes traces searchable by the feature, user, tenant, or
application-specific values that initiated an AI operation.

Wrap an operation with `AiObservatory::withContext()`:

```php
use Kanary\AiObservatory\AiObservatory;

$response = AiObservatory::withContext([
    'feature' => 'ticket-reply',
    'user' => auth()->user(),
    'tenant' => $organization,
    'ticket_id' => $ticket->getKey(),
], function () use ($message) {
    return SupportAgent::make()->prompt($message);
});
```

The previous context is restored even when the callback throws.

## Direct helpers

Context can also be added before an operation:

```php
AiObservatory::feature('ticket-reply');
AiObservatory::user(auth()->user());
AiObservatory::tenant($organization);
AiObservatory::tag('ticket_id', $ticket->getKey());
```

Eloquent models are normalized to their key and morph class. String and integer
identities are normalized to an ID without a type.

User, tenant, and feature values populate dedicated indexed trace columns.
Additional values are stored in the trace tags payload.

## Add context before the trace starts

Context is captured when the SDK emits the trace-start event. Set it before
calling the agent or standalone AI operation. For queued application jobs, use
the [trace-context middleware](../recording-storage/propagating-queue-context.md).

All context values pass through redaction and payload limiting before they are
stored or queued.
