---
title: Reading the overview
weight: 1
---

The overview summarizes traces recorded since the start of the current day in
the application's timezone.

It displays:

- Trace count and failure rate.
- Total token usage.
- Estimated cost when all priced traces use one currency.
- Average and P95 trace duration.
- Top five agents.
- Top five provider/model combinations.
- Top five tools and MCP tools.
- Five most recent failed traces.

Token and cost cards remain unavailable when the underlying values cannot be
calculated safely. For example, mixed currencies produce a null aggregate
instead of an incorrect combined amount.

The overview is intended for orientation. Use the trace list and detail
timeline for payload-level debugging.
