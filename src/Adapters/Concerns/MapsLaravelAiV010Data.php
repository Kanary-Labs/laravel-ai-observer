<?php

namespace Kanary\AiObservatory\Adapters\Concerns;

use Carbon\CarbonImmutable;
use Kanary\AiObservatory\Data\TokenUsage;
use Laravel\Ai\Contracts\Providers\Provider;
use Laravel\Ai\Responses\Data\Usage;

trait MapsLaravelAiV010Data
{
    protected function now(): CarbonImmutable
    {
        return CarbonImmutable::now();
    }

    protected function providerName(Provider $provider): string
    {
        return $provider->name();
    }

    protected function tokenUsage(Usage $usage): TokenUsage
    {
        return new TokenUsage(
            input: $usage->promptTokens,
            output: $usage->completionTokens,
            cachedInput: $usage->cacheReadInputTokens,
            reasoning: $usage->reasoningTokens,
            total: $usage->promptTokens + $usage->completionTokens,
        );
    }
}
