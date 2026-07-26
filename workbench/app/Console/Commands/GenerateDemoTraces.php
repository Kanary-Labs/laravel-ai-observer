<?php

namespace Workbench\App\Console\Commands;

use Carbon\CarbonImmutable;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Schema;
use Kanary\AiObservatory\Contracts\TraceRepository;
use Laravel\Ai\Responses\Data\ToolCall;
use Throwable;
use Workbench\App\Agents\FailingToolAgent;
use Workbench\App\Agents\NestedAgent;
use Workbench\App\Agents\ResearchAgent;
use Workbench\App\Agents\SimpleChatAgent;
use Workbench\App\Agents\StreamingAgent;
use Workbench\App\Agents\ToolCallingAgent;

final class GenerateDemoTraces extends Command
{
    protected $signature = 'ai-observatory:demo';

    protected $description = 'Generate realistic AI Observatory traces using Laravel AI SDK fakes';

    public function handle(): int
    {
        if (! Schema::hasTable('ai_observatory_traces')) {
            $this->components->error(
                'Install and migrate AI Observatory before generating demo traces.',
            );

            return self::FAILURE;
        }

        SimpleChatAgent::fake(['Your ticket has been summarized and assigned.']);
        (new SimpleChatAgent)->prompt('Summarize support ticket #1842.');

        ToolCallingAgent::fake([
            new ToolCall('call_weather', 'GetWeatherTool', ['city' => 'Amman']),
            'It is sunny in Amman.',
        ]);
        (new ToolCallingAgent)->prompt('Should I take an umbrella in Amman?');

        StreamingAgent::fake(['A streamed response rendered in small chunks.']);
        (new StreamingAgent)->stream('Show a streamed answer.')
            ->each(fn (): true => true);

        NestedAgent::fake([
            new ToolCall('call_research', 'research_agent', ['task' => 'Review Laravel queue safety']),
            'The research agent completed the review.',
        ]);
        ResearchAgent::fake(['Queue context must be restored and cleared per job.']);
        (new NestedAgent)->prompt('Delegate a queue-safety review.');

        FailingToolAgent::fake([
            new ToolCall('call_failure', 'FailingTool', []),
        ]);

        try {
            (new FailingToolAgent)->prompt('Exercise tool failure handling.');
        } catch (Throwable) {
            app(TraceRepository::class)->recoverStaleBefore(
                CarbonImmutable::now()->addSecond(),
            );
        }

        $this->components->info(
            'Generated chat, tool, streaming, nested-agent, and recovered failure traces.',
        );
        $this->components->info('Open /ai-observatory/traces in the workbench.');

        return self::SUCCESS;
    }
}
