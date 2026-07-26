<?php

namespace Workbench\App\Agents;

use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\HasTools;
use Laravel\Ai\Promptable;
use Workbench\App\Tools\CreateTicketTool;
use Workbench\App\Tools\GetWeatherTool;
use Workbench\App\Tools\SearchOrdersTool;

final class ToolCallingAgent implements Agent, HasTools
{
    use Promptable;

    public function instructions(): string
    {
        return 'Use the available tools when they can answer the request.';
    }

    public function tools(): iterable
    {
        return [
            new GetWeatherTool,
            new SearchOrdersTool,
            new CreateTicketTool,
        ];
    }
}
