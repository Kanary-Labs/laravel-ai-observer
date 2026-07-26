<?php

namespace Kanary\AiObservatory\Sampling;

use Carbon\CarbonImmutable;
use Kanary\AiObservatory\Contracts\Recorder;
use Kanary\AiObservatory\Contracts\Sampler;
use Kanary\AiObservatory\Data\EventRecorded;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\TraceStatus;
use Kanary\AiObservatory\Recording\DatabaseRecorder;

final class SamplingRecorder implements Recorder
{
    /**
     * @var array<string, array{
     *     sampled: bool,
     *     started_at: CarbonImmutable,
     *     buffer: bool,
     *     always_record_failures: bool,
     *     slow_threshold_ms: int|null,
     *     events: list<object>
     * }>
     */
    private array $traces = [];

    /** @var list<string> */
    private array $activeTraces = [];

    public function __construct(
        private readonly DatabaseRecorder $recorder,
        private readonly Sampler $sampler,
    ) {}

    public function record(object $event): void
    {
        if ($event instanceof TraceStarted) {
            $this->start($event);

            return;
        }

        $traceId = $this->traceId($event);

        if ($traceId === null || ! isset($this->traces[$traceId])) {
            return;
        }

        $state = &$this->traces[$traceId];

        if ($state['sampled']) {
            $this->recorder->record($event);
        } elseif ($state['buffer']) {
            $state['events'][] = $event;
        }

        if ($event instanceof TraceFinished) {
            if (! $state['sampled'] && $this->shouldPromote($state, $event)) {
                foreach ($state['events'] as $bufferedEvent) {
                    $this->recorder->record($bufferedEvent);
                }
            }

            unset($state, $this->traces[$traceId]);
            $this->finish($traceId);
        }
    }

    private function start(TraceStarted $event): void
    {
        if (isset($this->traces[$event->traceId])) {
            return;
        }

        $rate = (float) config('ai-observatory.sampling.rate', 1.0);
        $sampled = $this->sampler->shouldSample($event->traceId, $rate);
        $alwaysRecordFailures = (bool) config(
            'ai-observatory.sampling.always_record_failures',
            true,
        );
        $slowThreshold = config(
            'ai-observatory.sampling.always_record_slow_traces_ms',
        );
        $slowThreshold = is_numeric($slowThreshold) && (int) $slowThreshold > 0
            ? (int) $slowThreshold
            : null;
        $buffer = ! $sampled && ($alwaysRecordFailures || $slowThreshold !== null);

        $this->traces[$event->traceId] = [
            'sampled' => $sampled,
            'started_at' => $event->startedAt,
            'buffer' => $buffer,
            'always_record_failures' => $alwaysRecordFailures,
            'slow_threshold_ms' => $slowThreshold,
            'events' => $buffer ? [$event] : [],
        ];
        $this->activeTraces[] = $event->traceId;

        if ($sampled) {
            $this->recorder->record($event);
        }
    }

    /**
     * @param  array{
     *     sampled: bool,
     *     started_at: CarbonImmutable,
     *     buffer: bool,
     *     always_record_failures: bool,
     *     slow_threshold_ms: int|null,
     *     events: list<object>
     * }  $state
     */
    private function shouldPromote(array $state, TraceFinished $event): bool
    {
        if (
            $state['always_record_failures']
            && in_array($event->status, [TraceStatus::Failed, TraceStatus::Cancelled], true)
        ) {
            return true;
        }

        return $state['slow_threshold_ms'] !== null
            && $state['started_at']->diffInMilliseconds($event->endedAt, true)
                >= $state['slow_threshold_ms'];
    }

    private function traceId(object $event): ?string
    {
        return match (true) {
            $event instanceof SpanStarted,
            $event instanceof SpanFinished,
            $event instanceof TraceFinished => $event->traceId,
            $event instanceof EventRecorded => $event->traceId ?? $this->currentTraceId(),
            default => null,
        };
    }

    private function currentTraceId(): ?string
    {
        return $this->activeTraces[array_key_last($this->activeTraces)] ?? null;
    }

    private function finish(string $traceId): void
    {
        $position = array_search($traceId, $this->activeTraces, true);

        if ($position !== false) {
            array_splice($this->activeTraces, $position, 1);
        }
    }
}
