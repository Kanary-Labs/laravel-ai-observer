<?php

namespace Kanary\AiObservatory\Authorization;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

final class Authorization
{
    /** @var (Closure(Request): bool)|null */
    private ?Closure $callback = null;

    /** @param Closure(Request): bool $callback */
    public function use(Closure $callback): void
    {
        $this->callback = $callback;
    }

    public function check(Request $request): bool
    {
        if ($this->callback !== null) {
            return (bool) ($this->callback)($request);
        }

        return Gate::allows('viewAiObservatory');
    }

    public function hasCustomCallback(): bool
    {
        return $this->callback !== null;
    }

    public function description(): string
    {
        if ($this->hasCustomCallback()) {
            return 'custom callback';
        }

        return app()->environment('local')
            ? 'local access'
            : 'gate required';
    }
}
