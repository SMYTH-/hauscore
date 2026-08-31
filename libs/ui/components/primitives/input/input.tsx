import type { InputHTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Icon, type IconName } from "../icon/icon"

const sizes = {
	sm: "h-input-height-sm text-sm",
	md: "h-input-height text-[15px]",
	lg: "h-input-height-lg text-body",
} as const

export type InputSize = keyof typeof sizes

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	iconLeft?: IconName
	iconRight?: IconName
	invalid?: boolean
	inputSize?: InputSize
}

/** Text input with optional leading/trailing icon and error state. */
export function Input({
	iconLeft,
	iconRight,
	invalid = false,
	disabled = false,
	inputSize = "md",
	className,
	...rest
}: InputProps) {
	return (
		<div
			className={cn(
				"flex items-center gap-2 rounded-md border px-3.5",
				"transition-[border-color,box-shadow] duration-base ease-standard",
				"has-[:focus-visible]:border-brand has-[:focus-visible]:shadow-focus",
				invalid ? "border-danger" : "border-border",
				disabled ? "bg-background-sunk opacity-60" : "bg-background-secondary",
				sizes[inputSize],
				className,
			)}
		>
			{iconLeft ? <Icon name={iconLeft} size={18} className="text-foreground-subtle" /> : null}
			<input
				disabled={disabled}
				className={cn(
					"h-full min-w-0 flex-1 border-0 bg-transparent font-sans text-foreground outline-none",
					"placeholder:text-foreground-subtle disabled:cursor-not-allowed",
				)}
				{...rest}
			/>
			{iconRight ? <Icon name={iconRight} size={18} className="text-foreground-subtle" /> : null}
		</div>
	)
}
