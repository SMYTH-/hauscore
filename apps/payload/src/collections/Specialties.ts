import type { CollectionConfig } from "payload"
import { slugField } from "../fields/slug"
import { titleField } from "../fields/title"

export const Specialties: CollectionConfig = {
	slug: "specialties",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "slug", "updatedAt"],
	},
	fields: [titleField(), slugField()],
}
