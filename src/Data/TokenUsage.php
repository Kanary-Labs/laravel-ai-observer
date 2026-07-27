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
        public ?int $cacheWriteInput = null,
        public bool $inputIncludesCached = true,
        public bool $outputApplicable = true,
    ) {}

    /** @return array<string, bool|int|null> */
    public function toArray(): array
    {
        return [
            'input' => $this->input,
            'output' => $this->output,
            'cached_input' => $this->cachedInput,
            'cache_write_input' => $this->cacheWriteInput,
            'reasoning' => $this->reasoning,
            'total' => $this->total,
            'input_includes_cached' => $this->inputIncludesCached,
            'output_applicable' => $this->outputApplicable,
        ];
    }
}
