import type { Block } from "payload"

export const faqAccordionBlock: Block = {
	slug: "faqAccordion",
	interfaceName: "FaqAccordionBlock",
	labels: { singular: "FAQ accordion", plural: "FAQ accordions" },
	fields: [
		{ name: "eyebrow", type: "text" },
		{ name: "title", type: "text", required: true },
		{
			name: "items",
			type: "array",
			minRows: 1,
			fields: [
				{ name: "question", type: "text", required: true },
				{ name: "answer", type: "textarea", required: true },
			],
		},
	],
}
