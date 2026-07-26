export function formatDate(value) {
    if (!value) return '—'

    return new Intl.DateTimeFormat(undefined, {
        dateStyle: 'medium',
        timeStyle: 'medium',
    }).format(new Date(value))
}

export function formatRelativeDate(value) {
    if (!value) return '—'

    const seconds = Math.round((new Date(value).getTime() - Date.now()) / 1000)
    const formatter = new Intl.RelativeTimeFormat(undefined, {
        numeric: 'auto',
    })
    const units = [
        ['year', 31_536_000],
        ['month', 2_592_000],
        ['day', 86_400],
        ['hour', 3_600],
        ['minute', 60],
    ]

    for (const [unit, size] of units) {
        if (Math.abs(seconds) >= size) {
            return formatter.format(Math.round(seconds / size), unit)
        }
    }

    return formatter.format(seconds, 'second')
}

export function formatDuration(value) {
    if (value === null || value === undefined) return '—'
    if (value < 1_000) return `${Math.round(value)} ms`
    if (value < 60_000)
        return `${(value / 1_000).toFixed(value < 10_000 ? 2 : 1)} s`

    return `${(value / 60_000).toFixed(1)} min`
}

export function formatTokens(value) {
    if (value === null || value === undefined) return '—'

    return new Intl.NumberFormat(undefined, {
        notation: value >= 10_000 ? 'compact' : 'standard',
        maximumFractionDigits: 1,
    }).format(value)
}

export function formatCost(value, currency) {
    if (value === null || value === undefined || !currency) return '—'

    return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency,
        maximumFractionDigits: 6,
    }).format(Number(value))
}

export function shortClass(value) {
    if (!value) return '—'

    return value.split('\\').at(-1)
}

export function flattenSpans(spans, depth = 0) {
    return spans.flatMap((span) => [
        { ...span, depth },
        ...flattenSpans(span.children ?? [], depth + 1),
    ])
}
