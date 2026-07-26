<?php

namespace Kanary\AiObservatory\Adapters;

use Kanary\AiObservatory\Adapters\Concerns\MapsLaravelAiV010Data;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Laravel\Ai\Events\InvokingTool;
use Laravel\Ai\Events\ToolInvoked;
use Laravel\Ai\Tools\McpServerTool;
use Laravel\Ai\Tools\McpTool;
use Laravel\Ai\Tools\ToolNameResolver;

class ToolEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiV010Data;

    public function supports(object $event): bool
    {
        return $event instanceof InvokingTool || $event instanceof ToolInvoked;
    }

    public function adapt(object $event): array
    {
        return match (true) {
            $event instanceof ToolInvoked => [$this->finished($event)],
            $event instanceof InvokingTool => [$this->started($event)],
            default => [],
        };
    }

    private function started(InvokingTool $event): SpanStarted
    {
        return new SpanStarted(
            traceId: $event->invocationId,
            spanId: $event->toolInvocationId,
            parentSpanId: $event->invocationId,
            type: $this->type($event->tool),
            name: ToolNameResolver::resolve($event->tool),
            startedAt: $this->now(),
            request: ['arguments' => $event->arguments],
            attributes: ['agent_class' => $event->agent::class],
        );
    }

    private function finished(ToolInvoked $event): SpanFinished
    {
        return new SpanFinished(
            traceId: $event->invocationId,
            spanId: $event->toolInvocationId,
            endedAt: $this->now(),
            status: SpanStatus::Successful,
            response: ['result' => $event->result],
            attributes: [
                'tool_name' => ToolNameResolver::resolve($event->tool),
                'agent_class' => $event->agent::class,
            ],
        );
    }

    private function type(object $tool): SpanType
    {
        return $tool instanceof McpTool || $tool instanceof McpServerTool
            ? SpanType::Mcp
            : SpanType::Tool;
    }
}
