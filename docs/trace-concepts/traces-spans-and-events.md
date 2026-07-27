---
title: Traces, spans, and events
weight: 1
---

## Traces

A trace represents one complete AI workflow. An agent prompt is one trace even
when it performs several model requests and tool calls.

Standalone operations such as embedding generation, reranking, image
generation, audio generation, and transcription also create traces.

Trace statuses are:

- `running`
- `successful`
- `failed`
- `cancelled`

## Spans

A span is a timed operation within a trace. AI Observatory supports these span
types:

```text
agent
model
tool
mcp
embedding
rerank
vector_store
image
audio
transcription
internal
```

Each span has its own status, timing, parent span, provider/model metadata,
payloads, token usage, estimated cost, and error fields when applicable.

The `sequence` column preserves observed ordering while `parent_span_id`
provides hierarchy.

## Events

An event is an instant occurrence rather than a timed operation. Current event
examples include:

- `provider_failed_over`
- `approval_requested`
- `approval_resolved`
- `stream_started`
- `first_token_received`
- `response_completed`

Events may refer to a trace, a span, or both.

This structure allows the dashboard to show a workflow as a readable timeline
without storing every streamed token as a database record.
