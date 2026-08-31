import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"

export interface SwitchProps extends Omit<HTMLAttributes<HTMLSpanElement>, "onChange"> {
	checked?: boolean
	onChange?: (checked: boolean) => void
	label?: string
	disabled?: boolean
}

/** Toggle switch. Controlled via checked/onChange. */
export function Switch({
	checked = false,
	onChange,
	label,
	disabled = false,
	className,
	...rest
}: SwitchProps) {
	return (
		<label
			className={cn(
				"inline-flex items-center gap-2.5",
				disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
				className,
			)}
		>
			<span
				role="switch"
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
					"relative inline-flex h-switch-height w-switch-width shrink-0 rounded-badge",
					"transition-[background] duration-base ease-standard",
					checked ? "bg-brand" : "bg-switch-track",
				)}
				{...rest}
			>
				<span
					className={cn(
						"absolute top-0.5 size-switch-thumb rounded-full bg-background-secondary shadow-sm",
						"transition-[left] duration-base ease-out",
						checked ? "left-5" : "left-0.5",
					)}
				/>
			</span>
			{label ? <span className="font-sans text-[15px] text-foreground">{label}</span> : null}
		</label>
	)
}
