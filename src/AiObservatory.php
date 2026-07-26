<?php

namespace Kanary\AiObservatory;

use Closure;
use Illuminate\Database\Eloquent\Model;
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

    public static function user(Model|string|int|null $user): void
    {
        self::identity('user', $user);
    }

    public static function tenant(Model|string|int|null $tenant): void
    {
        self::identity('tenant', $tenant);
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

    private static function identity(
        string $name,
        Model|string|int|null $identity,
    ): void {
        self::tag(
            "{$name}_id",
            $identity instanceof Model
                ? (string) $identity->getKey()
                : ($identity === null ? null : (string) $identity),
        );
        self::tag(
            "{$name}_type",
            $identity instanceof Model ? $identity->getMorphClass() : null,
        );
    }
}
