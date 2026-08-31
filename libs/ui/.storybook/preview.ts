import type { Preview } from "@storybook/react-vite"
import "./storybook.css"

const GOOGLE_FONTS =
	"https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300..800;1,400..600&family=Schibsted+Grotesk:wght@400..900&family=Space+Mono:wght@400;700&display=swap"

export default {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: ["Pages", "Patterns", "Components", "Primitives", "Tools"],
			},
		},
	},
	decorators: [
		(Story) => (
			<>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href={GOOGLE_FONTS} rel="stylesheet" />
				<Story />
			</>
		),
	],
} satisfies Preview
