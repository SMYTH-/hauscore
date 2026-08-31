import type { Meta, StoryObj } from "@storybook/react-vite"
import { cn } from "@hauscore/utils"
import { Section } from "./section"

function Block({ label, className }: { label: string; className?: string }) {
	return (
		<div
			className={cn(
				"flex min-h-30 items-center justify-center rounded-md border border-border bg-background-sunk",
				"text-body text-foreground-muted",
				className,
			)}
		>
			{label}
		</div>
	)
}

const meta = {
	title: "Primitives/Section",
	component: Section,
	parameters: { layout: "fullscreen" },
	args: {
		gap: "sm",
		children: (
			<>
				<Block label="Child one" />
				<Block label="Child two" />
			</>
		),
	},
} satisfies Meta<typeof Section>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ContentWidth: Story = {
	args: {
		width: "content",
		border: "top",
		containerClassName: "pt-8",
	},
}

export const NarrowWidth: Story = {
	args: {
		width: "narrow",
		spacing: { top: "md", bottom: "md" },
		children: <Block label="Reading measure (~760px)" />,
	},
}

export const FullBleed: Story = {
	args: {
		width: "full",
		bleed: true,
		background: "secondary",
		spacing: { top: "sm", bottom: "sm" },
	},
}

export const TopBorder: Story = {
	args: { border: "top", containerClassName: "pt-8" },
}

export const InverseBackground: Story = {
	args: {
		background: "inverse",
		spacing: { top: "md", bottom: "md" },
	},
}

export const TwelveColumnGrid: Story = {
	args: {
		layout: "grid",
		border: "top",
		containerClassName: "pt-8",
		children: (
			<>
				<Block label="col-span-4" className="col-span-4" />
				<Block label="col-span-8" className="col-span-8" />
			</>
		),
	},
}

export const AsymmetricSpacing: Story = {
	args: { spacing: { top: "lg", bottom: "sm" } },
}

export const DarkMode: Story = {
	args: { theme: "dark", background: "default" },
}
