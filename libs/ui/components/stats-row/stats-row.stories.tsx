import type { Meta, StoryObj } from "@storybook/react-vite"
import { StatsRow } from "./stats-row"

const meta = {
	title: "Components/StatsRow",
	component: StatsRow,
	parameters: { layout: "centered" },
	args: {
		stats: [
			{ value: "2,400+", label: "trainers listed" },
			{ value: "4.9", label: "avg. rating" },
			{ value: "0%", label: "listing fee" },
		],
	},
} satisfies Meta<typeof StatsRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Dark: Story = {
	decorators: [
		(Story) => (
			<div className="dark bg-background p-8">
				<Story />
			</div>
		),
	],
}
