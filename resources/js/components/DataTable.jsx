import clsx from 'clsx'

function LoadingRows({ columns }) {
    return Array.from({ length: 8 }, (_, row) => (
        <tr key={row} className="border-b border-zinc-950/5">
            {columns.map((column, index) => (
                <td
                    key={column.key}
                    className={clsx(
                        'px-4 py-3.5 align-middle',
                        index === 0 && 'pl-0',
                        index === columns.length - 1 && 'pr-0',
                        column.className,
                    )}
                >
                    <div
                        className={clsx(
                            'h-4 animate-pulse rounded bg-zinc-100',
                            index === 0 ? 'w-40' : 'w-16',
                            column.align === 'right' && 'ml-auto',
                        )}
                    />
                </td>
            ))}
        </tr>
    ))
}

export function DataTable({
    columns,
    emptyState,
    loading,
    onRowClick,
    rowKey,
    rows,
}) {
    function openRow(event, row) {
        if (
            event.type === 'keydown' &&
            (event.key !== 'Enter' || event.target !== event.currentTarget)
        ) {
            return
        }

        onRowClick?.(row)
    }

    return (
        <div className="hidden min-h-0 grow flex-col lg:flex">
            <div className="min-h-0 grow overflow-auto">
                <table className="w-full min-w-4xl text-sm">
                    <thead className="sticky top-0 z-10 bg-zinc-50/95 backdrop-blur">
                        <tr className="border-b border-zinc-950/10">
                            {columns.map((column, index) => (
                                <th
                                    key={column.key}
                                    scope="col"
                                    className={clsx(
                                        'h-10 px-4 text-left align-middle text-xs/5 font-medium tracking-wide whitespace-nowrap text-zinc-500',
                                        index === 0 && 'pl-0',
                                        index === columns.length - 1 && 'pr-0',
                                        column.align === 'right' &&
                                            'text-right',
                                        column.headerClassName,
                                    )}
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {loading && rows.length === 0 ? (
                            <LoadingRows columns={columns} />
                        ) : null}
                        {rows.map((row) => (
                            <tr
                                key={rowKey(row)}
                                role={onRowClick ? 'link' : undefined}
                                tabIndex={onRowClick ? 0 : undefined}
                                onClick={(event) => openRow(event, row)}
                                onKeyDown={(event) => openRow(event, row)}
                                className={clsx(
                                    'group border-b border-zinc-950/5 transition-colors',
                                    onRowClick &&
                                        'cursor-pointer observatory-focus hover:bg-zinc-50 focus-visible:bg-amber-50/40',
                                )}
                            >
                                {columns.map((column, index) => (
                                    <td
                                        key={column.key}
                                        className={clsx(
                                            'px-4 py-3 align-middle',
                                            index === 0 && 'pl-0',
                                            index === columns.length - 1 &&
                                                'pr-0',
                                            column.align === 'right' &&
                                                'text-right',
                                            column.className,
                                        )}
                                    >
                                        {column.cell(row)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {!loading && rows.length === 0 ? emptyState : null}
            </div>
        </div>
    )
}
