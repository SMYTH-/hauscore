import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"

const sizes = {
	xs: "size-avatar-xs text-[10px]",
	sm: "size-avatar-sm text-[13px]",
	md: "size-avatar-md text-[15px]",
	lg: "size-avatar-lg text-xl",
	xl: "size-avatar-xl text-[28px]",
} as const

const statusDotSizes = {
	xs: "size-2",
	sm: "size-2.5",
	md: "size-2.5",
	lg: "size-3",
	xl: "size-4",
} as const

const statusColors = {
	online: "bg-success",
	away: "bg-warning",
	offline: "bg-border-strong",
} as const

export type AvatarSize = keyof typeof sizes
export type AvatarStatus = keyof typeof statusColors

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
	src?: string
	name?: string
	size?: AvatarSize
	status?: AvatarStatus
}

function getInitials(name: string): string {
	return name
		.split(" ")
		.map((word) => word[0])
		.filter(Boolean)
		.slice(0, 2)
		.join("")
		.toUpperCase()
}

/** User avatar — image or initials fallback, optional status dot. */
export function Avatar({ src, name = "", size = "md", status, className, ...rest }: AvatarProps) {
	const initials = getInitials(name)

	return (
		<span className={cn("relative inline-flex shrink-0", sizes[size], className)} {...rest}>
			<span
				className={cn(
					"flex size-full items-center justify-center overflow-hidden rounded-full",
					"border border-border bg-avatar-bg font-sans font-semibold text-avatar-fg",
				)}
			>
				{src ? (
					<img src={src} alt={name} className="size-full object-cover" />
				) : (
					initials
				)}
			</span>
			{status ? (
				<span
					className={cn(
						"absolute right-0 bottom-0 rounded-full border-2 border-background-secondary",
						statusDotSizes[size],
						statusColors[status],
					)}
					aria-hidden="true"
				/>
			) : null}
		</span>
	)
}
