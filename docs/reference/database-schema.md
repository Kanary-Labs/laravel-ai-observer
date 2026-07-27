---
title: Database schema
weight: 4
---

AI Observatory publishes three tables.

## `ai_observatory_traces`

One row represents a complete AI workflow. Important columns include:

- Sortable ULID primary key and unique UUID trace ID.
- Root span ID, name, operation, and status.
- Provider, model, and agent class.
- Indexed user, tenant, and feature context.
- Environment.
- Nullable token categories, estimated cost, and currency.
- Start, end, and duration.
- Flexible metadata and tags JSON.

## `ai_observatory_spans`

One row represents a timed operation:

- Trace, span, and optional parent span UUIDs.
- Type, name, status, provider, and model.
- Per-trace sequence.
- Start, end, and duration.
- Nullable token categories and estimated cost.
- Request, response, and metadata JSON.
- Error type, message, and optional stack.

`trace_id` and `span_id` are unique together. Trace/sequence and common filter
columns are indexed.

## `ai_observatory_events`

One row represents an instant occurrence:

- Trace ID and optional span ID.
- Event type.
- Occurrence timestamp.
- Payload JSON.

## Deletion behavior

Span and event trace foreign keys restrict deletion. Maintenance repositories
delete events, spans, and then traces in bounded transactions.

The schema is portable across SQLite, MySQL, and PostgreSQL.
