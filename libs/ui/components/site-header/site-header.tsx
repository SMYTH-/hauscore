import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Button, type ButtonLink } from "../primitives/button/button"

export interface NavLink {
	label: string
	href: string
}

export interface SiteHeaderProps extends HTMLAttributes<HTMLDivElement> {
	wordmarkHref?: string
	navLinks?: NavLink[]
	buttons?: ButtonLink[]
}

/** Site header bar — wordmark, nav links, and action buttons. Width/gutters come from a parent Section. */
export function SiteHeader({
	wordmarkHref = "/",
	navLinks = [],
	buttons = [],
	className,
	...rest
}: SiteHeaderProps) {
	return (
		<div className={cn("flex h-16 items-center gap-8", className)} {...rest}>
			<a
				href={wordmarkHref}
				className="font-display text-2xl font-extrabold tracking-tight text-foreground-strong no-underline"
			>
				werkowt<span className="text-brand">.</span>
			</a>

			{navLinks.length > 0 ? (
				<nav aria-label="Main" className="ml-3 hidden items-center gap-6 md:flex">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="font-sans text-sm font-medium text-foreground-link no-underline hover:text-brand-hover"
						>
							{link.label}
						</a>
					))}
				</nav>
			) : null}

			{buttons.length > 0 ? (
				<div className="ml-auto flex items-center gap-3">
					{buttons.map((button) => (
						<Button
							key={button.href}
							href={button.href}
							target={button.target}
							variant={button.variant ?? "primary"}
							size="sm"
						>
							{button.label}
						</Button>
					))}
				</div>
			) : null}
		</div>
	)
}
