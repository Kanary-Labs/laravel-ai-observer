<?php

namespace Kanary\AiObservatory;

use Closure;
use Illuminate\Http\Request;
use Kanary\AiObservatory\Adapters\AiSdkEventAdapter;
use Kanary\AiObservatory\Adapters\AiSdkEventAdapterRegistry;
use Kanary\AiObservatory\Authorization\Authorization;
use Kanary\AiObservatory\Context\TraceContext;
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

    /** @param Closure(Request): bool $callback */
    public static function auth(Closure $callback): void
    {
        app(Authorization::class)->use($callback);
    }

    public static function tag(string $key, mixed $value): void
    {
        app(TraceContext::class)->tag($key, $value);
    }

    public static function feature(string $feature): void
    {
        self::tag('feature', $feature);
    }

    /**
     * @template TReturn
     *
     * @param  array<string, mixed>  $context
     * @param  Closure(): TReturn  $callback
     * @return TReturn
     */
    public static function withContext(array $context, Closure $callback): mixed
    {
        return app(TraceContext::class)->scope($context, $callback);
    }
}
