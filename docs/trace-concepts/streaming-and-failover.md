---
title: Streaming and provider failover
weight: 4
---

AI Observatory aggregates streaming lifecycle data from the completed Laravel
AI streamed response. It does not create one record per token.

When the response includes the required stream events, the model span records:

- Request start time.
- First token time.
- Response completion time.
- Time to first token in milliseconds.
- Final text and finish reason.
- Aggregate token usage.
- A non-recoverable stream error when exposed.

It also records `stream_started`, `first_token_received`, and
`response_completed` instant events.

## Interrupted streams

If the client disconnects before Laravel AI dispatches `AgentStreamed`, the
package cannot see a completion event. The trace remains running until
`ai-observatory:recover-stale` marks it cancelled.

## Provider failover

Agent failover events include the active agent and are attached to its trace.
The generic Laravel AI `ProviderFailedOver` event has no invocation ID, so it
can be correlated only when an Observatory trace context is active.

AI Observatory records failover information exposed by official SDK events. It
does not infer retries or provider switches that the SDK does not dispatch.
