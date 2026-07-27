---
title: Controlling captured data
weight: 1
---

Capture controls are configured in `config/ai-observatory.php`:

```php
'capture' => [
    'prompts' => true,
    'responses' => true,
    'tool_arguments' => true,
    'tool_results' => true,
    'embeddings' => false,
    'stack_traces' => false,
],
```

Disable any payload category your application does not need.

## Prompts

When prompt capture is disabled, prompt-like request fields used by supported
adapters are removed before persistence.

## Responses

When response capture is disabled, response text is removed. Structural
metadata such as finish reason and counts may remain.

## Tool data

Disabling tool arguments removes them from tool-span requests and from model
response tool calls. Disabling tool results removes tool result payloads.

## Stack traces

Stack traces are disabled by default. When enabled, they are still passed
through redaction and payload limiting before storage.

## Embeddings

Raw embedding vectors are never stored by AI Observatory 1.x. The package
records input metadata, token count, embedding count, and explicitly reports
that vectors were not recorded. Keep `capture.embeddings` disabled.
