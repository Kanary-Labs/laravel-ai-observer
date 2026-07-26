import {
    Bars3Icon,
    ChartBarSquareIcon,
    CircleStackIcon,
    ClockIcon,
    ExclamationCircleIcon,
    QueueListIcon,
    WrenchScrewdriverIcon,
    XMarkIcon,
} from '@heroicons/react/16/solid'
import clsx from 'clsx'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { getJson, queryString } from './api'
import { Overview } from './components/Overview'
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

const reportViews = {
    failures: { status: 'failed' },
    tools: { has_tool_calls: '1' },
    slow: { min_duration: '1000' },
}

const navigationGroups = [
    {
        label: 'Observe',
        items: [
            {
                id: 'overview',
                label: 'Overview',
                icon: ChartBarSquareIcon,
            },
            { id: 'traces', label: 'Traces', icon: QueueListIcon },
        ],
    },
    {
        label: 'Reports',
        items: [
            {
                id: 'failures',
                label: 'Failures',
                icon: ExclamationCircleIcon,
            },
            {
                id: 'tools',
                label: 'Tool calls',
                icon: WrenchScrewdriverIcon,
            },
            { id: 'slow', label: 'Slow traces', icon: ClockIcon },
        ],
    },
]

function Brand({ basePath, onView }) {
    function overview(event) {
        event.preventDefault()
        onView('overview')
    }

    return (
        <a
            href={`${basePath}/overview`}
            onClick={overview}
            aria-label="AI Observatory overview"
            className="flex min-w-0 items-center gap-2 rounded observatory-focus"
        >
            <CircleStackIcon className="size-4 shrink-0 fill-amber-500" />
            <div className="truncate text-base font-semibold tracking-tight text-zinc-950">
                AI Observatory
            </div>
        </a>
    )
}

function NavigationItem({ active, basePath, item, onView, roomy = false }) {
    const Icon = item.icon
    const href =
        item.id === 'overview'
            ? `${basePath}/overview`
            : item.id === 'traces'
              ? `${basePath}/traces`
              : `${basePath}/traces?view=${item.id}`

    function navigate(event) {
        event.preventDefault()
        onView(item.id)
    }

    return (
        <a
            href={href}
            onClick={navigate}
            aria-current={active ? 'page' : undefined}
            className={clsx(
                'flex items-center gap-2 rounded-lg pr-3 pl-2 font-medium observatory-focus',
                roomy ? 'py-2.5 text-base/6 sm:text-sm/5' : 'py-2 text-sm/5',
                active
                    ? 'bg-zinc-100 text-zinc-950'
                    : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950',
            )}
        >
            <Icon
                className={clsx(
                    'size-4 h-lh shrink-0',
                    active ? 'fill-zinc-600' : 'fill-zinc-400',
                )}
            />
            {item.label}
        </a>
    )
}

function Sidebar({ activeView, basePath, config, onView }) {
    return (
        <aside className="fixed inset-y-0 left-0 z-40 hidden w-56 flex-col border-r border-zinc-950/10 bg-white lg:flex">
            <div className="flex h-14 shrink-0 items-center border-b border-zinc-950/10 px-4">
                <Brand basePath={basePath} onView={onView} />
            </div>
            <nav
                className="grid grow content-start gap-5 p-3"
                aria-label="Main navigation"
            >
                {navigationGroups.map((group) => (
                    <div key={group.label} className="grid gap-1">
                        <div className="px-2 text-xs/5 font-medium tracking-wide text-zinc-400 uppercase">
                            {group.label}
                        </div>
                        {group.items.map((item) => (
                            <NavigationItem
                                key={item.id}
                                active={activeView === item.id}
                                basePath={basePath}
                                item={item}
                                onView={onView}
                            />
                        ))}
                    </div>
                ))}
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

function MobileHeader({ activeView, basePath, onView }) {
    const [open, setOpen] = useState(false)

    function navigate(view) {
        setOpen(false)
        onView(view)
    }

    return (
        <header className="sticky top-0 z-40 border-b border-zinc-950/10 bg-white/95 backdrop-blur lg:hidden">
            <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-6">
                <Brand basePath={basePath} onView={navigate} />
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
                    className="grid gap-4 border-t border-zinc-950/10 p-3"
                    aria-label="Mobile navigation"
                >
                    {navigationGroups.map((group) => (
                        <div key={group.label} className="grid gap-1">
                            <div className="px-2 text-xs/5 font-medium tracking-wide text-zinc-400 uppercase">
                                {group.label}
                            </div>
                            {group.items.map((item) => (
                                <NavigationItem
                                    key={item.id}
                                    active={activeView === item.id}
                                    basePath={basePath}
                                    item={item}
                                    onView={navigate}
                                    roomy
                                />
                            ))}
                        </div>
                    ))}
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
    const initialSearch = new URLSearchParams(window.location.search)
    const initialDialogTraceId = initialSearch.get('trace')
    const initialView = initialSearch.get('view')
    const initialPage = window.location.pathname.endsWith('/overview')
        ? 'overview'
        : 'traces'
    const [page, setPage] = useState(initialPage)
    const [activeView, setActiveView] = useState(
        initialPage === 'overview'
            ? 'overview'
            : Object.hasOwn(reportViews, initialView)
              ? initialView
              : 'traces',
    )
    const [traceId, setTraceId] = useState(
        config.initialTraceId ?? initialDialogTraceId,
    )
    const [detailMode, setDetailMode] = useState(
        config.initialTraceId ? 'page' : initialDialogTraceId ? 'dialog' : null,
    )
    const [filters, setFilters] = useState({
        ...emptyFilters,
        ...(reportViews[initialView] ?? {}),
    })
    const [traces, setTraces] = useState([])
    const [meta, setMeta] = useState(null)
    const [trace, setTrace] = useState(null)
    const [listLoading, setListLoading] = useState(true)
    const [detailLoading, setDetailLoading] = useState(
        Boolean(config.initialTraceId ?? initialDialogTraceId),
    )
    const [listError, setListError] = useState(null)
    const [detailError, setDetailError] = useState(null)
    const [overview, setOverview] = useState(null)
    const [overviewLoading, setOverviewLoading] = useState(
        initialPage === 'overview',
    )
    const [overviewError, setOverviewError] = useState(null)
    const [refresh, setRefresh] = useState(0)
    const listQuery = useMemo(() => queryString(filters), [filters])

    const navigate = useCallback(
        (nextTraceId, mode = 'dialog', replace = false) => {
            let path

            if (nextTraceId && mode === 'page') {
                path = `${config.basePath}/traces/${nextTraceId}`
                setPage('traces')
                setActiveView('traces')
            } else if (nextTraceId) {
                const location = new URL(window.location.href)
                location.searchParams.set('trace', nextTraceId)
                path = `${location.pathname}${location.search}`
            } else {
                const location = new URL(window.location.href)

                if (location.searchParams.has('trace')) {
                    location.searchParams.delete('trace')
                    path = `${location.pathname}${location.search}`
                } else {
                    path = `${config.basePath}/traces`
                    setPage('traces')
                    setActiveView('traces')
                }
            }

            window.history[replace ? 'replaceState' : 'pushState'](
                { traceId: nextTraceId, mode: nextTraceId ? mode : null },
                '',
                path,
            )
            setTraceId(nextTraceId)
            setDetailMode(nextTraceId ? mode : null)
            window.scrollTo({ top: 0 })
        },
        [config.basePath],
    )

    useEffect(() => {
        function pop() {
            const prefix = `${config.basePath}/traces/`
            const search = new URLSearchParams(window.location.search)
            const pathTraceId = window.location.pathname.startsWith(prefix)
                ? window.location.pathname.slice(prefix.length).split('/')[0]
                : null
            const dialogTraceId = search.get('trace')
            const nextPage = window.location.pathname.endsWith('/overview')
                ? 'overview'
                : 'traces'
            const nextView = search.get('view')

            setPage(nextPage)
            setActiveView(
                nextPage === 'overview'
                    ? 'overview'
                    : Object.hasOwn(reportViews, nextView)
                      ? nextView
                      : 'traces',
            )
            if (nextView && Object.hasOwn(reportViews, nextView)) {
                setFilters({
                    ...emptyFilters,
                    ...reportViews[nextView],
                })
            } else if (nextPage === 'traces' && !pathTraceId) {
                setFilters(emptyFilters)
            }
            setTraceId(pathTraceId || dialogTraceId || null)
            setDetailMode(
                pathTraceId ? 'page' : dialogTraceId ? 'dialog' : null,
            )
        }

        window.addEventListener('popstate', pop)

        return () => window.removeEventListener('popstate', pop)
    }, [config.basePath])

    useEffect(() => {
        const controller = new AbortController()

        if (page !== 'traces' || detailMode === 'page') {
            return () => controller.abort()
        }

        const timeout = window.setTimeout(async () => {
            setListLoading(true)
            setListError(null)

            try {
                const response = await getJson(
                    `${config.apiBase}?${listQuery}`,
                    controller.signal,
                )
                setTraces(response.data)
                setMeta(response.meta)
            } catch (requestError) {
                if (requestError.name !== 'AbortError')
                    setListError(requestError.message)
            } finally {
                if (!controller.signal.aborted) setListLoading(false)
            }
        }, 250)

        return () => {
            window.clearTimeout(timeout)
            controller.abort()
        }
    }, [config.apiBase, detailMode, listQuery, page, refresh])

    useEffect(() => {
        const controller = new AbortController()

        if (page !== 'overview') {
            return () => controller.abort()
        }

        setOverviewLoading(true)
        setOverviewError(null)

        async function loadOverview() {
            try {
                const response = await getJson(
                    config.overviewApi,
                    controller.signal,
                )
                setOverview(response.data)
            } catch (requestError) {
                if (requestError.name !== 'AbortError')
                    setOverviewError(requestError.message)
            } finally {
                if (!controller.signal.aborted) setOverviewLoading(false)
            }
        }

        loadOverview()

        return () => controller.abort()
    }, [config.overviewApi, page, refresh])

    useEffect(() => {
        const controller = new AbortController()

        if (!traceId) {
            setTrace(null)
            setDetailError(null)
            setDetailLoading(false)

            return () => controller.abort()
        }

        setTrace(null)
        setDetailLoading(true)
        setDetailError(null)

        async function loadTrace() {
            try {
                const response = await getJson(
                    `${config.apiBase}/${traceId}`,
                    controller.signal,
                )
                setTrace(response.data)
            } catch (requestError) {
                if (requestError.name !== 'AbortError')
                    setDetailError(requestError.message)
            } finally {
                if (!controller.signal.aborted) setDetailLoading(false)
            }
        }

        loadTrace()

        return () => controller.abort()
    }, [config.apiBase, refresh, traceId])

    function filter(name, value) {
        setFilters((current) => ({ ...current, [name]: value, page: 1 }))
    }

    function showView(view) {
        const nextPage = view === 'overview' ? 'overview' : 'traces'
        const path =
            view === 'overview'
                ? `${config.basePath}/overview`
                : view === 'traces'
                  ? `${config.basePath}/traces`
                  : `${config.basePath}/traces?view=${view}`

        window.history.pushState({ view }, '', path)
        setPage(nextPage)
        setActiveView(view)
        setTraceId(null)
        setDetailMode(null)
        setFilters({
            ...emptyFilters,
            ...(reportViews[view] ?? {}),
        })
        window.scrollTo({ top: 0 })
    }

    function resetFilters() {
        setFilters(emptyFilters)
        setActiveView('traces')
        window.history.replaceState(
            { view: 'traces' },
            '',
            `${config.basePath}/traces`,
        )
    }

    const hideListForInitialError =
        listError && !listLoading && traces.length === 0

    return (
        <div
            className={clsx(
                'isolate min-h-dvh bg-zinc-50 font-sans text-zinc-950',
                className,
            )}
        >
            <Sidebar
                activeView={activeView}
                basePath={config.basePath}
                config={config}
                onView={showView}
            />
            <div className="min-w-0 lg:pl-56">
                <MobileHeader
                    activeView={activeView}
                    basePath={config.basePath}
                    onView={showView}
                />
                {page === 'traces' && listError && detailMode !== 'page' ? (
                    <ErrorNotice
                        message={listError}
                        onRetry={() => setRefresh((value) => value + 1)}
                    />
                ) : null}
                {page === 'overview' && overviewError ? (
                    <ErrorNotice
                        message={overviewError}
                        onRetry={() => setRefresh((value) => value + 1)}
                    />
                ) : null}
                <div
                    inert={detailMode === 'dialog' ? true : undefined}
                    aria-hidden={detailMode === 'dialog' ? true : undefined}
                >
                    {page === 'overview' && detailMode !== 'page' ? (
                        <Overview
                            data={overview}
                            loading={overviewLoading}
                            onNavigate={navigate}
                            onRefresh={() => setRefresh((value) => value + 1)}
                        />
                    ) : null}
                    {page === 'traces' &&
                    detailMode !== 'page' &&
                    !hideListForInitialError ? (
                        <TraceList
                            filters={filters}
                            loading={listLoading}
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
                            onReset={resetFilters}
                        />
                    ) : null}
                </div>
                {traceId && detailMode ? (
                    <TraceDetail
                        error={detailError}
                        loading={detailLoading}
                        presentation={detailMode}
                        trace={trace}
                        onBack={() => navigate(null)}
                        onExpand={() => navigate(traceId, 'page')}
                        onRetry={() => setRefresh((value) => value + 1)}
                    />
                ) : null}
            </div>
        </div>
    )
}
