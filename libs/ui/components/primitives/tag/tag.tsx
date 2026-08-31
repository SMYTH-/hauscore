import type { HTMLAttributes, MouseEvent } from "react"
import { cn } from "@hauscore/utils"
import { Icon, type IconName } from "../icon/icon"

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
	icon?: IconName
	selected?: boolean
	onRemove?: () => void
}

/** Pill tag / chip with optional icon, selected state, and remove action. */
export function Tag({
	children,
	icon,
	selected = false,
	onRemove,
	className,
	...rest
}: TagProps) {
	const handleRemove = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()
		onRemove?.()
	}

	return (
		<span
			className={cn(
				"inline-flex items-center gap-1.5 rounded-badge px-3 py-[5px]",
				"font-sans text-[13px] font-medium leading-snug",
				"border transition-[background,border-color] duration-base ease-standard",
				selected
					? "border-brand bg-brand text-foreground-on-brand"
					: "border-border bg-background-secondary text-foreground-muted",
				rest.onClick && !selected && "cursor-pointer hover:border-border-strong",
				className,
			)}
			{...rest}
		>
			{icon ? <Icon name={icon} size={14} /> : null}
			{children}
			{onRemove ? (
				<button
					type="button"
					aria-label="Remove"
					onClick={handleRemove}
					className="ml-0.5 inline-flex cursor-pointer border-0 bg-transparent p-0 text-inherit opacity-70 hover:opacity-100"
				>
					<Icon name="x" size={13} />
				</button>
			) : null}
		</span>
	)
}
