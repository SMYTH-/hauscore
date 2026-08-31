import type { Meta, StoryObj } from "@storybook/react-vite"
import { Alert } from "./alert"

const meta = {
	title: "Components/Alert",
	component: Alert,
	parameters: { layout: "padded" },
	args: {
		title: "Profile saved",
		children: "Your changes are live on your public profile.",
		className: "max-w-lg",
	},
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {}

export const Success: Story = {
	args: { tone: "success", title: "Booking confirmed" },
}

export const Warning: Story = {
	args: {
		tone: "warning",
		title: "Incomplete profile",
		children: "Add a photo and bio to appear in search results.",
	},
}

export const Danger: Story = {
	args: {
		tone: "danger",
		title: "Payment failed",
		children: "Please update your billing details and try again.",
	},
}

export const Dismissible: Story = {
	args: { onDismiss: () => undefined },
}

export const AllTones: Story = {
	render: () => (
		<div className="flex max-w-lg flex-col gap-3">
			<Alert tone="info" title="Info">Informational message.</Alert>
			<Alert tone="success" title="Success">Action completed.</Alert>
			<Alert tone="warning" title="Warning">Please review.</Alert>
			<Alert tone="danger" title="Error">Something went wrong.</Alert>
		</div>
	),
}
