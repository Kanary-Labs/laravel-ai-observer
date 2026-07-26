<?php

namespace Kanary\AiObservatory\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property CarbonImmutable|null $started_at
 * @property array<string, mixed>|null $metadata
 */
class Trace extends ObservatoryModel
{
    use HasUlids;

    protected $table = 'ai_observatory_traces';

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'input_tokens' => 'integer',
            'output_tokens' => 'integer',
            'cached_input_tokens' => 'integer',
            'reasoning_tokens' => 'integer',
            'total_tokens' => 'integer',
            'estimated_cost' => 'decimal:8',
            'duration_ms' => 'integer',
            'started_at' => 'immutable_datetime',
            'ended_at' => 'immutable_datetime',
            'metadata' => 'array',
            'tags' => 'array',
        ];
    }

    /** @return HasMany<Span, $this> */
    public function spans(): HasMany
    {
        return $this->hasMany(Span::class, 'trace_id', 'trace_id');
    }
}
