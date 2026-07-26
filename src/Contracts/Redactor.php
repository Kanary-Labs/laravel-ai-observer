<?php

namespace Kanary\AiObservatory\Contracts;

interface Redactor
{
    /**
     * @param  array<array-key, mixed>|string|null  $value
     * @return array<array-key, mixed>|string|null
     */
    public function redact(array|string|null $value): array|string|null;
}
