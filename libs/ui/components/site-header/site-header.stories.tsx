import type { Meta, StoryObj } from "@storybook/react-vite"
import { Section } from "../primitives/section/section"
import { SiteHeader } from "./site-header"

const meta = {
	title: "Components/SiteHeader",
	component: SiteHeader,
	parameters: { layout: "fullscreen" },
	decorators: [
		(Story) => (
			<Section
				as="header"
				width="content"
				spacing="none"
				border="bottom"
				layout="none"
				className="bg-background"
			>
				<Story />
			</Section>
		),
	],
	args: {
		navLinks: [
			{ label: "Find a trainer", href: "#find" },
			{ label: "How it works", href: "#how" },
			{ label: "Pricing", href: "#pricing" },
			{ label: "Resources", href: "#resources" },
		],
		buttons: [
			{ label: "Log in", href: "#login", variant: "ghost" },
			{ label: "List yourself", href: "#list", variant: "primary" },
		],
	},
} satisfies Meta<typeof SiteHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Dark: Story = {
	decorators: [
		(Story) => (
			<div className="dark bg-background">
				<Story />
			</div>
		),
	],
}
