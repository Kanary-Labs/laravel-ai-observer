---
title: Searching and filtering traces
weight: 2
---

The trace explorer supports free-text search across:

- Trace ID and trace name.
- Agent class.
- Provider and model.
- Feature, user ID, and tenant ID.
- Span names and error messages.
- Stored request and response payload text.

Search escapes database wildcard characters before querying.

## Filters

Available filters include:

- Status.
- Provider.
- Model.
- Agent class.
- Span type.
- Feature.
- User ID.
- Tenant ID.
- Has error.
- Has tool calls.
- Minimum duration.
- Start and end date.

Filter choices for status, provider, model, agent, feature, and span type are
derived from stored data.

Results are ordered by newest start time and paginated. The API accepts up to
100 traces per page; the dashboard uses a smaller default for responsive
interaction.

Search may inspect JSON payload columns. On a large production dataset, combine
sampling, retention, and selective capture to keep those queries practical.
