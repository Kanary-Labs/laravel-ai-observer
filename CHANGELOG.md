# Changelog

All notable changes to this project are documented here.

## [Unreleased]

### Added

- Laravel AI SDK 1.0 support alongside SDK 0.10.1–0.10.3.
- Live model-step spans for streamed and non-streamed agents, including failed
  attempts and measured SDK durations.
- Terminal agent/tool failure capture and invocation-correlated agent failover.
- Classification traces and updated embedding, audio, reranking, image, and
  transcription usage support.
- SDK-version CI coverage, source inventory, and upgrade guidance for the
  upcoming 1.1 release. No schema migration is required from 1.0.1.

### Fixed

- Normalize SDK 1.x inclusive token totals without double-counting cache or
  reasoning usage; preserve nullable usage details.
- Resolve stateful step adapters from the active application scope and clear
  abandoned correlation state at termination.
- Preserve agent start time across failover and persist actual completion
  provider/model values for spans and traces.

## [1.0.1] - 2026-07-27

### Changed

- Added package-owned documentation with renderer-friendly navigation metadata.
- Restricted Tailwind content discovery to dashboard source files so
  documentation cannot affect generated dashboard assets.
- Added source-verified file and vector-store event coverage.
- Added compressed queue jobs with retries and deferred local fallback for
  oversized batches.
- Bounded sampling buffers and dashboard detail/filter-option queries.
- Preserved trace-list filters and pagination in dashboard URLs and lazily
  rendered collapsed JSON nodes.

### Fixed

- Redacted object-backed payloads before persistence and substituted invalid
  UTF-8 instead of dropping spans.
- Normalized provider cache-read/cache-write token semantics and enabled
  input-only operation pricing.
- Stored cache-write usage and long provider errors without schema truncation.
- Cleared abandoned trace and sampling context at request termination.
- Restored nested inline queue context and recovered nested tool completions.
- Resolved SDK listeners from the active application scope and avoided handling
  unrelated Laravel events.
- Added missing direct runtime dependencies and package archive exclusions.

## [1.0.0] - 2026-07-26

### Changed

- Promoted AI Observatory to its first stable release.
- Defined the semantic-versioning commitment for documented public APIs,
  extension contracts, configuration, commands, and stored trace schema.
- Updated the security policy to support the latest `1.x` release.

### Compatibility

- Runtime behavior is unchanged from `0.1.0`.
- Laravel AI SDK compatibility remains source verified and contract tested
  against version 0.10.1.

## [0.1.0] - 2026-07-26

### Added

- Source-verified adapters for Laravel AI SDK 0.10.1 agent, model, tool,
  provider, embedding, image, audio, transcription, and reranking events.
- Correlated traces and ordered parent-child spans with token, latency, error,
  streaming, and estimated-cost data.
- Synchronous, after-response, and queued persistence modes with queue-context
  propagation.
- Recursive and dot-path redaction, payload limits, sampling, capture controls,
  and production authorization.
- Trace list and detail dashboard with filtering, search, pagination, timeline,
  and protected JSON inspection.
- Install, status, prune, clear, and stale-recovery commands.
- Laravel 12 and 13 test matrix for SQLite, MySQL, and PostgreSQL.
- No-key Orchestra Testbench demo application.

### Changed

- Redesigned the trace dashboard around faster triage, progressive filtering,
  responsive trace rows, a time-scaled span waterfall, and tabbed payload
  inspection.

### Known limitations

- Compatibility is tested only against Laravel AI SDK 0.10.1.
- Interrupted streams remain running until stale recovery.
- Dedicated user and tenant resolver callbacks are not included in this
  preview.

[Unreleased]: https://github.com/Kanary-Labs/laravel-ai-observer/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/Kanary-Labs/laravel-ai-observer/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Kanary-Labs/laravel-ai-observer/releases/tag/v1.0.0
[0.1.0]: https://github.com/Kanary-Labs/laravel-ai-observer/releases/tag/v0.1.0
