<?php

namespace Kanary\AiObservatory\Redaction;

use Closure;
use Kanary\AiObservatory\Contracts\Redactor;

class RedactionManager implements Redactor
{
    /** @var list<Closure(mixed): mixed> */
    private array $callbacks = [];

    public function __construct(private readonly DefaultRedactor $default) {}

    /** @param Closure(mixed): mixed $callback */
    public function add(Closure $callback): void
    {
        $this->callbacks[] = $callback;
    }

    public function redact(array|string|null $value): array|string|null
    {
        $redacted = $this->default->redact($value);

        foreach ($this->callbacks as $callback) {
            $candidate = $callback($redacted);

            if (is_array($candidate) || is_string($candidate) || $candidate === null) {
                $redacted = $candidate;
            }
        }

        return $redacted;
    }
}
