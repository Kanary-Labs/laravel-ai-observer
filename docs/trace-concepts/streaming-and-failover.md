---
title: Streaming and provider failover
weight: 4
---

AI Observatory aggregates streaming lifecycle data from the completed Laravel
AI streamed response. It does not create one record per token.

With SDK 1.x, model spans are recorded through live step events. Aggregate
stream timing is attached to the root agent span. With SDK 0.10.x, a single
aggregate model span carries stream timing and usage.

When the response includes the required stream events, recorded data includes:

- Request start time.
- First token time.
- Response completion time.
- Time to first token in milliseconds.
- Final text and finish reason.
- Aggregate token usage.
- A non-recoverable stream error when exposed.

The legacy SDK 0.10 adapter also records `stream_started`,
`first_token_received`, and `response_completed` instant events. SDK 1.x uses
step spans and agent timing metadata instead. Timestamps exposed by SDK stream
events currently have second resolution; a zero time to first token can be
legitimate at that precision.

## Interrupted streams

If the client disconnects before Laravel AI dispatches `AgentStreamed`, the
package may not see a completion or failure event. The trace remains running until
`ai-observatory:recover-stale` marks it cancelled.

## Provider failover

SDK 1.x agent failover events include the invocation ID and are attached to that
trace. Failed model attempts remain visible alongside the successful fallback.
SDK 0.10 agent failover uses the active trace context.
The generic Laravel AI `ProviderFailedOver` event has no invocation ID, so it
can be correlated only when an Observatory trace context is active.

AI Observatory records failover information exposed by official SDK events. It
does not infer retries or provider switches that the SDK does not dispatch.
