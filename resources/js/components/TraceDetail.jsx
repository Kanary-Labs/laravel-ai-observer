import {
    ArrowLeftIcon,
    BoltIcon,
    ChevronRightIcon,
    CircleStackIcon,
    CpuChipIcon,
    CubeTransparentIcon,
    ExclamationTriangleIcon,
    SparklesIcon,
    WrenchScrewdriverIcon,
    XMarkIcon,
} from '@heroicons/react/16/solid'
import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import {
    flattenSpans,
    formatCost,
    formatDate,
    formatDuration,
    formatTokens,
    shortClass,
} from '../format'
import { JsonViewer } from './JsonViewer'
import { StatusBadge } from './StatusBadge'

const typeIcons = {
    agent: SparklesIcon,
    model: CpuChipIcon,
    tool: WrenchScrewdriverIcon,
    mcp: CubeTransparentIcon,
    internal: BoltIcon,
}

function Metric({ label, value }) {
    return (
        <div className="grid gap-1 border-t border-zinc-950/10 pt-4 first:border-t-0 first:pt-0 @sm:border-t-0 @sm:pt-0">
            <dt className="truncate text-base/7 font-medium text-zinc-900 sm:text-sm/6">
                {label}
            </dt>
            <dd className="text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                {value}
            </dd>
        </div>
    )
}

function SpanRow({ span, onSelect }) {
    const Icon = typeIcons[span.type] ?? CircleStackIcon
    const failed = span.status === 'failed'

    return (
        <button
            type="button"
            onClick={() => onSelect(span)}
            style={{ '--span-offset': `${span.depth * 1.25}rem` }}
            className="group relative grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 border-b border-zinc-950/5 py-4 pr-4 pl-[calc(--spacing(4)+var(--span-offset))] text-left observatory-focus hover:bg-zinc-50"
        >
            <span
                className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                aria-hidden="true"
            />
            <Icon
                className={`size-4 h-lh shrink-0 ${failed ? 'fill-red-500' : 'fill-zinc-400'}`}
            />
            <div className="grid min-w-0 gap-1">
                <div className="flex min-w-0 items-center gap-2">
                    <div className="truncate text-base/6 font-medium text-zinc-950 sm:text-sm/5">
                        {span.name}
                    </div>
                    <div className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm/5 text-zinc-500">
                        {span.type}
                    </div>
                </div>
                <div className="flex min-w-0 flex-wrap gap-2 text-base/7 text-zinc-500 sm:text-sm/6">
                    <div className="tabular-nums">#{span.sequence}</div>
                    {span.provider ? <div>{span.provider}</div> : null}
                    {span.model ? (
                        <div className="truncate font-mono">{span.model}</div>
                    ) : null}
                    <div className="tabular-nums">
                        {formatDuration(span.duration_ms)}
                    </div>
                </div>
                {span.error?.message ? (
                    <div className="truncate text-base/7 text-red-600 sm:text-sm/6">
                        {span.error.message}
                    </div>
                ) : null}
            </div>
            <ChevronRightIcon className="size-4 h-lh shrink-0 fill-zinc-300 group-hover:fill-zinc-500" />
        </button>
    )
}

function SpanDrawer({ span, onClose }) {
    useEffect(() => {
        function close(event) {
            if (event.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', close)

        return () => window.removeEventListener('keydown', close)
    }, [onClose])

    if (!span) return null

    return (
        <div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="span-title"
        >
            <button
                type="button"
                aria-label="Close span details"
                onClick={onClose}
                className="absolute inset-0 bg-zinc-950/20"
            />
            <div className="absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col bg-white shadow-2xl ring-1 ring-zinc-950/10">
                <div className="flex items-start justify-between gap-5 border-b border-zinc-950/10 p-5 sm:p-6">
                    <div className="grid min-w-0 gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <StatusBadge status={span.status} />
                            <div className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm/5 text-zinc-500">
                                {span.type}
                            </div>
                        </div>
                        <h2
                            id="span-title"
                            className="text-xl font-semibold text-balance text-zinc-950"
                        >
                            {span.name}
                        </h2>
                        <div className="font-mono text-base/7 break-all text-zinc-500 sm:text-sm/6">
                            {span.span_id}
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="relative rounded-md p-1.5 observatory-focus hover:bg-zinc-100"
                        aria-label="Close"
                    >
                        <span
                            className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                            aria-hidden="true"
                        />
                        <XMarkIcon className="size-4 shrink-0 fill-zinc-500" />
                    </button>
                </div>
                <div className="grow overflow-y-auto p-5 sm:p-6">
                    <dl className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3">
                        <div>
                            <dt className="text-sm/5 font-medium text-zinc-900">
                                Duration
                            </dt>
                            <dd className="text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                                {formatDuration(span.duration_ms)}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm/5 font-medium text-zinc-900">
                                Tokens
                            </dt>
                            <dd className="text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                                {formatTokens(span.total_tokens)}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm/5 font-medium text-zinc-900">
                                Parent span
                            </dt>
                            <dd className="truncate font-mono text-base/7 text-zinc-500 sm:text-sm/6">
                                {span.parent_span_id ?? 'Root'}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm/5 font-medium text-zinc-900">
                                Provider
                            </dt>
                            <dd className="text-base/7 text-zinc-500 sm:text-sm/6">
                                {span.provider ?? '—'}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm/5 font-medium text-zinc-900">
                                Model
                            </dt>
                            <dd className="truncate font-mono text-base/7 text-zinc-500 sm:text-sm/6">
                                {span.model ?? '—'}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm/5 font-medium text-zinc-900">
                                Estimated cost
                            </dt>
                            <dd className="text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                                {formatCost(span.estimated_cost, span.currency)}
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm/5 font-medium text-zinc-900">
                                Time to first token
                            </dt>
                            <dd className="text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                                {formatDuration(
                                    span.metadata?.time_to_first_token_ms,
                                )}
                            </dd>
                        </div>
                    </dl>

                    <div className="grid gap-5 pt-6">
                        {span.error?.message ? (
                            <section className="rounded-lg bg-red-50 p-4">
                                <div className="flex items-start gap-2">
                                    <ExclamationTriangleIcon className="size-4 h-lh shrink-0 fill-red-500" />
                                    <div className="grid min-w-0 gap-1">
                                        <h3 className="text-base font-medium text-red-900">
                                            {span.error.type ?? 'Span failed'}
                                        </h3>
                                        <p className="text-base/7 text-pretty break-words text-red-700 sm:text-sm/6">
                                            {span.error.message}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        ) : null}
                        {span.request !== null ? (
                            <JsonViewer label="Request" value={span.request} />
                        ) : null}
                        {span.response !== null ? (
                            <JsonViewer
                                label="Response"
                                value={span.response}
                            />
                        ) : null}
                        {span.metadata !== null ? (
                            <JsonViewer
                                label="Metadata"
                                value={span.metadata}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function TraceDetail({ className, loading, onBack, trace }) {
    const [selectedSpan, setSelectedSpan] = useState(null)
    const spans = useMemo(() => flattenSpans(trace?.spans ?? []), [trace])

    useEffect(() => setSelectedSpan(null), [trace?.trace_id])

    if (loading || !trace) {
        return (
            <main
                className={clsx(
                    'isolate mx-auto grid max-w-screen-2xl gap-6 px-4 py-7 sm:px-6 lg:px-8 lg:py-10',
                    className,
                )}
            >
                <div className="h-8 w-56 animate-pulse rounded bg-zinc-100" />
                <div className="h-32 animate-pulse rounded bg-zinc-100" />
                <div className="h-96 animate-pulse rounded bg-zinc-100" />
            </main>
        )
    }

    return (
        <main className={clsx('isolate min-w-0', className)}>
            <div className="mx-auto grid max-w-screen-2xl gap-7 px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
                <button
                    type="button"
                    onClick={onBack}
                    className="relative inline-flex w-fit items-center gap-1.5 rounded-md py-1 pr-2 pl-1 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100"
                >
                    <span
                        className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                        aria-hidden="true"
                    />
                    <ArrowLeftIcon className="size-4 h-lh shrink-0 fill-zinc-400" />
                    All traces
                </button>

                <header className="grid gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <StatusBadge status={trace.status} />
                        {trace.feature ? (
                            <div className="rounded-full bg-zinc-100 px-2 py-1 text-sm/5 font-medium text-zinc-600 ring-1 ring-zinc-950/5 ring-inset">
                                {trace.feature}
                            </div>
                        ) : null}
                    </div>
                    <div className="grid gap-2">
                        <h1 className="text-2xl font-semibold tracking-tight text-balance text-zinc-950">
                            {trace.name}
                        </h1>
                        <div className="flex min-w-0 flex-wrap gap-x-4 gap-y-1 text-base/7 text-zinc-500 sm:text-sm/6">
                            <div>{shortClass(trace.agent_class)}</div>
                            <div className="font-mono">
                                {trace.provider ?? '—'} / {trace.model ?? '—'}
                            </div>
                            <div className="font-mono break-all">
                                {trace.trace_id}
                            </div>
                        </div>
                    </div>
                </header>

                <div className="@container">
                    <dl className="grid gap-4 @sm:grid-cols-2 @sm:gap-6 @3xl:grid-cols-5">
                        <Metric
                            label="Duration"
                            value={formatDuration(trace.duration_ms)}
                        />
                        <Metric
                            label="Total tokens"
                            value={formatTokens(trace.total_tokens)}
                        />
                        <Metric
                            label="Estimated cost"
                            value={formatCost(
                                trace.estimated_cost,
                                trace.currency,
                            )}
                        />
                        <Metric
                            label="Started"
                            value={formatDate(trace.started_at)}
                        />
                        <Metric
                            label="User / tenant"
                            value={`${trace.user?.id ?? '—'} / ${trace.tenant?.id ?? '—'}`}
                        />
                    </dl>
                </div>

                <div className="grid gap-7 lg:grid-cols-[minmax(0,5fr)_minmax(17rem,2fr)]">
                    <section
                        className="min-w-0"
                        aria-labelledby="timeline-heading"
                    >
                        <div className="flex items-end justify-between gap-4 border-b border-zinc-950/10 pb-4">
                            <div className="grid gap-1">
                                <h2
                                    id="timeline-heading"
                                    className="text-xl font-semibold text-zinc-950"
                                >
                                    Trace timeline
                                </h2>
                                <p className="text-base/7 text-pretty text-zinc-500 sm:text-sm/6">
                                    Select a span to inspect its request,
                                    response, usage, and errors.
                                </p>
                            </div>
                            <div className="text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                                {trace.span_count} spans
                            </div>
                        </div>
                        <div className="border-x border-zinc-950/10">
                            {spans.map((span) => (
                                <SpanRow
                                    key={span.span_id}
                                    span={span}
                                    onSelect={setSelectedSpan}
                                />
                            ))}
                        </div>
                    </section>

                    <aside
                        className="min-w-0 lg:border-l lg:border-zinc-950/10 lg:pl-7"
                        aria-label="Trace context"
                    >
                        <h2 className="text-base font-medium text-zinc-950">
                            Trace context
                        </h2>
                        <dl className="grid gap-4 pt-4">
                            <div>
                                <dt className="text-base/7 font-medium text-zinc-900 sm:text-sm/6">
                                    Environment
                                </dt>
                                <dd className="text-base/7 text-zinc-500 sm:text-sm/6">
                                    {trace.environment ?? '—'}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-base/7 font-medium text-zinc-900 sm:text-sm/6">
                                    Agent class
                                </dt>
                                <dd className="font-mono text-base/7 break-all text-zinc-500 sm:text-sm/6">
                                    {trace.agent_class ?? '—'}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-base/7 font-medium text-zinc-900 sm:text-sm/6">
                                    Input / output
                                </dt>
                                <dd className="text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                                    {formatTokens(trace.input_tokens)} /{' '}
                                    {formatTokens(trace.output_tokens)}
                                </dd>
                            </div>
                        </dl>
                        {trace.tags ? (
                            <div className="pt-5">
                                <JsonViewer label="Tags" value={trace.tags} />
                            </div>
                        ) : null}
                        {trace.metadata ? (
                            <div className="pt-5">
                                <JsonViewer
                                    label="Metadata"
                                    value={trace.metadata}
                                />
                            </div>
                        ) : null}
                        {trace.events?.length > 0 ? (
                            <section className="border-t border-zinc-950/10 pt-5">
                                <div className="grid gap-1">
                                    <h2 className="text-base font-medium text-zinc-950">
                                        Lifecycle events
                                    </h2>
                                    <p className="text-base/7 text-pretty text-zinc-500 sm:text-sm/6">
                                        Provider, retry, streaming, and failover
                                        events recorded during this trace.
                                    </p>
                                </div>
                                <div className="grid gap-3 pt-4">
                                    {trace.events.map((event) => (
                                        <details
                                            key={event.id}
                                            className="rounded-lg bg-zinc-50 p-3 ring-1 ring-zinc-950/5"
                                        >
                                            <summary className="cursor-pointer list-none">
                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="font-mono text-base/6 font-medium text-zinc-900 sm:text-sm/5">
                                                        {event.event_type}
                                                    </div>
                                                    <div className="text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                                                        {formatDate(
                                                            event.occurred_at,
                                                        )}
                                                    </div>
                                                </div>
                                            </summary>
                                            {event.payload ? (
                                                <JsonViewer
                                                    className="mt-3"
                                                    label="Event payload"
                                                    value={event.payload}
                                                />
                                            ) : null}
                                        </details>
                                    ))}
                                </div>
                            </section>
                        ) : null}
                    </aside>
                </div>
            </div>
            <SpanDrawer
                span={selectedSpan}
                onClose={() => setSelectedSpan(null)}
            />
        </main>
    )
}
