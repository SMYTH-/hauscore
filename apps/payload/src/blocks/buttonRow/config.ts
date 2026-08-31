import type { Block } from "payload"
import { buttonLinksField } from "../../fields/buttonLink"

export const buttonRowBlock: Block = {
	slug: "buttonRow",
	interfaceName: "ButtonRowBlock",
	labels: { singular: "Button row", plural: "Button rows" },
	fields: [buttonLinksField("buttons", { maxRows: 4, label: "Buttons" })],
}
