<?php

namespace Kanary\AiObservatory\Redaction;

use Kanary\AiObservatory\Contracts\Redactor;

class DefaultRedactor implements Redactor
{
    /** @var list<string> */
    private array $keys;

    /** @var list<string> */
    private array $paths;

    /**
     * @param  list<string>  $keys
     * @param  list<string>  $paths
     */
    public function __construct(
        array $keys,
        array $paths,
        private readonly string $replacement = '[REDACTED]',
    ) {
        $this->keys = array_map('strtolower', $keys);
        $this->paths = $paths;
    }

    /**
     * @param  array<array-key, mixed>|string|null  $value
     * @return array<array-key, mixed>|string|null
     */
    public function redact(array|string|null $value): array|string|null
    {
        if (! is_array($value)) {
            return $value;
        }

        $redacted = $this->redactKeys($value);

        foreach ($this->paths as $path) {
            $this->redactPath($redacted, explode('.', $path));
        }

        return $redacted;
    }

    /**
     * @param  array<array-key, mixed>  $value
     * @return array<array-key, mixed>
     */
    private function redactKeys(array $value): array
    {
        foreach ($value as $key => $item) {
            if (is_string($key) && in_array(strtolower($key), $this->keys, true)) {
                $value[$key] = $this->replacement;
            } elseif (is_array($item)) {
                $value[$key] = $this->redactKeys($item);
            }
        }

        return $value;
    }

    /**
     * @param  array<array-key, mixed>  $value
     * @param  list<string>  $segments
     */
    private function redactPath(array &$value, array $segments): void
    {
        $segment = array_shift($segments);

        if ($segment === null) {
            return;
        }

        foreach ($value as $key => &$item) {
            if ($segment !== '*' && (string) $key !== $segment) {
                continue;
            }

            if ($segments === []) {
                $item = $this->replacement;
            } elseif (is_array($item)) {
                $this->redactPath($item, $segments);
            }
        }
    }
}
