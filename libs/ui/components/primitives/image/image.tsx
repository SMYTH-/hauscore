import type { ImgHTMLAttributes } from "react"
import { cn } from "@hauscore/utils"

export interface ImageSizeVariant {
	url: string
	width?: number
	height?: number
}

export interface CmsImageSource {
	url: string
	alt?: string
	width?: number
	height?: number
	sizes?: Record<string, ImageSizeVariant>
}

export type ImageSrc = string | CmsImageSource

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
	src: ImageSrc
	alt: string
	size?: string
	lazy?: boolean
}

function resolveImageSrc(
	src: ImageSrc,
	preferredSize?: string,
): { url: string; width?: number; height?: number } {
	if (typeof src === "string") return { url: src }

	if (preferredSize && src.sizes?.[preferredSize]) {
		const variant = src.sizes[preferredSize]
		return { url: variant.url, width: variant.width, height: variant.height }
	}

	return { url: src.url, width: src.width, height: src.height }
}

/** Responsive image — accepts a URL string or CMS object with size variants. */
export function Image({
	src,
	alt,
	size,
	lazy = true,
	className,
	width,
	height,
	...rest
}: ImageProps) {
	const resolved = resolveImageSrc(src, size)

	return (
		<img
			src={resolved.url}
			alt={alt}
			width={width ?? resolved.width}
			height={height ?? resolved.height}
			loading={lazy ? "lazy" : "eager"}
			decoding="async"
			className={cn(className)}
			{...rest}
		/>
	)
}
