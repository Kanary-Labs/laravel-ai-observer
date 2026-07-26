export async function getJson(url, signal) {
    const response = await fetch(url, {
        headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        signal,
    })

    if (!response.ok) {
        const error = new Error(
            response.status === 404
                ? 'This trace could not be found.'
                : 'AI Observatory could not load this data.',
        )
        error.status = response.status
        throw error
    }

    return response.json()
}

export function queryString(filters) {
    const params = new URLSearchParams()

    Object.entries(filters).forEach(([key, value]) => {
        if (value !== '' && value !== null && value !== undefined) {
            params.set(key, value)
        }
    })

    return params.toString()
}
