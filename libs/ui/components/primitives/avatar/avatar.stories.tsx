import type { Meta, StoryObj } from "@storybook/react-vite"
import { Avatar } from "./avatar"

const meta = {
	title: "Primitives/Avatar",
	component: Avatar,
	parameters: { layout: "centered" },
	args: { name: "Alex Morgan" },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Initials: Story = {}

export const WithImage: Story = {
	args: {
		src: "https://picsum.photos/80?random=1",
		name: "Alex Morgan",
	},
}

export const WithStatus: Story = {
	args: { status: "online", size: "lg" },
}

export const AllSizes: Story = {
	render: () => (
		<div className="flex items-end gap-3">
			<Avatar name="Alex Morgan" size="xs" />
			<Avatar name="Alex Morgan" size="sm" />
			<Avatar name="Alex Morgan" size="md" />
			<Avatar name="Alex Morgan" size="lg" />
			<Avatar name="Alex Morgan" size="xl" />
		</div>
	),
}
