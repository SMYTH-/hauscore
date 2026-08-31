import type { Field } from "payload"

/** Shared document title field. */
export function titleField(): Field {
	return {
		name: "title",
		type: "text",
		required: true,
		hooks: {
			beforeDuplicate: [
				({ value }) => {
					if (typeof value !== "string" || !value) return value
					return `${value} (Copy)`
				},
			],
		},
	}
}
