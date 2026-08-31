import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Icon } from "../icon/icon"

export interface CheckboxProps extends Omit<HTMLAttributes<HTMLSpanElement>, "onChange"> {
	checked?: boolean
	onChange?: (checked: boolean) => void
	label?: string
	disabled?: boolean
}

/** Checkbox with label. Controlled via checked/onChange. */
export function Checkbox({
	checked = false,
	onChange,
	label,
	disabled = false,
	className,
	...rest
}: CheckboxProps) {
	return (
		<label
			className={cn(
				"inline-flex items-center gap-2.5",
				disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
				className,
			)}
		>
			<span
				role="checkbox"
				aria-checked={checked}
				tabIndex={disabled ? -1 : 0}
				onClick={() => !disabled && onChange?.(!checked)}
				onKeyDown={(event) => {
					if ((event.key === " " || event.key === "Enter") && !disabled) {
						event.preventDefault()
						onChange?.(!checked)
					}
				}}
				className={cn(
					"inline-flex size-5 shrink-0 items-center justify-center rounded-xs border-[1.5px]",
					"transition-[background,border-color] duration-fast ease-standard",
					checked ? "border-brand bg-brand" : "border-border-strong bg-background-secondary",
				)}
				{...rest}
			>
				{checked ? <Icon name="check" size={14} className="text-foreground-on-brand" strokeWidth={3} /> : null}
			</span>
			{label ? <span className="font-sans text-[15px] text-foreground">{label}</span> : null}
		</label>
	)
}
