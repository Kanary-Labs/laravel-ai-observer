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
        $encoded = $this->encode($payload);
        $bytes = strlen($encoded);

        if ($bytes <= $this->maxBytes) {
            return $this->decode($encoded);
        }

        return [
            '_truncated' => true,
            '_original_bytes' => $bytes,
        ];
    }

    /**
     * Convert JSON-serializable objects and collections to arrays before
     * redaction so sensitive keys cannot hide behind object boundaries.
     *
     * @param  array<array-key, mixed>  $payload
     * @return array<array-key, mixed>
     */
    public function normalize(array $payload): array
    {
        return $this->decode($this->encode($payload));
    }

    /** @param array<array-key, mixed> $payload */
    private function encode(array $payload): string
    {
        return json_encode(
            $payload,
            JSON_THROW_ON_ERROR | JSON_INVALID_UTF8_SUBSTITUTE,
        );
    }

    /** @return array<array-key, mixed> */
    private function decode(string $payload): array
    {
        $normalized = json_decode($payload, true, flags: JSON_THROW_ON_ERROR);

        return is_array($normalized) ? $normalized : [];
    }
}
