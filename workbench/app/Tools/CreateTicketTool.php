<?php

namespace Workbench\App\Tools;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\JsonSchema\Types\Type;
use Laravel\Ai\Contracts\Tool;
use Laravel\Ai\Tools\Request;

final class CreateTicketTool implements Tool
{
    public function description(): string
    {
        return 'Create a support ticket.';
    }

    public function handle(Request $request): string
    {
        return '{"ticket_id":"TKT-1842","status":"open"}';
    }

    /** @return array<string, Type> */
    public function schema(JsonSchema $schema): array
    {
        return [
            'subject' => $schema->string()->required(),
            'description' => $schema->string()->required(),
        ];
    }
}
