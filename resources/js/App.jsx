import {
    Bars3Icon,
    CircleStackIcon,
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

function Header({ basePath, onNavigate }) {
    const [open, setOpen] = useState(false)

    function traces(event) {
        event.preventDefault()
        setOpen(false)
        onNavigate(null)
    }

    return (
        <header className="border-b border-zinc-950/10 bg-white">
            <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
                <a
                    href="/"
                    aria-label="Homepage"
                    className="flex min-w-0 items-center gap-2 rounded observatory-focus"
                >
                    <CircleStackIcon className="size-4 shrink-0 fill-amber-500" />
                    <div className="truncate text-base font-semibold text-zinc-950">
                        AI Observatory
                    </div>
                </a>
                <nav
                    className="flex items-center gap-1 max-lg:hidden"
                    aria-label="Main navigation"
                >
                    <a
                        href={`${basePath}/traces`}
                        onClick={traces}
                        aria-current="page"
                        className="rounded-md bg-zinc-100 px-3 py-1.5 observatory-focus"
                    >
                        <div className="text-sm/5 font-medium text-zinc-950">
                            Traces
                        </div>
                    </a>
                </nav>
                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    className="relative rounded-md p-1.5 observatory-focus hover:bg-zinc-100 lg:hidden"
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
                    className="border-t border-zinc-950/10 px-4 py-3 lg:hidden"
                    aria-label="Mobile navigation"
                >
                    <a
                        href={`${basePath}/traces`}
                        onClick={traces}
                        aria-current="page"
                        className="rounded-md bg-zinc-100 px-3 py-2 observatory-focus"
                    >
                        <div className="text-sm/5 font-medium text-zinc-950">
                            Traces
                        </div>
                    </a>
                </nav>
            ) : null}
        </header>
    )
}

function ErrorNotice({ message, onRetry }) {
    return (
        <div className="mx-auto max-w-screen-2xl px-4 pt-6 sm:px-6 lg:px-8">
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
                'isolate min-h-dvh bg-white font-sans text-zinc-950',
                className,
            )}
        >
            <Header basePath={config.basePath} onNavigate={navigate} />
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
                        onRefresh={() => setRefresh((value) => value + 1)}
                        onReset={() => setFilters(emptyFilters)}
                    />
                ))}
        </div>
    )
}
