import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Radio } from "./radio"

const meta = {
	title: "Primitives/Radio",
	component: Radio,
	parameters: { layout: "centered" },
	args: { label: "In-person", value: "in-person" },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {}

export const Checked: Story = {
	args: { checked: true },
}

export const Group: Story = {
	render: () => {
		const [value, setValue] = useState("in-person")
		return (
			<div className="flex flex-col gap-3">
				<Radio label="In-person" value="in-person" checked={value === "in-person"} onChange={setValue} />
				<Radio label="Online" value="online" checked={value === "online"} onChange={setValue} />
			</div>
		)
	},
}
