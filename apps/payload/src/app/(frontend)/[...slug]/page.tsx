import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteChrome } from "@/components/site-chrome"
import { fetchPageBySlug } from "@/lib/fetch-page"
import { renderContainer } from "@/lib/render-blocks"

type Args = {
	params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
	const { slug } = await params
	const page = await fetchPageBySlug(slug.join("/"))
	if (!page) return { title: "Not found — Werkowt" }
	return { title: `${page.title} — Werkowt` }
}

export default async function CmsPage({ params }: Args) {
	const { slug } = await params
	const pageSlug = slug.join("/")

	// App routes with dedicated pages — avoid CMS catch-all collisions.
	const reserved = new Set(["find-a-trainer", "trainers", "admin", "api"])
	if (reserved.has(slug[0] ?? "")) notFound()

	// Nested app routes under reserved prefixes (e.g. /for-trainers/apply).
	if (slug[0] === "for-trainers" && slug.length > 1) notFound()

	const page = await fetchPageBySlug(pageSlug)
	if (!page) notFound()

	const sections = page.sections ?? []
	const rendered = await Promise.all(
		sections.map((container, index) => renderContainer(container, `section-${index}`, index === 0)),
	)

	return (
		<SiteChrome>
			<main>{rendered}</main>
		</SiteChrome>
	)
}
