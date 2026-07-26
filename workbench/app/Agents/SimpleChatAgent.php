<?php

namespace Workbench\App\Agents;

use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

final class SimpleChatAgent implements Agent
{
    use Promptable;

    public function instructions(): string
    {
        return 'Answer support questions concisely.';
    }
}
