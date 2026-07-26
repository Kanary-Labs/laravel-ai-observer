<?php

namespace Kanary\AiObservatory\Data;

use Carbon\CarbonImmutable;

final readonly class EventRecorded
{
    /** @param array<string, mixed> $payload */
    public function __construct(
        public ?string $traceId,
        public ?string $spanId,
        public string $eventType,
        public CarbonImmutable $occurredAt,
        public array $payload = [],
    ) {}
}
