import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Divider } from "../primitives/divider/divider"

export interface StatItem {
	value: string
	label: string
}

export interface StatsRowProps extends HTMLAttributes<HTMLDivElement> {
	stats: StatItem[]
}

/** Horizontal row of mono stat values with labels. */
export function StatsRow({ stats, className, ...rest }: StatsRowProps) {
	if (stats.length === 0) return null

	return (
		<div className={cn("flex flex-wrap items-center gap-6", className)} {...rest}>
			{stats.map((stat, index) => (
				<div key={stat.label} className="contents">
					{index > 0 ? <Divider vertical className="h-8" /> : null}
					<div>
						<div className="font-mono text-h3 leading-none font-bold text-foreground-strong">
							{stat.value}
						</div>
						<div className="mt-0.5 font-sans text-xs text-foreground-muted">{stat.label}</div>
					</div>
				</div>
			))}
		</div>
	)
}
