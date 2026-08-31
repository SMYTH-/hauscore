import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Icon, type IconName } from "../primitives/icon/icon"

export type FeatureStepsHeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface FeatureStep {
	icon: IconName
	title: string
	description: string
}

export interface FeatureStepsProps extends HTMLAttributes<HTMLElement> {
	eyebrow?: string
	title: string
	steps: FeatureStep[]
	headingLevel?: FeatureStepsHeadingLevel
}

/** Three-column feature steps with icon, title, and description. */
export function FeatureSteps({
	eyebrow,
	title,
	steps,
	headingLevel = "h2",
	className,
	...rest
}: FeatureStepsProps) {
	const Heading = headingLevel

	return (
		<section className={cn(className)} {...rest}>
			{eyebrow ? (
				<span className="font-mono text-eyebrow leading-[1.4] font-bold tracking-[0.14em] text-brand uppercase">
					{eyebrow}
				</span>
			) : null}

			<Heading className="mt-3.5 max-w-[560px] font-display text-display-m leading-[1.05] font-extrabold tracking-tight text-foreground-strong">
				{title}
			</Heading>

			<div className="mt-10 grid gap-6 md:grid-cols-3">
				{steps.map((step) => (
					<div key={step.title} className="py-1.5">
						<span className="inline-flex size-12 items-center justify-center rounded-md bg-brand-tint text-brand">
							<Icon name={step.icon} size="lg" />
						</span>
						<h3 className="mt-5 font-display text-h3 font-bold tracking-tight text-foreground-strong">
							{step.title}
						</h3>
						<p className="mt-2 font-sans text-sm leading-[1.6] text-foreground-muted">
							{step.description}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}
