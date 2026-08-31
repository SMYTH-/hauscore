import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Checkbox } from "./checkbox"

const meta = {
	title: "Primitives/Checkbox",
	component: Checkbox,
	parameters: { layout: "centered" },
	args: { label: "Accept terms" },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {}

export const Checked: Story = {
	args: { checked: true },
}

export const Interactive: Story = {
	render: () => {
		const [checked, setChecked] = useState(false)
		return <Checkbox label="Email me updates" checked={checked} onChange={setChecked} />
	},
}

export const Disabled: Story = {
	args: { disabled: true },
}
