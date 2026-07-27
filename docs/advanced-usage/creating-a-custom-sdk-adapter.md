---
title: Creating a custom SDK adapter
weight: 1
---

Use a custom adapter for application events or an SDK release that exposes an
event the built-in compatibility layer does not support.

Implement `AiSdkEventAdapter`:

```php
namespace App\Observability;

use Kanary\AiObservatory\Adapters\AiSdkEventAdapter;

final class CustomAiEventAdapter implements AiSdkEventAdapter
{
    public function supports(object $event): bool
    {
        return $event instanceof CustomAiEvent;
    }

    public function adapt(object $event): array
    {
        if (! $event instanceof CustomAiEvent) {
            return [];
        }

        return [
            // Return Observatory TraceStarted, SpanStarted,
            // SpanFinished, TraceFinished, or EventRecorded DTOs.
        ];
    }
}
```

Register it during application boot:

```php
use App\Observability\CustomAiEventAdapter;
use Kanary\AiObservatory\AiObservatory;

AiObservatory::registerEventAdapter(CustomAiEventAdapter::class);
```

Adapters are resolved through Laravel's container and registered only once per
class. A class that does not implement the adapter contract is rejected.

Return stable Observatory DTOs, not SDK event objects. Malformed adapter data
must not be allowed to interrupt the application's AI operation.

Before mapping a new Laravel AI event, inspect the exact installed SDK source
and add contract tests for every property you read.
