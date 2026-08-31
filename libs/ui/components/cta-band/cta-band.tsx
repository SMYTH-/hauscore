import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { ButtonRow } from "../button-row/button-row"
import type { ButtonLink } from "../primitives/button/button"

export type CtaBandHeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface CtaBandProps extends HTMLAttributes<HTMLElement> {
	title: string
	subtitle?: string
	buttons?: ButtonLink[]
	headingLevel?: CtaBandHeadingLevel
}

/** Inverse CTA band — dark rounded panel with headline and actions. */
export function CtaBand({
	title,
	subtitle,
	buttons = [],
	headingLevel = "h2",
	className,
	...rest
}: CtaBandProps) {
	const Heading = headingLevel

	return (
		<section
			className={cn(
				"flex flex-wrap items-center justify-between gap-8 rounded-xl bg-background-inverse p-12",
				className,
			)}
			{...rest}
		>
			<div>
				<Heading className="max-w-[520px] font-display text-h1 leading-[1.1] font-extrabold tracking-tight text-white">
					{title}
				</Heading>
				{subtitle ? (
					<p className="mt-3 max-w-[460px] font-sans text-body-lg leading-[1.55] text-foreground-on-inverse">
						{subtitle}
					</p>
				) : null}
			</div>

			{buttons.length > 0 ? <ButtonRow buttons={buttons} size="lg" /> : null}
		</section>
	)
}
