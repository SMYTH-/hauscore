import type { Meta, StoryObj } from "@storybook/react-vite"
import { EmptyState } from "./empty-state"

const meta = {
	title: "Components/EmptyState",
	component: EmptyState,
	parameters: { layout: "centered" },
	args: {
		icon: "search",
		title: "No trainers found",
		description: "Try adjusting your filters or search in a nearby area.",
	},
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithAction: Story = {
	args: {
		buttons: [{ label: "Clear filters", href: "#", variant: "secondary" }],
	},
}
