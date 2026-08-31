import type { SelectHTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Icon } from "../icon/icon"

const sizes = {
	sm: "h-input-height-sm text-sm",
	md: "h-input-height text-[15px]",
	lg: "h-input-height-lg text-body",
} as const

export type SelectOption = string | { value: string; label: string }

export type SelectSize = keyof typeof sizes

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
	options?: SelectOption[]
	invalid?: boolean
	selectSize?: SelectSize
}

/** Native select styled to match Werkowt inputs. */
export function Select({
	options = [],
	invalid = false,
	disabled = false,
	selectSize = "md",
	className,
	children,
	...rest
}: SelectProps) {
	return (
		<div className={cn("relative inline-flex w-full", className)}>
			<select
				disabled={disabled}
				className={cn(
					"w-full cursor-pointer appearance-none rounded-md border pr-10 pl-3.5 outline-none",
					"font-sans text-foreground transition-[border-color,box-shadow] duration-base ease-standard",
					"focus-visible:border-brand focus-visible:shadow-focus",
					"disabled:cursor-not-allowed",
					invalid ? "border-danger" : "border-border",
					disabled ? "bg-background-sunk opacity-60" : "bg-background-secondary",
					sizes[selectSize],
				)}
				{...rest}
			>
				{children ??
					options.map((option) => {
						const value = typeof option === "string" ? option : option.value
						const label = typeof option === "string" ? option : option.label
						return (
							<option key={value} value={value}>
								{label}
							</option>
						)
					})}
			</select>
			<span className="pointer-events-none absolute top-1/2 right-3 inline-flex -translate-y-1/2 text-foreground-subtle">
				<Icon name="chevron-down" size={18} />
			</span>
		</div>
	)
}
