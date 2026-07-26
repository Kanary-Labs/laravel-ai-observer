<?php

namespace Kanary\AiObservatory\Contracts;

use Kanary\AiObservatory\Data\Money;
use Kanary\AiObservatory\Data\TokenUsage;

interface CostCalculator
{
    public function calculate(
        string $provider,
        string $model,
        TokenUsage $usage,
    ): ?Money;
}
