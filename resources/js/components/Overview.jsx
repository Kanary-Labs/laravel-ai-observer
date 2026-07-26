import { ArrowPathIcon, ArrowUpRightIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'
import {
    formatCost,
    formatDuration,
    formatRelativeDate,
    formatTokens,
    shortClass,
} from '../format'

function Metric({ label, value }) {
    return (
        <div className="grid gap-1 border-t border-zinc-950/10 pt-4 first:border-t-0 first:pt-0 @md:border-t-0 @md:pt-0 @4xl:[&:not(:first-child)]:border-l @4xl:[&:not(:first-child)]:border-zinc-950/10 @4xl:[&:not(:first-child)]:pl-5 @md:[&:not(:nth-child(3n+1))]:border-l @md:[&:not(:nth-child(3n+1))]:border-zinc-950/10 @md:[&:not(:nth-child(3n+1))]:pl-5 @4xl:[&:not(:nth-child(3n+1))]:border-l-0">
            <dt className="truncate text-sm/5 font-medium text-zinc-500">
                {label}
            </dt>
            <dd className="text-2xl font-semibold tracking-tight text-zinc-950 tabular-nums">
                {value}
            </dd>
        </div>
    )
}

function RankedList({ empty, items, metric, title }) {
    return (
        <section className="min-w-0">
            <h2 className="text-base font-semibold text-zinc-950">{title}</h2>
            <ol className="grid pt-3" role="list">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <li
                            key={`${item.name}-${item.provider ?? ''}`}
                            className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-zinc-950/5 py-3"
                        >
                            <div className="w-4 text-sm/5 text-zinc-400 tabular-nums">
                                {index + 1}
                            </div>
                            <div className="min-w-0">
                                <div className="truncate text-base/6 font-medium text-zinc-900 sm:text-sm/5">
                                    {item.name}
                                </div>
                                {item.provider ? (
                                    <div className="truncate font-mono text-base/7 text-zinc-500 sm:text-sm/6">
                                        {item.provider}
                                    </div>
                                ) : null}
                            </div>
                            <div className="text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                                {metric(item)}
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="border-b border-zinc-950/5 py-5 text-base/7 text-zinc-500 sm:text-sm/6">
                        {empty}
                    </li>
                )}
            </ol>
        </section>
    )
}

function OverviewSkeleton() {
    return (
        <div className="grid animate-pulse gap-6">
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-6">
                {Array.from({ length: 6 }, (_, index) => (
                    <div key={index} className="grid gap-2">
                        <div className="h-3 w-20 rounded bg-zinc-100" />
                        <div className="h-7 w-24 rounded bg-zinc-100" />
                    </div>
                ))}
            </div>
            <div className="h-72 rounded bg-zinc-100" />
        </div>
    )
}

export function Overview({ className, data, loading, onNavigate, onRefresh }) {
    const metrics = data?.metrics

    return (
        <main className={clsx('isolate min-h-dvh min-w-0 bg-white', className)}>
            <div className="mx-auto grid max-w-7xl gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">
                    <div className="grid gap-1">
                        <h1 className="text-2xl font-semibold tracking-tight text-balance text-zinc-950">
                            Overview
                        </h1>
                        <p className="text-base/7 text-pretty text-zinc-500 sm:text-sm/6">
                            Today’s AI activity, reliability, and usage.
                        </p>
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

                {loading && !data ? <OverviewSkeleton /> : null}

                {data ? (
                    <>
                        <div className="@container">
                            <dl className="grid gap-4 border-y border-zinc-950/10 py-5 @md:grid-cols-3 @md:gap-5 @4xl:grid-cols-6">
                                <Metric
                                    label="Traces today"
                                    value={metrics.trace_count.toLocaleString()}
                                />
                                <Metric
                                    label="Failure rate"
                                    value={`${metrics.failure_rate}%`}
                                />
                                <Metric
                                    label="Total tokens"
                                    value={formatTokens(metrics.total_tokens)}
                                />
                                <Metric
                                    label="Estimated cost"
                                    value={formatCost(
                                        metrics.estimated_cost,
                                        metrics.currency,
                                    )}
                                />
                                <Metric
                                    label="Average latency"
                                    value={formatDuration(
                                        metrics.average_duration_ms,
                                    )}
                                />
                                <Metric
                                    label="P95 latency"
                                    value={formatDuration(
                                        metrics.p95_duration_ms,
                                    )}
                                />
                            </dl>
                        </div>

                        <section
                            className="grid gap-4"
                            aria-labelledby="usage-reports-heading"
                        >
                            <div className="grid gap-1">
                                <h2
                                    id="usage-reports-heading"
                                    className="text-xl font-semibold text-zinc-950"
                                >
                                    Usage reports
                                </h2>
                                <p className="text-base/7 text-pretty text-zinc-500 sm:text-sm/6">
                                    The busiest agents, models, and tools today.
                                </p>
                            </div>
                            <div className="@container">
                                <div className="grid gap-6 @3xl:grid-cols-3 @3xl:gap-5 @3xl:divide-x @3xl:divide-zinc-950/10">
                                    <RankedList
                                        title="Top agents"
                                        items={data.top_agents}
                                        empty="No agent activity today."
                                        metric={(item) =>
                                            `${item.trace_count} runs`
                                        }
                                    />
                                    <div className="@3xl:pl-5">
                                        <RankedList
                                            title="Top models"
                                            items={data.top_models}
                                            empty="No model activity today."
                                            metric={(item) =>
                                                `${item.trace_count} calls`
                                            }
                                        />
                                    </div>
                                    <div className="@3xl:pl-5">
                                        <RankedList
                                            title="Top tools"
                                            items={data.top_tools}
                                            empty="No tool activity today."
                                            metric={(item) =>
                                                `${item.call_count} calls`
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section aria-labelledby="recent-failures-heading">
                            <div className="flex items-end justify-between gap-4 border-b border-zinc-950/10 pb-3">
                                <div className="grid gap-1">
                                    <h2
                                        id="recent-failures-heading"
                                        className="text-xl font-semibold text-zinc-950"
                                    >
                                        Recent failures
                                    </h2>
                                    <p className="text-base/7 text-pretty text-zinc-500 sm:text-sm/6">
                                        The latest failed workflows across the
                                        application.
                                    </p>
                                </div>
                            </div>
                            <div className="grid">
                                {data.recent_failures.length > 0 ? (
                                    data.recent_failures.map((trace) => (
                                        <button
                                            key={trace.trace_id}
                                            type="button"
                                            onClick={() =>
                                                onNavigate(trace.trace_id)
                                            }
                                            className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-zinc-950/5 py-3 text-left observatory-focus hover:bg-zinc-50"
                                        >
                                            <div className="min-w-0">
                                                <div className="flex min-w-0 items-center gap-1.5">
                                                    <div className="truncate text-base/6 font-medium text-zinc-950 sm:text-sm/5">
                                                        {trace.agent_class
                                                            ? shortClass(
                                                                  trace.agent_class,
                                                              )
                                                            : trace.name}
                                                    </div>
                                                    <ArrowUpRightIcon className="size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-600" />
                                                </div>
                                                <div className="flex min-w-0 flex-wrap gap-x-2 text-base/7 text-zinc-500 sm:text-sm/6">
                                                    <div className="font-mono">
                                                        {trace.provider ?? '—'}{' '}
                                                        / {trace.model ?? '—'}
                                                    </div>
                                                    <div className="tabular-nums">
                                                        {formatDuration(
                                                            trace.duration_ms,
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <time
                                                dateTime={trace.started_at}
                                                className="text-base/7 whitespace-nowrap text-zinc-500 tabular-nums sm:text-sm/6"
                                            >
                                                {formatRelativeDate(
                                                    trace.started_at,
                                                )}
                                            </time>
                                        </button>
                                    ))
                                ) : (
                                    <p className="py-6 text-base/7 text-zinc-500 sm:text-sm/6">
                                        No failures recorded.
                                    </p>
                                )}
                            </div>
                        </section>
                    </>
                ) : null}
            </div>
        </main>
    )
}
