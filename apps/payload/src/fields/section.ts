import type { Field } from "payload"

/**
 * Token-constrained selects mirroring libs/ui Section props.
 * Keep in lockstep with libs/ui/components/primitives/section/section.tsx.
 */

export function sectionBackgroundField(
	defaultValue: "default" | "sunk" | "secondary" | "inverse" | "none" = "default",
): Field {
	return {
		name: "background",
		type: "select",
		options: ["default", "sunk", "secondary", "inverse", "none"],
		defaultValue,
	}
}

export function sectionBorderField(): Field {
	return {
		name: "border",
		type: "select",
		options: ["none", "top", "bottom", "y"],
		defaultValue: "none",
	}
}

export function sectionBorderColorField(): Field {
	return {
		name: "borderColor",
		type: "select",
		options: ["default", "subtle"],
		defaultValue: "default",
	}
}

export function sectionWidthField(defaultValue: "content" | "narrow" | "full" = "content"): Field {
	return {
		name: "width",
		type: "select",
		options: ["content", "narrow", "full"],
		defaultValue,
		admin: { width: "33%" },
	}
}

export function sectionLayoutField(defaultValue: "stack" | "grid" | "none" = "stack"): Field {
	return {
		name: "layout",
		type: "select",
		options: ["stack", "grid", "none"],
		defaultValue,
		admin: { width: "33%" },
	}
}

export function sectionGapField(): Field {
	return {
		name: "gap",
		type: "select",
		options: ["none", "gutter", "sm", "md", "lg"],
		admin: { width: "33%" },
	}
}

const SPACING_OPTIONS = ["none", "xs", "sm", "md", "lg"] as const

export function sectionSpacingField(name: string, defaultBottom?: (typeof SPACING_OPTIONS)[number]): Field {
	return {
		name,
		type: "group",
		fields: [
			{
				type: "row",
				fields: [
					{
						name: "top",
						type: "select",
						options: [...SPACING_OPTIONS],
						admin: { width: "50%" },
					},
					{
						name: "bottom",
						type: "select",
						options: [...SPACING_OPTIONS],
						...(defaultBottom ? { defaultValue: defaultBottom } : {}),
						admin: { width: "50%" },
					},
				],
			},
		],
	}
}
