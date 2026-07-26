<?php

namespace Workbench\App\Tools;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\JsonSchema\Types\Type;
use Laravel\Ai\Contracts\Tool;
use Laravel\Ai\Tools\Request;
use RuntimeException;

final class FailingTool implements Tool
{
    public function description(): string
    {
        return 'Always fail so error recording can be inspected.';
    }

    public function handle(Request $request): string
    {
        throw new RuntimeException('Intentional workbench tool failure.');
    }

    /** @return array<string, Type> */
    public function schema(JsonSchema $schema): array
    {
        return [];
    }
}
