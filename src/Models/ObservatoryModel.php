<?php

namespace Kanary\AiObservatory\Models;

use Illuminate\Database\Eloquent\Model;

abstract class ObservatoryModel extends Model
{
    public function getConnectionName(): ?string
    {
        return $this->connection
            ?? config('ai-observatory.connection')
            ?? parent::getConnectionName();
    }
}
