---
title: Correlating nested AI operations
weight: 5
---

When a new AI trace starts while another Observatory trace is active, the
context manager preserves the parent snapshot.

The child trace stores propagated context metadata containing the parent trace
and span IDs. When the child finishes, the parent trace context is restored so
later events continue to correlate correctly.

This supports workflows such as:

```text
Support agent
├── Model request
├── Nested classification agent
│   └── Model request
├── Tool call
└── Final model request
```

Nested agents remain separate traces rather than being rewritten into one
database trace. The propagated metadata provides the cross-trace relationship.

Use `AiObservatory::withContext()` around the outer workflow to ensure user,
tenant, feature, and custom tags are available to every nested operation.
