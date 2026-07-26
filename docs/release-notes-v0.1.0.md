# AI Observatory 0.1.0

The first preview delivers local trace debugging for applications using
Laravel AI SDK 0.10.1. It records correlated agent, model, tool, media, and
retrieval operations without requiring applications to replace the SDK API.

The release includes a searchable trace list, parent-child timeline, protected
payload viewer, token and latency aggregation, configurable cost estimates,
three persistence modes, streaming timing, stale recovery, privacy controls,
and maintenance commands.

This is a preview. Validate capture settings, authorization, database capacity,
queue behavior, and retention against your production requirements. Prompts,
responses, and tool payloads may contain sensitive information.

See the [changelog](../CHANGELOG.md), [security policy](../SECURITY.md), and
[compatibility inventory](sdk-events-v0.10.1.md).
