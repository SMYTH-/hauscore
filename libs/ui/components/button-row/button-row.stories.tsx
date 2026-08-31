import type { Meta, StoryObj } from "@storybook/react-vite"
import { ButtonRow } from "./button-row"

const meta = {
	title: "Components/ButtonRow",
	component: ButtonRow,
	parameters: { layout: "centered" },
	args: {
		buttons: [
			{ label: "List yourself free", href: "#list", variant: "primary" },
			{ label: "Browse trainers", href: "#find", variant: "secondary" },
		],
		size: "lg",
	},
} satisfies Meta<typeof ButtonRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Centered: Story = {
	args: { align: "center" },
}

export const Dark: Story = {
	decorators: [
		(Story) => (
			<div className="dark bg-background p-8">
				<Story />
			</div>
		),
	],
}
