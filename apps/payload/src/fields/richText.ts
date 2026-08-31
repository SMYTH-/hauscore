import type { Field } from "payload"
import {
	BoldFeature,
	ItalicFeature,
	LinkFeature,
	OrderedListFeature,
	ParagraphFeature,
	UnderlineFeature,
	UnorderedListFeature,
	lexicalEditor,
} from "@payloadcms/richtext-lexical"

/** Lexical rich text field for marketing body copy. */
export function richTextField(name = "richText", options?: { label?: string; required?: boolean }): Field {
	return {
		name,
		type: "richText",
		required: options?.required,
		label: options?.label,
		editor: lexicalEditor({
			features: () => [
				ParagraphFeature(),
				BoldFeature(),
				ItalicFeature(),
				UnderlineFeature(),
				UnorderedListFeature(),
				OrderedListFeature(),
				LinkFeature(),
			],
		}),
	}
}
