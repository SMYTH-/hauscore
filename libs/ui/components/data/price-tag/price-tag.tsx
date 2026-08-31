import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"

const sizes = {
	sm: "text-lg",
	md: "text-2xl",
	lg: "text-[34px]",
} as const

export type PriceTagSize = keyof typeof sizes

export interface PriceTagProps extends HTMLAttributes<HTMLSpanElement> {
	amount: number | string
	currency?: string
	unit?: string
	size?: PriceTagSize
}

/** Price display in mono face — amount plus optional unit suffix. */
export function PriceTag({
	amount,
	currency = "£",
	unit = "session",
	size = "md",
	className,
	...rest
}: PriceTagProps) {
	return (
		<span
			className={cn("inline-flex items-baseline gap-1 font-mono text-foreground-strong", className)}
			{...rest}
		>
			<span className={cn("font-bold leading-none", sizes[size])}>
				{currency}
				{amount}
			</span>
			{unit ? (
				<span className="font-sans text-[0.42em] font-normal text-foreground-muted">/ {unit}</span>
			) : null}
		</span>
	)
}
