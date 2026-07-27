---
title: Configuration reference
weight: 1
---

The published `config/ai-observatory.php` file is the source of truth for
package configuration.

## General

| Key              | Default                 | Description                                              |
| ---------------- | ----------------------- | -------------------------------------------------------- |
| `enabled`        | Local environments only | Registers the SDK event listener.                        |
| `debug`          | `false`                 | Logs capture and persistence failures at debug level.    |
| `path`           | `ai-observatory`        | Dashboard route prefix without a required leading slash. |
| `connection`     | Application default     | Laravel database connection used by all package records. |
| `recording_mode` | `sync`                  | `sync`, `after_response`, or `queue`.                    |

Common environment variables:

```dotenv
AI_OBSERVATORY_ENABLED=true
AI_OBSERVATORY_DEBUG=false
AI_OBSERVATORY_PATH=ai-observatory
AI_OBSERVATORY_DB_CONNECTION=
AI_OBSERVATORY_RECORDING_MODE=sync
```

## Queue

| Key                       | Default         | Description                                                        |
| ------------------------- | --------------- | ------------------------------------------------------------------ |
| `queue.connection`        | Laravel default | Connection used for Observatory persistence jobs.                  |
| `queue.name`              | `default`       | Queue name used for persistence jobs.                              |
| `queue.max_payload_bytes` | `180000`        | Compressed-job safety threshold before deferred local persistence. |

```dotenv
AI_OBSERVATORY_QUEUE_CONNECTION=redis
AI_OBSERVATORY_QUEUE=observatory
AI_OBSERVATORY_QUEUE_MAX_PAYLOAD_BYTES=180000
```

## Capture

| Key                      | Default | Description                                                   |
| ------------------------ | ------- | ------------------------------------------------------------- |
| `capture.prompts`        | `true`  | Store supported prompt-like request fields.                   |
| `capture.responses`      | `true`  | Store response text.                                          |
| `capture.tool_arguments` | `true`  | Store tool arguments in tool and model payloads.              |
| `capture.tool_results`   | `true`  | Store tool results.                                           |
| `capture.embeddings`     | `false` | Reserved disabled control; raw vectors are not stored in 1.x. |
| `capture.stack_traces`   | `false` | Store available error stacks after redaction and limiting.    |

## Payloads and redaction

| Key                     | Default            | Description                                   |
| ----------------------- | ------------------ | --------------------------------------------- |
| `payloads.max_bytes`    | `100000`           | Maximum encoded bytes per normalized payload. |
| `redaction.replacement` | `[REDACTED]`       | Replacement used for masked values.           |
| `redaction.keys`        | Sensitive-key list | Recursively masked, case-insensitive keys.    |
| `redaction.paths`       | `[]`               | Dot paths with single-segment `*` wildcards.  |

## Sampling

| Key                                     | Default | Description                                                         |
| --------------------------------------- | ------- | ------------------------------------------------------------------- |
| `sampling.rate`                         | `1.0`   | Deterministic trace sampling rate from 0 to 1.                      |
| `sampling.always_record_failures`       | `true`  | Promote failed and cancelled traces.                                |
| `sampling.always_record_slow_traces_ms` | `10000` | Promote traces at or above the threshold; non-positive disables it. |
| `sampling.max_buffered_events`          | `100`   | Maximum promotion buffer before the trace is recorded.              |

Environment variables:

```dotenv
AI_OBSERVATORY_SAMPLE_RATE=1.0
AI_OBSERVATORY_ALWAYS_RECORD_FAILURES=true
AI_OBSERVATORY_ALWAYS_RECORD_SLOW_TRACES_MS=10000
AI_OBSERVATORY_MAX_BUFFERED_EVENTS=100
```

## Maintenance

| Key                            | Default | Description                            |
| ------------------------------ | ------- | -------------------------------------- |
| `retention.days`               | `14`    | Default age used by the prune command. |
| `recovery.stale_after_minutes` | `15`    | Default age used by stale recovery.    |

```dotenv
AI_OBSERVATORY_RETENTION_DAYS=14
AI_OBSERVATORY_STALE_AFTER_MINUTES=15
```

## Pricing

`pricing._meta` accepts `version` and `effective_date`. Provider entries contain
model entries with input, output, cached-input, and cache-write-input rates per
million tokens plus a three-character currency.

Unknown or invalid entries return no estimate.

## Middleware

`middleware` defaults to `['web']`. Add application middleware such as `auth`
when required. The package authorization middleware is always appended.
`api_middleware` defaults to `['throttle:120,1']`.

Dashboard safety limits default to 1,000 spans, 1,000 lifecycle events, and 100
distinct values per filter control. Configure them with
`dashboard.max_spans_per_trace`, `dashboard.max_events_per_trace`, and
`dashboard.max_filter_options`.
