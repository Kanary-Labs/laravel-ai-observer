---
title: Introduction
weight: 1
---

AI Observatory is a local observability and debugging package for applications
using the official Laravel AI SDK. Once installed, it listens to supported SDK
events and records AI operations without requiring you to replace the SDK API.

```php
$response = SupportAgent::make()->prompt($message);
```

The same call continues to execute through Laravel AI. AI Observatory observes
the events emitted around it and builds a trace containing the agent run, model
steps, tool calls, streaming lifecycle, token usage, latency, errors, and
provider failover information that the SDK makes available.

## What you can inspect

The dashboard helps answer:

- Which agent, provider, and model ran?
- What prompt and response were recorded?
- Which tools were called, with which arguments and results?
- How many tokens were used and what did they cost?
- How long did the trace and its individual operations take?
- Did streaming, approval, or provider failover events occur?
- Which user, tenant, and application feature initiated the work?

AI Observatory also records embeddings, reranking, image generation, audio
generation, and transcription operations when the installed SDK emits their
supported events.

## It is not an AI framework

AI Observatory does not provide agents, prompts, tools, provider clients, or
model routing. Continue using Laravel AI directly. The package is responsible
only for capturing, storing, and presenting observability data.

## Privacy comes first

Prompts, responses, tool arguments, and tool results may contain credentials,
personal information, and internal business data. Review capture controls,
redaction rules, authorization, and retention before enabling recording outside
a local environment.

Continue with [Base installation](installation-setup.md), then record your
[first trace](basic-usage/recording-your-first-trace.md).
