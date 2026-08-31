import type { Meta, StoryObj } from "@storybook/react-vite"
import { PriceTag } from "./price-tag"

const meta = {
	title: "Components/PriceTag",
	component: PriceTag,
	parameters: { layout: "centered" },
	args: { amount: 65 },
} satisfies Meta<typeof PriceTag>

export default meta
type Story = StoryObj<typeof meta>

export const Medium: Story = {}

export const Small: Story = {
	args: { size: "sm", amount: 45 },
}

export const Large: Story = {
	args: { size: "lg", amount: 120, unit: "month" },
}
