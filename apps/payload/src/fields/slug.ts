import type { Field } from "payload"

function slugify(value: string): string {
	return value
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
}

function duplicateSlug(value: string): string {
	if (value.endsWith("-copy")) return `${value}-2`
	const copyMatch = value.match(/-copy-(\d+)$/)
	if (copyMatch) {
		const next = Number(copyMatch[1]) + 1
		return value.replace(/-copy-\d+$/, `-copy-${next}`)
	}
	return `${value}-copy`
}

/** Auto-derives from `sourceField` (default "title") when left blank; editable, unique, indexed. */
export function slugField(sourceField = "title"): Field {
	return {
		name: "slug",
		type: "text",
		required: true,
		unique: true,
		index: true,
		admin: { position: "sidebar" },
		hooks: {
			beforeValidate: [
				({ value, data }) => {
					const raw =
						typeof value === "string" && value
							? value
							: typeof data?.[sourceField] === "string"
								? slugify(data[sourceField])
								: value
					if (typeof raw !== "string") return raw
					return raw.trim().replace(/^\/+|\/+$/g, "")
				},
			],
			beforeDuplicate: [
				({ value }) => {
					if (typeof value !== "string" || !value) return value
					return duplicateSlug(value)
				},
			],
		},
	}
}
