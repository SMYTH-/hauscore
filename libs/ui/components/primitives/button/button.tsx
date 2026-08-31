import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributeAnchorTarget } from "react"
import { cn } from "@hauscore/utils"
import { Spinner } from "../spinner/spinner"

const styles = {
	base: [
		"inline-flex items-center justify-center gap-2 whitespace-nowrap no-underline",
		"rounded-button font-sans font-semibold leading-none",
		"border border-transparent transition-[background,border-color,transform,box-shadow]",
		"duration-base ease-standard",
		"focus-visible:shadow-focus focus-visible:outline-none",
		"disabled:pointer-events-none disabled:opacity-50",
		"active:scale-[0.985]",
	].join(" "),
	sizes: {
		sm: "h-button-height-sm px-button-padding-x-sm text-sm",
		md: "h-button-height px-button-padding-x text-[15px]",
		lg: "h-button-height-lg px-button-padding-x-lg text-body",
	},
	variants: {
		primary: "bg-button text-button-foreground hover:bg-button-hover active:bg-button-pressed",
		secondary:
			"border-border bg-button-secondary text-button-secondary-foreground hover:border-border-strong hover:bg-button-secondary-hover",
		ghost: "bg-transparent text-foreground hover:bg-button-ghost-hover",
		danger: "bg-button-danger text-button-foreground hover:bg-button-danger-hover",
		inverse:
			"bg-button-inverse text-button-inverse-foreground hover:bg-button-inverse-hover",
	},
}

export type ButtonVariant = keyof typeof styles.variants
export type ButtonSize = keyof typeof styles.sizes

export interface ButtonLink {
	label: string
	href: string
	target?: HTMLAttributeAnchorTarget
	variant?: ButtonVariant
}

interface BaseProps {
	variant?: ButtonVariant
	size?: ButtonSize
	loading?: boolean
	fullWidth?: boolean
}

type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

export type ButtonProps = AnchorProps | NativeButtonProps

/** Primary action control styled from Werkowt tokens. Renders an anchor when `href` is set. */
export function Button({
	variant = "primary",
	size = "md",
	loading = false,
	fullWidth = false,
	className,
	children,
	...props
}: ButtonProps) {
	const classes = cn(
		styles.base,
		styles.sizes[size],
		styles.variants[variant],
		fullWidth && "w-full",
		className,
	)

	const content = (
		<>
			{loading ? <Spinner className="size-[15px]" /> : null}
			{children ? <span>{children}</span> : null}
		</>
	)

	if (props.href !== undefined) {
		const { rel, target, ...anchorProps } = props as AnchorProps
		return (
			<a
				{...anchorProps}
				target={target}
				rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
				className={classes}
				aria-busy={loading || undefined}
			>
				{content}
			</a>
		)
	}

	const { type = "button", disabled, ...rest } = props as NativeButtonProps
	return (
		<button {...rest} type={type} disabled={disabled || loading} className={classes} aria-busy={loading || undefined}>
			{content}
		</button>
	)
}
