<?php

namespace Workbench\App\Agents;

use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\CanActAsTool;
use Laravel\Ai\Promptable;

final class ResearchAgent implements Agent, CanActAsTool
{
    use Promptable;

    public function name(): string
    {
        return 'research_agent';
    }

    public function description(): string
    {
        return 'Research a focused engineering question.';
    }

    public function instructions(): string
    {
        return 'Return a concise, evidence-based engineering note.';
    }
}
