import type { ImageSrc } from "@hauscore/components"
import type { Media } from "../payload-types"

export function toImageSrc(media: Media | number | null | undefined): ImageSrc | undefined {
	if (!media || typeof media === "number") return undefined
	if (!media.url) return undefined

	const sizes: NonNullable<Extract<ImageSrc, { url: string }>["sizes"]> = {}
	if (media.sizes) {
		for (const [key, size] of Object.entries(media.sizes)) {
			if (size?.url) {
				sizes[key] = {
					url: size.url,
					width: size.width ?? undefined,
					height: size.height ?? undefined,
				}
			}
		}
	}

	return {
		url: media.url,
		width: media.width ?? undefined,
		height: media.height ?? undefined,
		sizes: Object.keys(sizes).length > 0 ? sizes : undefined,
	}
}

export function toAlt(media: Media | number | null | undefined, fallback = ""): string {
	if (!media || typeof media === "number") return fallback
	return media.alt || fallback
}
