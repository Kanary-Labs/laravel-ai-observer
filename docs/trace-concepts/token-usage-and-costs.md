---
title: Token usage and costs
weight: 3
---

AI Observatory normalizes provider usage into independent nullable categories:

- Input tokens.
- Output tokens.
- Cached input tokens.
- Reasoning tokens.
- Total tokens.

Unavailable values remain `null` where the SDK allows that distinction.
Laravel AI's current `Usage` object may normalize some missing provider
categories to zero, so an upstream zero cannot always be distinguished from a
provider value that was not exposed.

## Trace aggregation

For agent traces, totals are aggregated from model spans only. Agent-level usage
is not added again, preventing double counting.

For standalone AI operations, totals are aggregated from spans that report
usage.

## Estimated costs

Costs are calculated only when the local pricing catalog contains a matching
provider and model with every required rate.

Unknown, incomplete, invalid, or mixed-currency pricing produces `null`.
Unpriced usage is never shown as free usage.

See [Configuring the pricing catalog](../advanced-usage/configuring-the-pricing-catalog.md)
for a complete example.
