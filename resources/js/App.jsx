import {
    Bars3Icon,
    CircleStackIcon,
    QueueListIcon,
    XMarkIcon,
} from '@heroicons/react/16/solid'
import clsx from 'clsx'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { getJson, queryString } from './api'
import { TraceDetail } from './components/TraceDetail'
import { TraceList } from './components/TraceList'

const emptyFilters = {
    search: '',
    status: '',
    provider: '',
    model: '',
    agent_class: '',
    span_type: '',
    feature: '',
    user: '',
    tenant: '',
    has_error: '',
    has_tool_calls: '',
    min_duration: '',
    started_after: '',
    started_before: '',
    page: 1,
    per_page: 25,
}

function Brand() {
    return (
        <a
            href="/"
            aria-label="Homepage"
            className="flex min-w-0 items-center gap-2 rounded observatory-focus"
        >
            <CircleStackIcon className="size-4 shrink-0 fill-amber-500" />
            <div className="truncate text-base font-semibold tracking-tight text-zinc-950">
                AI Observatory
            </div>
        </a>
    )
}

function Sidebar({ basePath, config, onNavigate }) {
    function traces(event) {
        event.preventDefault()
        onNavigate(null)
    }

    return (
        <aside className="fixed inset-y-0 left-0 z-40 hidden w-56 flex-col border-r border-zinc-950/10 bg-white lg:flex">
            <div className="flex h-14 shrink-0 items-center border-b border-zinc-950/10 px-4">
                <Brand />
            </div>
            <nav className="grow p-3" aria-label="Main navigation">
                <a
                    href={`${basePath}/traces`}
                    onClick={traces}
                    aria-current="page"
                    className="flex items-center gap-2 rounded-lg bg-zinc-100 py-2 pr-3 pl-2 text-sm/5 font-medium text-zinc-950 observatory-focus"
                >
                    <QueueListIcon className="size-4 h-lh shrink-0 fill-zinc-500" />
                    Traces
                </a>
            </nav>
            <div className="grid gap-1 border-t border-zinc-950/10 p-4">
                <div className="flex items-center gap-2 text-sm/5 font-medium text-zinc-900">
                    <span className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
                    Recording enabled
                </div>
                <div className="text-sm/5 text-zinc-500">
                    {config.environment} · {config.recordingMode}
                </div>
            </div>
        </aside>
    )
}

function MobileHeader({ basePath, onNavigate }) {
    const [open, setOpen] = useState(false)

    function traces(event) {
        event.preventDefault()
        setOpen(false)
        onNavigate(null)
    }

    return (
        <header className="sticky top-0 z-40 border-b border-zinc-950/10 bg-white/95 backdrop-blur lg:hidden">
            <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-6">
                <Brand />
                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    className="relative rounded-md p-1.5 observatory-focus hover:bg-zinc-100"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                >
                    <span
                        className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                        aria-hidden="true"
                    />
                    {open ? (
                        <XMarkIcon className="size-4 shrink-0 fill-zinc-500" />
                    ) : (
                        <Bars3Icon className="size-4 shrink-0 fill-zinc-500" />
                    )}
                </button>
            </div>
            {open ? (
                <nav
                    className="border-t border-zinc-950/10 p-3"
                    aria-label="Mobile navigation"
                >
                    <a
                        href={`${basePath}/traces`}
                        onClick={traces}
                        aria-current="page"
                        className="flex items-center gap-2 rounded-lg bg-zinc-100 py-2.5 pr-3 pl-2.5 text-base/6 font-medium text-zinc-950 observatory-focus sm:text-sm/5"
                    >
                        <QueueListIcon className="size-5 h-lh shrink-0 fill-zinc-500 sm:size-4" />
                        Traces
                    </a>
                </nav>
            ) : null}
        </header>
    )
}

function ErrorNotice({ message, onRetry }) {
    return (
        <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-3 rounded-lg bg-red-50 p-4 sm:flex-row sm:items-center">
                <p className="text-base/7 text-pretty text-red-700 sm:text-sm/6">
                    {message}
                </p>
                <button
                    type="button"
                    onClick={onRetry}
                    className="relative w-fit rounded-md px-2.5 py-1.5 text-sm/5 font-medium text-red-700 ring-1 ring-red-600/20 observatory-focus hover:bg-red-100"
                >
                    <span
                        className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                        aria-hidden="true"
                    />
                    Try again
                </button>
            </div>
        </div>
    )
}

export default function App({ className }) {
    const config = window.AiObservatory
    const [traceId, setTraceId] = useState(config.initialTraceId)
    const [filters, setFilters] = useState(emptyFilters)
    const [traces, setTraces] = useState([])
    const [meta, setMeta] = useState(null)
    const [trace, setTrace] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [refresh, setRefresh] = useState(0)
    const listQuery = useMemo(() => queryString(filters), [filters])

    const navigate = useCallback(
        (nextTraceId, replace = false) => {
            const path = nextTraceId
                ? `${config.basePath}/traces/${nextTraceId}`
                : `${config.basePath}/traces`
            window.history[replace ? 'replaceState' : 'pushState'](
                { traceId: nextTraceId },
                '',
                path,
            )
            setTraceId(nextTraceId)
            window.scrollTo({ top: 0 })
        },
        [config.basePath],
    )

    useEffect(() => {
        function pop() {
            const prefix = `${config.basePath}/traces/`
            const nextTraceId = window.location.pathname.startsWith(prefix)
                ? window.location.pathname.slice(prefix.length).split('/')[0]
                : null
            setTraceId(nextTraceId || null)
        }

        window.addEventListener('popstate', pop)

        return () => window.removeEventListener('popstate', pop)
    }, [config.basePath])

    useEffect(() => {
        const controller = new AbortController()
        const timeout = window.setTimeout(
            async () => {
                setLoading(true)
                setError(null)

                try {
                    if (traceId) {
                        const response = await getJson(
                            `${config.apiBase}/${traceId}`,
                            controller.signal,
                        )
                        setTrace(response.data)
                    } else {
                        const response = await getJson(
                            `${config.apiBase}?${listQuery}`,
                            controller.signal,
                        )
                        setTraces(response.data)
                        setMeta(response.meta)
                    }
                } catch (requestError) {
                    if (requestError.name !== 'AbortError')
                        setError(requestError.message)
                } finally {
                    if (!controller.signal.aborted) setLoading(false)
                }
            },
            traceId ? 0 : 250,
        )

        return () => {
            window.clearTimeout(timeout)
            controller.abort()
        }
    }, [config.apiBase, listQuery, refresh, traceId])

    function filter(name, value) {
        setFilters((current) => ({ ...current, [name]: value, page: 1 }))
    }

    const hideContentForInitialError =
        error && !loading && (traceId ? !trace : traces.length === 0)

    return (
        <div
            className={clsx(
                'isolate min-h-dvh bg-zinc-50 font-sans text-zinc-950',
                className,
            )}
        >
            <Sidebar
                basePath={config.basePath}
                config={config}
                onNavigate={navigate}
            />
            <div className="min-w-0 lg:pl-56">
                <MobileHeader
                    basePath={config.basePath}
                    onNavigate={navigate}
                />
                {error ? (
                    <ErrorNotice
                        message={error}
                        onRetry={() => setRefresh((value) => value + 1)}
                    />
                ) : null}
                {!hideContentForInitialError &&
                    (traceId ? (
                        <TraceDetail
                            loading={loading}
                            trace={trace}
                            onBack={() => navigate(null)}
                        />
                    ) : (
                        <TraceList
                            filters={filters}
                            loading={loading}
                            meta={meta}
                            traces={traces}
                            onFilter={filter}
                            onNavigate={navigate}
                            onPage={(page) =>
                                setFilters((current) => ({ ...current, page }))
                            }
                            onPerPage={(perPage) =>
                                setFilters((current) => ({
                                    ...current,
                                    page: 1,
                                    per_page: perPage,
                                }))
                            }
                            onRefresh={() => setRefresh((value) => value + 1)}
                            onReset={() => setFilters(emptyFilters)}
                        />
                    ))}
            </div>
        </div>
    )
}
