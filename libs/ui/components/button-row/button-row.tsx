import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Button, type ButtonLink, type ButtonSize } from "../primitives/button/button"

export interface ButtonRowProps extends HTMLAttributes<HTMLDivElement> {
	buttons: ButtonLink[]
	size?: ButtonSize
	align?: "start" | "center" | "end"
}

/** Horizontal row of link buttons from CMS ButtonLink data. */
export function ButtonRow({
	buttons,
	size = "md",
	align = "start",
	className,
	...rest
}: ButtonRowProps) {
	if (buttons.length === 0) return null

	const alignClass = {
		start: "justify-start",
		center: "justify-center",
		end: "justify-end",
	}[align]

	return (
		<div className={cn("flex flex-wrap gap-3", alignClass, className)} {...rest}>
			{buttons.map((button) => (
				<Button
					key={`${button.href}-${button.label}`}
					href={button.href}
					target={button.target}
					variant={button.variant ?? "primary"}
					size={size}
				>
					{button.label}
				</Button>
			))}
		</div>
	)
}
