<?php

namespace Kanary\AiObservatory\Sampling;

use Kanary\AiObservatory\Contracts\Sampler;

final class ConfigSampler implements Sampler
{
    public function shouldSample(string $traceId, float $rate): bool
    {
        $rate = max(0.0, min(1.0, $rate));

        if ($rate === 0.0) {
            return false;
        }

        if ($rate === 1.0) {
            return true;
        }

        $bucket = (int) sprintf('%u', crc32($traceId));

        return ($bucket / 4_294_967_296) < $rate;
    }
}
