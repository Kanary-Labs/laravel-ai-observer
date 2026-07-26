<?php

use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;

it('generates realistic demo traces without provider credentials', function (): void {
    $this->artisan('ai-observatory:demo')->assertSuccessful();

    expect(Trace::query()->count())->toBe(6)
        ->and(Span::query()->where('type', 'tool')->count())->toBeGreaterThanOrEqual(2)
        ->and(Span::query()->whereNotNull('parent_span_id')->count())->toBeGreaterThan(0)
        ->and(Trace::query()->where('agent_class', 'like', '%StreamingAgent')->exists())->toBeTrue()
        ->and(Trace::query()->where('agent_class', 'like', '%ResearchAgent')->exists())->toBeTrue()
        ->and(Trace::query()->where('agent_class', 'like', '%FailingToolAgent')
            ->where('status', 'cancelled')
            ->exists())->toBeTrue();
});
