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
            'currency' => 'USD',
        ],
    ],
],
```

Provider and model keys must match the normalized values stored on the span.
Rates are amounts per one million tokens.

Input and output usage are required. Cached input pricing is required only when
cached input tokens are greater than zero. Cached tokens are subtracted from
the normal input category before the two rates are applied.

The currency must be a three-character code. Negative usage, cached input
greater than total input, invalid rates, or incomplete entries produce no
estimate.

The catalog version and effective date are stored in span pricing metadata.
Every displayed amount is an estimate.
