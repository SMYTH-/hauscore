import type { Meta, StoryObj } from "@storybook/react-vite"
import { RichText } from "./rich-text"

const meta = {
	title: "Components/RichText",
	component: RichText,
	parameters: { layout: "padded" },
	args: {
		html: `<p>Werkowt helps personal trainers run their business without the admin overhead. List your services, share resources, and take bookings from one calm dashboard.</p>
<h2>Built for coaches</h2>
<p>Your profile is your storefront. Add specialties, rates, and availability so clients know exactly what you offer.</p>
<ul>
<li>Free to list — no card required</li>
<li>Verified badge for trusted profiles</li>
<li>Bookings and payments in one place</li>
</ul>`,
		className: "max-w-narrow",
	},
} satisfies Meta<typeof RichText>

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
