import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tag } from "./tag"

const meta = {
	title: "Primitives/Tag",
	component: Tag,
	parameters: { layout: "centered" },
	args: { children: "Strength" },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
	args: { selected: true },
}

export const WithIcon: Story = {
	args: { icon: "dumbbell" },
}

export const Removable: Story = {
	args: { onRemove: () => undefined },
}

export const FilterGroup: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Tag selected>All</Tag>
			<Tag>Strength</Tag>
			<Tag>Yoga</Tag>
			<Tag>HIIT</Tag>
		</div>
	),
}
