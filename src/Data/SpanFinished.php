<?php

namespace Kanary\AiObservatory\Data;

use Carbon\CarbonImmutable;
use Kanary\AiObservatory\Enums\SpanStatus;

final readonly class SpanFinished
{
    /**
     * @param  array<string, mixed>  $response
     * @param  array<string, mixed>  $attributes
     */
    public function __construct(
        public string $traceId,
        public string $spanId,
        public CarbonImmutable $endedAt,
        public SpanStatus $status,
        public array $response = [],
        public ?TokenUsage $usage = null,
        public ?ThrowableData $error = null,
        public array $attributes = [],
    ) {}
}
