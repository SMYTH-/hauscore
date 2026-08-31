import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@hauscore/utils"
import { Icon, type IconName } from "../../primitives/icon/icon"
import { IconButton } from "../../primitives/icon-button/icon-button"

const tones = {
	info: {
		container: "border-badge-info-border bg-badge-info-bg",
		icon: "text-badge-info-fg",
		iconName: "info" as IconName,
	},
	success: {
		container: "border-badge-success-border bg-badge-success-bg",
		icon: "text-badge-success-fg",
		iconName: "check-circle" as IconName,
	},
	warning: {
		container: "border-badge-warning-border bg-badge-warning-bg",
		icon: "text-badge-warning-fg",
		iconName: "alert-triangle" as IconName,
	},
	danger: {
		container: "border-badge-danger-border bg-badge-danger-bg",
		icon: "text-badge-danger-fg",
		iconName: "alert-circle" as IconName,
	},
} as const

export type AlertTone = keyof typeof tones

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
	tone?: AlertTone
	title?: string
	onDismiss?: () => void
	children?: ReactNode
}

/** Inline contextual message banner. */
export function Alert({
	tone = "info",
	title,
	children,
	onDismiss,
	className,
	...rest
}: AlertProps) {
	const config = tones[tone]

	return (
		<div
			role="status"
			className={cn(
				"flex gap-3 rounded-md border px-4 py-3.5",
				config.container,
				className,
			)}
			{...rest}
		>
			<span className={cn("mt-0.5 shrink-0", config.icon)}>
				<Icon name={config.iconName} size={20} />
			</span>
			<div className="flex-1 font-sans text-sm leading-normal text-foreground">
				{title ? <div className={cn("font-semibold", children ? "mb-0.5" : undefined)}>{title}</div> : null}
				{children}
			</div>
			{onDismiss ? (
				<IconButton
					icon="x"
					label="Dismiss"
					variant="ghost"
					size="sm"
					onClick={onDismiss}
					className="shrink-0 text-foreground-muted"
				/>
			) : null}
		</div>
	)
}
