<?php

namespace Kanary\AiObservatory\Data;

use Carbon\CarbonImmutable;

final readonly class TraceStarted
{
    /** @param array<string, mixed> $attributes */
    public function __construct(
        public string $traceId,
        public string $spanId,
        public string $name,
        public CarbonImmutable $startedAt,
        public array $attributes = [],
    ) {}
}
