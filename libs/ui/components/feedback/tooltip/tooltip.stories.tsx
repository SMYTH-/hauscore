import type { Meta, StoryObj } from "@storybook/react-vite"
import { IconButton } from "../../primitives/icon-button/icon-button"
import { Tooltip } from "./tooltip"

const meta = {
	title: "Components/Tooltip",
	component: Tooltip,
	parameters: { layout: "centered" },
	args: { label: "Share profile" },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Top: Story = {
	render: (args) => (
		<Tooltip {...args}>
			<IconButton icon="share-2" label="Share" />
		</Tooltip>
	),
}

export const Bottom: Story = {
	args: { placement: "bottom" },
	render: (args) => (
		<Tooltip {...args}>
			<IconButton icon="user-plus" label="Invite" />
		</Tooltip>
	),
}
