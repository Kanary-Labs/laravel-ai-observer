<?php

namespace Workbench\App\Agents;

use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Promptable;

final class StreamingAgent implements Agent
{
    use Promptable;

    public function instructions(): string
    {
        return 'Stream a clear answer.';
    }
}
