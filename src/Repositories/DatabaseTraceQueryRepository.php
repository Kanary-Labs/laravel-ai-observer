<?php

namespace Kanary\AiObservatory\Repositories;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Kanary\AiObservatory\Contracts\Redactor;
use Kanary\AiObservatory\Contracts\TraceQueryRepository;
use Kanary\AiObservatory\Models\ObservatoryEvent;
use Kanary\AiObservatory\Models\Span;
use Kanary\AiObservatory\Models\Trace;
use Kanary\AiObservatory\Support\PayloadLimiter;

final class DatabaseTraceQueryRepository implements TraceQueryRepository
{
    public function __construct(
        private readonly Redactor $redactor,
        private readonly PayloadLimiter $payloadLimiter,
    ) {}

    public function paginate(array $filters): array
    {
        $query = Trace::query()
            ->select([
                'id',
                'trace_id',
                'name',
                'status',
                'provider',
                'model',
                'agent_class',
                'user_id',
                'user_type',
                'tenant_id',
                'tenant_type',
                'feature',
                'input_tokens',
                'output_tokens',
                'total_tokens',
                'estimated_cost',
                'currency',
                'duration_ms',
                'started_at',
                'ended_at',
            ])
            ->withCount([
                'spans',
                'spans as tool_count' => fn (Builder $query): Builder => $query
                    ->whereIn('type', ['tool', 'mcp']),
                'spans as error_count' => fn (Builder $query): Builder => $query
                    ->whereNotNull('error_message'),
            ]);

        $this->applyFilters($query, $filters);

        $page = (int) ($filters['page'] ?? 1);
        $perPage = (int) ($filters['per_page'] ?? 25);
        $total = (clone $query)->count();
        $traces = array_values($query
            ->orderByDesc('started_at')
            ->orderByDesc('trace_id')
            ->forPage($page, $perPage)
            ->get()
            ->map(fn (Trace $trace): array => $this->traceSummary($trace))
            ->values()
            ->all());

        return [
            'data' => $traces,
            'meta' => [
                'current_page' => $page,
                'per_page' => $perPage,
                'total' => $total,
                'last_page' => max(1, (int) ceil($total / $perPage)),
                'filter_options' => $this->filterOptions(),
            ],
        ];
    }

    public function find(string $traceId): ?array
    {
        $trace = Trace::query()
            ->withCount([
                'spans',
                'spans as tool_count' => fn (Builder $query): Builder => $query
                    ->whereIn('type', ['tool', 'mcp']),
                'spans as error_count' => fn (Builder $query): Builder => $query
                    ->whereNotNull('error_message'),
            ])
            ->where('trace_id', $traceId)
            ->first();

        if ($trace === null) {
            return null;
        }

        $spans = Span::query()
            ->where('trace_id', $traceId)
            ->orderBy('sequence')
            ->get()
            ->map(fn (Span $span): array => $this->spanDetail($span))
            ->values();
        $events = ObservatoryEvent::query()
            ->where('trace_id', $traceId)
            ->orderBy('occurred_at')
            ->orderBy('id')
            ->get()
            ->map(fn (ObservatoryEvent $event): array => [
                'id' => $event->getAttribute('id'),
                'span_id' => $event->getAttribute('span_id'),
                'event_type' => $event->getAttribute('event_type'),
                'occurred_at' => $this->date($event->getAttribute('occurred_at')),
                'payload' => $this->payload($event->getAttribute('payload'), 'event'),
            ])
            ->values()
            ->all();

        return [
            'data' => [
                ...$this->traceSummary($trace),
                'operation' => $trace->getAttribute('operation'),
                'root_span_id' => $trace->getAttribute('root_span_id'),
                'environment' => $trace->getAttribute('environment'),
                'cached_input_tokens' => $trace->getAttribute('cached_input_tokens'),
                'reasoning_tokens' => $trace->getAttribute('reasoning_tokens'),
                'metadata' => $this->payload($trace->getAttribute('metadata')),
                'tags' => $this->payload($trace->getAttribute('tags')),
                'spans' => $this->spanTree($spans),
                'events' => $events,
            ],
        ];
    }

    /**
     * @param  Builder<Trace>  $query
     * @param  array<string, mixed>  $filters
     */
    private function applyFilters(Builder $query, array $filters): void
    {
        foreach (['status', 'provider', 'model', 'agent_class', 'feature'] as $column) {
            if (isset($filters[$column]) && $filters[$column] !== '') {
                $query->where($column, $filters[$column]);
            }
        }

        if (isset($filters['user']) && $filters['user'] !== '') {
            $query->where('user_id', $filters['user']);
        }

        if (isset($filters['tenant']) && $filters['tenant'] !== '') {
            $query->where('tenant_id', $filters['tenant']);
        }

        if (isset($filters['span_type']) && $filters['span_type'] !== '') {
            $query->whereHas(
                'spans',
                fn (Builder $spanQuery): Builder => $spanQuery
                    ->where('type', $filters['span_type']),
            );
        }

        if (($filters['has_error'] ?? null) === true) {
            $query->whereHas(
                'spans',
                fn (Builder $spanQuery): Builder => $spanQuery
                    ->whereNotNull('error_message'),
            );
        }

        if (($filters['has_error'] ?? null) === false) {
            $query->whereDoesntHave(
                'spans',
                fn (Builder $spanQuery): Builder => $spanQuery
                    ->whereNotNull('error_message'),
            );
        }

        if (($filters['has_tool_calls'] ?? null) === true) {
            $query->whereHas(
                'spans',
                fn (Builder $spanQuery): Builder => $spanQuery
                    ->whereIn('type', ['tool', 'mcp']),
            );
        }

        if (($filters['has_tool_calls'] ?? null) === false) {
            $query->whereDoesntHave(
                'spans',
                fn (Builder $spanQuery): Builder => $spanQuery
                    ->whereIn('type', ['tool', 'mcp']),
            );
        }

        if (isset($filters['min_duration'])) {
            $query->where('duration_ms', '>=', $filters['min_duration']);
        }

        if (isset($filters['started_after'])) {
            $query->where(
                'started_at',
                '>=',
                CarbonImmutable::parse((string) $filters['started_after'])->startOfDay(),
            );
        }

        if (isset($filters['started_before'])) {
            $query->where(
                'started_at',
                '<=',
                CarbonImmutable::parse((string) $filters['started_before'])->endOfDay(),
            );
        }

        if (isset($filters['search']) && trim((string) $filters['search']) !== '') {
            $this->applySearch($query, trim((string) $filters['search']));
        }
    }

    /** @param Builder<Trace> $query */
    private function applySearch(Builder $query, string $search): void
    {
        $like = '%'.str_replace(['!', '%', '_'], ['!!', '!%', '!_'], mb_strtolower($search)).'%';
        $mysql = $this->usesMysql();
        $traceClauses = $mysql
            ? [
                "LOWER(CAST(trace_id AS CHAR)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(name AS CHAR)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(agent_class AS CHAR)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(provider AS CHAR)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(model AS CHAR)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(feature AS CHAR)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(user_id AS CHAR)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(tenant_id AS CHAR)) LIKE ? ESCAPE '!'",
            ]
            : [
                "LOWER(CAST(trace_id AS TEXT)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(name AS TEXT)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(agent_class AS TEXT)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(provider AS TEXT)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(model AS TEXT)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(feature AS TEXT)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(user_id AS TEXT)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(tenant_id AS TEXT)) LIKE ? ESCAPE '!'",
            ];
        $spanClauses = $mysql
            ? [
                "LOWER(CAST(name AS CHAR)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(error_message AS CHAR)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(request_payload AS CHAR)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(response_payload AS CHAR)) LIKE ? ESCAPE '!'",
            ]
            : [
                "LOWER(CAST(name AS TEXT)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(error_message AS TEXT)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(request_payload AS TEXT)) LIKE ? ESCAPE '!'",
                "LOWER(CAST(response_payload AS TEXT)) LIKE ? ESCAPE '!'",
            ];

        $query->where(function (Builder $searchQuery) use ($like, $spanClauses, $traceClauses): void {
            foreach ($traceClauses as $clause) {
                $searchQuery->orWhereRaw($clause, [$like]);
            }

            $searchQuery->orWhereHas('spans', function (Builder $spanQuery) use ($like, $spanClauses): void {
                $spanQuery->where(function (Builder $spanSearch) use ($like, $spanClauses): void {
                    foreach ($spanClauses as $clause) {
                        $spanSearch->orWhereRaw($clause, [$like]);
                    }
                });
            });
        });
    }

    private function usesMysql(): bool
    {
        return DB::connection(config('ai-observatory.connection'))->getDriverName() === 'mysql';
    }

    /** @return array<string, list<string>> */
    private function filterOptions(): array
    {
        return [
            'statuses' => $this->distinctTraceValues('status'),
            'providers' => $this->distinctTraceValues('provider'),
            'models' => $this->distinctTraceValues('model'),
            'agents' => $this->distinctTraceValues('agent_class'),
            'features' => $this->distinctTraceValues('feature'),
            'span_types' => array_values(Span::query()
                ->whereNotNull('type')
                ->distinct()
                ->orderBy('type')
                ->pluck('type')
                ->map(fn (mixed $value): string => (string) $value)
                ->values()
                ->all()),
        ];
    }

    /** @return list<string> */
    private function distinctTraceValues(string $column): array
    {
        return array_values(Trace::query()
            ->whereNotNull($column)
            ->where($column, '!=', '')
            ->distinct()
            ->orderBy($column)
            ->pluck($column)
            ->map(fn (mixed $value): string => (string) $value)
            ->values()
            ->all());
    }

    /** @return array<string, mixed> */
    private function traceSummary(Trace $trace): array
    {
        return [
            'id' => $trace->getAttribute('id'),
            'trace_id' => $trace->getAttribute('trace_id'),
            'name' => $trace->getAttribute('name'),
            'status' => $trace->getAttribute('status'),
            'provider' => $trace->getAttribute('provider'),
            'model' => $trace->getAttribute('model'),
            'agent_class' => $trace->getAttribute('agent_class'),
            'user' => [
                'id' => $trace->getAttribute('user_id'),
                'type' => $trace->getAttribute('user_type'),
            ],
            'tenant' => [
                'id' => $trace->getAttribute('tenant_id'),
                'type' => $trace->getAttribute('tenant_type'),
            ],
            'feature' => $trace->getAttribute('feature'),
            'input_tokens' => $trace->getAttribute('input_tokens'),
            'output_tokens' => $trace->getAttribute('output_tokens'),
            'total_tokens' => $trace->getAttribute('total_tokens'),
            'estimated_cost' => $trace->getAttribute('estimated_cost'),
            'currency' => $trace->getAttribute('currency'),
            'duration_ms' => $trace->getAttribute('duration_ms'),
            'started_at' => $this->date($trace->getAttribute('started_at')),
            'ended_at' => $this->date($trace->getAttribute('ended_at')),
            'span_count' => (int) $trace->getAttribute('spans_count'),
            'tool_count' => (int) $trace->getAttribute('tool_count'),
            'has_error' => (int) $trace->getAttribute('error_count') > 0,
        ];
    }

    /** @return array<string, mixed> */
    private function spanDetail(Span $span): array
    {
        $metadata = $this->payload($span->getAttribute('metadata'));
        $currency = is_array($metadata)
            && is_array($metadata['pricing'] ?? null)
            && is_string($metadata['pricing']['currency'] ?? null)
                ? $metadata['pricing']['currency']
                : null;

        return [
            'id' => $span->getAttribute('id'),
            'span_id' => $span->getAttribute('span_id'),
            'parent_span_id' => $span->getAttribute('parent_span_id'),
            'type' => $span->getAttribute('type'),
            'name' => $span->getAttribute('name'),
            'status' => $span->getAttribute('status'),
            'provider' => $span->getAttribute('provider'),
            'model' => $span->getAttribute('model'),
            'sequence' => $span->getAttribute('sequence'),
            'started_at' => $this->date($span->getAttribute('started_at')),
            'ended_at' => $this->date($span->getAttribute('ended_at')),
            'duration_ms' => $span->getAttribute('duration_ms'),
            'input_tokens' => $span->getAttribute('input_tokens'),
            'output_tokens' => $span->getAttribute('output_tokens'),
            'cached_input_tokens' => $span->getAttribute('cached_input_tokens'),
            'reasoning_tokens' => $span->getAttribute('reasoning_tokens'),
            'total_tokens' => $span->getAttribute('total_tokens'),
            'estimated_cost' => $span->getAttribute('estimated_cost'),
            'currency' => $currency,
            'request' => $this->payload($span->getAttribute('request_payload'), 'request'),
            'response' => $this->payload($span->getAttribute('response_payload'), 'response'),
            'metadata' => $metadata,
            'error' => [
                'type' => $span->getAttribute('error_type'),
                'message' => $this->redactString($span->getAttribute('error_message')),
                'stack' => config('ai-observatory.capture.stack_traces')
                    ? $this->redactString($span->getAttribute('error_stack'))
                    : null,
            ],
        ];
    }

    /**
     * @param  Collection<int, array<string, mixed>>  $spans
     * @return list<array<string, mixed>>
     */
    private function spanTree(Collection $spans): array
    {
        $spanIds = $spans
            ->pluck('span_id')
            ->filter(fn (mixed $spanId): bool => is_string($spanId))
            ->all();
        $roots = $spans->filter(
            fn (array $span): bool => ! is_string($span['parent_span_id'])
                || ! in_array($span['parent_span_id'], $spanIds, true),
        );

        $build = function (array $span) use (&$build, $spans): array {
            $span['children'] = $spans
                ->filter(fn (array $child): bool => $child['parent_span_id'] === $span['span_id'])
                ->map(fn (array $child): array => $build($child))
                ->values()
                ->all();

            return $span;
        };

        return array_values($roots
            ->map(fn (array $span): array => $build($span))
            ->values()
            ->all());
    }

    /** @return array<array-key, mixed>|string|null */
    private function payload(mixed $value, ?string $root = null): array|string|null
    {
        if (! is_array($value) && ! is_string($value)) {
            return null;
        }

        $redacted = $root === null
            ? $this->redactor->redact($value)
            : $this->redactor->redact([$root => $value]);

        if ($root !== null) {
            $redacted = is_array($redacted)
                ? ($redacted[$root] ?? null)
                : null;
        }

        return is_array($redacted)
            ? $this->payloadLimiter->limit($redacted)
            : $redacted;
    }

    private function redactString(mixed $value): ?string
    {
        if (! is_string($value)) {
            return null;
        }

        $redacted = $this->redactor->redact($value);

        return is_string($redacted) ? $redacted : null;
    }

    private function date(mixed $value): ?string
    {
        if ($value instanceof CarbonImmutable) {
            return $value->toIso8601String();
        }

        return null;
    }
}
