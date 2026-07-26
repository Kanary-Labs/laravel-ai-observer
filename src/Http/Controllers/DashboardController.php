<?php

namespace Kanary\AiObservatory\Http\Controllers;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;

final class DashboardController
{
    public function __construct(private readonly Factory $views) {}

    public function redirect(): RedirectResponse
    {
        return redirect()->route('ai-observatory.traces');
    }

    public function __invoke(?string $traceId = null): View
    {
        return $this->views->make('ai-observatory::app', [
            'observatory' => [
                'apiBase' => route('ai-observatory.api.traces.index'),
                'basePath' => '/'.trim((string) config('ai-observatory.path'), '/'),
                'initialTraceId' => $traceId,
            ],
        ]);
    }
}
