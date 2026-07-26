import {
    CheckIcon,
    ChevronRightIcon,
    ClipboardDocumentIcon,
    ExclamationTriangleIcon,
} from '@heroicons/react/16/solid'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

function Primitive({ value }) {
    if (value === '[REDACTED]') {
        return (
            <div className="inline-flex rounded bg-amber-100 px-1.5 py-0.5 font-mono text-base/6 text-amber-800 sm:text-sm/5">
                [REDACTED]
            </div>
        )
    }

    const style =
        typeof value === 'string'
            ? 'text-emerald-700'
            : typeof value === 'number'
              ? 'text-sky-700'
              : typeof value === 'boolean'
                ? 'text-violet-700'
                : 'text-zinc-500'
    const display = typeof value === 'string' ? `"${value}"` : String(value)

    return (
        <div
            className={`font-mono text-base/7 break-words sm:text-sm/6 ${style}`}
        >
            {display}
        </div>
    )
}

function Node({ label, value, depth = 0 }) {
    const structured = value !== null && typeof value === 'object'

    if (!structured) {
        return (
            <div className="grid grid-cols-[minmax(5rem,auto)_1fr] gap-3 py-1">
                {label !== null ? (
                    <div className="font-mono text-base/7 text-zinc-500 sm:text-sm/6">
                        {label}
                    </div>
                ) : null}
                <Primitive value={value} />
            </div>
        )
    }

    const entries = Object.entries(value)
    const kind = Array.isArray(value) ? 'array' : 'object'

    return (
        <details className="group/json" open={depth < 1}>
            <summary className="flex cursor-pointer list-none items-center gap-1 rounded py-1 observatory-focus">
                <ChevronRightIcon className="size-4 h-lh shrink-0 fill-zinc-400 group-open/json:rotate-90" />
                {label !== null ? (
                    <div className="font-mono text-base/7 font-medium text-zinc-700 sm:text-sm/6">
                        {label}
                    </div>
                ) : null}
                <div className="font-mono text-base/7 text-zinc-400 sm:text-sm/6">
                    {kind === 'array'
                        ? `[${entries.length}]`
                        : `{${entries.length}}`}
                </div>
            </summary>
            <div className="border-l border-zinc-950/10 pl-4">
                {entries.map(([key, child]) => (
                    <Node
                        key={key}
                        label={key}
                        value={child}
                        depth={depth + 1}
                    />
                ))}
            </div>
        </details>
    )
}

export function JsonViewer({ className, value, label }) {
    const [copied, setCopied] = useState(false)
    const truncated =
        value && typeof value === 'object' && value._truncated === true

    useEffect(() => {
        if (!copied) return undefined

        const timeout = window.setTimeout(() => setCopied(false), 1_500)

        return () => window.clearTimeout(timeout)
    }, [copied])

    async function copy() {
        await navigator.clipboard.writeText(JSON.stringify(value, null, 2))
        setCopied(true)
    }

    return (
        <section
            className={clsx('border-t border-zinc-950/10 pt-5', className)}
        >
            <div className="flex items-center justify-between gap-4">
                <h3 className="text-base font-medium text-zinc-950">{label}</h3>
                <button
                    type="button"
                    onClick={copy}
                    className="relative inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100"
                >
                    <span
                        className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                        aria-hidden="true"
                    />
                    {copied ? (
                        <CheckIcon className="size-4 h-lh shrink-0 fill-emerald-600" />
                    ) : (
                        <ClipboardDocumentIcon className="size-4 h-lh shrink-0 fill-zinc-400" />
                    )}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>
            {truncated ? (
                <div className="mt-3 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-base/7 text-amber-800 sm:text-sm/6">
                    <ExclamationTriangleIcon className="size-4 h-lh shrink-0 fill-amber-600" />
                    This payload was truncated before storage. The original was{' '}
                    {Number(value._original_bytes).toLocaleString()} bytes.
                </div>
            ) : null}
            <div className="mt-3 max-h-96 overflow-auto rounded-lg bg-zinc-50 p-4 ring-1 ring-zinc-950/5 ring-inset">
                <Node label={null} value={value} />
            </div>
        </section>
    )
}
