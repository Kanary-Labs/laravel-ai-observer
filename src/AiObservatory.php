<?php

namespace Kanary\AiObservatory;

use Closure;
use Kanary\AiObservatory\Adapters\AiSdkEventAdapter;
use Kanary\AiObservatory\Adapters\AiSdkEventAdapterRegistry;
use Kanary\AiObservatory\Redaction\RedactionManager;

final class AiObservatory
{
    /** @param class-string<AiSdkEventAdapter> $adapterClass */
    public static function registerEventAdapter(string $adapterClass): void
    {
        app(AiSdkEventAdapterRegistry::class)->register($adapterClass);
    }

    /** @param Closure(mixed): mixed $callback */
    public static function redactUsing(Closure $callback): void
    {
        app(RedactionManager::class)->add($callback);
    }
}
