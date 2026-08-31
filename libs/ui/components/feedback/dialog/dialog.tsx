"use client"

import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@hauscore/utils"
import { IconButton } from "../../primitives/icon-button/icon-button"

export interface DialogProps {
	open?: boolean
	onClose?: () => void
	title?: string
	description?: string
	children?: ReactNode
	footer?: ReactNode
	width?: number
	className?: string
	panelClassName?: string
}

/** Modal dialog with scrim. Controlled via open/onClose. */
export function Dialog({
	open = false,
	onClose,
	title,
	description,
	children,
	footer,
	width = 480,
	className,
	panelClassName,
}: DialogProps) {
	if (!open) return null

	return (
		<div
			className={cn(
				"fixed inset-0 z-[1000] flex items-center justify-center bg-scrim p-5 backdrop-blur-[2px]",
				"animate-wkfade",
				className,
			)}
			onClick={onClose}
		>
			<div
				role="dialog"
				aria-modal="true"
				onClick={(event) => event.stopPropagation()}
				style={{ width }}
				className={cn(
					"max-h-[90vh] w-full max-w-full overflow-auto rounded-lg border border-border-subtle",
					"bg-background-secondary shadow-lg animate-wkpop",
					panelClassName,
				)}
			>
				<div className="flex items-start gap-3 px-5 pt-5">
					<div className="flex-1">
						{title ? (
							<h2 className="m-0 font-display text-[22px] font-extrabold tracking-tight text-foreground-strong">
								{title}
							</h2>
						) : null}
						{description ? (
							<p className="mt-1.5 font-sans text-sm leading-normal text-foreground-muted">
								{description}
							</p>
						) : null}
					</div>
					{onClose ? (
						<IconButton
							icon="x"
							label="Close"
							variant="ghost"
							size="sm"
							onClick={onClose}
							className="mt-0.5 shrink-0 text-foreground-muted"
						/>
					) : null}
				</div>
				{children ? (
					<div className="px-5 py-4 font-sans text-[15px] leading-relaxed text-foreground-muted">
						{children}
					</div>
				) : null}
				{footer ? (
					<div className="flex justify-end gap-2.5 px-5 pt-1 pb-5">{footer}</div>
				) : null}
			</div>
		</div>
	)
}

export interface DialogPanelProps extends HTMLAttributes<HTMLDivElement> {}

/** Optional inner panel wrapper for dialog body content. */
export function DialogPanel({ className, ...rest }: DialogPanelProps) {
	return <div className={cn(className)} {...rest} />
}
