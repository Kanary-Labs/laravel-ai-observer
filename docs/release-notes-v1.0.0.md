---
title: AI Observatory 1.0.0 release notes
navigation: false
---

AI Observatory 1.0.0 is the first stable release of the local observability and
debugging package for applications using the official Laravel AI SDK.

It records correlated agent, model, tool, media, and retrieval operations
without requiring applications to replace the SDK API. The package includes a
searchable trace dashboard, parent-child timeline, protected payload viewer,
token and latency aggregation, configurable cost estimates, three persistence
modes, streaming timing, stale recovery, privacy controls, and maintenance
commands.

This release establishes a semantic-versioning commitment for documented
public APIs, extension contracts, configuration keys, Artisan commands, and the
stored trace schema. Runtime behavior is unchanged from 0.1.0.

Laravel AI SDK compatibility remains source verified and contract tested
against version 0.10.1. Future SDK compatibility changes remain isolated behind
the package adapter layer.

AI prompts, responses, and tool payloads may contain sensitive information.
Review capture settings, redaction, authorization, database capacity, queue
behavior, and retention before enabling the package in production.

See the [changelog](../CHANGELOG.md), [security policy](../SECURITY.md), and
[compatibility inventory](reference/sdk-events-v0.10.1.md).
