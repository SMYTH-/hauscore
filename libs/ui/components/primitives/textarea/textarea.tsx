import type { TextareaHTMLAttributes } from "react"
import { cn } from "@hauscore/utils"

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	invalid?: boolean
}

/** Multi-line text input. */
export function Textarea({
	invalid = false,
	disabled = false,
	rows = 4,
	className,
	...rest
}: TextareaProps) {
	return (
		<textarea
			rows={rows}
			disabled={disabled}
			className={cn(
				"box-border w-full resize-y rounded-md border px-3.5 py-3",
				"font-sans text-[15px] leading-relaxed text-foreground outline-none",
				"transition-[border-color,box-shadow] duration-base ease-standard",
				"focus-visible:border-brand focus-visible:shadow-focus",
				"placeholder:text-foreground-subtle disabled:cursor-not-allowed",
				invalid ? "border-danger" : "border-border",
				disabled ? "bg-background-sunk opacity-60" : "bg-background-secondary",
				className,
			)}
			{...rest}
		/>
	)
}
