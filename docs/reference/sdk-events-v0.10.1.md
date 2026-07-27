---
title: Laravel AI SDK 0.10.1 event inventory
weight: 6
---

This inventory was verified on 2026-07-26 against:

- Installed package: `laravel/ai` `v0.10.1`
- Release commit: `47f0ffdb86639f710eb93fcdf1bd07635599f270`
- Official `0.x` branch commit: `18d574e859d3eaebb73244c4774f1ecce1e59fb8`

The event class definitions in the installed release and the inspected `0.x`
branch were identical at the time of inspection.

## Laravel-dispatched events

These objects are dispatched through Laravel's event dispatcher by the SDK.
Properties are the public properties declared by the verified source.

| Event                     | Lifecycle            | Public properties                                                                                                                                                |
| ------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AddingFileToStore`       | start                | `invocationId: string`, `provider: Provider`, `storeId: string`, `fileId: string`                                                                                |
| `AgentFailedOver`         | failover             | `agent: Agent`, `provider: Provider`, `model: string`, `exception: FailoverableException`                                                                        |
| `AgentPrompted`           | completion           | `invocationId: string`, `prompt: AgentPrompt`, `response: AgentResponse\|StreamedAgentResponse`                                                                  |
| `AgentStreamed`           | streaming completion | Inherits `AgentPrompted` properties                                                                                                                              |
| `AudioGenerated`          | completion           | `invocationId: string`, `provider: Provider`, `model: string`, `prompt: AudioPrompt`, `response: AudioResponse`                                                  |
| `CreatingStore`           | start                | `invocationId: string`, `provider: Provider`, `name: string`, `description: ?string`, `fileIds: Collection`, `expiresWhenIdleFor: ?DateInterval`                 |
| `EmbeddingsGenerated`     | completion           | `invocationId: string`, `provider: Provider`, `model: string`, `prompt: EmbeddingsPrompt`, `response: EmbeddingsResponse`                                        |
| `FileAddedToStore`        | completion           | `invocationId: string`, `provider: Provider`, `storeId: string`, `fileId: string`, `documentId: string`                                                          |
| `FileDeleted`             | completion only      | `invocationId: string`, `provider: Provider`, `fileId: string`                                                                                                   |
| `FileRemovedFromStore`    | completion           | `invocationId: string`, `provider: Provider`, `storeId: string`, `documentId: string`                                                                            |
| `FileStored`              | completion           | `invocationId: string`, `provider: Provider`, `file: StorableFile`, `response: StoredFileResponse`                                                               |
| `GeneratingAudio`         | start                | `invocationId: string`, `provider: Provider`, `model: string`, `prompt: AudioPrompt`                                                                             |
| `GeneratingEmbeddings`    | start                | `invocationId: string`, `provider: Provider`, `model: string`, `prompt: EmbeddingsPrompt`                                                                        |
| `GeneratingImage`         | start                | `invocationId: string`, `provider: Provider`, `model: string`, `prompt: ImagePrompt`                                                                             |
| `GeneratingTranscription` | start                | `invocationId: string`, `provider: Provider`, `model: string`, `prompt: TranscriptionPrompt`                                                                     |
| `ImageGenerated`          | completion           | `invocationId: string`, `provider: Provider`, `model: string`, `prompt: ImagePrompt`, `response: ImageResponse`                                                  |
| `InvokingTool`            | start                | `invocationId: string`, `toolInvocationId: string`, `agent: Agent`, `tool: Tool`, `arguments: array`                                                             |
| `PromptingAgent`          | start                | `invocationId: string`, `prompt: AgentPrompt`                                                                                                                    |
| `ProviderFailedOver`      | failover             | `provider: Provider`, `model: string`, `exception: FailoverableException`                                                                                        |
| `RemovingFileFromStore`   | start                | `invocationId: string`, `provider: Provider`, `storeId: string`, `documentId: string`                                                                            |
| `Reranked`                | completion           | `invocationId: string`, `provider: Provider`, `model: string`, `prompt: RerankingPrompt`, `response: RerankingResponse`                                          |
| `Reranking`               | start                | `invocationId: string`, `provider: Provider`, `model: string`, `prompt: RerankingPrompt`                                                                         |
| `StoreCreated`            | completion           | `invocationId: string`, `provider: Provider`, `name: string`, `description: ?string`, `fileIds: Collection`, `expiresWhenIdleFor: ?DateInterval`, `store: Store` |
| `StoreDeleted`            | completion only      | `invocationId: string`, `provider: Provider`, `storeId: string`                                                                                                  |
| `StoringFile`             | start                | `invocationId: string`, `provider: Provider`, `file: StorableFile`                                                                                               |
| `StreamingAgent`          | streaming start      | Inherits `PromptingAgent` properties                                                                                                                             |
| `ToolApprovalRequested`   | instant              | `invocationId: string`, `agent: Agent`, `pendingApprovals: Collection`, `conversationId: ?string`, `conversationUser: ?object`                                   |
| `ToolApprovalResolved`    | instant              | `invocationId: string`, `agent: Agent`, `toolResults: Collection`, `conversationId: ?string`, `conversationUser: ?object`                                        |
| `ToolInvoked`             | completion           | `invocationId: string`, `toolInvocationId: string`, `agent: Agent`, `tool: Tool`, `arguments: array`, `result: mixed`                                            |
| `TranscriptionGenerated`  | completion           | `invocationId: string`, `provider: Provider`, `model: string`, `prompt: TranscriptionPrompt`, `response: TranscriptionResponse`                                  |

## Stream response events

These classes are yielded by a streamed response. They are not individually
dispatched through Laravel's event dispatcher. A completed `AgentStreamed`
event exposes them through `StreamedAgentResponse::$events`.

Every concrete stream event also inherits `invocationId: ?string` from
`StreamEvent`.

| Event                 | Meaning                          | Constructor properties                                           |
| --------------------- | -------------------------------- | ---------------------------------------------------------------- |
| `Citation`            | citation emitted                 | `id`, `messageId`, `citation`, `timestamp`                       |
| `Error`               | stream error                     | `id`, `type`, `message`, `recoverable`, `timestamp`, `metadata`  |
| `ProviderToolEvent`   | provider-native tool lifecycle   | `id`, `itemId`, `type`, `data`, `status`, `timestamp`            |
| `ReasoningDelta`      | provider-visible reasoning delta | `id`, `reasoningId`, `delta`, `timestamp`, `summary`             |
| `ReasoningEnd`        | provider-visible reasoning end   | `id`, `reasoningId`, `timestamp`, `summary`                      |
| `ReasoningStart`      | provider-visible reasoning start | `id`, `reasoningId`, `timestamp`                                 |
| `StreamEnd`           | stream completion and usage      | `id`, `reason`, `usage`, `timestamp`                             |
| `StreamStart`         | provider stream start            | `id`, `provider`, `model`, `timestamp`, `metadata`               |
| `TextDelta`           | response text delta              | `id`, `messageId`, `delta`, `timestamp`                          |
| `TextEnd`             | response text end                | `id`, `messageId`, `timestamp`                                   |
| `TextStart`           | response text start              | `id`, `messageId`, `timestamp`                                   |
| `ToolApprovalRequest` | streamed approval request        | `id`, `pendingApprovals`, `timestamp`, `providerContentBlocks`   |
| `ToolCall`            | streamed tool call               | `id`, `toolCall`, `timestamp`                                    |
| `ToolResult`          | streamed tool result             | `id`, `toolResult`, `successful`, `error`, `timestamp`, `denied` |

`StreamEvent` itself is abstract and provides the mutable
`invocationId: ?string` correlation property.

## Observability mapping

| Observatory need                                | Verified SDK source                                                                                           |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Agent start                                     | `PromptingAgent`; `StreamingAgent` for streaming                                                              |
| Agent completion                                | `AgentPrompted`; `AgentStreamed` for streaming                                                                |
| Agent failure                                   | No terminal failure event is dispatched                                                                       |
| Provider failover                               | `AgentFailedOver` for agents; `ProviderFailedOver` for other pending operations                               |
| Tool start                                      | `InvokingTool`                                                                                                |
| Tool completion                                 | `ToolInvoked`                                                                                                 |
| Tool failure                                    | No dedicated Laravel event; a thrown tool exception prevents `ToolInvoked`                                    |
| Model/provider                                  | `AgentPrompt::$provider` and `$model`; final provider/model are also available from `AgentResponse::$meta`    |
| Per-model-step data                             | `AgentResponse::$steps`, whose `Step` values contain text, tool calls/results, finish reason, usage, and meta |
| Per-model-step start timing                     | No dispatched event                                                                                           |
| Aggregate non-stream usage                      | `AgentResponse::$usage`                                                                                       |
| Per-step non-stream usage                       | Each `AgentResponse::$steps[*]->usage`                                                                        |
| Streaming provider/model                        | `StreamStart` values in `StreamedAgentResponse::$events`                                                      |
| Streaming usage                                 | `StreamEnd::$usage`; the response combines all stream-end usage                                               |
| First token timing                              | Timestamp on the first `TextDelta` in the completed streamed response                                         |
| Streaming error                                 | `Streaming\Events\Error` inside the completed response when available                                         |
| Image, audio, transcription, embeddings, rerank | Paired start/completion events listed above                                                                   |

## Compatibility constraints

- The SDK does not dispatch a terminal agent or tool failure event. A start event
  may therefore remain running after an exception. The Observatory must recover
  stale spans and must not claim exact terminal failure capture from SDK events
  alone.
- A non-streamed tool-calling agent may make multiple provider requests inside
  one agent invocation. The SDK exposes those model steps only on the completed
  response; it does not dispatch a model-request-start event for every step.
- `ProviderFailedOver` has no invocation ID. Correlation is only reliable when
  the package has an active trace context.
- `AgentFailedOver` extends `ProviderFailedOver` but replaces its constructor and
  adds `agent`; adapters must test the subclass before the parent class.
- Streaming delta events should be aggregated. They must not become one database
  row per token.
- The SDK's `Usage` object defaults missing provider categories to integer zero.
  The adapter cannot distinguish a provider-reported zero from a category the
  SDK did not expose; that loss of information is an upstream limitation.
