import type { CollectionConfig } from "payload"

export const TrainerApplications: CollectionConfig = {
	slug: "trainer-applications",
	admin: {
		useAsTitle: "name",
		defaultColumns: ["name", "email", "location", "status", "createdAt"],
	},
	access: {
		create: () => true,
		read: ({ req }) => Boolean(req.user),
		update: ({ req }) => Boolean(req.user),
		delete: ({ req }) => Boolean(req.user),
	},
	fields: [
		{ name: "name", type: "text", required: true },
		{ name: "email", type: "email", required: true },
		{ name: "location", type: "text", required: true },
		{ name: "specialties", type: "text", label: "Specialties (comma-separated)" },
		{ name: "message", type: "textarea" },
		{
			name: "status",
			type: "select",
			defaultValue: "new",
			options: [
				{ label: "New", value: "new" },
				{ label: "Reviewed", value: "reviewed" },
				{ label: "Accepted", value: "accepted" },
				{ label: "Declined", value: "declined" },
			],
			admin: { position: "sidebar" },
		},
	],
}
