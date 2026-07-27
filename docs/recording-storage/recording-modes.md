---
title: Choosing a recording mode
weight: 1
---

AI Observatory supports three persistence modes:

```dotenv
AI_OBSERVATORY_RECORDING_MODE=sync
```

## Sync

`sync` persists each normalized event during the AI operation. It is the local
default and the simplest mode for tests and development.

Database write time is part of the request or job executing the AI operation.
Recorder exceptions are caught and do not replace the SDK result.

## After response

```dotenv
AI_OBSERVATORY_RECORDING_MODE=after_response
```

`after_response` buffers normalized internal events and uses Laravel's deferred
callback lifecycle to persist them after the main response work.

Payloads and business context are captured, redacted, and limited before they
are buffered. This mode avoids queue infrastructure while moving persistence
out of the critical response path where Laravel supports deferred execution.

## Queue

```dotenv
AI_OBSERVATORY_RECORDING_MODE=queue
AI_OBSERVATORY_QUEUE_CONNECTION=redis
AI_OBSERVATORY_QUEUE=observatory
```

`queue` dispatches one compressed job containing serialized internal event
arrays. It never queues Laravel AI SDK event objects.

Run a worker for the configured queue:

```bash
php artisan queue:work redis --queue=observatory
```

The package recording job uses three attempts with a short backoff. Malformed
serialized events are ignored safely; persistence failures are retried.

`queue.max_payload_bytes` defaults to `180000`, leaving headroom for queue
envelope overhead on services with a 256 KB limit. If a compressed batch is
still larger, the deferred callback persists it locally. This preserves event
ordering and avoids silently losing a large trace.
