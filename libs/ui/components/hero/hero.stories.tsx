import type { Meta, StoryObj } from "@storybook/react-vite"
import { Hero } from "./hero"

const meta = {
	title: "Components/Hero",
	component: Hero,
	parameters: { layout: "fullscreen" },
	args: {
		eyebrow: "For personal trainers",
		title: "Coaching, minus the admin.",
		subtitle:
			"List your services, share resources, and take bookings — all from one calm dashboard. Get discovered by clients who fit.",
		buttons: [
			{ label: "List yourself free", href: "#list", variant: "primary" },
			{ label: "Browse trainers", href: "#find", variant: "secondary" },
		],
	},
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithImage: Story = {
	args: {
		image: "https://picsum.photos/800/1000?random=hero",
		imageAlt: "Personal trainer coaching a client",
	},
}

export const Dark: Story = {
	decorators: [
		(Story) => (
			<div className="dark bg-background">
				<Story />
			</div>
		),
	],
}
