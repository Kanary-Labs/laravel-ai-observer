---
title: Token usage and costs
weight: 3
---

AI Observatory normalizes provider usage into independent nullable categories:

- Input tokens.
- Output tokens.
- Cached input tokens.
- Cache-write input tokens.
- Reasoning tokens.
- Total tokens.

Unavailable values remain `null` where the SDK allows that distinction.
Laravel AI SDK 0.10's `Usage` object may normalize some missing provider
categories to zero, so an upstream zero cannot always be distinguished from a
provider value that was not exposed.

SDK 1.x uses inclusive `inputTokens` and `outputTokens` totals. Observatory
subtracts cache-read and cache-write subsets once to store uncached input
separately; reasoning tokens are already included in output and are not added
again. Unreported cache and reasoning details remain null.

SDK 1.x embedding, audio, reranking, image, transcription, and classification
usage objects are supported. Reported image-token breakdowns, transcription
`audio_seconds`, and reranking `search_units` are retained in span metadata.
The pricing catalog calculates token-based estimates only, not per-image,
per-second, or per-search-unit charges.

## Trace aggregation

For agent traces, totals are aggregated from model spans only. Agent-level usage
is not added again, preventing double counting.

For standalone AI operations, totals are aggregated from spans that report
usage.

## Estimated costs

The SDK supplies usage, not a billed monetary cost. Upgrading to SDK 1.x does
not remove the need to configure local prices.

Costs are calculated only when the local pricing catalog contains a matching
provider and model with every rate required by the reported usage categories.
Input-only operations do not require an output-token value or output rate.

Unknown, incomplete, invalid, or mixed-currency pricing produces `null`.
Unpriced usage is never shown as free usage.

See [Configuring the pricing catalog](../advanced-usage/configuring-the-pricing-catalog.md)
for a complete example.
