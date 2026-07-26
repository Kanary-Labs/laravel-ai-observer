import {
    ArrowPathIcon,
    ArrowUpRightIcon,
    CircleStackIcon,
    ClockIcon,
    CommandLineIcon,
} from '@heroicons/react/16/solid'
import clsx from 'clsx'
import { Filters } from './Filters'
import { Pagination } from './Pagination'
import { StatusBadge } from './StatusBadge'
import {
    formatCost,
    formatDuration,
    formatRelativeDate,
    formatTokens,
    shortClass,
} from '../format'

function EmptyState({ filtered }) {
    return (
        <div className="flex min-h-80 flex-col items-center justify-center gap-3 border-b border-zinc-950/10 py-16 text-center">
            <CircleStackIcon className="size-4 shrink-0 fill-zinc-400" />
            <div className="grid gap-1">
                <h2 className="text-base font-medium text-zinc-950">
                    {filtered ? 'No matching traces' : 'No traces recorded'}
                </h2>
                <p className="max-w-[52ch] text-base/7 text-pretty text-zinc-500 sm:text-sm/6">
                    {filtered
                        ? 'Adjust the filters or search for a different operation.'
                        : 'Run an AI agent and its trace will appear here automatically.'}
                </p>
            </div>
        </div>
    )
}

function LoadingRows() {
    return Array.from({ length: 6 }, (_, index) => (
        <tr key={index} className="border-b border-zinc-950/5">
            <td colSpan="8" className="py-5">
                <div className="h-5 animate-pulse rounded bg-zinc-100" />
            </td>
        </tr>
    ))
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
        <main className={clsx('isolate min-w-0', className)}>
            <div className="mx-auto grid max-w-screen-2xl gap-7 px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div className="grid gap-1">
                        <h1 className="text-2xl font-semibold tracking-tight text-balance text-zinc-950">
                            Traces
                        </h1>
                        <p className="text-base/7 text-pretty text-zinc-500 sm:text-sm/6">
                            Inspect every agent, model request, tool call, and
                            failure.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onRefresh}
                        className="relative inline-flex w-fit items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-50"
                    >
                        <span
                            className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                            aria-hidden="true"
                        />
                        <ArrowPathIcon
                            className={`size-4 h-lh shrink-0 fill-zinc-400 ${loading ? 'animate-spin' : ''}`}
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

                <section aria-labelledby="trace-results">
                    <div className="flex items-center justify-between gap-4 pb-4">
                        <h2
                            id="trace-results"
                            className="text-base font-medium text-zinc-950"
                        >
                            Recorded operations
                        </h2>
                        <div className="text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                            {meta
                                ? `${meta.total.toLocaleString()} total`
                                : 'Loading'}
                        </div>
                    </div>

                    <div className="-mx-4 -my-2 overflow-x-auto whitespace-nowrap sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full px-4 py-2 align-middle sm:px-6 lg:px-8">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-zinc-950/10">
                                        <th className="py-3 pr-4 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Operation
                                        </th>
                                        <th className="px-4 py-3 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Provider and model
                                        </th>
                                        <th className="px-4 py-3 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Tools
                                        </th>
                                        <th className="px-4 py-3 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Tokens
                                        </th>
                                        <th className="px-4 py-3 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Estimated cost
                                        </th>
                                        <th className="px-4 py-3 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Duration
                                        </th>
                                        <th className="px-4 py-3 text-left text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Feature
                                        </th>
                                        <th className="py-3 pl-4 text-right text-sm/5 font-medium whitespace-nowrap text-zinc-500">
                                            Time
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading && traces.length === 0 ? (
                                        <LoadingRows />
                                    ) : null}
                                    {!loading &&
                                        traces.map((trace) => (
                                            <tr
                                                key={trace.trace_id}
                                                className="border-b border-zinc-950/5"
                                            >
                                                <td className="py-4 pr-4 align-top">
                                                    <div className="flex min-w-72 items-start gap-3">
                                                        <StatusBadge
                                                            status={
                                                                trace.status
                                                            }
                                                        />
                                                        <div className="grid min-w-0 gap-1">
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    onNavigate(
                                                                        trace.trace_id,
                                                                    )
                                                                }
                                                                className="group relative min-w-0 rounded text-left observatory-focus"
                                                            >
                                                                <div className="flex items-center gap-1.5 text-base/6 font-medium text-zinc-950 sm:text-sm/5">
                                                                    <div className="truncate">
                                                                        {
                                                                            trace.name
                                                                        }
                                                                    </div>
                                                                    <ArrowUpRightIcon className="size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-500" />
                                                                </div>
                                                                <span
                                                                    className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                                                                    aria-hidden="true"
                                                                />
                                                            </button>
                                                            <div className="truncate text-base/7 text-zinc-500 sm:text-sm/6">
                                                                {shortClass(
                                                                    trace.agent_class,
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 align-top">
                                                    <div className="grid gap-1">
                                                        <div className="text-base/6 text-zinc-900 sm:text-sm/5">
                                                            {trace.provider ??
                                                                '—'}
                                                        </div>
                                                        <div className="font-mono text-base/7 text-zinc-500 sm:text-sm/6">
                                                            {trace.model ?? '—'}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-right align-top text-base/6 text-zinc-700 tabular-nums sm:text-sm/5">
                                                    {trace.tool_count}
                                                </td>
                                                <td className="px-4 py-4 text-right align-top text-base/6 text-zinc-700 tabular-nums sm:text-sm/5">
                                                    {formatTokens(
                                                        trace.total_tokens,
                                                    )}
                                                </td>
                                                <td className="px-4 py-4 text-right align-top text-base/6 text-zinc-700 tabular-nums sm:text-sm/5">
                                                    {formatCost(
                                                        trace.estimated_cost,
                                                        trace.currency,
                                                    )}
                                                </td>
                                                <td className="px-4 py-4 text-right align-top text-base/6 text-zinc-700 tabular-nums sm:text-sm/5">
                                                    {formatDuration(
                                                        trace.duration_ms,
                                                    )}
                                                </td>
                                                <td className="px-4 py-4 align-top text-base/6 text-zinc-700 sm:text-sm/5">
                                                    {trace.feature ?? '—'}
                                                </td>
                                                <td className="py-4 pl-4 text-right align-top">
                                                    <div
                                                        title={trace.started_at}
                                                        className="text-base/6 text-zinc-700 sm:text-sm/5"
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

                <footer className="flex flex-wrap items-center gap-4 border-t border-zinc-950/10 pt-5 text-base/7 text-zinc-500 sm:text-sm/6">
                    <div className="inline-flex items-center gap-1.5">
                        <CommandLineIcon className="size-4 h-lh shrink-0 fill-zinc-400" />
                        Local observability
                    </div>
                    <div className="inline-flex items-center gap-1.5">
                        <ClockIcon className="size-4 h-lh shrink-0 fill-zinc-400" />
                        Refresh to load recent traces
                    </div>
                </footer>
            </div>
        </main>
    )
}
