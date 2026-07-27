---
title: Inspecting payloads
weight: 4
---

The span inspector presents request, response, metadata, and error payloads as
formatted JSON with collapsible nodes, syntax highlighting, copy controls, and
word wrapping.

Masked values remain visibly marked with the configured redaction replacement,
which defaults to:

```text
[REDACTED]
```

Truncated payloads display `_truncated` and `_original_bytes` metadata instead
of the original content.

Payloads are protected twice:

1. Redaction and size limiting occur before persistence or queue dispatch.
2. The trace API applies redaction and limiting again before returning stored
   data to the dashboard.

The second pass protects against legacy records and application-specific
redactors registered after data was originally written. It does not make it
safe to weaken database access controls.
