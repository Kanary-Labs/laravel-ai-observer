<?php

use Carbon\CarbonImmutable;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Kanary\AiObservatory\AiObservatory;
use Kanary\AiObservatory\Contracts\Redactor;
use Kanary\AiObservatory\Contracts\TraceQueryRepository;
use Kanary\AiObservatory\Models\ObservatoryEvent;
use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;
use Kanary\AiObservatory\Redaction\DefaultRedactor;
use Kanary\AiObservatory\Redaction\RedactionManager;

it('protects the trace API and dashboard routes', function () {
    app()->instance('env', 'production');

    $this->getJson('/ai-observatory/api/traces')->assertForbidden();
    $this->get('/ai-observatory/traces')->assertForbidden();

    AiObservatory::auth(fn (Request $request): bool => true);

    $this->getJson('/ai-observatory/api/traces')->assertOk();
    $this->get('/ai-observatory/traces')
        ->assertOk()
        ->assertSeeText('AI Observatory');
});

it('serves the package-contained dashboard and compiled assets', function () {
    authorizeObservatory();
    $traceId = storeDashboardTrace();

    $this->get('/ai-observatory')
        ->assertRedirect('/ai-observatory/overview');
    $this->get('/ai-observatory/overview')
        ->assertOk()
        ->assertSee('"overviewApi":"http:\/\/localhost\/ai-observatory\/api\/overview"', false);
    $this->get("/ai-observatory/traces/{$traceId}")
        ->assertOk()
        ->assertSee('"initialTraceId":"'.$traceId.'"', false)
        ->assertSee('"environment":"testing"', false)
        ->assertSee('"recordingMode":"sync"', false)
        ->assertSee('/ai-observatory/assets/ai-observatory.css?v=', false)
        ->assertSee('/ai-observatory/assets/ai-observatory.js?v=', false);
    $this->get('/ai-observatory/assets/ai-observatory.css')
        ->assertOk()
        ->assertHeader('Content-Type', 'text/css; charset=UTF-8');
    $this->get('/ai-observatory/assets/ai-observatory.js')
        ->assertOk()
        ->assertHeader('Content-Type', 'text/javascript; charset=UTF-8');
});

it('lists traces with filters search and pagination without exposing payloads', function () {
    authorizeObservatory();

    $failed = storeDashboardTrace([
        'name' => 'Ticket response',
        'status' => 'failed',
        'provider' => 'openai',
        'model' => 'gpt-test',
        'agent_class' => 'App\\Ai\\SupportAgent',
        'user_id' => 'user-42',
        'user_type' => 'App\\Models\\User',
        'tenant_id' => 'tenant-7',
        'tenant_type' => 'App\\Models\\Organization',
        'feature' => 'ticket-reply',
        'duration_ms' => 1_250,
        'started_at' => now()->subMinute()->toImmutable(),
    ], [
        'type' => 'tool',
        'name' => 'SearchOrders',
        'error_message' => 'Order service unavailable',
        'request_payload' => [
            'prompt' => 'Find the cobalt order',
            'password' => 'plain-secret',
        ],
    ]);
    storeDashboardTrace([
        'name' => 'Sales summary',
        'status' => 'successful',
        'provider' => 'anthropic',
        'model' => 'claude-test',
        'agent_class' => 'App\\Ai\\SalesAgent',
        'feature' => 'weekly-sales',
        'duration_ms' => 300,
        'started_at' => now()->toImmutable(),
    ]);

    $this->getJson('/ai-observatory/api/traces?status=failed&has_error=1&has_tool_calls=1&min_duration=1000&search=cobalt&per_page=1')
        ->assertOk()
        ->assertJsonPath('data.0.trace_id', $failed)
        ->assertJsonPath('data.0.tool_count', 1)
        ->assertJsonPath('data.0.has_error', true)
        ->assertJsonPath('meta.current_page', 1)
        ->assertJsonPath('meta.per_page', 1)
        ->assertJsonPath('meta.total', 1)
        ->assertJsonPath('meta.filter_options.providers.0', 'anthropic')
        ->assertJsonPath('meta.filter_options.providers.1', 'openai')
        ->assertJsonMissing(['password' => 'plain-secret'])
        ->assertJsonMissing(['prompt' => 'Find the cobalt order']);

    $this->getJson('/ai-observatory/api/traces?provider=anthropic&span_type=agent')
        ->assertOk()
        ->assertJsonCount(1, 'data')
        ->assertJsonPath('data.0.name', 'Sales summary');

    $this->getJson('/ai-observatory/api/traces?user=user-42&tenant=tenant-7')
        ->assertOk()
        ->assertJsonCount(1, 'data')
        ->assertJsonPath('data.0.trace_id', $failed)
        ->assertJsonPath('data.0.user.id', 'user-42')
        ->assertJsonPath('data.0.tenant.id', 'tenant-7');

    $this->getJson('/ai-observatory/api/traces?search=not-present-anywhere')
        ->assertOk()
        ->assertJsonCount(0, 'data')
        ->assertJsonPath('meta.total', 0);

    $this->getJson('/ai-observatory/api/traces?per_page=1&page=2')
        ->assertOk()
        ->assertJsonPath('meta.total', 2)
        ->assertJsonPath('meta.last_page', 2)
        ->assertJsonCount(1, 'data');
});

it('reports overview metrics and ranked activity without exposing payloads', function () {
    authorizeObservatory();

    storeDashboardTrace([
        'name' => 'Successful support run',
        'provider' => 'openai',
        'model' => 'gpt-test',
        'agent_class' => 'App\\Ai\\SupportAgent',
        'total_tokens' => 30,
        'estimated_cost' => '0.00300000',
        'currency' => 'USD',
        'duration_ms' => 100,
    ]);
    $failed = storeDashboardTrace([
        'name' => 'Failed support run',
        'status' => 'failed',
        'provider' => 'openai',
        'model' => 'gpt-test',
        'agent_class' => 'App\\Ai\\SupportAgent',
        'total_tokens' => 20,
        'estimated_cost' => '0.00200000',
        'currency' => 'USD',
        'duration_ms' => 1_200,
    ], [
        'type' => 'tool',
        'name' => 'SearchOrders',
        'error_message' => 'Order service unavailable',
        'request_payload' => ['password' => 'plain-secret'],
    ]);

    $this->getJson('/ai-observatory/api/overview')
        ->assertOk()
        ->assertJsonPath('data.metrics.trace_count', 2)
        ->assertJsonPath('data.metrics.failure_count', 1)
        ->assertJsonPath('data.metrics.failure_rate', 50)
        ->assertJsonPath('data.metrics.total_tokens', 50)
        ->assertJsonPath('data.metrics.estimated_cost', '0.005')
        ->assertJsonPath('data.metrics.currency', 'USD')
        ->assertJsonPath('data.metrics.average_duration_ms', 650)
        ->assertJsonPath('data.metrics.p95_duration_ms', 1200)
        ->assertJsonPath('data.top_agents.0.name', 'App\\Ai\\SupportAgent')
        ->assertJsonPath('data.top_agents.0.trace_count', 2)
        ->assertJsonPath('data.top_models.0.name', 'gpt-test')
        ->assertJsonPath('data.top_tools.0.name', 'SearchOrders')
        ->assertJsonPath('data.top_tools.0.call_count', 1)
        ->assertJsonPath('data.recent_failures.0.trace_id', $failed)
        ->assertJsonMissing(['password' => 'plain-secret']);
});

it('returns a redacted trace detail with a correctly ordered span tree', function () {
    authorizeObservatory();
    config()->set('ai-observatory.redaction.paths', ['response.customer.email']);
    app()->forgetInstance(DefaultRedactor::class);
    app()->forgetInstance(RedactionManager::class);
    app()->forgetInstance(Redactor::class);
    app()->forgetInstance(TraceQueryRepository::class);

    $traceId = storeDashboardTrace([
        'name' => 'Tool-calling support run',
        'status' => 'failed',
        'provider' => 'openai',
        'model' => 'gpt-test',
        'agent_class' => 'App\\Ai\\SupportAgent',
        'metadata' => ['authorization' => 'Bearer raw-token'],
        'tags' => ['organization' => 'acme'],
        'started_at' => now()->toImmutable(),
    ], [
        'type' => 'agent',
        'name' => 'Support agent',
        'request_payload' => ['prompt' => 'Find order 42'],
    ]);
    $root = Span::query()->where('trace_id', $traceId)->sole();
    $toolId = (string) Str::uuid7();

    Span::query()->create([
        'trace_id' => $traceId,
        'span_id' => $toolId,
        'parent_span_id' => $root->span_id,
        'type' => 'tool',
        'name' => 'SearchOrders',
        'status' => 'failed',
        'sequence' => 2,
        'started_at' => now(),
        'ended_at' => now()->addMilliseconds(25),
        'duration_ms' => 25,
        'estimated_cost' => '0.00125000',
        'request_payload' => [
            'arguments' => [
                'order' => 42,
                'password' => 'plain-secret',
            ],
        ],
        'response_payload' => [
            'authorization' => 'raw-response-token',
            'customer' => ['email' => 'customer@example.com'],
        ],
        'metadata' => ['pricing' => ['currency' => 'USD']],
        'error_type' => RuntimeException::class,
        'error_message' => 'Tool failed safely',
        'error_stack' => 'Sensitive stack trace',
    ]);
    Span::query()->create([
        'trace_id' => $traceId,
        'span_id' => (string) Str::uuid7(),
        'parent_span_id' => $toolId,
        'type' => 'model',
        'name' => 'Recovery response',
        'status' => 'successful',
        'sequence' => 3,
        'started_at' => now(),
        'ended_at' => now()->addMilliseconds(50),
        'duration_ms' => 50,
        'input_tokens' => 12,
        'output_tokens' => 8,
        'total_tokens' => 20,
    ]);
    ObservatoryEvent::query()->create([
        'trace_id' => $traceId,
        'span_id' => $toolId,
        'event_type' => 'provider_failed',
        'occurred_at' => now(),
        'payload' => ['api_key' => 'raw-event-key'],
    ]);

    $this->getJson("/ai-observatory/api/traces/{$traceId}")
        ->assertOk()
        ->assertJsonPath('data.trace_id', $traceId)
        ->assertJsonPath('data.span_count', 3)
        ->assertJsonPath('data.tool_count', 1)
        ->assertJsonPath('data.has_error', true)
        ->assertJsonPath('data.metadata.authorization', '[REDACTED]')
        ->assertJsonPath('data.spans.0.type', 'agent')
        ->assertJsonPath('data.spans.0.children.0.type', 'tool')
        ->assertJsonPath('data.spans.0.children.0.request.arguments.password', '[REDACTED]')
        ->assertJsonPath('data.spans.0.children.0.response.authorization', '[REDACTED]')
        ->assertJsonPath('data.spans.0.children.0.response.customer.email', '[REDACTED]')
        ->assertJsonPath('data.spans.0.children.0.currency', 'USD')
        ->assertJsonPath('data.spans.0.children.0.error.stack', null)
        ->assertJsonPath('data.spans.0.children.0.children.0.type', 'model')
        ->assertJsonPath('data.events.0.payload.api_key', '[REDACTED]')
        ->assertJsonMissing(['password' => 'plain-secret'])
        ->assertJsonMissing(['authorization' => 'raw-response-token'])
        ->assertJsonMissing(['email' => 'customer@example.com'])
        ->assertJsonMissing(['api_key' => 'raw-event-key']);
});

it('validates trace filters and returns missing trace responses safely', function () {
    authorizeObservatory();

    $this->getJson('/ai-observatory/api/traces?per_page=101')
        ->assertUnprocessable()
        ->assertJsonValidationErrors('per_page');

    $this->getJson('/ai-observatory/api/traces/not-a-uuid')
        ->assertNotFound();

    $this->getJson('/ai-observatory/api/traces/'.Str::uuid())
        ->assertNotFound();
});

function authorizeObservatory(): void
{
    AiObservatory::auth(fn (Request $request): bool => true);
}

/**
 * @param  array<string, mixed>  $traceOverrides
 * @param  array<string, mixed>  $spanOverrides
 */
function storeDashboardTrace(array $traceOverrides = [], array $spanOverrides = []): string
{
    $traceId = (string) Str::uuid7();
    $spanId = (string) Str::uuid7();
    $startedAt = $traceOverrides['started_at'] ?? CarbonImmutable::now();

    Trace::query()->create([
        'trace_id' => $traceId,
        'root_span_id' => $spanId,
        'name' => 'Dashboard trace',
        'status' => 'successful',
        'provider' => null,
        'model' => null,
        'agent_class' => null,
        'feature' => null,
        'environment' => 'testing',
        'duration_ms' => 100,
        'started_at' => $startedAt,
        'ended_at' => $startedAt->addMilliseconds(100),
        ...$traceOverrides,
    ]);
    Span::query()->create([
        'trace_id' => $traceId,
        'span_id' => $spanId,
        'parent_span_id' => null,
        'type' => 'agent',
        'name' => 'Dashboard span',
        'status' => $traceOverrides['status'] ?? 'successful',
        'sequence' => 1,
        'started_at' => $startedAt,
        'ended_at' => $startedAt->addMilliseconds(100),
        'duration_ms' => 100,
        ...$spanOverrides,
    ]);

    return $traceId;
}
