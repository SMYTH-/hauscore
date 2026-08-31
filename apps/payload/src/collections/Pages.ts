import type { CollectionConfig } from "payload"

import { containerBlock } from "../blocks"
import { slugField } from "../fields/slug"
import { titleField } from "../fields/title"
import { frontendOrigin, pagePathFromSlug } from "../lib/page-path"

/**
 * Flexible marketing pages. `sections` only holds Section (`container`) blocks —
 * composed components nest inside containers.
 */
export const Pages: CollectionConfig = {
	slug: "pages",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "slug", "updatedAt"],
		preview: (doc, { req }) => {
			const slug = typeof doc?.slug === "string" ? doc.slug : null
			const path = pagePathFromSlug(slug)
			if (!slug || !path) return null

			const params = new URLSearchParams({
				slug,
				path,
				secret: process.env.PREVIEW_SECRET || process.env.PAYLOAD_SECRET || "",
			})
			return `${frontendOrigin(req)}/api/preview?${params.toString()}`
		},
	},
	versions: { maxPerDoc: 50, drafts: { autosave: true } },
	fields: [
		titleField(),
		slugField(),
		{ name: "sections", type: "blocks", blocks: [containerBlock], minRows: 1 },
	],
}
