# Troubleshooting

## No traces appear

Run `php artisan ai-observatory:status`. Confirm recording is enabled, the SDK
version is supported, migrations exist, and the selected database connection is
reachable. In production, `AI_OBSERVATORY_ENABLED=true` is required explicitly.

## Dashboard returns 403

Local access is allowed by default. In other environments, define the
`viewAiObservatory` gate or register an `AiObservatory::auth()` callback during
application boot.

## Queue mode records nothing

Confirm a worker consumes the configured connection and queue. The recording
job contains normalized internal DTO arrays, so changing SDK objects after
dispatch cannot repair an already queued event. Temporarily use `sync` mode and
enable `AI_OBSERVATORY_DEBUG=true` to isolate dispatch from persistence errors.

## A streaming trace stays running

The SDK cannot emit its completion event after some interrupted connections.
Run `php artisan ai-observatory:recover-stale --minutes=30` and schedule the
command at an interval appropriate for the application.

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
