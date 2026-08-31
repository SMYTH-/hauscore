import type { ButtonHTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Icon, type IconName } from "../icon/icon"

const sizes = {
	sm: "size-button-height-sm [&_svg]:size-4",
	md: "size-button-height [&_svg]:size-5",
	lg: "size-button-height-lg [&_svg]:size-[22px]",
} as const

const variants = {
	primary:
		"bg-button text-button-foreground hover:bg-button-hover active:bg-button-pressed border-transparent",
	secondary:
		"border-border bg-button-secondary text-button-secondary-foreground hover:border-border-strong hover:bg-button-secondary-hover",
	ghost: "border-transparent bg-transparent text-foreground-muted hover:bg-button-ghost-hover",
	danger: "bg-button-danger text-button-foreground hover:bg-button-danger-hover border-transparent",
} as const

export type IconButtonVariant = keyof typeof variants
export type IconButtonSize = keyof typeof sizes

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: IconName
	label: string
	variant?: IconButtonVariant
	size?: IconButtonSize
}

/** Square icon-only button. Requires an accessible label. */
export function IconButton({
	icon,
	label,
	variant = "ghost",
	size = "md",
	className,
	disabled,
	...rest
}: IconButtonProps) {
	return (
		<button
			type="button"
			aria-label={label}
			disabled={disabled}
			className={cn(
				"inline-flex shrink-0 items-center justify-center rounded-button border",
				"transition-[background,border-color,transform] duration-base ease-standard",
				"focus-visible:shadow-focus focus-visible:outline-none",
				"active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50",
				sizes[size],
				variants[variant],
				className,
			)}
			{...rest}
		>
			<Icon name={icon} />
		</button>
	)
}
