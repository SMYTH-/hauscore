import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Button } from "../../primitives/button/button"
import { Dialog } from "./dialog"

const meta = {
	title: "Components/Dialog",
	component: Dialog,
	parameters: { layout: "centered" },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(true)
		return (
			<>
				<Button onClick={() => setOpen(true)}>Open dialog</Button>
				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					title="Delete session type?"
					description="This cannot be undone. Existing bookings won't be affected."
					footer={
						<>
							<Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
							<Button variant="danger" onClick={() => setOpen(false)}>Delete</Button>
						</>
					}
				>
					<p>Are you sure you want to remove this session type from your profile?</p>
				</Dialog>
			</>
		)
	},
}
