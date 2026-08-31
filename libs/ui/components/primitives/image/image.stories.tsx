import type { Meta, StoryObj } from "@storybook/react-vite"
import { Image } from "./image"

const meta = {
	title: "Primitives/Image",
	component: Image,
	parameters: { layout: "centered" },
	args: {
		src: "https://picsum.photos/400/300?random=2",
		alt: "Trainer portrait",
		className: "w-64 rounded-md",
	},
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const UrlString: Story = {}

export const CmsObject: Story = {
	args: {
		src: {
			url: "https://picsum.photos/400/300?random=3",
			width: 400,
			height: 300,
			sizes: {
				card: { url: "https://picsum.photos/200/150?random=4", width: 200, height: 150 },
			},
		},
		size: "card",
		className: "w-48 rounded-md",
	},
}

export const EagerLoad: Story = {
	args: { lazy: false },
}
