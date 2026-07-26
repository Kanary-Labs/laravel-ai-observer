import {
    AdjustmentsHorizontalIcon,
    MagnifyingGlassIcon,
    XMarkIcon,
} from '@heroicons/react/16/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { Input, Select } from './FormControls'

export function Filters({ className, filters, options, onChange, onReset }) {
    const [open, setOpen] = useState(false)
    const activeCount = Object.entries(filters).filter(
        ([key, value]) =>
            !['page', 'per_page', 'search'].includes(key) && value !== '',
    ).length

    function change(event) {
        onChange(event.target.name, event.target.value)
    }

    return (
        <div className={clsx('border-y border-zinc-950/10 py-4', className)}>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
                <Input
                    className="min-w-0 grow"
                    icon={MagnifyingGlassIcon}
                    type="search"
                    name="search"
                    label="Search traces"
                    value={filters.search}
                    onChange={change}
                    placeholder="Trace ID, prompt, response, tool, or error"
                />
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => setOpen((value) => !value)}
                        className="relative inline-flex grow items-center justify-center gap-2 observatory-control px-3 py-2 text-sm/5 font-medium text-zinc-700 hover:bg-zinc-50 lg:hidden"
                        aria-expanded={open}
                    >
                        <span
                            className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                            aria-hidden="true"
                        />
                        <AdjustmentsHorizontalIcon className="size-4 h-lh shrink-0 fill-zinc-500" />
                        Filters
                        {activeCount > 0 ? (
                            <div className="rounded-full bg-amber-100 px-1.5 text-amber-800">
                                {activeCount}
                            </div>
                        ) : null}
                    </button>
                    {activeCount > 0 ? (
                        <button
                            type="button"
                            onClick={onReset}
                            className="relative inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm/5 font-medium text-zinc-600 observatory-focus hover:bg-zinc-100"
                        >
                            <span
                                className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-1/2 pointer-fine:hidden"
                                aria-hidden="true"
                            />
                            <XMarkIcon className="size-4 h-lh shrink-0 fill-zinc-400" />
                            Clear
                        </button>
                    ) : null}
                </div>
            </div>
            <div
                className={`${open ? 'grid' : 'max-lg:hidden'} mt-4 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid lg:grid-cols-5`}
            >
                <Select
                    name="status"
                    label="Status"
                    value={filters.status}
                    options={options.statuses ?? []}
                    onChange={change}
                />
                <Select
                    name="provider"
                    label="Provider"
                    value={filters.provider}
                    options={options.providers ?? []}
                    onChange={change}
                />
                <Select
                    name="model"
                    label="Model"
                    value={filters.model}
                    options={options.models ?? []}
                    onChange={change}
                />
                <Select
                    name="agent_class"
                    label="Agent"
                    value={filters.agent_class}
                    options={options.agents ?? []}
                    onChange={change}
                />
                <Select
                    name="span_type"
                    label="Span type"
                    value={filters.span_type}
                    options={options.span_types ?? []}
                    onChange={change}
                />
                <Select
                    name="feature"
                    label="Feature"
                    value={filters.feature}
                    options={options.features ?? []}
                    onChange={change}
                />
                <Select
                    name="has_error"
                    label="Errors"
                    value={filters.has_error}
                    options={[
                        { value: '1', label: 'Has errors' },
                        { value: '0', label: 'No errors' },
                    ]}
                    onChange={change}
                />
                <Select
                    name="has_tool_calls"
                    label="Tool calls"
                    value={filters.has_tool_calls}
                    options={[
                        { value: '1', label: 'Has tool calls' },
                        { value: '0', label: 'No tool calls' },
                    ]}
                    onChange={change}
                />
                <Input
                    type="number"
                    min="0"
                    name="min_duration"
                    label="Minimum duration"
                    value={filters.min_duration}
                    onChange={change}
                    placeholder="Milliseconds"
                />
                <Input
                    type="date"
                    name="started_after"
                    label="Started after"
                    value={filters.started_after}
                    onChange={change}
                />
                <Input
                    type="date"
                    name="started_before"
                    label="Started before"
                    value={filters.started_before}
                    onChange={change}
                />
                <Input
                    name="user"
                    label="User ID"
                    value={filters.user}
                    onChange={change}
                    placeholder="Any user"
                />
                <Input
                    name="tenant"
                    label="Tenant ID"
                    value={filters.tenant}
                    onChange={change}
                    placeholder="Any tenant"
                />
            </div>
        </div>
    )
}
