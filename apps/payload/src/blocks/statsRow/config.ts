import type { Block } from "payload"

export const statsRowBlock: Block = {
	slug: "statsRow",
	interfaceName: "StatsRowBlock",
	labels: { singular: "Stats row", plural: "Stats rows" },
	fields: [
		{
			name: "stats",
			type: "array",
			minRows: 1,
			maxRows: 6,
			fields: [
				{ name: "value", type: "text", required: true },
				{ name: "label", type: "text", required: true },
			],
		},
	],
}
