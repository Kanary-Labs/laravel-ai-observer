---
title: Sampling traces
weight: 3
---

Sampling controls how many traces are stored:

```dotenv
AI_OBSERVATORY_SAMPLE_RATE=1.0
AI_OBSERVATORY_ALWAYS_RECORD_FAILURES=true
AI_OBSERVATORY_ALWAYS_RECORD_SLOW_TRACES_MS=10000
AI_OBSERVATORY_MAX_BUFFERED_EVENTS=100
```

A rate of `1.0` records every trace. `0.1` deterministically records
approximately ten percent, and `0.0` records none unless a promotion rule
applies.

The decision is made once from the trace ID. Every child span and event follows
the same decision.

## Failure and slow-trace promotion

When an unsampled trace may be promoted, AI Observatory temporarily buffers its
already-redacted and size-limited internal events.

The trace is persisted when:

- It finishes as failed or cancelled and `always_record_failures` is enabled.
- Its duration reaches `always_record_slow_traces_ms`.

If both promotion rules are disabled, unsampled events are discarded without
buffering.

The promotion buffer is bounded by `sampling.max_buffered_events`. A trace that
reaches the limit is recorded after its buffered events are flushed, so memory
remains bounded without losing the trace.

## Incomplete traces

Promotion is evaluated when a trace finishes. An interrupted unsampled trace
that never receives a completion event cannot be promoted. This is an
intentional tradeoff in the current implementation.

Buffering unsampled traces uses application memory, so choose promotion rules,
the buffer cap, and sampling rates appropriate for trace size and concurrency.
