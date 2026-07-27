---
title: Agent, model, and tool spans
weight: 2
---

An agent trace starts when Laravel AI dispatches `PromptingAgent` or
`StreamingAgent`. The root span uses the SDK invocation ID for both the trace ID
and root span ID.

## Model spans

For non-streamed responses, Laravel AI SDK 0.10.1 exposes individual provider
steps only on the completed agent response. AI Observatory reconstructs one
model span for each response step.

These spans contain:

- Provider and model.
- Step number.
- Response text.
- Finish reason.
- Tool calls returned by that model step.
- Token usage.

Because no model-start event was dispatched, reconstructed model spans use the
completion observation time for both start and end. Their metadata contains:

```json
{
    "timing": "reconstructed_at_completion"
}
```

Do not interpret a zero duration on these spans as provider latency.

## Tool spans

`InvokingTool` starts a tool span and `ToolInvoked` completes the same span
using the SDK tool invocation ID. MCP tools receive the `mcp` type; other tools
receive the `tool` type.

Tool exceptions may prevent the completion event from being dispatched. Stale
recovery handles spans left running by that SDK limitation.
