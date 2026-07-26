<?php

use Illuminate\Contracts\Container\Container;
use Kanary\AiObservatory\Adapters\AgentEventAdapter;
use Kanary\AiObservatory\Adapters\AiSdkEventAdapter;
use Kanary\AiObservatory\Adapters\AiSdkEventAdapterRegistry;
use Kanary\AiObservatory\Adapters\AudioEventAdapter;
use Kanary\AiObservatory\Adapters\EmbeddingEventAdapter;
use Kanary\AiObservatory\Adapters\ImageEventAdapter;
use Kanary\AiObservatory\Adapters\ModelEventAdapter;
use Kanary\AiObservatory\Adapters\ProviderEventAdapter;
use Kanary\AiObservatory\Adapters\RerankEventAdapter;
use Kanary\AiObservatory\Adapters\ToolEventAdapter;
use Kanary\AiObservatory\Adapters\TranscriptionEventAdapter;
use Kanary\AiObservatory\Data\EventRecorded;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Support\AiSdkCompatibility;
use Kanary\AiObservatory\Tests\Fixtures\WeatherTool;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\Files\TranscribableAudio;
use Laravel\Ai\Contracts\Providers\AudioProvider;
use Laravel\Ai\Contracts\Providers\EmbeddingProvider;
use Laravel\Ai\Contracts\Providers\ImageProvider;
use Laravel\Ai\Contracts\Providers\RerankingProvider;
use Laravel\Ai\Contracts\Providers\TextProvider;
use Laravel\Ai\Contracts\Providers\TranscriptionProvider;
use Laravel\Ai\Events\AgentFailedOver;
use Laravel\Ai\Events\AgentPrompted;
use Laravel\Ai\Events\AgentStreamed;
use Laravel\Ai\Events\AudioGenerated;
use Laravel\Ai\Events\EmbeddingsGenerated;
use Laravel\Ai\Events\GeneratingAudio;
use Laravel\Ai\Events\GeneratingEmbeddings;
use Laravel\Ai\Events\GeneratingImage;
use Laravel\Ai\Events\GeneratingTranscription;
use Laravel\Ai\Events\ImageGenerated;
use Laravel\Ai\Events\InvokingTool;
use Laravel\Ai\Events\PromptingAgent;
use Laravel\Ai\Events\ProviderFailedOver;
use Laravel\Ai\Events\Reranked;
use Laravel\Ai\Events\Reranking;
use Laravel\Ai\Events\ToolInvoked;
use Laravel\Ai\Events\TranscriptionGenerated;
use Laravel\Ai\Exceptions\FailoverableException;
use Laravel\Ai\Prompts\AgentPrompt;
use Laravel\Ai\Prompts\AudioPrompt;
use Laravel\Ai\Prompts\EmbeddingsPrompt;
use Laravel\Ai\Prompts\ImagePrompt;
use Laravel\Ai\Prompts\RerankingPrompt;
use Laravel\Ai\Prompts\TranscriptionPrompt;
use Laravel\Ai\Providers\Provider;
use Laravel\Ai\Responses\AgentResponse;
use Laravel\Ai\Responses\AudioResponse;
use Laravel\Ai\Responses\Data\FinishReason;
use Laravel\Ai\Responses\Data\GeneratedImage;
use Laravel\Ai\Responses\Data\Meta;
use Laravel\Ai\Responses\Data\RankedDocument;
use Laravel\Ai\Responses\Data\Step;
use Laravel\Ai\Responses\Data\Usage;
use Laravel\Ai\Responses\EmbeddingsResponse;
use Laravel\Ai\Responses\ImageResponse;
use Laravel\Ai\Responses\RerankingResponse;
use Laravel\Ai\Responses\StreamedAgentResponse;
use Laravel\Ai\Responses\TranscriptionResponse;
use Laravel\Ai\Streaming\Events\StreamEnd;
use Laravel\Ai\Streaming\Events\StreamStart;
use Laravel\Ai\Streaming\Events\TextDelta;

const INVOCATION_ID = '018f47a2-4f4e-7d10-9c2f-6f447d7a1001';
const TOOL_INVOCATION_ID = '018f47a2-4f4e-7d10-9c2f-6f447d7a1002';

function concreteProvider(string $name = 'openai'): Provider
{
    $provider = Mockery::mock(Provider::class);
    $provider->allows('name')->andReturn($name);

    return $provider;
}

function contractProvider(string $contract, string $name = 'openai'): object
{
    $provider = Mockery::mock($contract);
    $provider->allows('name')->andReturn($name);

    return $provider;
}

function agentPrompt(): AgentPrompt
{
    return new AgentPrompt(
        Mockery::mock(Agent::class),
        'What is the weather?',
        [],
        contractProvider(TextProvider::class),
        'gpt-test',
    );
}

it('maps verified agent start and completion events', function () {
    $adapter = new AgentEventAdapter;
    $prompt = agentPrompt();

    $started = $adapter->adapt(new PromptingAgent(INVOCATION_ID, $prompt));
    $response = (new AgentResponse(
        INVOCATION_ID,
        'It is sunny.',
        new Usage(10, 4, 0, 2, 1),
        new Meta('openai', 'gpt-test'),
    ))->withSteps(collect());
    $finished = $adapter->adapt(new AgentPrompted(INVOCATION_ID, $prompt, $response));

    expect($started)->toHaveCount(2)
        ->and($started[0])->toBeInstanceOf(TraceStarted::class)
        ->and($started[1])->toBeInstanceOf(SpanStarted::class)
        ->and($started[1]->type)->toBe(SpanType::Agent)
        ->and($started[1]->request['prompt'])->toBe('What is the weather?')
        ->and($finished)->toHaveCount(2)
        ->and($finished[0])->toBeInstanceOf(SpanFinished::class)
        ->and($finished[0]->usage)->toBeNull()
        ->and($finished[1])->toBeInstanceOf(TraceFinished::class);
});

it('maps failover without inventing an invocation id', function () {
    $adapter = new AgentEventAdapter;
    $exception = new class('Provider unavailable') extends Exception implements FailoverableException {};
    $event = new AgentFailedOver(
        Mockery::mock(Agent::class),
        concreteProvider(),
        'gpt-test',
        $exception,
    );

    $adapted = $adapter->adapt($event);

    expect($adapted)->toHaveCount(1)
        ->and($adapted[0])->toBeInstanceOf(EventRecorded::class)
        ->and($adapted[0]->traceId)->toBeNull()
        ->and($adapted[0]->eventType)->toBe('provider_failed_over');
});

it('maps non-agent provider failover without false correlation', function () {
    $exception = new class('Provider unavailable') extends Exception implements FailoverableException {};
    $event = new ProviderFailedOver(concreteProvider(), 'embed-test', $exception);

    $adapted = (new ProviderEventAdapter)->adapt($event);

    expect($adapted)->toHaveCount(1)
        ->and($adapted[0])->toBeInstanceOf(EventRecorded::class)
        ->and($adapted[0]->traceId)->toBeNull()
        ->and($adapted[0]->payload['model'])->toBe('embed-test');
});

it('reconstructs model spans from verified response steps without double counting agent usage', function () {
    $prompt = agentPrompt();
    $step = new Step(
        'It is sunny.',
        [],
        [],
        FinishReason::Stop,
        new Usage(10, 4, 0, 2, 1),
        new Meta('openai', 'gpt-test'),
    );
    $response = (new AgentResponse(
        INVOCATION_ID,
        'It is sunny.',
        new Usage(10, 4, 0, 2, 1),
        new Meta('openai', 'gpt-test'),
    ))->withSteps(collect([$step]));

    $adapted = (new ModelEventAdapter)->adapt(
        new AgentPrompted(INVOCATION_ID, $prompt, $response),
    );

    expect($adapted)->toHaveCount(2)
        ->and($adapted[0])->toBeInstanceOf(SpanStarted::class)
        ->and($adapted[0]->type)->toBe(SpanType::Model)
        ->and($adapted[0]->parentSpanId)->toBe(INVOCATION_ID)
        ->and($adapted[1])->toBeInstanceOf(SpanFinished::class)
        ->and($adapted[1]->usage->input)->toBe(10)
        ->and($adapted[1]->usage->output)->toBe(4)
        ->and($adapted[1]->usage->cachedInput)->toBe(2)
        ->and($adapted[1]->usage->reasoning)->toBe(1)
        ->and($adapted[1]->usage->total)->toBe(14);
});

it('maps streaming model timing and usage from completed stream events', function () {
    $events = collect([
        (new StreamStart('start', 'openai', 'gpt-test', 1_700_000_000))
            ->withInvocationId(INVOCATION_ID),
        (new TextDelta('delta', 'message', 'Hello', 1_700_000_001))
            ->withInvocationId(INVOCATION_ID),
        (new StreamEnd('end', 'stop', new Usage(8, 3), 1_700_000_002))
            ->withInvocationId(INVOCATION_ID),
    ]);
    $response = new StreamedAgentResponse(
        INVOCATION_ID,
        $events,
        new Meta('openai', 'gpt-test'),
    );
    $event = new AgentStreamed(INVOCATION_ID, agentPrompt(), $response);

    $adapted = (new ModelEventAdapter)->adapt($event);

    expect($adapted)->toHaveCount(2)
        ->and($adapted[0]->startedAt->timestamp)->toBe(1_700_000_000)
        ->and($adapted[0]->attributes['first_token_at'])->not->toBeNull()
        ->and($adapted[1]->endedAt->timestamp)->toBe(1_700_000_002)
        ->and($adapted[1]->usage->total)->toBe(11);
});

it('maps tool start and completion using the SDK tool name resolver', function () {
    $adapter = new ToolEventAdapter;
    $agent = Mockery::mock(Agent::class);
    $tool = new WeatherTool;

    $started = $adapter->adapt(new InvokingTool(
        INVOCATION_ID,
        TOOL_INVOCATION_ID,
        $agent,
        $tool,
        ['city' => 'Amman'],
    ));
    $finished = $adapter->adapt(new ToolInvoked(
        INVOCATION_ID,
        TOOL_INVOCATION_ID,
        $agent,
        $tool,
        ['city' => 'Amman'],
        'Sunny',
    ));

    expect($started[0])->toBeInstanceOf(SpanStarted::class)
        ->and($started[0]->name)->toBe('WeatherTool')
        ->and($started[0]->type)->toBe(SpanType::Tool)
        ->and($started[0]->request)->toBe(['arguments' => ['city' => 'Amman']])
        ->and($finished[0])->toBeInstanceOf(SpanFinished::class)
        ->and($finished[0]->response)->toBe(['result' => 'Sunny']);
});

it('maps embedding events without recording vectors', function () {
    $provider = concreteProvider();
    $prompt = new EmbeddingsPrompt(
        ['secret document'],
        1536,
        contractProvider(EmbeddingProvider::class),
        'embed-test',
    );
    $adapter = new EmbeddingEventAdapter;

    $started = $adapter->adapt(new GeneratingEmbeddings(INVOCATION_ID, $provider, 'embed-test', $prompt));
    $finished = $adapter->adapt(new EmbeddingsGenerated(
        INVOCATION_ID,
        $provider,
        'embed-test',
        $prompt,
        new EmbeddingsResponse([[0.1, 0.2]], 7, new Meta('openai', 'embed-test')),
    ));

    expect($started[1]->type)->toBe(SpanType::Embedding)
        ->and($finished[0]->response)->toBe([
            'embedding_count' => 1,
            'vectors_recorded' => false,
        ])
        ->and($finished[0]->usage->input)->toBe(7);
});

it('maps image events without recording generated binary data', function () {
    $provider = concreteProvider();
    $prompt = new ImagePrompt(
        'A canary',
        [],
        '1:1',
        'high',
        contractProvider(ImageProvider::class),
        'image-test',
    );
    $adapter = new ImageEventAdapter;

    $started = $adapter->adapt(new GeneratingImage(INVOCATION_ID, $provider, 'image-test', $prompt));
    $finished = $adapter->adapt(new ImageGenerated(
        INVOCATION_ID,
        $provider,
        'image-test',
        $prompt,
        new ImageResponse(
            collect([new GeneratedImage(base64_encode('image'))]),
            new Usage(3, 2),
            new Meta('openai', 'image-test'),
        ),
    ));

    expect($started[1]->type)->toBe(SpanType::Image)
        ->and($finished[0]->response)->toBe(['image_count' => 1]);
});

it('maps audio events without recording generated binary data', function () {
    $provider = concreteProvider();
    $prompt = new AudioPrompt(
        'Hello',
        'alloy',
        null,
        contractProvider(AudioProvider::class),
        'audio-test',
    );
    $adapter = new AudioEventAdapter;

    $started = $adapter->adapt(new GeneratingAudio(INVOCATION_ID, $provider, 'audio-test', $prompt));
    $finished = $adapter->adapt(new AudioGenerated(
        INVOCATION_ID,
        $provider,
        'audio-test',
        $prompt,
        new AudioResponse(base64_encode('audio'), new Meta('openai', 'audio-test'), 'audio/mp3'),
    ));

    expect($started[1]->type)->toBe(SpanType::Audio)
        ->and($finished[0]->response['mime_type'])->toBe('audio/mp3')
        ->and($finished[0]->response['audio_recorded'])->toBeFalse();
});

it('maps transcription events from verified response properties', function () {
    $provider = concreteProvider();
    $prompt = new TranscriptionPrompt(
        Mockery::mock(TranscribableAudio::class),
        'en',
        false,
        contractProvider(TranscriptionProvider::class),
        'transcribe-test',
    );
    $adapter = new TranscriptionEventAdapter;

    $started = $adapter->adapt(new GeneratingTranscription(
        INVOCATION_ID,
        $provider,
        'transcribe-test',
        $prompt,
    ));
    $finished = $adapter->adapt(new TranscriptionGenerated(
        INVOCATION_ID,
        $provider,
        'transcribe-test',
        $prompt,
        new TranscriptionResponse(
            'Hello',
            collect(),
            new Usage(4, 2),
            new Meta('openai', 'transcribe-test'),
        ),
    ));

    expect($started[1]->type)->toBe(SpanType::Transcription)
        ->and($finished[0]->response)->toBe([
            'text' => 'Hello',
            'segments_count' => 0,
        ])
        ->and($finished[0]->usage->total)->toBe(6);
});

it('maps reranking events to normalized arrays', function () {
    $provider = concreteProvider('cohere');
    $prompt = new RerankingPrompt(
        ['A', 'B'],
        'Query',
        1,
        contractProvider(RerankingProvider::class, 'cohere'),
        'rerank-test',
    );
    $adapter = new RerankEventAdapter;

    $started = $adapter->adapt(new Reranking(INVOCATION_ID, $provider, 'rerank-test', $prompt));
    $finished = $adapter->adapt(new Reranked(
        INVOCATION_ID,
        $provider,
        'rerank-test',
        $prompt,
        new RerankingResponse(
            [new RankedDocument(1, 'B', 0.9)],
            new Meta('cohere', 'rerank-test'),
        ),
    ));

    expect($started[1]->type)->toBe(SpanType::Rerank)
        ->and($finished[0]->response['results'])->toBe([
            ['index' => 1, 'document' => 'B', 'score' => 0.9],
        ]);
});

it('registers concept adapters and ignores unknown events safely', function () {
    $registry = app(AiSdkEventAdapterRegistry::class);

    expect($registry->adapters())->toContain(
        AgentEventAdapter::class,
        ProviderEventAdapter::class,
        ModelEventAdapter::class,
        ToolEventAdapter::class,
        EmbeddingEventAdapter::class,
        ImageEventAdapter::class,
        AudioEventAdapter::class,
        TranscriptionEventAdapter::class,
        RerankEventAdapter::class,
    )->and($registry->adapt(new stdClass))->toBe([]);
});

it('allows custom adapters to be registered once', function () {
    $adapter = new class implements AiSdkEventAdapter
    {
        public function supports(object $event): bool
        {
            return true;
        }

        public function adapt(object $event): array
        {
            return [];
        }
    };
    $class = $adapter::class;
    app()->instance($class, $adapter);

    $registry = new AiSdkEventAdapterRegistry(app(Container::class));
    $registry->register($class);
    $registry->register($class);

    expect($registry->adapters())->toBe([$class]);
});

it('reports the installed sdk compatibility baseline', function () {
    $compatibility = AiSdkCompatibility::current();

    expect($compatibility->version)->toStartWith('v0.10.1')
        ->and($compatibility->status())->toBe('tested')
        ->and($compatibility->adapter())->toBe('LaravelAiSdkV010Adapter');
});
