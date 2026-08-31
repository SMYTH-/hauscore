import { Section, SiteHeader } from "@hauscore/components"
import type { ReactNode } from "react"

const DEFAULT_NAV = [
	{ label: "Find a trainer", href: "/find-a-trainer" },
	{ label: "For trainers", href: "/for-trainers" },
]

const DEFAULT_BUTTONS = [
	{ label: "Log in", href: "/admin", variant: "ghost" as const },
	{ label: "List yourself", href: "/for-trainers/apply", variant: "primary" as const },
]

export function SiteChrome({ children }: { children: ReactNode }) {
	return (
		<>
			<Section
				as="header"
				width="content"
				spacing="none"
				background="none"
				border="bottom"
				layout="none"
				className="sticky top-0 z-50 bg-background/85 backdrop-blur-[10px]"
			>
				<SiteHeader navLinks={DEFAULT_NAV} buttons={DEFAULT_BUTTONS} />
			</Section>
			{children}
		</>
	)
}
