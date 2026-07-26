<?php

namespace Kanary\AiObservatory\Adapters;

use Kanary\AiObservatory\Adapters\Concerns\MapsLaravelAiV010Data;
use Kanary\AiObservatory\Data\EventRecorded;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\ThrowableData;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Enums\TraceStatus;
use Laravel\Ai\Events\AgentFailedOver;
use Laravel\Ai\Events\AgentPrompted;
use Laravel\Ai\Events\AgentStreamed;
use Laravel\Ai\Events\PromptingAgent;
use Laravel\Ai\Events\StreamingAgent;
use Laravel\Ai\Events\ToolApprovalRequested;
use Laravel\Ai\Events\ToolApprovalResolved;
use Laravel\Ai\Responses\StreamedAgentResponse;
use Laravel\Ai\Streaming\Events\Error as StreamError;

class AgentEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiV010Data;

    public function supports(object $event): bool
    {
        return $event instanceof PromptingAgent
            || $event instanceof AgentPrompted
            || $event instanceof AgentFailedOver
            || $event instanceof ToolApprovalRequested
            || $event instanceof ToolApprovalResolved;
    }

    public function adapt(object $event): array
    {
        return match (true) {
            $event instanceof AgentFailedOver => [$this->failedOver($event)],
            $event instanceof ToolApprovalRequested => [$this->approvalRequested($event)],
            $event instanceof ToolApprovalResolved => [$this->approvalResolved($event)],
            $event instanceof AgentPrompted => $this->finished($event),
            $event instanceof PromptingAgent => $this->started($event),
            default => [],
        };
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
                ->first(fn (StreamError $error): bool => ! $error->recoverable)
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
            traceId: null,
            spanId: null,
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
