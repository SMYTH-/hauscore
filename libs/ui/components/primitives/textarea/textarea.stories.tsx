import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "./textarea"

const meta = {
	title: "Primitives/Textarea",
	component: Textarea,
	parameters: { layout: "centered" },
	args: { placeholder: "Tell us about your training style…", className: "w-96" },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Invalid: Story = {
	args: { invalid: true },
}

export const Disabled: Story = {
	args: { disabled: true },
}
