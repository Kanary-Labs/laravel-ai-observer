import {
    ArrowPathIcon,
    ArrowUpRightIcon,
    CircleStackIcon,
} from '@heroicons/react/16/solid'
import clsx from 'clsx'
import {
    formatCost,
    formatDuration,
    formatRelativeDate,
    formatTokens,
    shortClass,
} from '../format'
import { DataTable } from './DataTable'
import { Filters } from './Filters'
import { Pagination } from './Pagination'
import { StatusBadge } from './StatusBadge'

function EmptyState({ filtered }) {
    return (
        <div className="flex min-h-72 flex-col items-center justify-center gap-3 py-12 text-center">
            <CircleStackIcon className="size-4 shrink-0 fill-zinc-400" />
            <div className="grid gap-1">
                <h2 className="text-base font-medium text-zinc-950">
                    {filtered ? 'No matching traces' : 'No traces yet'}
                </h2>
                <p className="max-w-[52ch] text-base/7 text-pretty text-zinc-500 sm:text-sm/6">
                    {filtered
                        ? 'Clear a filter or try a broader search.'
                        : 'Run a Laravel AI agent. Its execution will appear here automatically.'}
                </p>
            </div>
        </div>
    )
}

function TraceIdentity({ trace, onNavigate }) {
    const agent = shortClass(trace.agent_class)

    function navigate(event) {
        event.stopPropagation()
        onNavigate(trace.trace_id)
    }

    return (
        <div className="grid min-w-0 gap-0.5">
            <button
                type="button"
                onClick={navigate}
                className="group relative min-w-0 rounded text-left observatory-focus"
            >
                <div className="flex min-w-0 items-center gap-1.5">
                    <div className="truncate text-base font-medium text-zinc-950 sm:text-sm/5">
                        {agent !== '—' ? agent : trace.name}
                    </div>
                    <ArrowUpRightIcon className="size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-600" />
                </div>
                <span
                    className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                    aria-hidden="true"
                />
            </button>
            <div className="flex min-w-0 flex-wrap gap-x-1.5 text-base/7 text-zinc-500 sm:text-sm/6">
                {trace.feature ? <span>{trace.feature}</span> : null}
                {trace.feature && trace.tool_count > 0 ? <span>·</span> : null}
                {trace.tool_count > 0 ? (
                    <span className="tabular-nums">
                        {trace.tool_count}{' '}
                        {trace.tool_count === 1 ? 'tool call' : 'tool calls'}
                    </span>
                ) : null}
                {!trace.feature && trace.tool_count === 0 ? (
                    <span>{trace.name}</span>
                ) : null}
            </div>
        </div>
    )
}

function MobileLoadingRows() {
    return Array.from({ length: 6 }, (_, index) => (
        <div
            key={index}
            className="grid animate-pulse gap-3 border-b border-zinc-950/5 py-4"
        >
            <div className="h-4 w-2/5 rounded bg-zinc-100" />
            <div className="h-3 w-3/5 rounded bg-zinc-100" />
        </div>
    ))
}

function MobileTrace({ trace, onNavigate }) {
    return (
        <article
            onClick={() => onNavigate(trace.trace_id)}
            className="grid cursor-pointer gap-3 border-b border-zinc-950/10 py-4 lg:hidden"
        >
            <div className="flex min-w-0 items-start justify-between gap-3">
                <TraceIdentity trace={trace} onNavigate={onNavigate} />
                <StatusBadge status={trace.status} compact />
            </div>
            <dl className="grid grid-cols-3 gap-4">
                <div className="min-w-0">
                    <dt className="text-base/6 font-medium text-zinc-900 sm:text-sm/5">
                        Model
                    </dt>
                    <dd className="truncate font-mono text-base/7 text-zinc-500">
                        {trace.model ?? '—'}
                    </dd>
                </div>
                <div>
                    <dt className="text-base/6 font-medium text-zinc-900 sm:text-sm/5">
                        Tokens
                    </dt>
                    <dd className="text-base/7 text-zinc-500 tabular-nums">
                        {formatTokens(trace.total_tokens)}
                    </dd>
                </div>
                <div>
                    <dt className="text-base/6 font-medium text-zinc-900 sm:text-sm/5">
                        Latency
                    </dt>
                    <dd className="text-base/7 text-zinc-500 tabular-nums">
                        {formatDuration(trace.duration_ms)}
                    </dd>
                </div>
            </dl>
            <div
                title={trace.started_at}
                className="text-base/7 text-zinc-500 tabular-nums"
            >
                {formatRelativeDate(trace.started_at)}
            </div>
        </article>
    )
}

export function TraceList({
    className,
    filters,
    loading,
    meta,
    onFilter,
    onNavigate,
    onPage,
    onPerPage,
    onRefresh,
    onReset,
    traces,
}) {
    const filtered = Object.entries(filters).some(
        ([key, value]) => !['page', 'per_page'].includes(key) && value !== '',
    )
    const columns = [
        {
            key: 'agent',
            header: 'Agent',
            className: 'w-[32%]',
            cell: (trace) => (
                <div className="min-w-56">
                    <TraceIdentity trace={trace} onNavigate={onNavigate} />
                </div>
            ),
        },
        {
            key: 'status',
            header: 'Status',
            cell: (trace) => <StatusBadge status={trace.status} compact />,
        },
        {
            key: 'model',
            header: 'Provider / model',
            className: 'w-[20%]',
            cell: (trace) => (
                <div className="grid gap-0.5">
                    <div className="text-sm/5 text-zinc-900">
                        {trace.provider ?? '—'}
                    </div>
                    <div className="max-w-48 truncate font-mono text-xs/5 text-zinc-500">
                        {trace.model ?? '—'}
                    </div>
                </div>
            ),
        },
        {
            key: 'tokens',
            header: 'Tokens',
            align: 'right',
            cell: (trace) => (
                <span className="text-zinc-900 tabular-nums">
                    {formatTokens(trace.total_tokens)}
                </span>
            ),
        },
        {
            key: 'cost',
            header: 'Cost',
            align: 'right',
            cell: (trace) => (
                <span className="text-zinc-500 tabular-nums">
                    {formatCost(trace.estimated_cost, trace.currency)}
                </span>
            ),
        },
        {
            key: 'latency',
            header: 'Latency',
            align: 'right',
            cell: (trace) => (
                <span className="text-zinc-900 tabular-nums">
                    {formatDuration(trace.duration_ms)}
                </span>
            ),
        },
        {
            key: 'started',
            header: 'Started',
            align: 'right',
            cell: (trace) => (
                <time
                    dateTime={trace.started_at}
                    title={trace.started_at}
                    className="text-zinc-600 tabular-nums"
                >
                    {formatRelativeDate(trace.started_at)}
                </time>
            ),
        },
    ]
    const emptyState = <EmptyState filtered={filtered} />

    return (
        <main
            className={clsx(
                'isolate min-h-dvh min-w-0 bg-white lg:h-dvh lg:overflow-hidden',
                className,
            )}
        >
            <div className="mx-auto flex min-h-0 max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 sm:py-6 lg:h-full lg:px-8">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-baseline gap-3">
                        <h1 className="text-2xl font-semibold tracking-tight text-balance text-zinc-950">
                            Traces
                        </h1>
                        <div className="truncate text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                            {meta
                                ? `${meta.total.toLocaleString()} recorded`
                                : 'Loading'}
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onRefresh}
                        className="relative inline-flex shrink-0 items-center gap-1.5 rounded-lg py-2.5 pr-3 pl-2.5 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-50 sm:py-1.5"
                    >
                        <span
                            className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                            aria-hidden="true"
                        />
                        <ArrowPathIcon
                            className={clsx(
                                'size-4 h-lh shrink-0 fill-zinc-400',
                                loading && 'animate-spin',
                            )}
                        />
                        Refresh
                    </button>
                </div>

                <Filters
                    filters={filters}
                    options={meta?.filter_options ?? {}}
                    onChange={onFilter}
                    onReset={onReset}
                />

                <section
                    className="flex min-h-0 grow flex-col"
                    aria-label="Recorded traces"
                >
                    <div className="lg:hidden">
                        {loading && traces.length === 0 ? (
                            <MobileLoadingRows />
                        ) : null}
                        {!loading
                            ? traces.map((trace) => (
                                  <MobileTrace
                                      key={trace.trace_id}
                                      trace={trace}
                                      onNavigate={onNavigate}
                                  />
                              ))
                            : null}
                        {!loading && traces.length === 0 ? emptyState : null}
                    </div>

                    <DataTable
                        columns={columns}
                        emptyState={emptyState}
                        loading={loading}
                        rows={traces}
                        rowKey={(trace) => trace.trace_id}
                        onRowClick={(trace) => onNavigate(trace.trace_id)}
                    />
                    <Pagination
                        className="shrink-0"
                        meta={meta}
                        perPage={filters.per_page}
                        onPage={onPage}
                        onPerPage={onPerPage}
                    />
                </section>
            </div>
        </main>
    )
}
