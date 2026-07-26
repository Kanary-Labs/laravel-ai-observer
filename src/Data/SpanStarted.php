<?php

namespace Kanary\AiObservatory\Data;

use Carbon\CarbonImmutable;
use Kanary\AiObservatory\Enums\SpanType;

final readonly class SpanStarted
{
    /**
     * @param  array<string, mixed>  $request
     * @param  array<string, mixed>  $attributes
     */
    public function __construct(
        public string $traceId,
        public string $spanId,
        public ?string $parentSpanId,
        public SpanType $type,
        public string $name,
        public CarbonImmutable $startedAt,
        public array $request = [],
        public array $attributes = [],
    ) {}
}
