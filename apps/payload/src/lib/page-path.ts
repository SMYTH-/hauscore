import type { PayloadRequest } from "payload"

/** CMS slug → public URL path. `home` maps to `/`. */
export function pagePathFromSlug(slug: string | null | undefined): string | null {
	if (!slug) return null
	if (slug === "home") return "/"
	return `/${slug}`
}

/** URL pathname → CMS slug. `/` → `home`. */
export function pageSlugFromPathname(pathname: string): string | null {
	const clean = pathname.replace(/\/+$/, "") || "/"
	if (clean === "/") return "home"
	const segments = clean.split("/").filter(Boolean)
	if (segments.length !== 1) return null
	return segments[0] ?? null
}

export function frontendOrigin(req?: PayloadRequest): string {
	if (process.env.NEXT_PUBLIC_SERVER_URL) return process.env.NEXT_PUBLIC_SERVER_URL.replace(/\/$/, "")
	if (req?.headers) {
		const host = req.headers.get("x-forwarded-host") || req.headers.get("host")
		const proto = req.headers.get("x-forwarded-proto") || "http"
		if (host) return `${proto}://${host}`
	}
	return "http://localhost:3000"
}

export function siteOrigin(): string | undefined {
	return process.env.NEXT_PUBLIC_SERVER_URL?.replace(/\/$/, "")
}
