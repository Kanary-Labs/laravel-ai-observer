import clsx from 'clsx'

const styles = {
    successful: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
    failed: 'bg-red-50 text-red-700 ring-red-600/20',
    cancelled: 'bg-zinc-100 text-zinc-600 ring-zinc-500/20',
    running: 'bg-amber-50 text-amber-800 ring-amber-600/20',
}

const dots = {
    successful: 'bg-emerald-500',
    failed: 'bg-red-500',
    cancelled: 'bg-zinc-400',
    running: 'bg-amber-500',
}

export function StatusBadge({ className, compact = false, status }) {
    if (compact) {
        return (
            <div
                className={clsx(
                    'inline-flex shrink-0 items-center gap-1.5 text-base/6 font-medium sm:text-sm/5',
                    status === 'successful'
                        ? 'text-emerald-700'
                        : status === 'failed'
                          ? 'text-red-700'
                          : status === 'running'
                            ? 'text-amber-800'
                            : 'text-zinc-600',
                    className,
                )}
            >
                <span
                    className={`size-1.5 shrink-0 rounded-full ${dots[status] ?? dots.cancelled}`}
                />
                {status ?? 'unknown'}
            </div>
        )
    }

    return (
        <div
            className={clsx(
                'inline-flex items-center gap-1.5 rounded-full py-1 pr-2 pl-1 text-base/6 font-medium ring-1 ring-inset sm:text-sm/5',
                styles[status] ?? styles.cancelled,
                className,
            )}
        >
            <div
                className={`size-1.5 shrink-0 rounded-full ${dots[status] ?? dots.cancelled}`}
            />
            {status ?? 'unknown'}
        </div>
    )
}
