---
title: Limiting payload size
weight: 3
---

Set the maximum encoded size for an individual request, response, metadata,
tag, event, or error payload:

```php
'payloads' => [
    'max_bytes' => 100_000,
],
```

Redaction runs before the size check. If the encoded payload exceeds the limit,
its content is replaced with:

```json
{
    "_truncated": true,
    "_original_bytes": 583220
}
```

Truncation is intentional and irreversible. AI Observatory does not retain a
hidden copy of the discarded content.

The limit applies independently to each normalized payload rather than to the
entire trace. Lower limits reduce database growth and dashboard rendering work;
higher limits preserve more debugging detail.

Raw embedding vectors and generated image or audio binary content are not
stored, regardless of this limit.
