<?php

namespace Kanary\AiObservatory\Contracts;

interface Sampler
{
    public function shouldSample(string $traceId, float $rate): bool;
}
