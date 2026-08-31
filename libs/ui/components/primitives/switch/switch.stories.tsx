import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Switch } from "./switch"

const meta = {
	title: "Primitives/Switch",
	component: Switch,
	parameters: { layout: "centered" },
	args: { label: "Available for bookings" },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Off: Story = {}

export const On: Story = {
	args: { checked: true },
}

export const Interactive: Story = {
	render: () => {
		const [checked, setChecked] = useState(true)
		return <Switch label="Show profile publicly" checked={checked} onChange={setChecked} />
	},
}
