<?php

namespace Kanary\AiObservatory\Queue;

use Closure;
use Illuminate\Support\Facades\Context;
use Kanary\AiObservatory\Context\TraceContext;

final class PropagateAiTraceContext
{
    public function handle(object $job, Closure $next): mixed
    {
        $context = app(TraceContext::class);
        $snapshot = Context::getHidden(TraceContext::LARAVEL_CONTEXT_KEY);
        $before = $context->snapshot();
        $context->clear();

        if (is_array($snapshot)) {
            $context->restore($snapshot);
        }

        try {
            return $next($job);
        } finally {
            $context->restore($before);
        }
    }
}
