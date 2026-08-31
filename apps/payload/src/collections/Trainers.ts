import type { CollectionConfig } from "payload"
import { slugField } from "../fields/slug"
import { richTextField } from "../fields/richText"

export const Trainers: CollectionConfig = {
	slug: "trainers",
	admin: {
		useAsTitle: "name",
		defaultColumns: ["name", "location", "verified", "available", "updatedAt"],
	},
	versions: { drafts: true },
	fields: [
		{ name: "name", type: "text", required: true },
		slugField("name"),
		{ name: "headline", type: "text" },
		richTextField("bio"),
		{ name: "location", type: "text", required: true, index: true },
		{
			name: "specialties",
			type: "relationship",
			relationTo: "specialties",
			hasMany: true,
		},
		{
			name: "photo",
			type: "upload",
			relationTo: "media",
		},
		{
			type: "row",
			fields: [
				{ name: "rating", type: "number", min: 0, max: 5, admin: { width: "50%" } },
				{ name: "reviewCount", type: "number", min: 0, admin: { width: "50%" } },
			],
		},
		{ name: "pricePerSession", type: "number", min: 0, label: "Price per session (£)" },
		{
			type: "row",
			fields: [
				{ name: "verified", type: "checkbox", defaultValue: false, admin: { width: "50%" } },
				{ name: "available", type: "checkbox", defaultValue: false, admin: { width: "50%" } },
			],
		},
		{ name: "featured", type: "checkbox", defaultValue: false, label: "Featured on home" },
		{ name: "email", type: "email" },
	],
}
