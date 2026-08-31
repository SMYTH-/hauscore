import type { Meta, StoryObj } from "@storybook/react-vite"
import { FaqAccordion } from "./faq-accordion"

const meta = {
	title: "Components/FaqAccordion",
	component: FaqAccordion,
	parameters: { layout: "padded" },
	args: {
		eyebrow: "FAQ",
		title: "Common questions from trainers.",
		items: [
			{
				question: "Is it really free to list?",
				answer:
					"Yes — listing your profile on Werkowt is free. We only take a small fee when you receive a paid booking through the platform.",
			},
			{
				question: "Can I use my own booking link?",
				answer:
					"Absolutely. You can share your Werkowt profile anywhere and accept bookings through the platform or link out to your existing tools.",
			},
			{
				question: "How do clients find me?",
				answer:
					"Clients browse by location and specialty. Verified profiles with complete information rank higher in search results.",
			},
		],
	},
} satisfies Meta<typeof FaqAccordion>

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
