import type { Meta, StoryObj } from "@storybook/react-vite"
import { Icon } from "./icon"

const meta = {
	title: "Primitives/Icon",
	component: Icon,
	parameters: { layout: "centered" },
	args: { name: "star" },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
	args: { size: "sm" },
}

export const Large: Story = {
	args: { size: "lg" },
}

export const Brand: Story = {
	decorators: [
		(Story) => (
			<div className="text-brand">
				<Story />
			</div>
		),
	],
}

export const AllIcons: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4 text-foreground">
			{(["arrow-right", "calendar", "check", "dumbbell", "heart", "search", "star", "user"] as const).map(
				(name) => (
					<div key={name} className="flex flex-col items-center gap-1">
						<Icon name={name} />
						<span className="text-xs text-foreground-muted">{name}</span>
					</div>
				),
			)}
		</div>
	),
}
