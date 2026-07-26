<?php

namespace Kanary\AiObservatory\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $sequence
 * @property CarbonImmutable|null $started_at
 * @property array<string, mixed>|null $metadata
 */
class Span extends Model
{
    use HasUlids;

    protected $table = 'ai_observatory_spans';

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'sequence' => 'integer',
            'started_at' => 'immutable_datetime',
            'ended_at' => 'immutable_datetime',
            'duration_ms' => 'integer',
            'input_tokens' => 'integer',
            'output_tokens' => 'integer',
            'cached_input_tokens' => 'integer',
            'reasoning_tokens' => 'integer',
            'total_tokens' => 'integer',
            'estimated_cost' => 'decimal:8',
            'request_payload' => 'array',
            'response_payload' => 'array',
            'metadata' => 'array',
        ];
    }

    /** @return BelongsTo<Trace, $this> */
    public function trace(): BelongsTo
    {
        return $this->belongsTo(Trace::class, 'trace_id', 'trace_id');
    }
}
