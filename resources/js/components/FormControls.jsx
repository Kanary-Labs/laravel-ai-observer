import { ChevronDownIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

export function Input({
    className,
    icon: Icon,
    label,
    labelHidden = false,
    name,
    type = 'text',
    ...properties
}) {
    const input = (
        <input
            id={name}
            type={type}
            name={name}
            className={clsx(
                'w-full observatory-control py-2.5 pr-3 text-base/6 text-zinc-900 placeholder:text-zinc-400 max-sm:text-base/6 sm:py-1.5 sm:text-sm/5',
                Icon ? 'pl-9' : 'pl-3',
            )}
            {...properties}
        />
    )

    return (
        <label
            htmlFor={name}
            className={clsx('grid', !labelHidden && 'gap-1.5', className)}
        >
            <div
                className={clsx(
                    'text-base/6 font-medium text-zinc-700 sm:text-sm/5',
                    labelHidden && 'sr-only',
                )}
            >
                {label}
            </div>
            {Icon ? (
                <div className="relative">
                    <Icon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 fill-zinc-400" />
                    {input}
                </div>
            ) : (
                input
            )}
        </label>
    )
}

export function Select({ className, label, name, onChange, options, value }) {
    return (
        <label htmlFor={name} className={clsx('grid gap-1.5', className)}>
            <div className="text-base/6 font-medium text-zinc-700 sm:text-sm/5">
                {label}
            </div>
            <div className="inline-grid grid-cols-[1fr_--spacing(8)]">
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="col-span-full row-start-1 appearance-none observatory-control py-2.5 pr-8 pl-3 text-base/6 text-zinc-900 sm:py-1.5 sm:text-sm/5"
                >
                    <option value="">All</option>
                    {options.map((option) => (
                        <option
                            key={
                                typeof option === 'string'
                                    ? option
                                    : option.value
                            }
                            value={
                                typeof option === 'string'
                                    ? option
                                    : option.value
                            }
                        >
                            {typeof option === 'string' ? option : option.label}
                        </option>
                    ))}
                </select>
                <ChevronDownIcon className="pointer-events-none col-start-2 row-start-1 size-4 place-self-center fill-zinc-400" />
            </div>
        </label>
    )
}
