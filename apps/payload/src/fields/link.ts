import type { CollectionSlug, Field } from "payload"

/** Collections editors can link to from shared link fields. */
export const LINKABLE_COLLECTIONS = ["pages", "trainers", "specialties"] as const satisfies CollectionSlug[]

export type LinkableCollection = (typeof LINKABLE_COLLECTIONS)[number]

export type LinkFieldType = "reference" | "custom" | "external"

type LinkFieldOptions = {
	name?: string
	required?: boolean
	description?: string
}

/**
 * Shared link group — internal document, custom site path, or external URL.
 * Resolve to `href` at render time via `resolveLinkHref()`.
 */
export function linkField(name = "link", options?: LinkFieldOptions): Field {
	return {
		name,
		type: "group",
		admin: {
			hideGutter: true,
			...(options?.description ? { description: options.description } : {}),
		},
		fields: [
			{
				type: "row",
				fields: [
					{
						name: "type",
						type: "radio",
						defaultValue: "reference",
						required: options?.required,
						options: [
							{ label: "Internal", value: "reference" },
							{ label: "Custom path", value: "custom" },
							{ label: "External URL", value: "external" },
						],
						admin: { layout: "horizontal", width: "50%" },
					},
				],
			},
			{
				name: "reference",
				type: "relationship",
				relationTo: [...LINKABLE_COLLECTIONS],
				maxDepth: 1,
				admin: {
					condition: (_, siblingData) => siblingData?.type === "reference",
					description: "Page, trainer profile, or specialty filter.",
				},
			},
			{
				name: "path",
				type: "text",
				admin: {
					condition: (_, siblingData) => siblingData?.type === "custom",
					description: "Site path, e.g. /find-a-trainer or /for-trainers/apply",
					placeholder: "/find-a-trainer",
				},
			},
			{
				name: "url",
				type: "text",
				admin: {
					condition: (_, siblingData) => siblingData?.type === "external",
					description: "Full URL including https://",
					placeholder: "https://example.com",
				},
			},
		],
	}
}

/** Label + shared link — for nav items, footer links, etc. */
export function navLinkFields(required = true): Field[] {
	return [{ name: "label", type: "text", required }, linkField("link", { required })]
}

export function navLinksField(
	name: string,
	options?: { maxRows?: number; label?: string },
): Field {
	return {
		name,
		type: "array",
		fields: navLinkFields(),
		...(options?.maxRows ? { maxRows: options.maxRows } : {}),
		...(options?.label ? { label: options.label } : {}),
	}
}
