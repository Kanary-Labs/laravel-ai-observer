import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

export function Pagination({ className, meta, onPage, onPerPage, perPage }) {
    if (!meta) return null

    const from =
        meta.total === 0 ? 0 : (meta.current_page - 1) * meta.per_page + 1
    const to = Math.min(meta.current_page * meta.per_page, meta.total)

    return (
        <nav
            className={clsx(
                'flex flex-col gap-3 border-t border-zinc-950/10 py-3 sm:flex-row sm:items-center sm:justify-between',
                className,
            )}
            aria-label="Pagination"
        >
            <p className="text-base/7 text-zinc-500 tabular-nums sm:text-sm/6">
                Showing{' '}
                <span className="font-medium text-zinc-900">{from}</span>–
                <span className="font-medium text-zinc-900">{to}</span> of{' '}
                <span className="font-medium text-zinc-900">
                    {meta.total.toLocaleString()}
                </span>
            </p>
            <div className="flex items-center justify-between gap-3 sm:justify-end">
                <label className="flex items-center gap-2 text-sm/5 text-zinc-500">
                    <span className="max-sm:sr-only">Rows</span>
                    <select
                        aria-label="Rows per page"
                        value={perPage}
                        onChange={(event) =>
                            onPerPage(Number(event.target.value))
                        }
                        className="rounded-md bg-white py-1.5 pr-7 pl-2 text-sm/5 text-zinc-700 ring-1 ring-zinc-950/10 observatory-focus"
                    >
                        {[25, 50, 100].map((size) => (
                            <option key={size} value={size}>
                                {size} / page
                            </option>
                        ))}
                    </select>
                </label>
                <span className="text-sm/5 whitespace-nowrap text-zinc-500 tabular-nums">
                    Page{' '}
                    <span className="font-medium text-zinc-900">
                        {meta.current_page}
                    </span>{' '}
                    of {meta.last_page}
                </span>
                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        onClick={() => onPage(meta.current_page - 1)}
                        disabled={meta.current_page === 1}
                        aria-label="Previous page"
                        className="relative inline-grid size-8 place-items-center rounded-md text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <span
                            className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                            aria-hidden="true"
                        />
                        <ChevronLeftIcon className="size-4 h-lh shrink-0 fill-zinc-400" />
                    </button>
                    <button
                        type="button"
                        onClick={() => onPage(meta.current_page + 1)}
                        disabled={meta.current_page === meta.last_page}
                        aria-label="Next page"
                        className="relative inline-grid size-8 place-items-center rounded-md text-zinc-600 ring-1 ring-zinc-950/10 observatory-focus hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <span
                            className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                            aria-hidden="true"
                        />
                        <ChevronRightIcon className="size-4 h-lh shrink-0 fill-zinc-400" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
