---
title: Laravel AI SDK 1.0.0 event inventory
weight: 7
---

Verified on 2026-09-28 against the official `laravel/ai` v1.0.0 release,
commit `101c7ea33cd8569d82570f753fbf38e48b7d3d95`, and the installed Composer
package. See the [official event source](https://github.com/laravel/ai/tree/101c7ea33cd8569d82570f753fbf38e48b7d3d95/src/Events).

## New or changed Laravel-dispatched events

The following table lists every new or changed event contract relative to the
[0.10.1 inventory](sdk-events-v0.10.1.md). Other event constructors in that
inventory are unchanged. Names below are in `Laravel\Ai\Events`.

| Event             | Public constructor properties                                                                                                                                                   | Observatory mapping                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `AgentFailed`     | `invocationId: string`, `prompt: AgentPrompt`, `exception: Throwable`                                                                                                           | Failed root agent span and trace                                                |
| `AgentFailedOver` | `invocationId: string`, `agent: Agent`, `provider: Provider`, `model: string`, `exception: FailoverableException`                                                               | Correlated `provider_failed_over` event; invocation ID is new                   |
| `StartingStep`    | `invocationId: string`, `stepNumber: int`, `agent: Agent`, `provider: TextProvider`, `model: string`, `isFinalStep: bool`, `messages: array`, `options: ?TextGenerationOptions` | Start a model span under the agent                                              |
| `StepCompleted`   | `invocationId: string`, `stepNumber: int`, `agent: Agent`, `provider: TextProvider`, `model: string`, `isFinalStep: bool`, `response: StepResponse`, `time: float`              | Complete model span with text, tool calls, usage, and responding provider/model |
| `StepFailed`      | `invocationId: string`, `stepNumber: int`, `agent: Agent`, `provider: TextProvider`, `model: string`, `isFinalStep: bool`, `exception: Throwable`, `time: float`                | Fail the active model attempt                                                   |
| `ToolFailed`      | `invocationId: string`, `toolInvocationId: string`, `agent: Agent`, `tool: Tool`, `arguments: array`, `exception: Throwable`, `time: float`                                     | Fail the matching tool span                                                     |
| `ToolInvoked`     | `invocationId: string`, `toolInvocationId: string`, `agent: Agent`, `tool: Tool`, `arguments: array`, `result: mixed`, `time: float`                                            | Complete tool span; duration is new                                             |
| `Classifying`     | `invocationId: string`, `provider: Provider`, `model: string`, `prompt: ClassificationPrompt`                                                                                   | Start standalone classification trace/model span                                |
| `Classified`      | `invocationId: string`, `provider: Provider`, `model: string`, `prompt: ClassificationPrompt`, `response: ClassificationResponse`                                               | Complete classification with answers and usage                                  |

`time` is wall time in milliseconds, not seconds. `StepCompleted::$model` is
the requested model; the actual responding model comes from `response->meta`.
`StepResponse` also contains provider replay and reasoning fields, which are
not recorded. Step messages/history are intentionally not duplicated in model
payloads, so tool arguments/results cannot bypass their capture switches.

## Usage changes

Verified against the [response data classes](https://github.com/laravel/ai/tree/101c7ea33cd8569d82570f753fbf38e48b7d3d95/src/Responses/Data):

| Object               | Relevant public properties                                                                             | Normalization                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| `Usage`              | `inputTokens: int`, `outputTokens: int`                                                                | Inclusive totals; absent optional categories remain null                          |
| `TextUsage`          | Inherits `Usage`; `cacheReadInputTokens: ?int`, `cacheWriteInputTokens: ?int`, `reasoningTokens: ?int` | Cache subsets are separated from input once; reasoning remains a subset of output |
| `ImageUsage`         | Inherits `TextUsage`; `imageInputTokens: ?int`, `imageOutputTokens: ?int`                              | Image subsets retained as metadata, not added to totals                           |
| `TranscriptionUsage` | Inherits `TextUsage`; `audioSeconds: ?float`                                                           | Audio duration retained as metadata                                               |
| `RerankingUsage`     | Inherits `Usage`; `searchUnits: ?float`                                                                | Input-only usage and search-unit metadata                                         |

`EmbeddingsResponse` replaces the old `tokens` integer with `Usage $usage`.
`AudioResponse` adds `Usage $usage`. `RerankingResponse` adds
`RerankingUsage $usage`. Image and transcription responses use their specialized
usage classes. Text/step/classification responses use `TextUsage`.

The SDK does not return a monetary cost. Observatory continues to calculate
token-based estimates from the local pricing catalog.

## Correlation and streaming

- Both streamed and non-streamed model requests dispatch step events. One
  model span is created per attempt, with a unique ID even if failover restarts
  the step counter.
- Aggregate agent usage is not recorded again after step completion.
- Root agents and tools retain their SDK invocation IDs. Agent failover now
  has an explicit invocation ID; generic `ProviderFailedOver` still does not.
- Completed streamed responses expose stream lifecycle events. Root agent
  metadata records request start, first token, completion, and time to first
  token. Only events matching that agent invocation are used.
- Step-correlation state is scoped, cleared at terminal agent events, and reset
  at application termination. Unknown events are ignored safely.

## Remaining limitations

- Standalone media, embedding, classification, reranking, and storage operations
  do not gain dedicated failure events. Abandoned operations still require
  stale recovery, as do disconnected or terminated agent processes that never
  emit a terminal event.
- SDK middleware can return an answer without making a provider call. Such a
  response has no live model-step event; Observatory does not invent a model
  request or duplicate aggregate usage.
- Stream-event timestamps have second resolution. Model start/end timing uses
  local event observation; precise SDK call duration is retained separately.
- No raw reasoning text or hidden chain of thought is captured.
