import type { Block } from "payload"
import { buttonLinksField } from "../../fields/buttonLink"

export const ctaBandBlock: Block = {
	slug: "ctaBand",
	interfaceName: "CtaBandBlock",
	labels: { singular: "CTA band", plural: "CTA bands" },
	fields: [
		{ name: "title", type: "text", required: true },
		{ name: "subtitle", type: "textarea" },
		buttonLinksField("buttons", { maxRows: 3 }),
	],
}
