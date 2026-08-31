import type { Meta, StoryObj } from "@storybook/react-vite"
import { CtaBand } from "./cta-band"

const meta = {
	title: "Components/CtaBand",
	component: CtaBand,
	parameters: { layout: "padded" },
	args: {
		title: "Ready to fill your schedule?",
		subtitle:
			"Join thousands of trainers building their business on Werkowt. Free to list — no card required.",
		buttons: [{ label: "List yourself free", href: "#list", variant: "inverse" }],
	},
} satisfies Meta<typeof CtaBand>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Dark: Story = {
	decorators: [
		(Story) => (
			<div className="dark bg-background p-8">
				<Story />
			</div>
		),
	],
}
