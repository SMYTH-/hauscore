import type { Field } from "payload"

export function themeField(defaultTheme?: "light" | "dark"): Field {
	return {
		name: "theme",
		type: "select",
		options: ["light", "dark"],
		...(defaultTheme ? { defaultValue: defaultTheme } : {}),
	}
}
