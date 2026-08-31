import type { Meta, StoryObj } from "@storybook/react-vite"
import { Select } from "./select"

const meta = {
	title: "Primitives/Select",
	component: Select,
	parameters: { layout: "centered" },
	args: {
		className: "w-72",
		options: [
			{ value: "strength", label: "Strength" },
			{ value: "yoga", label: "Yoga" },
			{ value: "hiit", label: "HIIT" },
		],
	},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Invalid: Story = {
	args: { invalid: true },
}

export const Disabled: Story = {
	args: { disabled: true },
}
