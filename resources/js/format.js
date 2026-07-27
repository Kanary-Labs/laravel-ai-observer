function dateFrom(value) {
    if (!value) return null

    const date = new Date(value)

    return Number.isNaN(date.getTime()) ? null : date
}

export function formatDate(value) {
    const date = dateFrom(value)

    if (!date) return '—'

    return new Intl.DateTimeFormat(undefined, {
        dateStyle: 'medium',
        timeStyle: 'medium',
    }).format(date)
}

export function formatRelativeDate(value) {
    const date = dateFrom(value)

    if (!date) return '—'

    const seconds = Math.round((date.getTime() - Date.now()) / 1000)
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
    const duration = Number(value)

    if (!Number.isFinite(duration)) return '—'
    if (duration < 1_000) return `${Math.round(duration)} ms`
    if (duration < 60_000)
        return `${(duration / 1_000).toFixed(duration < 10_000 ? 2 : 1)} s`

    return `${(duration / 60_000).toFixed(1)} min`
}

export function formatTokens(value) {
    if (value === null || value === undefined) return '—'
    const tokens = Number(value)

    if (!Number.isFinite(tokens)) return '—'

    return new Intl.NumberFormat(undefined, {
        notation: tokens >= 10_000 ? 'compact' : 'standard',
        maximumFractionDigits: 1,
    }).format(tokens)
}

export function formatCost(value, currency) {
    if (value === null || value === undefined || !currency) return '—'
    const cost = Number(value)

    if (!Number.isFinite(cost)) return '—'

    try {
        return new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency,
            maximumFractionDigits: 6,
        }).format(cost)
    } catch {
        return '—'
    }
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
