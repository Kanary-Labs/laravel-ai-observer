<?php

namespace Kanary\AiObservatory\Tests\Fixtures;

use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\HasTools;
use Laravel\Ai\Promptable;

class ToolCallingAgent implements Agent, HasTools
{
    use Promptable;

    public function instructions(): string
    {
        return 'Always use the weather tool before answering.';
    }

    public function tools(): iterable
    {
        return [new WeatherTool];
    }
}
