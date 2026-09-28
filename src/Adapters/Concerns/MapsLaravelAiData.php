<?php

namespace Kanary\AiObservatory\Adapters\Concerns;

use Carbon\CarbonImmutable;
use Kanary\AiObservatory\Data\TokenUsage;
use Laravel\Ai\Contracts\Providers\Provider;
use Laravel\Ai\Responses\Data\Usage;

trait MapsLaravelAiData
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
        $values = $usage->toArray();

        // SDK 1.x reports inclusive input/output totals on Usage/TextUsage.
        if (array_key_exists('input_tokens', $values)) {
            $cached = $values['cache_read_input_tokens'] ?? null;
            $written = $values['cache_write_input_tokens'] ?? null;

            return new TokenUsage(
                input: $values['input_tokens'] - ($cached ?? 0) - ($written ?? 0),
                output: $values['output_tokens'],
                cachedInput: $cached,
                reasoning: $values['reasoning_tokens'] ?? null,
                total: $values['input_tokens'] + $values['output_tokens'],
                cacheWriteInput: $written,
                inputIncludesCached: false,
            );
        }

        $cachedInput = max(0, $values['cache_read_input_tokens']);
        $cacheWriteInput = max(0, $values['cache_write_input_tokens']);
        $reportedInput = max(0, $values['prompt_tokens']);
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
            output: max(0, $values['completion_tokens']),
            cachedInput: $cachedInput,
            reasoning: max(0, $values['reasoning_tokens']),
            total: $uncachedInput
                + $cachedInput
                + $cacheWriteInput
                + max(0, $values['completion_tokens']),
            cacheWriteInput: $cacheWriteInput,
            inputIncludesCached: false,
        );
    }
}
