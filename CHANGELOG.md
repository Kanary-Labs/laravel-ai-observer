# Changelog

All notable changes to this project are documented here.

## [Unreleased]

### Changed

- Redesigned the trace dashboard around faster triage, progressive filtering,
  responsive trace rows, a time-scaled span waterfall, and tabbed payload
  inspection.

## [0.1.0] - upcoming

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

### Known limitations

- Compatibility is tested only against Laravel AI SDK 0.10.1.
- Interrupted streams remain running until stale recovery.
- Dedicated user and tenant resolver callbacks are not included in this
  preview.

[Unreleased]: https://github.com/Kanary-Labs/laravel-ai-observer/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/Kanary-Labs/laravel-ai-observer/releases/tag/v0.1.0
