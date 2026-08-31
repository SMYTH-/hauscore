import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@hauscore/utils"

export type SectionSpacing = "none" | "xs" | "sm" | "md" | "lg"

export interface SectionSpacingPair {
	top?: SectionSpacing
	bottom?: SectionSpacing
}

export type SectionSpacingValue = SectionSpacing | SectionSpacingPair

export type SectionBackground = "default" | "sunk" | "secondary" | "inverse" | "none"

export type SectionBorder = "none" | "top" | "bottom" | "y"

export type SectionBorderColor = "default" | "subtle"

export type SectionLayout = "stack" | "grid" | "none"

export type SectionGap = "none" | "gutter" | "sm" | "md" | "lg"

export type SectionWidth = "content" | "narrow" | "full"

export type SectionElement = "section" | "div" | "header" | "footer" | "article" | "aside" | "main"

export interface SectionBandProps {
	spacing?: SectionSpacingValue
	innerSpacing?: SectionSpacingValue
	background?: SectionBackground
	bleed?: boolean
	width?: SectionWidth
}

const paddingTop: Record<SectionSpacing, string> = {
	none: "",
	xs: "pt-section-xs",
	sm: "pt-section-sm",
	md: "pt-section-md",
	lg: "pt-section-lg",
}

const paddingBottom: Record<SectionSpacing, string> = {
	none: "",
	xs: "pb-section-xs",
	sm: "pb-section-sm",
	md: "pb-section-md",
	lg: "pb-section-lg",
}

const backgrounds: Record<SectionBackground, string> = {
	default: "bg-background",
	sunk: "bg-background-sunk",
	secondary: "bg-background-secondary",
	inverse: "bg-background-inverse text-foreground-on-inverse",
	none: "",
}

const borders: Record<SectionBorder, string> = {
	none: "",
	top: "border-t",
	bottom: "border-b",
	y: "border-y",
}

const borderColors: Record<SectionBorderColor, string> = {
	default: "border-border",
	subtle: "border-border-subtle",
}

const layouts: Record<SectionLayout, string> = {
	stack: "flex flex-col",
	grid: "grid grid-cols-12 gap-gutter",
	none: "",
}

const gaps: Record<SectionGap, string> = {
	none: "",
	gutter: "gap-gutter",
	sm: "gap-10",
	md: "gap-16",
	lg: "gap-20",
}

const widths: Record<SectionWidth, string> = {
	content: "max-w-content",
	narrow: "max-w-narrow",
	full: "max-w-none",
}

export interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
	as?: SectionElement
	theme?: "light" | "dark"
	background?: SectionBackground
	spacing?: SectionSpacingValue
	innerSpacing?: SectionSpacingValue
	border?: SectionBorder
	borderColor?: SectionBorderColor
	width?: SectionWidth
	layout?: SectionLayout
	gap?: SectionGap
	bleed?: boolean
	mobileBleed?: boolean
	containerClassName?: string
	children?: ReactNode
}

function resolveSpacing(value: SectionSpacingValue): { top: SectionSpacing; bottom: SectionSpacing } {
	if (typeof value === "string") return { top: value, bottom: value }
	return { top: value.top ?? "none", bottom: value.bottom ?? "none" }
}

/**
 * Layout container primitive — max-width bands, page gutters, spacing rhythm,
 * and optional hairline borders. Maps to the CMS container block in a later phase.
 */
export function Section({
	as: Tag = "section",
	theme,
	background = "default",
	spacing = { bottom: "md" },
	innerSpacing = "none",
	border = "none",
	borderColor = "default",
	width = "content",
	layout = "stack",
	gap,
	bleed = false,
	mobileBleed = false,
	className,
	containerClassName,
	children,
	...props
}: SectionProps) {
	const outer = resolveSpacing(spacing)
	const inner = resolveSpacing(innerSpacing)
	const resolvedGap = gap ?? (layout === "grid" ? "gutter" : "none")

	return (
		<Tag
			{...props}
			data-theme={theme === "dark" ? "dark" : undefined}
			data-mobile-bleed={mobileBleed ? "" : undefined}
			className={cn(
				backgrounds[background],
				!bleed && "px-page",
				mobileBleed && !bleed && "max-lg:px-0",
				paddingTop[outer.top],
				paddingBottom[outer.bottom],
				className,
			)}
		>
			<div
				className={cn(
					"mx-auto w-full",
					widths[width],
					mobileBleed && width !== "full" && "max-lg:max-w-none",
					borders[border],
					border !== "none" && borderColors[borderColor],
					paddingTop[inner.top],
					paddingBottom[inner.bottom],
					layouts[layout],
					gaps[resolvedGap],
					containerClassName,
				)}
			>
				{children}
			</div>
		</Tag>
	)
}
