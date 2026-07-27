---
title: Authorizing the dashboard
weight: 4
---

Dashboard and Observatory API routes always pass through the package
authorization middleware.

Local applications are allowed by default. Other environments require an
explicit authorization decision.

## Define the gate

Define `viewAiObservatory` during application boot:

```php
use Illuminate\Support\Facades\Gate;

Gate::define('viewAiObservatory', function ($user): bool {
    return $user?->is_admin === true;
});
```

The package defines its local-only fallback only when the application has not
already defined the gate.

## Use a request callback

A callback takes precedence over the gate:

```php
use Illuminate\Http\Request;
use Kanary\AiObservatory\AiObservatory;

AiObservatory::auth(function (Request $request): bool {
    return $request->user()?->can('view-ai-observatory') === true;
});
```

Register the callback during application boot.

## Route middleware

The configured middleware runs before Observatory authorization:

```php
'middleware' => [
    'web',
    'auth',
],
```

Never expose the dashboard through public unauthenticated middleware in an
environment that records sensitive payloads.
