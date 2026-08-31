import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const twMerge = extendTailwindMerge({
	extend: {
		theme: {
			text: [
				"display-xl",
				"display-l",
				"display-m",
				"h1",
				"h2",
				"h3",
				"body-lg",
				"body",
				"sm",
				"xs",
				"eyebrow",
			],
			spacing: [
				"page",
				"section-xs",
				"section-sm",
				"section-md",
				"section-lg",
				"gutter",
				"button-height-sm",
				"button-height",
				"button-height-lg",
				"button-padding-x-sm",
				"button-padding-x",
				"button-padding-x-lg",
			],
			container: ["content", "narrow"],
		},
	},
})

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
