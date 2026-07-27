---
title: Configuring the pricing catalog
weight: 3
---

AI Observatory never downloads provider pricing. Define estimates in the
published configuration:

```php
'pricing' => [
    '_meta' => [
        'version' => 'internal-2026-07',
        'effective_date' => '2026-07-01',
    ],
    'provider-name' => [
        'model-name' => [
            'input_per_million' => 10,
            'output_per_million' => 30,
            'cached_input_per_million' => 1,
            'cache_write_input_per_million' => 12.5,
            'currency' => 'USD',
        ],
    ],
],
```

Provider and model keys must match the normalized values stored on the span.
Rates are amounts per one million tokens.

Input usage is required. Output usage and its rate are required for operations
where output tokens apply; input-only operations such as embeddings can still
be estimated. Cached-read and cache-write rates are required only when their
corresponding usage is greater than zero.

Provider adapters normalize uncached input, cache reads, and cache writes into
independent categories before calculation. The currency must be a
three-character code. Negative or contradictory usage, invalid rates, or
incomplete entries produce no estimate.

The catalog version and effective date are stored in span pricing metadata.
Every displayed amount is an estimate.
