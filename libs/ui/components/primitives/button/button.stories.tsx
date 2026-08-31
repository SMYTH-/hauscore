import type { Meta, StoryObj } from "@storybook/react-vite"
import { Icon } from "../icon/icon"
import { Button } from "./button"

const meta = {
	title: "Primitives/Button",
	component: Button,
	parameters: { layout: "centered" },
	args: { children: "Publish profile" },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
	args: { variant: "secondary", children: "Preview" },
}

export const Ghost: Story = {
	args: { variant: "ghost", children: "Log in" },
}

export const Danger: Story = {
	args: { variant: "danger", children: "Delete" },
}

export const Inverse: Story = {
	args: { variant: "inverse", children: "Continue" },
	decorators: [
		(Story) => (
			<div className="bg-background-inverse p-8">
				<Story />
			</div>
		),
	],
}

export const Small: Story = {
	args: { size: "sm", children: "Save" },
}

export const Large: Story = {
	args: {
		size: "lg",
		children: "List yourself free",
	},
}

export const WithIcon: Story = {
	args: {
		size: "lg",
		children: (
			<>
				List yourself free
				<Icon name="arrow-right" size="md" />
			</>
		),
	},
}

export const AsLink: Story = {
	args: { href: "#", children: "Browse trainers" },
}

export const Loading: Story = {
	args: { loading: true, children: "Saving" },
}

export const Disabled: Story = {
	args: { disabled: true },
}

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-wrap gap-3">
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="danger">Danger</Button>
		</div>
	),
}

export const DarkMode: Story = {
	decorators: [
		(Story) => (
			<div className="dark bg-background p-8">
				<Story />
			</div>
		),
	],
}
