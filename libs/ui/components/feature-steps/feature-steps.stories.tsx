import type { Meta, StoryObj } from "@storybook/react-vite"
import { FeatureSteps } from "./feature-steps"

const meta = {
	title: "Components/FeatureSteps",
	component: FeatureSteps,
	parameters: { layout: "padded" },
	args: {
		eyebrow: "How it works",
		title: "Everything you need to run your coaching, in one place.",
		steps: [
			{
				icon: "user-plus",
				title: "Create your profile",
				description: "Add your bio, specialties, rates, and availability in minutes.",
			},
			{
				icon: "share-2",
				title: "Share your link",
				description: "Publish a public profile page and share it anywhere.",
			},
			{
				icon: "calendar-check",
				title: "Take bookings",
				description: "Clients book and pay through Werkowt. You keep coaching.",
			},
		],
	},
} satisfies Meta<typeof FeatureSteps>

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
