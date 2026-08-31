import type { Page, Specialty, Trainer } from "../payload-types"
import type { LinkFieldType, LinkableCollection } from "../fields/link"
import { pagePathFromSlug } from "./page-path"

export type CmsLinkValue = {
	type?: LinkFieldType | null
	reference?:
		| number
		| Page
		| Trainer
		| Specialty
		| {
				relationTo?: LinkableCollection | null
				value?: number | Page | Trainer | Specialty | null
		  }
		| null
	path?: string | null
	url?: string | null
}

function hrefForCollection(collection: LinkableCollection, doc: Page | Trainer | Specialty): string | null {
	switch (collection) {
		case "pages":
			return pagePathFromSlug((doc as Page).slug)
		case "trainers":
			return `/trainers/${(doc as Trainer).slug}`
		case "specialties":
			return `/find-a-trainer?specialty=${(doc as Specialty).slug}`
		default:
			return null
	}
}

function inferCollection(doc: Page | Trainer | Specialty): LinkableCollection | null {
	if ("sections" in doc) return "pages"
	if ("name" in doc && "location" in doc) return "trainers"
	if ("title" in doc && !("name" in doc)) return "specialties"
	return null
}

function resolveReference(reference: CmsLinkValue["reference"]): string | null {
	if (!reference || typeof reference === "number") return null

	if ("relationTo" in reference && "value" in reference) {
		const relationTo = reference.relationTo
		const value = reference.value
		if (!relationTo || !value || typeof value === "number") return null
		return hrefForCollection(relationTo, value)
	}

	if (!("id" in reference)) return null

	const collection = inferCollection(reference)
	if (!collection) return null
	return hrefForCollection(collection, reference)
}

/** Resolve a CMS link group to a public site path or external URL. */
export function resolveLinkHref(link: CmsLinkValue | null | undefined): string | null {
	if (!link) return null

	const type = link.type ?? "reference"

	if (type === "external") {
		const url = link.url?.trim()
		return url || null
	}

	if (type === "custom") {
		const path = link.path?.trim()
		if (!path) return null
		return path.startsWith("/") ? path : `/${path}`
	}

	return resolveReference(link.reference)
}
