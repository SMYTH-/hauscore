import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconButton } from "./icon-button"

const meta = {
	title: "Primitives/IconButton",
	component: IconButton,
	parameters: { layout: "centered" },
	args: { icon: "search", label: "Search" },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Ghost: Story = {}

export const Primary: Story = {
	args: { variant: "primary" },
}

export const Secondary: Story = {
	args: { variant: "secondary" },
}

export const AllVariants: Story = {
	render: () => (
		<div className="flex gap-2">
			<IconButton icon="plus" label="Add" variant="primary" />
			<IconButton icon="share-2" label="Share" variant="secondary" />
			<IconButton icon="x" label="Close" variant="ghost" />
		</div>
	),
}
