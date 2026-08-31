import type { Block } from "payload"
import { richTextField } from "../../fields/richText"

export const richTextBlock: Block = {
	slug: "richText",
	interfaceName: "RichTextBlock",
	labels: { singular: "Rich text", plural: "Rich text" },
	fields: [richTextField("content", { required: true })],
}
