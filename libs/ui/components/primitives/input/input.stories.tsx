import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "./input"

const meta = {
	title: "Primitives/Input",
	component: Input,
	parameters: { layout: "centered" },
	args: { placeholder: "Search trainers…", className: "w-72" },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIcons: Story = {
	args: { iconLeft: "search", iconRight: "x" },
}

export const Invalid: Story = {
	args: { invalid: true, defaultValue: "Invalid value" },
}

export const Disabled: Story = {
	args: { disabled: true, defaultValue: "Disabled" },
}
