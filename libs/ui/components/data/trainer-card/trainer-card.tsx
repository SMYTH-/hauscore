import type { AnchorHTMLAttributes } from "react"
import { cn } from "@hauscore/utils"
import { Badge } from "../../primitives/badge/badge"
import { Icon } from "../../primitives/icon/icon"
import { Image, type ImageSrc } from "../../primitives/image/image"
import { RatingStars } from "../../primitives/rating-stars/rating-stars"
import { Tag } from "../../primitives/tag/tag"
import { PriceTag } from "../price-tag/price-tag"

const placeholderTints = [
	{ bg: "bg-brand-tint", fg: "text-brand", cap: "text-badge-brand-fg" },
	{ bg: "bg-sand-100", fg: "text-sand-500", cap: "text-foreground-muted" },
	{ bg: "bg-background-sunk", fg: "text-foreground-subtle", cap: "text-foreground-muted" },
	{ bg: "bg-avatar-bg", fg: "text-brand-hover", cap: "text-avatar-fg" },
] as const

export interface TrainerCardProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
	href: string
	name: string
	photo?: ImageSrc
	location?: string
	specialties?: string[]
	rating?: number
	reviews?: number
	price?: number | string
	verified?: boolean
	available?: boolean
}

function getInitials(name: string): string {
	return name
		.trim()
		.split(/\s+/)
		.slice(0, 2)
		.map((word) => word[0])
		.join("")
		.toUpperCase()
}

function getPlaceholderTint(name: string) {
	const index = Array.from(name || "?").reduce((acc, char) => acc + char.charCodeAt(0), 0)
	return placeholderTints[index % placeholderTints.length]
}

/** Trainer listing card — photo, name, specialties, rating, price, and profile link. */
export function TrainerCard({
	href,
	name,
	photo,
	location,
	specialties = [],
	rating,
	reviews,
	price,
	verified = false,
	available = false,
	className,
	...rest
}: TrainerCardProps) {
	const initials = getInitials(name)
	const tint = getPlaceholderTint(name)
	return (
		<a
			href={href}
			className={cn(
				"group flex flex-col overflow-hidden rounded-lg border border-border bg-background-secondary shadow-sm",
				"transition-[box-shadow,transform] duration-base ease-standard",
				"hover:-translate-y-0.5 hover:shadow-md",
				className,
			)}
			{...rest}
		>
			<div className="relative aspect-[4/3] bg-background-sunk">
				{photo ? (
					<Image
						src={photo}
						alt={name}
						size="card"
						className="size-full object-cover"
					/>
				) : (
					<div
						aria-label={`${name} — no photo yet`}
						className={cn(
							"flex size-full flex-col items-center justify-center gap-2",
							tint.bg,
						)}
					>
						<span
							className={cn(
								"font-display text-[40px] leading-none font-extrabold tracking-tight",
								tint.fg,
							)}
						>
							{initials || "?"}
						</span>
						<span
							className={cn(
								"inline-flex items-center gap-1 font-mono text-xs font-bold tracking-widest uppercase",
								tint.cap,
							)}
						>
							<Icon name="camera-off" size={13} />
							No photo yet
						</span>
					</div>
				)}
				{available ? (
					<div className="absolute top-3 left-3">
						<Badge tone="success" dot>
							Available
						</Badge>
					</div>
				) : null}
			</div>
			<div className="flex flex-1 flex-col gap-3 p-5">
				<div className="flex items-start justify-between gap-2">
					<div>
						<div className="flex items-center gap-1.5">
							<span className="font-display text-lg font-bold text-foreground-strong">{name}</span>
							{verified ? (
								<Icon name="badge-check" size={17} className="text-brand" />
							) : null}
						</div>
						{location ? (
							<div className="mt-0.5 flex items-center gap-1 font-sans text-[13px] text-foreground-muted">
								<Icon name="map-pin" size={14} />
								{location}
							</div>
						) : null}
					</div>
					{rating != null ? (
						<RatingStars value={rating} count={reviews} starSize={14} />
					) : null}
				</div>
				{specialties.length > 0 ? (
					<div className="flex flex-wrap gap-1.5">
						{specialties.slice(0, 3).map((specialty) => (
							<Tag key={specialty}>{specialty}</Tag>
						))}
					</div>
				) : null}
				<div className="mt-auto flex items-center justify-between border-t border-border-subtle pt-2">
					{price != null ? <PriceTag amount={price} unit="session" size="sm" /> : <span />}
					<span className="inline-flex items-center gap-0.5 font-sans text-sm font-semibold text-foreground-link">
						View
						<Icon name="arrow-right" size={15} />
					</span>
				</div>
			</div>
		</a>
	)
}
