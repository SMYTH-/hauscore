import type { Meta, StoryObj } from "@storybook/react-vite"
import { FormField } from "./form-field"
import { Input } from "../input/input"

const meta = {
	title: "Primitives/FormField",
	component: FormField,
	parameters: { layout: "centered" },
	args: {
		label: "Email",
		htmlFor: "email",
		helper: "We'll never share your email.",
		className: "w-80",
	},
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const WithHelper: Story = {
	render: (args) => (
		<FormField {...args}>
			<Input id="email" type="email" placeholder="you@example.com" />
		</FormField>
	),
}

export const WithError: Story = {
	args: { error: "Email is required", helper: undefined, required: true },
	render: (args) => (
		<FormField {...args}>
			<Input id="email-error" invalid placeholder="you@example.com" />
		</FormField>
	),
}
