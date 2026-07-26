<?php

namespace Workbench\App\Agents;

use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\HasTools;
use Laravel\Ai\Promptable;
use Workbench\App\Tools\FailingTool;

final class FailingToolAgent implements Agent, HasTools
{
    use Promptable;

    public function instructions(): string
    {
        return 'Use the failing tool to exercise error handling.';
    }

    public function tools(): iterable
    {
        return [new FailingTool];
    }
}
