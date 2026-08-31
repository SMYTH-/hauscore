import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { ButtonRow } from "../button-row/button-row"
import type { ButtonLink } from "../primitives/button/button"
import { Icon } from "../primitives/icon/icon"
import { Image, type ImageSrc } from "../primitives/image/image"

export type HeroHeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface HeroProps extends HTMLAttributes<HTMLElement> {
	eyebrow?: string
	title: string
	subtitle?: string
	buttons?: ButtonLink[]
	image?: ImageSrc
	imageAlt?: string
	headingLevel?: HeroHeadingLevel
}

/** Marketing hero — eyebrow, headline, subtitle, CTAs, and optional image. */
export function Hero({
	eyebrow,
	title,
	subtitle,
	buttons = [],
	image,
	imageAlt = "",
	headingLevel = "h1",
	className,
	...rest
}: HeroProps) {
	const Heading = headingLevel

	return (
		<section
			className={cn(
				"grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14",
				className,
			)}
			{...rest}
		>
			<div>
				{eyebrow ? (
					<span className="font-mono text-eyebrow leading-[1.4] font-bold tracking-[0.14em] text-brand uppercase">
						{eyebrow}
					</span>
				) : null}

				<Heading className="mt-5 font-display text-display-xl leading-[1.02] font-extrabold tracking-tight text-foreground-strong">
					{title}
				</Heading>

				{subtitle ? (
					<p className="mt-5 max-w-[480px] font-sans text-body-lg leading-[1.6] text-foreground-muted">
						{subtitle}
					</p>
				) : null}

				{buttons.length > 0 ? (
					<ButtonRow buttons={buttons} size="lg" className="mt-8" />
				) : null}
			</div>

			{image ? (
				<div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
					<Image src={image} alt={imageAlt || title} className="size-full object-cover" lazy={false} />
				</div>
			) : (
				<div
					aria-hidden="true"
					className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl border border-border bg-background-sunk text-foreground-subtle"
				>
					<Icon name="image" size={26} />
				</div>
			)}
		</section>
	)
}
