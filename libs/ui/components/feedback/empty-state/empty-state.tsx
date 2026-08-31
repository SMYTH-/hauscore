import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Button, type ButtonLink } from "../../primitives/button/button"
import { Icon, type IconName } from "../../primitives/icon/icon"

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
	icon?: IconName
	title?: string
	description?: string
	buttons?: ButtonLink[]
}

/** Empty-state placeholder — icon, message, optional actions. */
export function EmptyState({
	icon = "search",
	title,
	description,
	buttons,
	className,
	...rest
}: EmptyStateProps) {
	return (
		<div
			className={cn(
				"flex flex-col items-center px-6 py-10 text-center",
				className,
			)}
			{...rest}
		>
			<span className="mb-4 inline-flex size-14 items-center justify-center rounded-lg bg-background-sunk text-foreground-subtle">
				<Icon name={icon} size={26} />
			</span>
			{title ? (
				<div className="font-display text-lg font-bold text-foreground-strong">{title}</div>
			) : null}
			{description ? (
				<p className="mt-1.5 max-w-[340px] font-sans text-sm leading-normal text-foreground-muted">
					{description}
				</p>
			) : null}
			{buttons && buttons.length > 0 ? (
				<div className="mt-4 flex flex-wrap justify-center gap-2">
					{buttons.map((button) => (
						<Button
							key={button.href}
							href={button.href}
							target={button.target}
							variant={button.variant}
						>
							{button.label}
						</Button>
					))}
				</div>
			) : null}
		</div>
	)
}
