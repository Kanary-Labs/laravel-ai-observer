# AI Observatory 1.1.0

This release adds Laravel AI SDK 1.0 compatibility while keeping SDK 0.10
applications supported.

## What's new

- Live model-step spans for streamed and non-streamed runs, including failures.
- Immediate terminal agent/tool failure capture and explicit failover correlation.
- Updated token normalization for inclusive input/output totals and nullable
  cache/reasoning details, without double-counting aggregate agent usage.
- Classification traces, updated media/embedding/reranking usage, and modality
  metadata such as image-token counts, audio seconds, and search units.
- Scoped step correlation, failover timing preservation, and actual responding
  provider/model values in trace and span summaries.

SDK 0.10.1, 0.10.2, 0.10.3, and 1.0.0 are in the compatibility test matrix.
Other accepted versions are labeled untested until verified.

## Upgrade notes

No new schema migration or configuration key is required when upgrading from
Observatory 1.0.1. SDK 0.10 applications can upgrade Observatory independently.
To adopt SDK 1.x, update the application's SDK constraint and test its direct
use of SDK response constructors and usage fields.

Restart long-running workers after deployment. Review the
[upgrade guide](upgrading.md) and [SDK 1.0 inventory](reference/sdk-events-v1.0.0.md).

Costs still require an application-managed pricing catalog. This release does
not fetch prices or infer billed amounts. Interrupted processes and standalone
operations without failure events still require stale recovery.
