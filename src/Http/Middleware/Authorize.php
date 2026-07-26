<?php

namespace Kanary\AiObservatory\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Kanary\AiObservatory\Authorization\Authorization;
use Symfony\Component\HttpFoundation\Response;

final class Authorize
{
    public function __construct(private readonly Authorization $authorization) {}

    /**
     * @param  Closure(Request): Response  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        abort_unless($this->authorization->check($request), 403);

        return $next($request);
    }
}
