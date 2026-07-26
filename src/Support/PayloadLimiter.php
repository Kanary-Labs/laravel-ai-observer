<?php

namespace Kanary\AiObservatory\Support;

class PayloadLimiter
{
    public function __construct(private readonly int $maxBytes) {}

    /**
     * @param  array<array-key, mixed>  $payload
     * @return array<array-key, mixed>
     */
    public function limit(array $payload): array
    {
        $encoded = json_encode($payload, JSON_THROW_ON_ERROR);
        $bytes = strlen($encoded);

        if ($bytes <= $this->maxBytes) {
            $normalized = json_decode($encoded, true, flags: JSON_THROW_ON_ERROR);

            return is_array($normalized) ? $normalized : [];
        }

        return [
            '_truncated' => true,
            '_original_bytes' => $bytes,
        ];
    }
}
