import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteChrome } from "@/components/site-chrome"
import { fetchPageBySlug } from "@/lib/fetch-page"
import { renderContainer } from "@/lib/render-blocks"

export async function generateMetadata(): Promise<Metadata> {
	const page = await fetchPageBySlug("home")
	return {
		title: page?.title ? `${page.title} — Werkowt` : "Werkowt",
		description: "Coaching, minus the admin.",
	}
}

export default async function HomePage() {
	const page = await fetchPageBySlug("home")
	if (!page) {
		return (
			<SiteChrome>
				<main className="mx-auto max-w-content px-page py-section-md">
					<h1 className="font-display text-display-m font-extrabold text-foreground-strong">
						Coaching, minus the admin.
					</h1>
					<p className="mt-4 max-w-narrow text-body-lg text-foreground-muted">
						Create a Home page with slug <code>home</code> in the Payload admin to drive this
						route from the CMS.
					</p>
				</main>
			</SiteChrome>
		)
	}

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
