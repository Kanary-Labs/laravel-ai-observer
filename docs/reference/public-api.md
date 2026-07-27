---
title: Public API
weight: 3
---

The stable facade API is available through:

```php
use Kanary\AiObservatory\AiObservatory;
```

## Add tags

```php
AiObservatory::tag(string $key, mixed $value): void;
AiObservatory::feature(string $feature): void;
```

Tags apply to the current scoped context. Feature also populates the indexed
trace feature column.

## Set identities

```php
AiObservatory::user(Model|string|int|null $user): void;
AiObservatory::tenant(Model|string|int|null $tenant): void;
```

Eloquent models provide their key and morph class. Scalar values provide an ID
without a type.

## Scope context

```php
AiObservatory::withContext(
    array $context,
    Closure $callback,
): mixed;
```

The previous context is restored after the callback, including when it throws.

## Authorize dashboard requests

```php
AiObservatory::auth(Closure $callback): void;
```

The callback receives an `Illuminate\Http\Request` and returns a boolean. It
takes precedence over the `viewAiObservatory` gate.

## Register redaction

```php
AiObservatory::redactUsing(Closure $callback): void;
```

Callbacks run after built-in redaction.

## Register an event adapter

```php
AiObservatory::registerEventAdapter(
    string $adapterClass,
): void;
```

The class must implement
`Kanary\AiObservatory\Adapters\AiSdkEventAdapter`.

Eloquent Observatory models are implementation details and are not the primary
extension API.
