import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"

export interface RadioProps extends Omit<HTMLAttributes<HTMLSpanElement>, "onChange"> {
	checked?: boolean
	onChange?: (value: string) => void
	label?: string
	name?: string
	value: string
	disabled?: boolean
}

/** Radio option with label. Use inside a group with shared name/value. */
export function Radio({
	checked = false,
	onChange,
	label,
	value,
	disabled = false,
	className,
	...rest
}: RadioProps) {
	return (
		<label
			className={cn(
				"inline-flex items-center gap-2.5",
				disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
				className,
			)}
		>
			<span
				role="radio"
				aria-checked={checked}
				tabIndex={disabled ? -1 : 0}
				onClick={() => !disabled && onChange?.(value)}
				onKeyDown={(event) => {
					if ((event.key === " " || event.key === "Enter") && !disabled) {
						event.preventDefault()
						onChange?.(value)
					}
				}}
				className={cn(
					"inline-flex size-5 shrink-0 items-center justify-center rounded-full border-[1.5px]",
					"bg-background-secondary transition-[border-color] duration-fast ease-standard",
					checked ? "border-brand" : "border-border-strong",
				)}
				{...rest}
			>
				{checked ? <span className="size-2.5 rounded-full bg-brand" /> : null}
			</span>
			{label ? <span className="font-sans text-[15px] text-foreground">{label}</span> : null}
		</label>
	)
}
