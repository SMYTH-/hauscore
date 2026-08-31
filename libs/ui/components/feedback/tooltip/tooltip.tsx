"use client"

import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@hauscore/utils"

const placements = {
	top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
	bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
	left: "top-1/2 right-full mr-2 -translate-y-1/2",
	right: "top-1/2 left-full ml-2 -translate-y-1/2",
} as const

export type TooltipPlacement = keyof typeof placements

export interface TooltipProps extends HTMLAttributes<HTMLSpanElement> {
	label: string
	placement?: TooltipPlacement
	children?: ReactNode
}

/** Simple hover/focus tooltip wrapping its trigger children. */
export function Tooltip({ label, placement = "top", children, className, ...rest }: TooltipProps) {
	return (
		<span
			className={cn("group/tooltip relative inline-flex", className)}
			{...rest}
		>
			{children}
			<span
				role="tooltip"
				className={cn(
					"pointer-events-none absolute z-[900] whitespace-nowrap rounded-sm",
					"bg-tooltip-bg px-2.5 py-1.5 font-sans text-[12.5px] text-tooltip-fg shadow-md",
					"opacity-0 transition-opacity duration-fast ease-out",
					"group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100",
					placements[placement],
				)}
			>
				{label}
			</span>
		</span>
	)
}
