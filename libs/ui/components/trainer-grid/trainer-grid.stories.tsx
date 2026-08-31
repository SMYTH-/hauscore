import type { Meta, StoryObj } from "@storybook/react-vite"
import { TrainerGrid } from "./trainer-grid"

const trainers = [
	{
		href: "#maya",
		name: "Maya Okafor",
		location: "London",
		specialties: ["Strength", "Mobility"],
		rating: 4.9,
		reviews: 128,
		price: 45,
		verified: true,
		available: true,
	},
	{
		href: "#tom",
		name: "Tom Reyes",
		location: "Manchester",
		specialties: ["Hypertrophy", "Nutrition"],
		rating: 4.8,
		reviews: 94,
		price: 40,
		verified: true,
		available: false,
	},
	{
		href: "#priya",
		name: "Priya Shah",
		location: "London",
		specialties: ["Yoga", "Mobility"],
		rating: 5.0,
		reviews: 212,
		price: 55,
		verified: true,
		available: true,
	},
]

const meta = {
	title: "Components/TrainerGrid",
	component: TrainerGrid,
	parameters: { layout: "padded" },
	args: {
		eyebrow: "Featured trainers",
		title: "Find a trainer who fits.",
		trainers,
		viewAllLabel: "View all",
		viewAllHref: "#all",
	},
} satisfies Meta<typeof TrainerGrid>

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
