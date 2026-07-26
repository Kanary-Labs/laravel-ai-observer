<?php

namespace Kanary\AiObservatory\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ObservatoryEvent extends Model
{
    use HasUlids;

    public const UPDATED_AT = null;

    protected $table = 'ai_observatory_events';

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'occurred_at' => 'immutable_datetime',
            'payload' => 'array',
        ];
    }

    /** @return BelongsTo<Trace, $this> */
    public function trace(): BelongsTo
    {
        return $this->belongsTo(Trace::class, 'trace_id', 'trace_id');
    }
}
