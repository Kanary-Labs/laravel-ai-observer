---
title: Agent, model, and tool spans
weight: 2
---

An agent trace starts when Laravel AI dispatches `PromptingAgent` or
`StreamingAgent`. The root span uses the SDK invocation ID for both the trace ID
and root span ID.

## Model spans

### SDK 1.x

`StartingStep` creates a model span. `StepCompleted` or `StepFailed` completes
that exact span, including during streaming and provider failover. Each attempt
has a distinct span ID, even when the SDK restarts its step numbering.

Spans record observed start/end times and the SDK's `sdk_duration_ms`. Metadata
contains `timing: sdk_step_events`. Usage is taken from the individual step,
never added again from the aggregate agent response.

The root agent stores the user prompt. Step requests store the step number,
not a second copy of conversation history, tool results, or provider replay
blocks. Response text, tool calls, and usage follow the normal capture and
redaction settings. Reasoning text is not recorded.

### SDK 0.10.x

For non-streamed responses, Laravel AI SDK 0.10.x exposes individual provider
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

SDK 1.x dispatches `ToolFailed` and `AgentFailed` for terminal exceptions,
allowing failed spans and traces to close immediately. Tool completion/failure
metadata includes the SDK's measured duration when available.

SDK 0.10.x tool exceptions may prevent completion events from being dispatched.
Stale recovery handles spans left running by that limitation or interrupted
processes on either SDK version.
