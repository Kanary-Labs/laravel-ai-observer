<?php

namespace Workbench\App\Agents;

use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\HasTools;
use Laravel\Ai\Promptable;

final class NestedAgent implements Agent, HasTools
{
    use Promptable;

    public function instructions(): string
    {
        return 'Delegate focused research to the research agent.';
    }

    public function tools(): iterable
    {
        return [new ResearchAgent];
    }
}
