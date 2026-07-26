<?php

namespace Kanary\AiObservatory\Tests\Fixtures;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\JsonSchema\Types\Type;
use Laravel\Ai\Contracts\Tool;
use Laravel\Ai\Tools\Request;

class WeatherTool implements Tool
{
    public function description(): string
    {
        return 'Get the weather.';
    }

    public function handle(Request $request): string
    {
        return 'Sunny';
    }

    /** @return array<string, Type> */
    public function schema(JsonSchema $schema): array
    {
        return [];
    }
}
