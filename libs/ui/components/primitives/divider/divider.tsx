import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"

export interface DividerProps extends HTMLAttributes<HTMLElement> {
	label?: string
	vertical?: boolean
}

/** Hairline divider — horizontal by default, optional centered label. */
export function Divider({ label, vertical = false, className, ...rest }: DividerProps) {
	if (vertical) {
		return (
			<span
				className={cn("inline-block w-px shrink-0 self-stretch bg-border", className)}
				role="separator"
				aria-orientation="vertical"
				{...rest}
			/>
		)
	}

	if (label) {
		return (
			<div className={cn("flex items-center gap-3.5", className)} role="separator" {...rest}>
				<span className="h-px flex-1 bg-border" aria-hidden="true" />
				<span className="font-mono text-[11px] tracking-widest text-foreground-subtle uppercase">
					{label}
				</span>
				<span className="h-px flex-1 bg-border" aria-hidden="true" />
			</div>
		)
	}

	return (
		<hr className={cn("m-0 h-px border-0 bg-border", className)} role="separator" {...rest} />
	)
}
