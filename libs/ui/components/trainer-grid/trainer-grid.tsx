import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { TrainerCard, type TrainerCardProps } from "../data/trainer-card/trainer-card"
import { Icon } from "../primitives/icon/icon"

export type TrainerGridItem = Pick<
	TrainerCardProps,
	| "href"
	| "name"
	| "photo"
	| "location"
	| "specialties"
	| "rating"
	| "reviews"
	| "price"
	| "verified"
	| "available"
>

export type TrainerGridHeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface TrainerGridProps extends HTMLAttributes<HTMLElement> {
	eyebrow?: string
	title: string
	trainers: TrainerGridItem[]
	viewAllLabel?: string
	viewAllHref?: string
	headingLevel?: TrainerGridHeadingLevel
}

/** Responsive grid of trainer listing cards. */
export function TrainerGrid({
	eyebrow,
	title,
	trainers,
	viewAllLabel,
	viewAllHref,
	headingLevel = "h2",
	className,
	...rest
}: TrainerGridProps) {
	const Heading = headingLevel

	return (
		<section className={cn(className)} {...rest}>
			<div className="flex flex-wrap items-end justify-between gap-5">
				<div>
					{eyebrow ? (
						<span className="font-mono text-eyebrow leading-[1.4] font-bold tracking-[0.14em] text-brand uppercase">
							{eyebrow}
						</span>
					) : null}
					<Heading className="mt-3 font-display text-h1 leading-[1.1] font-extrabold tracking-tight text-foreground-strong">
						{title}
					</Heading>
				</div>

				{viewAllLabel && viewAllHref ? (
					<a
						href={viewAllHref}
						className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-foreground-link no-underline hover:text-brand-hover"
					>
						{viewAllLabel}
						<Icon name="arrow-right" size={16} />
					</a>
				) : null}
			</div>

			{trainers.length > 0 ? (
				<div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{trainers.map((trainer) => (
						<TrainerCard key={trainer.href + trainer.name} {...trainer} />
					))}
				</div>
			) : null}
		</section>
	)
}
