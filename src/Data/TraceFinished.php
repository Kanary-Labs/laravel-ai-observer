<?php

namespace Kanary\AiObservatory\Data;

use Carbon\CarbonImmutable;
use Kanary\AiObservatory\Enums\TraceStatus;

final readonly class TraceFinished
{
    /** @param array<string, mixed> $attributes */
    public function __construct(
        public string $traceId,
        public CarbonImmutable $endedAt,
        public TraceStatus $status,
        public ?ThrowableData $error = null,
        public array $attributes = [],
    ) {}
}
