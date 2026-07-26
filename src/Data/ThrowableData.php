<?php

namespace Kanary\AiObservatory\Data;

use Throwable;

final readonly class ThrowableData
{
    public function __construct(
        public string $type,
        public string $message,
        public ?string $stack = null,
    ) {}

    public static function fromThrowable(Throwable $throwable, bool $includeStack = false): self
    {
        return new self(
            type: $throwable::class,
            message: $throwable->getMessage(),
            stack: $includeStack ? $throwable->getTraceAsString() : null,
        );
    }
}
