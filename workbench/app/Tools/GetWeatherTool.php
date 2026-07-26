<?php

namespace Workbench\App\Tools;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\JsonSchema\Types\Type;
use Laravel\Ai\Contracts\Tool;
use Laravel\Ai\Tools\Request;

final class GetWeatherTool implements Tool
{
    public function description(): string
    {
        return 'Get the current weather for a city.';
    }

    public function handle(Request $request): string
    {
        return 'Sunny, 27°C';
    }

    /** @return array<string, Type> */
    public function schema(JsonSchema $schema): array
    {
        return ['city' => $schema->string()->required()];
    }
}
