---
title: Troubleshooting
weight: 7
---

## No traces appear

Run `php artisan ai-observatory:status`. Confirm recording is enabled, the SDK
version is supported, migrations exist, and the selected database connection is
reachable. In production, `AI_OBSERVATORY_ENABLED=true` is required explicitly.

Confirm the application is using an SDK operation covered by the current
compatibility adapter. Unknown events are ignored safely.

## Dashboard returns 403

Local access is allowed by default. In other environments, define the
`viewAiObservatory` gate or register an `AiObservatory::auth()` callback during
application boot.

## Queue mode records nothing

Confirm a worker consumes the configured connection and queue. The recording
job contains normalized internal DTO arrays, so changing SDK objects after
dispatch cannot repair an already queued event. Temporarily use `sync` mode and
enable `AI_OBSERVATORY_DEBUG=true` to isolate dispatch from persistence errors.

```dotenv
AI_OBSERVATORY_RECORDING_MODE=sync
AI_OBSERVATORY_DEBUG=true
```

## A streaming trace stays running

The SDK cannot emit its completion event after some interrupted connections.
Run `php artisan ai-observatory:recover-stale --minutes=30` and schedule the
command at an interval appropriate for the application.

Agent and tool exceptions can have the same effect because Laravel AI SDK
0.10.x does not dispatch a dedicated terminal failure event for every started
agent or tool operation. SDK 1.x terminal agent/tool exceptions close their
traces immediately; interrupted processes can still need recovery.

## Migration or foreign-key errors

Publish through `ai-observatory:install`, then run the host application's normal
migration command. Do not rename individual published files: their ordered
prefixes guarantee that traces exist before spans and events. Observatory
maintenance uses explicit child-first deletion rather than cascades.

## Payload is unexpectedly masked or truncated

Inspect `redaction.keys`, `redaction.paths`, capture switches, and
`payloads.max_bytes`. Truncation metadata includes the original byte count;
truncated source content is intentionally unrecoverable from Observatory.

## Cost is null

Unknown prices are never treated as zero. Add a matching provider/model entry
with all required token categories. Trace cost also remains null when model
spans use incompatible currencies or any constituent model span is unpriced.

## A trace has zero-duration model spans

For non-streamed agents on SDK 0.10.x, Laravel AI exposes individual model steps only when the
agent response completes. AI Observatory reconstructs those spans at completion
and marks their timing metadata as `reconstructed_at_completion`. This is an SDK
event limitation, not a database timing error.

SDK 1.x records model start/end events directly. Very fast calls or SDK fakes
can still round to zero milliseconds.

## Debug logging

Set `AI_OBSERVATORY_DEBUG=true` temporarily to log adapter, dispatch, and
persistence failures. Recorder failures remain isolated from the application's
AI response. Disable debug logging after diagnosis to avoid unnecessary log
volume.
