<?php

namespace Kanary\AiObservatory\Data;

final readonly class TokenUsage
{
    public function __construct(
        public ?int $input = null,
        public ?int $output = null,
        public ?int $cachedInput = null,
        public ?int $reasoning = null,
        public ?int $total = null,
    ) {}

    /** @return array<string, int|null> */
    public function toArray(): array
    {
        return [
            'input' => $this->input,
            'output' => $this->output,
            'cached_input' => $this->cachedInput,
            'reasoning' => $this->reasoning,
            'total' => $this->total,
        ];
    }
}
