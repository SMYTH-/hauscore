import type { Meta, StoryObj } from "@storybook/react-vite"
import { RatingStars } from "./rating-stars"

const meta = {
	title: "Primitives/RatingStars",
	component: RatingStars,
	parameters: { layout: "centered" },
	args: { value: 4.7, count: 128 },
} satisfies Meta<typeof RatingStars>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const HalfStar: Story = {
	args: { value: 3.5, count: 42 },
}

export const WithoutValue: Story = {
	args: { showValue: false },
}
