<?php

namespace Kanary\AiObservatory;

use Kanary\AiObservatory\Adapters\AiSdkEventAdapter;
use Kanary\AiObservatory\Adapters\AiSdkEventAdapterRegistry;

final class AiObservatory
{
    /** @param class-string<AiSdkEventAdapter> $adapterClass */
    public static function registerEventAdapter(string $adapterClass): void
    {
        app(AiSdkEventAdapterRegistry::class)->register($adapterClass);
    }
}
