<?php

namespace Kanary\AiObservatory\Adapters;

use Carbon\CarbonImmutable;
use Kanary\AiObservatory\Adapters\Concerns\MapsLaravelAiData;
use Kanary\AiObservatory\Data\EventRecorded;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\ThrowableData;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Enums\TraceStatus;
use Laravel\Ai\Events\AgentFailed;
use Laravel\Ai\Events\AgentFailedOver;
use Laravel\Ai\Events\AgentPrompted;
use Laravel\Ai\Events\AgentStreamed;
use Laravel\Ai\Events\PromptingAgent;
use Laravel\Ai\Events\StreamingAgent;
use Laravel\Ai\Events\ToolApprovalRequested;
use Laravel\Ai\Events\ToolApprovalResolved;
use Laravel\Ai\Responses\StreamedAgentResponse;
use Laravel\Ai\Streaming\Events\Error as StreamError;
use Laravel\Ai\Streaming\Events\StreamEnd;
use Laravel\Ai\Streaming\Events\StreamStart;
use Laravel\Ai\Streaming\Events\TextDelta;

class AgentEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiData;

    public function supports(object $event): bool
    {
        return $event instanceof PromptingAgent
            || $event instanceof AgentPrompted
            || $event instanceof AgentFailedOver
            || $event instanceof AgentFailed
            || $event instanceof ToolApprovalRequested
            || $event instanceof ToolApprovalResolved;
    }

    public function adapt(object $event): array
    {
        return match (true) {
            $event instanceof AgentFailed => $this->failed($event),
            $event instanceof AgentFailedOver => [$this->failedOver($event)],
            $event instanceof ToolApprovalRequested => [$this->approvalRequested($event)],
            $event instanceof ToolApprovalResolved => [$this->approvalResolved($event)],
            $event instanceof AgentPrompted => $this->finished($event),
            $event instanceof PromptingAgent => $this->started($event),
            default => [],
        };
    }

    /** @return list<object> */
    private function failed(AgentFailed $event): array
    {
        $now = $this->now();
        $error = ThrowableData::fromThrowable($event->exception);
        $attributes = [
            'provider' => $event->prompt->provider->name(),
            'model' => $event->prompt->model,
        ];

        return [
            new SpanFinished($event->invocationId, $event->invocationId, $now, SpanStatus::Failed, error: $error, attributes: $attributes),
            new TraceFinished($event->invocationId, $now, TraceStatus::Failed, error: $error, attributes: $attributes),
        ];
    }

    /** @return list<object> */
    private function started(PromptingAgent $event): array
    {
        $now = $this->now();
        $agentClass = $event->prompt->agent::class;
        $provider = $this->providerName($event->prompt->provider);
        $attributes = [
            'operation' => 'agent.prompt',
            'agent_class' => $agentClass,
            'provider' => $provider,
            'model' => $event->prompt->model,
            'sdk_invocation_id' => $event->invocationId,
            'streaming' => $event instanceof StreamingAgent,
        ];

        return [
            new TraceStarted(
                traceId: $event->invocationId,
                spanId: $event->invocationId,
                name: class_basename($agentClass).' prompt',
                startedAt: $now,
                attributes: $attributes,
            ),
            new SpanStarted(
                traceId: $event->invocationId,
                spanId: $event->invocationId,
                parentSpanId: null,
                type: SpanType::Agent,
                name: $agentClass,
                startedAt: $now,
                request: [
                    'prompt' => $event->prompt->prompt,
                    'attachments_count' => $event->prompt->attachments->count(),
                ],
                attributes: $attributes,
            ),
        ];
    }

    /** @return list<object> */
    private function finished(AgentPrompted $event): array
    {
        $now = $this->now();
        $streamError = $event->response instanceof StreamedAgentResponse
            ? $event->response->events
                ->whereInstanceOf(StreamError::class)
                ->first(fn (StreamError $error): bool => $error->invocationId === $event->invocationId && ! $error->recoverable)
            : null;
        $failed = $streamError instanceof StreamError;
        $error = $failed
            ? new ThrowableData($streamError->type, $streamError->message)
            : null;
        $attributes = [
            'provider' => $event->response->meta->provider,
            'model' => $event->response->meta->model,
            'streaming' => $event instanceof AgentStreamed,
        ];

        // SDK 1.x models are recorded per step; keep aggregate stream timing on the agent.
        if ($event->response instanceof StreamedAgentResponse) {
            $events = $event->response->events->filter(fn ($item): bool => $item->invocationId === $event->invocationId);
            $start = $events->whereInstanceOf(StreamStart::class)->first();
            $first = $events->whereInstanceOf(TextDelta::class)->first();
            $end = $events->whereInstanceOf(StreamEnd::class)->last();

            if ($start instanceof StreamStart) {
                $attributes['request_started_at'] = CarbonImmutable::createFromTimestamp($start->timestamp)->toIso8601String();
                $attributes['first_token_at'] = $first instanceof TextDelta
                    ? CarbonImmutable::createFromTimestamp($first->timestamp)->toIso8601String()
                    : null;
                $attributes['time_to_first_token_ms'] = $first instanceof TextDelta
                    ? max(0, ($first->timestamp - $start->timestamp) * 1000)
                    : null;
                $attributes['response_completed_at'] = $end instanceof StreamEnd
                    ? CarbonImmutable::createFromTimestamp($end->timestamp)->toIso8601String()
                    : $now->toIso8601String();
            }
        }

        return [
            new SpanFinished(
                traceId: $event->invocationId,
                spanId: $event->invocationId,
                endedAt: $now,
                status: $failed ? SpanStatus::Failed : SpanStatus::Successful,
                response: [
                    'text' => $event->response->text,
                    'pending_approvals' => $event->response->pendingApprovals->count(),
                ],
                error: $error,
                attributes: $attributes,
            ),
            new TraceFinished(
                traceId: $event->invocationId,
                endedAt: $now,
                status: $failed ? TraceStatus::Failed : TraceStatus::Successful,
                error: $error,
                attributes: $attributes,
            ),
        ];
    }

    private function failedOver(AgentFailedOver $event): EventRecorded
    {
        return new EventRecorded(
            traceId: $event->invocationId ?? null,
            spanId: $event->invocationId ?? null,
            eventType: 'provider_failed_over',
            occurredAt: $this->now(),
            payload: [
                'agent_class' => $event->agent::class,
                'provider' => $event->provider->name(),
                'model' => $event->model,
                'error' => ThrowableData::fromThrowable($event->exception),
            ],
        );
    }

    private function approvalRequested(ToolApprovalRequested $event): EventRecorded
    {
        return new EventRecorded(
            traceId: $event->invocationId,
            spanId: $event->invocationId,
            eventType: 'approval_requested',
            occurredAt: $this->now(),
            payload: [
                'count' => $event->pendingApprovals->count(),
                'conversation_id' => $event->conversationId,
            ],
        );
    }

    private function approvalResolved(ToolApprovalResolved $event): EventRecorded
    {
        return new EventRecorded(
            traceId: $event->invocationId,
            spanId: $event->invocationId,
            eventType: 'approval_resolved',
            occurredAt: $this->now(),
            payload: [
                'count' => $event->toolResults->count(),
                'conversation_id' => $event->conversationId,
            ],
        );
    }
}
