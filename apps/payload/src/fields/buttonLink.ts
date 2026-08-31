import type { Field } from "payload"

import { linkField } from "./link"

const buttonLinkFields = (required = true): Field[] => [
	{ name: "label", type: "text", required },
	linkField("link", { required }),
	{ name: "target", type: "select", options: ["_self", "_blank"] },
	{
		name: "variant",
		type: "select",
		options: ["primary", "secondary", "ghost", "danger", "inverse"],
		defaultValue: "primary",
	},
]

/**
 * A single button link as a group. Mirrors ButtonLink in @hauscore/components after
 * `resolveLinkHref()` is applied at render time.
 */
export function buttonLinkField(name: string, options?: { optional?: boolean; description?: string }): Field {
	return {
		name,
		type: "group",
		fields: buttonLinkFields(!options?.optional),
		...(options?.description ? { admin: { description: options.description } } : {}),
	}
}

export function buttonLinksField(
	name: string,
	options?: { maxRows?: number; label?: string; admin?: { description?: string } },
): Field {
	return {
		name,
		type: "array",
		fields: buttonLinkFields(),
		...(options?.maxRows ? { maxRows: options.maxRows } : {}),
		...(options?.label ? { label: options.label } : {}),
		...(options?.admin ? { admin: options.admin } : {}),
	}
}
