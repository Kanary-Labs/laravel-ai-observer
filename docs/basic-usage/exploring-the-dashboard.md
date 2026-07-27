---
title: Exploring the dashboard
weight: 2
---

Visit the configured dashboard path:

```text
/ai-observatory
```

The dashboard has two primary views.

## Overview

The overview summarizes activity since the start of the current day in the
application timezone. It shows trace count, failure rate, total tokens,
estimated cost when currencies can be combined, average latency, P95 latency,
top agents, top models, top tools, and recent failures.

## Traces

The trace list is the main debugging view. It displays status, agent,
provider/model, tool count, token usage, estimated cost, duration, user,
tenant, and feature context.

Select a trace to open its detail flyout. The flyout can be expanded to the
full trace route for a larger inspection surface.

## Trace detail

The detail view combines:

- Trace summary and business context.
- Parent-child span timeline.
- Provider, model, usage, and duration for each operation.
- Request and response payloads.
- Tool arguments and results.
- Metadata and error information.
- Streaming, approval, and failover events.

Stored payloads are redacted and size limited before persistence, then passed
through the same protections again before the API returns them.
