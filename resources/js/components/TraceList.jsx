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

function LoadingRows() {
    return Array.from({ length: 7 }, (_, index) => (
        <div
            key={index}
            className="grid animate-pulse gap-2 border-b border-zinc-950/5 py-4"
        >
            <div className="h-4 w-2/5 rounded bg-zinc-100" />
            <div className="h-3 w-3/5 rounded bg-zinc-100" />
        </div>
    ))
}

function TraceIdentity({ trace, onNavigate }) {
    const agent = shortClass(trace.agent_class)

    return (
        <div className="grid min-w-0 gap-0.5">
            <button
                type="button"
                onClick={() => onNavigate(trace.trace_id)}
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

function MobileTrace({ trace, onNavigate }) {
    return (
        <article className="grid gap-3 border-b border-zinc-950/10 py-4 lg:hidden">
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
    onRefresh,
    onReset,
    traces,
}) {
    const filtered = Object.entries(filters).some(
        ([key, value]) => !['page', 'per_page'].includes(key) && value !== '',
    )

    return (
        <main className={clsx('isolate min-h-dvh min-w-0 bg-white', className)}>
            <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
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

                <section aria-label="Recorded traces">
                    {loading && traces.length === 0 ? <LoadingRows /> : null}

                    {!loading
                        ? traces.map((trace) => (
                              <MobileTrace
                                  key={trace.trace_id}
                                  trace={trace}
                                  onNavigate={onNavigate}
                              />
                          ))
                        : null}

                    <div className="-mx-4 -my-2 hidden overflow-x-auto whitespace-nowrap sm:-mx-6 lg:-mx-8 lg:block">
                        <div className="inline-block min-w-full px-4 py-2 align-middle sm:px-6 lg:px-8">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-zinc-950/10">
                                        <th className="py-2.5 pr-4 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Agent
                                        </th>
                                        <th className="px-4 py-2.5 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Status
                                        </th>
                                        <th className="px-4 py-2.5 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Provider / model
                                        </th>
                                        <th className="px-4 py-2.5 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Tokens
                                        </th>
                                        <th className="px-4 py-2.5 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Cost
                                        </th>
                                        <th className="px-4 py-2.5 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Latency
                                        </th>
                                        <th className="py-2.5 pl-4 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Started
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!loading &&
                                        traces.map((trace) => (
                                            <tr
                                                key={trace.trace_id}
                                                className="border-b border-zinc-950/5"
                                            >
                                                <td className="py-3 pr-4 align-middle">
                                                    <div className="min-w-56">
                                                        <TraceIdentity
                                                            trace={trace}
                                                            onNavigate={
                                                                onNavigate
                                                            }
                                                        />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 align-middle">
                                                    <StatusBadge
                                                        status={trace.status}
                                                        compact
                                                    />
                                                </td>
                                                <td className="px-4 py-3 align-middle">
                                                    <div className="grid gap-0.5">
                                                        <div className="text-sm/5 text-zinc-900">
                                                            {trace.provider ??
                                                                '—'}
                                                        </div>
                                                        <div className="max-w-44 truncate font-mono text-sm/5 text-zinc-500">
                                                            {trace.model ?? '—'}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-right align-middle text-sm/5 text-zinc-900 tabular-nums">
                                                    {formatTokens(
                                                        trace.total_tokens,
                                                    )}
                                                </td>
                                                <td className="px-4 py-3 text-right align-middle text-sm/5 text-zinc-500 tabular-nums">
                                                    {formatCost(
                                                        trace.estimated_cost,
                                                        trace.currency,
                                                    )}
                                                </td>
                                                <td className="px-4 py-3 text-right align-middle text-sm/5 text-zinc-900 tabular-nums">
                                                    {formatDuration(
                                                        trace.duration_ms,
                                                    )}
                                                </td>
                                                <td className="py-3 pl-4 text-right align-middle">
                                                    <div
                                                        title={trace.started_at}
                                                        className="text-sm/5 text-zinc-600 tabular-nums"
                                                    >
                                                        {formatRelativeDate(
                                                            trace.started_at,
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {!loading && traces.length === 0 ? (
                        <EmptyState filtered={filtered} />
                    ) : null}
                    <Pagination meta={meta} onPage={onPage} />
                </section>
            </div>
        </main>
    )
}
