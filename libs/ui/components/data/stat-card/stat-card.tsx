import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Icon, type IconName } from "../../primitives/icon/icon"

const deltaTones = {
	up: "text-brand-hover",
	down: "text-danger",
	neutral: "text-foreground-muted",
} as const

export type StatCardDeltaTone = keyof typeof deltaTones

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
	label: string
	value: string | number
	icon?: IconName
	delta?: string
	deltaTone?: StatCardDeltaTone
}

/** Dashboard metric card — label, mono value, optional delta. */
export function StatCard({
	label,
	value,
	icon,
	delta,
	deltaTone = "up",
	className,
	...rest
}: StatCardProps) {
	return (
		<div
			className={cn(
				"rounded-md border border-border bg-background-secondary p-5 shadow-sm",
				className,
			)}
			{...rest}
		>
			<div className="flex items-center justify-between">
				<span className="font-mono text-[11px] leading-snug tracking-widest text-foreground-muted uppercase">
					{label}
				</span>
				{icon ? (
					<span className="ml-2 shrink-0 text-border-strong">
						<Icon name={icon} size={18} />
					</span>
				) : null}
			</div>
			<div className="mt-3 flex items-baseline gap-2.5">
				<span className="font-mono text-[30px] leading-none font-bold text-foreground-strong">
					{value}
				</span>
				{delta ? (
					<span className={cn("inline-flex items-center gap-0.5 font-mono text-[12.5px]", deltaTones[deltaTone])}>
						<Icon
							name={deltaTone === "down" ? "trending-down" : "trending-up"}
							size={14}
						/>
						{delta}
					</span>
				) : null}
			</div>
		</div>
	)
}
