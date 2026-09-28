---
title: Reading the trace timeline
weight: 3
---

The trace timeline orders spans by their recorded sequence and displays their
parent-child relationship.

A tool-calling trace may look like:

```text
Agent
├── Model step 1
├── Tool: searchOrders
├── Model step 2
├── MCP tool: sendEmail
└── Model step 3
```

Select a span to inspect:

- Type, status, and name.
- Start time, end time, and duration.
- Provider and model.
- Parent span.
- Request and response payloads.
- Token categories and estimated cost.
- Metadata.
- Error type, message, and optional stack.

The waterfall is useful for streamed and tool operations with real start and
end events, including all SDK 1.x model steps. SDK 0.10 non-stream model spans reconstructed at agent completion are marked
in metadata and may have zero duration.

Failed and cancelled spans remain visible alongside successful operations so
you can see where the workflow stopped.
