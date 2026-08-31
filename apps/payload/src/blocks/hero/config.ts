import type { Block } from "payload"
import { buttonLinksField } from "../../fields/buttonLink"

export const heroBlock: Block = {
	slug: "hero",
	interfaceName: "HeroBlock",
	labels: { singular: "Hero", plural: "Heroes" },
	fields: [
		{ name: "eyebrow", type: "text" },
		{ name: "title", type: "text", required: true },
		{ name: "subtitle", type: "textarea" },
		buttonLinksField("buttons", { maxRows: 3 }),
		{
			name: "image",
			type: "upload",
			relationTo: "media",
		},
	],
}
