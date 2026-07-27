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

    protected function tokenUsage(Usage $usage, string $provider): TokenUsage
    {
        $cachedInput = max(0, $usage->cacheReadInputTokens);
        $cacheWriteInput = max(0, $usage->cacheWriteInputTokens);
        $reportedInput = max(0, $usage->promptTokens);
        $inputIncludesCached = in_array(strtolower($provider), [
            'deepseek',
            'groq',
            'openai-compatible',
            'openrouter',
        ], true);
        $uncachedInput = $inputIncludesCached
            ? max(0, $reportedInput - $cachedInput - $cacheWriteInput)
            : $reportedInput;

        return new TokenUsage(
            input: $uncachedInput,
            output: max(0, $usage->completionTokens),
            cachedInput: $cachedInput,
            reasoning: max(0, $usage->reasoningTokens),
            total: $uncachedInput
                + $cachedInput
                + $cacheWriteInput
                + max(0, $usage->completionTokens),
            cacheWriteInput: $cacheWriteInput,
            inputIncludesCached: false,
        );
    }
}
