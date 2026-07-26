import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

function pages(current, last) {
    const start = Math.max(1, Math.min(current - 2, last - 4))
    const end = Math.min(last, start + 4)

    return Array.from(
        { length: Math.max(0, end - start + 1) },
        (_, index) => start + index,
    )
}

export function Pagination({ className, meta, onPage }) {
    if (!meta || meta.last_page <= 1) return null

    return (
        <nav
            className={clsx(
                'flex items-center justify-between border-t border-zinc-950/10 py-4',
                className,
            )}
            aria-label="Pagination"
        >
            <div className="text-base/7 text-zinc-500 sm:text-sm/6">
                Page{' '}
                <strong className="font-medium text-zinc-900">
                    {meta.current_page}
                </strong>{' '}
                of{' '}
                <strong className="font-medium text-zinc-900">
                    {meta.last_page}
                </strong>
            </div>
            <div className="flex items-center gap-1">
                <button
                    type="button"
                    onClick={() => onPage(meta.current_page - 1)}
                    disabled={meta.current_page === 1}
                    className="relative inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <span
                        className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                        aria-hidden="true"
                    />
                    <ChevronLeftIcon className="size-4 h-lh shrink-0 fill-zinc-400" />
                    Previous
                </button>
                <div className="flex max-sm:hidden">
                    {pages(meta.current_page, meta.last_page).map((page) => (
                        <button
                            type="button"
                            key={page}
                            onClick={() => onPage(page)}
                            aria-current={
                                page === meta.current_page ? 'page' : undefined
                            }
                            className={`size-8 rounded-md text-sm/5 font-medium observatory-focus ${
                                page === meta.current_page
                                    ? 'bg-zinc-950 text-white'
                                    : 'text-zinc-600 hover:bg-zinc-100'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={() => onPage(meta.current_page + 1)}
                    disabled={meta.current_page === meta.last_page}
                    className="relative inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <span
                        className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                        aria-hidden="true"
                    />
                    Next
                    <ChevronRightIcon className="size-4 h-lh shrink-0 fill-zinc-400" />
                </button>
            </div>
        </nav>
    )
}
