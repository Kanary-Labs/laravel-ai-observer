<?php

namespace Kanary\AiObservatory\Contracts;

use Carbon\CarbonImmutable;

interface TraceRepository
{
    public function pruneBefore(CarbonImmutable $cutoff, int $chunkSize = 500): int;

    public function clear(int $chunkSize = 500): int;
}
