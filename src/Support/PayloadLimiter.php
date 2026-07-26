<?php

namespace Kanary\AiObservatory\Support;

class PayloadLimiter
{
    public function __construct(private readonly int $maxBytes) {}

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    public function limit(array $payload): array
    {
        $encoded = json_encode($payload, JSON_THROW_ON_ERROR);
        $bytes = strlen($encoded);

        if ($bytes <= $this->maxBytes) {
            return $payload;
        }

        return [
            '_truncated' => true,
            '_original_bytes' => $bytes,
        ];
    }
}
