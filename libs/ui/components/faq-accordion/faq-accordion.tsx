"use client"

import { useId, useState, type HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Icon } from "../primitives/icon/icon"

export type FaqAccordionHeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface FaqItem {
	question: string
	answer: string
}

export interface FaqAccordionProps extends HTMLAttributes<HTMLElement> {
	eyebrow?: string
	title: string
	items: FaqItem[]
	headingLevel?: FaqAccordionHeadingLevel
}

/** Expandable FAQ list — one item open at a time. */
export function FaqAccordion({
	eyebrow,
	title,
	items,
	headingLevel = "h2",
	className,
	...rest
}: FaqAccordionProps) {
	const baseId = useId()
	const [openIndex, setOpenIndex] = useState<number | null>(0)
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

			<div className="mt-10 divide-y divide-border border-y border-border">
				{items.map((item, index) => {
					const isOpen = openIndex === index
					const triggerId = `${baseId}-trigger-${index}`
					const panelId = `${baseId}-panel-${index}`

					return (
						<div key={item.question}>
							<button
								type="button"
								id={triggerId}
								aria-expanded={isOpen}
								aria-controls={panelId}
								onClick={() => setOpenIndex(isOpen ? null : index)}
								className="flex w-full items-center justify-between gap-4 py-5 text-left"
							>
								<span className="font-display text-h3 font-bold tracking-tight text-foreground-strong">
									{item.question}
								</span>
								<Icon
									name="chevron-down"
									size="md"
									className={cn(
										"shrink-0 text-foreground-muted transition-transform duration-base ease-standard",
										isOpen && "rotate-180",
									)}
								/>
							</button>
							<div
								id={panelId}
								role="region"
								aria-labelledby={triggerId}
								hidden={!isOpen}
								className={cn(!isOpen && "hidden")}
							>
								<p className="pb-5 font-sans text-sm leading-[1.6] text-foreground-muted">
									{item.answer}
								</p>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
