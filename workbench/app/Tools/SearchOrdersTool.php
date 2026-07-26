<?php

namespace Workbench\App\Tools;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\JsonSchema\Types\Type;
use Laravel\Ai\Contracts\Tool;
use Laravel\Ai\Tools\Request;

final class SearchOrdersTool implements Tool
{
    public function description(): string
    {
        return 'Find orders for a customer.';
    }

    public function handle(Request $request): string
    {
        return '{"orders":[{"id":"ORD-1042","status":"shipped"}]}';
    }

    /** @return array<string, Type> */
    public function schema(JsonSchema $schema): array
    {
        return ['customer_id' => $schema->string()->required()];
    }
}
