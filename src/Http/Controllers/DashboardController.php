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
        return redirect()->route('ai-observatory.overview');
    }

    public function __invoke(?string $traceId = null): View
    {
        $assetPath = __DIR__.'/../../../dist/ai-observatory.js';
        $assetVersion = is_file($assetPath)
            ? substr((string) hash_file('sha256', $assetPath), 0, 12)
            : 'missing';

        return $this->views->make('ai-observatory::app', [
            'observatory' => [
                'apiBase' => route('ai-observatory.api.traces.index'),
                'overviewApi' => route('ai-observatory.api.overview'),
                'basePath' => '/'.trim((string) config('ai-observatory.path'), '/'),
                'environment' => app()->environment(),
                'recordingMode' => config('ai-observatory.recording_mode', 'sync'),
                'assetVersion' => $assetVersion,
                'initialTraceId' => $traceId,
            ],
        ]);
    }
}
