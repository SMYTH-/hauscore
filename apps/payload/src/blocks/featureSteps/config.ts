import type { Block } from "payload"

export const featureStepsBlock: Block = {
	slug: "featureSteps",
	interfaceName: "FeatureStepsBlock",
	labels: { singular: "Feature steps", plural: "Feature steps" },
	fields: [
		{ name: "eyebrow", type: "text" },
		{ name: "title", type: "text", required: true },
		{
			name: "steps",
			type: "array",
			minRows: 1,
			maxRows: 6,
			fields: [
				{
					name: "icon",
					type: "select",
					options: [
						"user-plus",
						"share-2",
						"calendar-check",
						"dumbbell",
						"star",
						"check",
						"search",
						"heart",
					],
					defaultValue: "user-plus",
				},
				{ name: "title", type: "text", required: true },
				{ name: "description", type: "textarea", required: true },
			],
		},
	],
}
