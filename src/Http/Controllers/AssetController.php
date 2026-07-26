<?php

namespace Kanary\AiObservatory\Http\Controllers;

use Symfony\Component\HttpFoundation\BinaryFileResponse;

final class AssetController
{
    public function __invoke(string $asset): BinaryFileResponse
    {
        $assets = [
            'ai-observatory.css' => 'text/css; charset=UTF-8',
            'ai-observatory.js' => 'text/javascript; charset=UTF-8',
        ];

        abort_unless(isset($assets[$asset]), 404);

        return new BinaryFileResponse(
            __DIR__.'/../../../dist/'.$asset,
            headers: [
                'Content-Type' => $assets[$asset],
                'Cache-Control' => 'public, max-age=31536000, immutable',
            ],
        );
    }
}
