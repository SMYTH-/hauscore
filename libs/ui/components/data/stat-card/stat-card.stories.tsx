import type { Meta, StoryObj } from "@storybook/react-vite"
import { StatCard } from "./stat-card"

const meta = {
	title: "Components/StatCard",
	component: StatCard,
	parameters: { layout: "centered" },
	args: {
		label: "Bookings",
		value: 248,
		icon: "calendar-check",
		delta: "+12%",
		className: "w-64",
	},
} satisfies Meta<typeof StatCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DownTrend: Story = {
	args: { delta: "-4%", deltaTone: "down", label: "Cancellations", value: 18 },
}
