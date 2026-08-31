import type { Meta, StoryObj } from "@storybook/react-vite"
import { Badge } from "./badge"

const meta = {
	title: "Primitives/Badge",
	component: Badge,
	parameters: { layout: "centered" },
	args: { children: "Verified" },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {}

export const Brand: Story = {
	args: { tone: "brand", children: "For trainers" },
}

export const Success: Story = {
	args: { tone: "success", children: "Available" },
}

export const Warning: Story = {
	args: { tone: "warning", children: "Pending" },
}

export const Danger: Story = {
	args: { tone: "danger", children: "Unavailable" },
}

export const Info: Story = {
	args: { tone: "info", children: "New" },
}

export const Solid: Story = {
	args: { tone: "solid", children: "Featured" },
}

export const WithDot: Story = {
	args: { tone: "success", dot: true, children: "Live" },
}

export const AllTones: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Badge tone="neutral">Neutral</Badge>
			<Badge tone="brand">Brand</Badge>
			<Badge tone="success">Success</Badge>
			<Badge tone="warning">Warning</Badge>
			<Badge tone="danger">Danger</Badge>
			<Badge tone="info">Info</Badge>
			<Badge tone="solid">Solid</Badge>
		</div>
	),
}
