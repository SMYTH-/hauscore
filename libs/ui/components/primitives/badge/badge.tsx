import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"

const tones = {
	neutral: "bg-badge-neutral-bg text-badge-neutral-fg border-badge-neutral-border",
	brand: "bg-badge-brand-bg text-badge-brand-fg border-badge-brand-border",
	success: "bg-badge-success-bg text-badge-success-fg border-badge-success-border",
	warning: "bg-badge-warning-bg text-badge-warning-fg border-badge-warning-border",
	danger: "bg-badge-danger-bg text-badge-danger-fg border-badge-danger-border",
	info: "bg-badge-info-bg text-badge-info-fg border-badge-info-border",
	solid: "border-transparent bg-badge-solid-bg text-badge-solid-fg",
} as const

export type BadgeTone = keyof typeof tones

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	tone?: BadgeTone
	dot?: boolean
}

/** Small status/metadata label in mono uppercase. */
export function Badge({ children, tone = "neutral", dot = false, className, ...rest }: BadgeProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-1.5 rounded-badge border px-[9px] py-[3px]",
				"font-mono text-[11px] font-bold uppercase leading-snug tracking-wide",
				tones[tone],
				className,
			)}
			{...rest}
		>
			{dot ? <span className="size-1.5 rounded-full bg-current" aria-hidden="true" /> : null}
			{children}
		</span>
	)
}
