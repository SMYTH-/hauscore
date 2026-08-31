import { cn } from "@hauscore/utils"

export interface SpinnerProps {
	className?: string
}

/** Inline loading spinner for buttons and async states. */
export function Spinner({ className }: SpinnerProps) {
	return (
		<span
			aria-hidden="true"
			className={cn(
				"inline-block rounded-full border-2 border-current border-t-transparent opacity-90 animate-wkspin",
				className,
			)}
		/>
	)
}
