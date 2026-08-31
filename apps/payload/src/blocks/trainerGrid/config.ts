import type { Block } from "payload"

export const trainerGridBlock: Block = {
	slug: "trainerGrid",
	interfaceName: "TrainerGridBlock",
	labels: { singular: "Trainer grid", plural: "Trainer grids" },
	fields: [
		{ name: "eyebrow", type: "text" },
		{ name: "title", type: "text" },
		{
			name: "mode",
			type: "select",
			defaultValue: "featured",
			options: [
				{ label: "Featured / recent", value: "featured" },
				{ label: "Manual selection", value: "manual" },
			],
		},
		{
			name: "limit",
			type: "number",
			defaultValue: 6,
			min: 1,
			max: 24,
			admin: {
				condition: (_, siblingData) => siblingData?.mode !== "manual",
			},
		},
		{
			name: "trainers",
			type: "relationship",
			relationTo: "trainers",
			hasMany: true,
			admin: {
				condition: (_, siblingData) => siblingData?.mode === "manual",
			},
		},
	],
}
