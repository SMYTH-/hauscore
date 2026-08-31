import type { Meta, StoryObj } from "@storybook/react-vite"
import { Divider } from "./divider"

const meta = {
	title: "Primitives/Divider",
	component: Divider,
	parameters: { layout: "padded" },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {}

export const WithLabel: Story = {
	args: { label: "Or" },
}

export const Vertical: Story = {
	render: () => (
		<div className="flex h-12 items-stretch gap-4">
			<span>Left</span>
			<Divider vertical />
			<span>Right</span>
		</div>
	),
}
