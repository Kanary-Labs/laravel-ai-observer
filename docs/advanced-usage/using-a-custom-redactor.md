---
title: Using a custom redactor
weight: 2
---

Register a callback for application-specific transformations that cannot be
expressed as sensitive keys or dot paths:

```php
use Kanary\AiObservatory\AiObservatory;

AiObservatory::redactUsing(function (mixed $payload): mixed {
    if (! is_array($payload)) {
        return $payload;
    }

    // Apply application-specific masking.
    return $payload;
});
```

Register callbacks during application boot. They run after the built-in
recursive key and dot-path redactor, in registration order.

A callback should return an array, string, or `null`. Other return values are
ignored and the previous redacted value is retained.

The callback receives a normalized payload wrapped by its root, such as
`request`, `response`, `metadata`, `tags`, `error`, or `event`.

Custom redaction still runs before payload limiting and before any
after-response buffering or queue dispatch.
