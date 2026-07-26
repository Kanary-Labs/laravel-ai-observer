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
        <div className="flex min-h-80 flex-col items-center justify-center gap-3 py-16 text-center">
            <CircleStackIcon className="size-4 shrink-0 fill-zinc-400" />
            <div className="grid gap-1">
                <h2 className="text-base font-medium text-zinc-950">
                    {filtered ? 'No matching traces' : 'No traces yet'}
                </h2>
                <p className="max-w-[52ch] text-base/7 text-pretty text-zinc-500 sm:text-sm/6">
                    {filtered
                        ? 'Clear a filter or try a broader search.'
                        : 'Run a Laravel AI agent. Its complete execution will appear here automatically.'}
                </p>
            </div>
        </div>
    )
}

function LoadingRows() {
    return Array.from({ length: 6 }, (_, index) => (
        <div
            key={index}
            className="grid animate-pulse gap-2 border-b border-zinc-950/5 py-5"
        >
            <div className="h-4 w-2/5 rounded bg-zinc-100" />
            <div className="h-3 w-3/5 rounded bg-zinc-100" />
        </div>
    ))
}

function SummaryMetric({ label, value, tone }) {
    return (
        <div className="grid gap-1 border-t border-zinc-950/10 pt-4 first:border-t-0 first:pt-0 @md:border-t-0 @md:pt-0">
            <dt className="truncate text-base/6 font-medium text-zinc-500 sm:text-sm/5">
                {label}
            </dt>
            <dd
                className={clsx(
                    'text-2xl font-semibold tracking-tight text-zinc-950 tabular-nums sm:text-xl',
                    tone,
                )}
            >
                {value}
            </dd>
        </div>
    )
}

function TraceIdentity({ trace, onNavigate }) {
    return (
        <div className="flex min-w-0 items-start gap-3">
            <StatusBadge status={trace.status} compact />
            <div className="grid min-w-0 gap-1">
                <button
                    type="button"
                    onClick={() => onNavigate(trace.trace_id)}
                    className="group relative min-w-0 rounded text-left observatory-focus"
                >
                    <div className="flex min-w-0 items-center gap-1.5">
                        <div className="truncate text-base font-medium text-zinc-950 sm:text-sm/5">
                            {trace.name}
                        </div>
                        <ArrowUpRightIcon className="size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-600" />
                    </div>
                    <span
                        className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                        aria-hidden="true"
                    />
                </button>
                <div className="flex min-w-0 flex-wrap gap-x-2 gap-y-0.5 text-base/7 text-zinc-500 sm:text-sm/6">
                    <span className="truncate">
                        {shortClass(trace.agent_class)}
                    </span>
                    {trace.feature ? <span>· {trace.feature}</span> : null}
                    {trace.tool_count > 0 ? (
                        <span className="tabular-nums">
                            · {trace.tool_count}{' '}
                            {trace.tool_count === 1 ? 'tool' : 'tools'}
                        </span>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

function MobileTrace({ trace, onNavigate }) {
    return (
        <article className="grid gap-4 border-b border-zinc-950/10 py-5 lg:hidden">
            <TraceIdentity trace={trace} onNavigate={onNavigate} />
            <dl className="grid grid-cols-2 gap-x-5 gap-y-3">
                <div>
                    <dt className="text-base/6 font-medium text-zinc-900 sm:text-sm/5">
                        Model
                    </dt>
                    <dd className="truncate font-mono text-base/7 text-zinc-500">
                        {trace.model ?? '—'}
                    </dd>
                </div>
                <div>
                    <dt className="text-base/6 font-medium text-zinc-900 sm:text-sm/5">
                        Provider
                    </dt>
                    <dd className="text-base/7 text-zinc-500">
                        {trace.provider ?? '—'}
                    </dd>
                </div>
                <div>
                    <dt className="text-base/6 font-medium text-zinc-900 sm:text-sm/5">
                        Usage
                    </dt>
                    <dd className="text-base/7 text-zinc-500 tabular-nums">
                        {formatTokens(trace.total_tokens)} tokens
                    </dd>
                </div>
                <div>
                    <dt className="text-base/6 font-medium text-zinc-900 sm:text-sm/5">
                        Duration
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
    const failures = traces.filter((trace) => trace.status === 'failed').length
    const tokenValues = traces
        .map((trace) => Number(trace.total_tokens))
        .filter(
            (value, index) =>
                traces[index].total_tokens !== null &&
                traces[index].total_tokens !== undefined &&
                Number.isFinite(value),
        )
    const tokens =
        tokenValues.length > 0
            ? tokenValues.reduce((total, value) => total + value, 0)
            : null
    const durations = traces
        .map((trace) => Number(trace.duration_ms))
        .filter(Number.isFinite)
    const averageDuration =
        durations.length > 0
            ? durations.reduce((total, value) => total + value, 0) /
              durations.length
            : null

    return (
        <main className={clsx('isolate min-w-0', className)}>
            <div className="mx-auto grid max-w-screen-2xl gap-7 px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div className="grid gap-1">
                        <h1 className="text-2xl font-semibold tracking-tight text-balance text-zinc-950">
                            Traces
                        </h1>
                        <p className="max-w-[62ch] text-base/7 text-pretty text-zinc-500 sm:text-sm/6">
                            Follow complete AI runs from agent prompt to model
                            response and every tool call between them.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onRefresh}
                        className="relative inline-flex w-fit items-center gap-1.5 rounded-lg py-2.5 pr-3 pl-2.5 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-50 sm:py-1.5"
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

                <div className="@container">
                    <dl className="grid gap-4 border-y border-zinc-950/10 py-5 @md:grid-cols-4 @md:gap-0 @md:divide-x @md:divide-zinc-950/10">
                        <div className="@md:pr-5">
                            <SummaryMetric
                                label="Matching traces"
                                value={
                                    meta
                                        ? meta.total.toLocaleString()
                                        : 'Loading'
                                }
                            />
                        </div>
                        <div className="@md:px-5">
                            <SummaryMetric
                                label="Failures on page"
                                value={failures.toLocaleString()}
                                tone={failures > 0 ? 'text-red-600' : undefined}
                            />
                        </div>
                        <div className="@md:px-5">
                            <SummaryMetric
                                label="Tokens on page"
                                value={formatTokens(tokens)}
                            />
                        </div>
                        <div className="@md:pl-5">
                            <SummaryMetric
                                label="Average latency"
                                value={formatDuration(averageDuration)}
                            />
                        </div>
                    </dl>
                </div>

                <Filters
                    filters={filters}
                    options={meta?.filter_options ?? {}}
                    onChange={onFilter}
                    onReset={onReset}
                />

                <section aria-labelledby="trace-results">
                    <div className="flex items-end justify-between gap-4 pb-3">
                        <div className="grid gap-0.5">
                            <h2
                                id="trace-results"
                                className="text-base font-medium text-zinc-950"
                            >
                                Recent operations
                            </h2>
                            <p className="text-base/7 text-zinc-500 sm:text-sm/6">
                                Newest first.
                            </p>
                        </div>
                        <div className="text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                            {meta
                                ? `${meta.total.toLocaleString()} results`
                                : 'Loading'}
                        </div>
                    </div>

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

                    <div className="hidden overflow-x-auto whitespace-nowrap lg:block">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-zinc-950/10">
                                    <th className="py-3 pr-5 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                        Operation
                                    </th>
                                    <th className="px-5 py-3 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                        Provider / model
                                    </th>
                                    <th className="px-5 py-3 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                        Usage
                                    </th>
                                    <th className="px-5 py-3 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                        Duration
                                    </th>
                                    <th className="py-3 pl-5 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500">
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
                                            <td className="py-4 pr-5 align-top">
                                                <div className="min-w-80">
                                                    <TraceIdentity
                                                        trace={trace}
                                                        onNavigate={onNavigate}
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 align-top">
                                                <div className="grid gap-1">
                                                    <div className="text-sm/5 text-zinc-900">
                                                        {trace.provider ?? '—'}
                                                    </div>
                                                    <div className="max-w-56 truncate font-mono text-sm/6 text-zinc-500">
                                                        {trace.model ?? '—'}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 text-right align-top">
                                                <div className="grid gap-1">
                                                    <div className="text-sm/5 text-zinc-900 tabular-nums">
                                                        {formatTokens(
                                                            trace.total_tokens,
                                                        )}{' '}
                                                        tokens
                                                    </div>
                                                    <div className="text-sm/6 text-zinc-500 tabular-nums">
                                                        {formatCost(
                                                            trace.estimated_cost,
                                                            trace.currency,
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 text-right align-top text-sm/5 text-zinc-900 tabular-nums">
                                                {formatDuration(
                                                    trace.duration_ms,
                                                )}
                                            </td>
                                            <td className="py-4 pl-5 text-right align-top">
                                                <div
                                                    title={trace.started_at}
                                                    className="text-sm/5 text-zinc-700 tabular-nums"
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

                    {!loading && traces.length === 0 ? (
                        <EmptyState filtered={filtered} />
                    ) : null}
                    <Pagination meta={meta} onPage={onPage} />
                </section>
            </div>
        </main>
    )
}
