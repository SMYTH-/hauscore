import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Icon } from "../icon/icon"

export interface RatingStarsProps extends HTMLAttributes<HTMLSpanElement> {
	value?: number
	count?: number
	starSize?: number
	showValue?: boolean
}

/** Star rating display with optional numeric value and review count. */
export function RatingStars({
	value = 0,
	count,
	starSize = 16,
	showValue = true,
	className,
	...rest
}: RatingStarsProps) {
	const full = Math.floor(value)
	const half = value - full >= 0.5

	return (
		<span className={cn("inline-flex items-center gap-1.5", className)} {...rest}>
			<span className="inline-flex gap-px text-sand-500">
				{[0, 1, 2, 3, 4].map((index) => {
					const filled = index < full
					const isHalf = index === full && half

					return (
						<span key={index} className="relative inline-flex">
							<Icon name="star" size={starSize} className="text-border" />
							{filled || isHalf ? (
								<span
									className="absolute inset-0 inline-flex overflow-hidden text-sand-500"
									style={{ width: isHalf ? "50%" : "100%" }}
								>
									<Icon name="star" size={starSize} className="fill-sand-500 text-sand-500" />
								</span>
							) : null}
						</span>
					)
				})}
			</span>
			{showValue ? (
				<span className="font-mono text-[13px] font-bold text-foreground-strong">
					{value.toFixed(1)}
				</span>
			) : null}
			{count != null ? (
				<span className="font-sans text-[13px] text-foreground-muted">({count})</span>
			) : null}
		</span>
	)
}
