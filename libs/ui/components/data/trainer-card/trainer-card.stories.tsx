import type { Meta, StoryObj } from "@storybook/react-vite"
import { TrainerCard } from "./trainer-card"

const meta = {
	title: "Components/TrainerCard",
	component: TrainerCard,
	parameters: { layout: "centered" },
	args: {
		href: "#",
		name: "Alex Morgan",
		location: "Manchester",
		specialties: ["Strength", "HIIT", "Mobility"],
		rating: 4.9,
		reviews: 86,
		price: 65,
		verified: true,
		available: true,
		className: "w-80",
	},
} satisfies Meta<typeof TrainerCard>

export default meta
type Story = StoryObj<typeof meta>

export const WithPhoto: Story = {
	args: {
		photo: "https://picsum.photos/400/300?random=10",
	},
}

export const NoPhoto: Story = {
	args: { photo: undefined },
}

export const Grid: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-4">
			<TrainerCard
				href="#"
				name="Alex Morgan"
				location="Manchester"
				specialties={["Strength", "HIIT"]}
				rating={4.9}
				reviews={86}
				price={65}
				verified
				available
				className="w-72"
			/>
			<TrainerCard
				href="#"
				name="Jordan Lee"
				location="Leeds"
				specialties={["Yoga", "Pilates"]}
				rating={4.7}
				reviews={42}
				price={55}
				className="w-72"
			/>
		</div>
	),
}

export const Dark: Story = {
	decorators: [
		(Story) => (
			<div className="dark bg-background p-8">
				<Story />
			</div>
		),
	],
}
