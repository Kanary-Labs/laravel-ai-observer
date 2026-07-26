<?php

namespace Kanary\AiObservatory\Pricing;

use Kanary\AiObservatory\Contracts\CostCalculator;
use Kanary\AiObservatory\Data\Money;
use Kanary\AiObservatory\Data\TokenUsage;

final class ConfigCostCalculator implements CostCalculator
{
    public function calculate(
        string $provider,
        string $model,
        TokenUsage $usage,
    ): ?Money {
        $pricing = config('ai-observatory.pricing', []);

        if (! is_array($pricing)) {
            return null;
        }

        $providerPricing = $pricing[$provider] ?? null;
        $modelPricing = is_array($providerPricing)
            ? ($providerPricing[$model] ?? null)
            : null;

        if (! is_array($modelPricing) || $usage->input === null || $usage->output === null) {
            return null;
        }

        $inputRate = $this->rate($modelPricing, 'input_per_million');
        $outputRate = $this->rate($modelPricing, 'output_per_million');
        $cachedInputRate = $this->rate($modelPricing, 'cached_input_per_million');
        $cachedInput = $usage->cachedInput ?? 0;

        if (
            $usage->input < 0
            || $usage->output < 0
            || $cachedInput < 0
            || $cachedInput > $usage->input
        ) {
            return null;
        }

        $uncachedInput = max(0, $usage->input - $cachedInput);

        if (
            $inputRate === null
            || $outputRate === null
            || ($cachedInput > 0 && $cachedInputRate === null)
        ) {
            return null;
        }

        $currency = $modelPricing['currency'] ?? null;

        if (! is_string($currency) || strlen($currency) !== 3) {
            return null;
        }

        $amount = (
            ($uncachedInput * $inputRate)
            + ($usage->output * $outputRate)
            + ($cachedInput * ($cachedInputRate ?? 0.0))
        ) / 1_000_000;
        $metadata = is_array($pricing['_meta'] ?? null) ? $pricing['_meta'] : [];

        return new Money(
            amount: number_format($amount, 8, '.', ''),
            currency: strtoupper($currency),
            catalogVersion: is_string($metadata['version'] ?? null)
                ? $metadata['version']
                : null,
            effectiveDate: is_string($metadata['effective_date'] ?? null)
                ? $metadata['effective_date']
                : null,
        );
    }

    /**
     * @param  array<string, mixed>  $pricing
     */
    private function rate(array $pricing, string $key): ?float
    {
        $rate = $pricing[$key] ?? null;

        if (! is_int($rate) && ! is_float($rate) && ! is_string($rate)) {
            return null;
        }

        if (! is_numeric($rate) || (float) $rate < 0) {
            return null;
        }

        return (float) $rate;
    }
}
