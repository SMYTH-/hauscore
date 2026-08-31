import type { Metadata } from "next"
import { SiteChrome } from "@/components/site-chrome"
import { TrainerApplicationForm } from "@/components/trainer-application-form"
import { Section } from "@hauscore/components"

export const metadata: Metadata = {
	title: "Apply as a trainer — Werkowt",
	description: "List yourself on Werkowt and take bookings from one calm dashboard.",
}

export default function TrainerApplyPage() {
	return (
		<SiteChrome>
			<main>
				<Section spacing={{ top: "md", bottom: "lg" }} width="content">
					<div className="mb-10 max-w-narrow">
						<span className="font-mono text-eyebrow font-bold tracking-[0.14em] text-brand uppercase">
							For trainers
						</span>
						<h1 className="mt-3 font-display text-display-m font-extrabold tracking-tight text-foreground-strong">
							List yourself free
						</h1>
						<p className="mt-3 text-body-lg text-foreground-muted">
							Share your specialties, rates, and availability. Clients discover you on Werkowt.
						</p>
					</div>
					<TrainerApplicationForm />
				</Section>
			</main>
		</SiteChrome>
	)
}
