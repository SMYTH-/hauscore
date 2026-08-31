import type { Meta, StoryObj } from "@storybook/react-vite"
import { CtaBand } from "../../components/cta-band/cta-band"
import { FaqAccordion } from "../../components/faq-accordion/faq-accordion"
import { FeatureSteps } from "../../components/feature-steps/feature-steps"
import { Hero } from "../../components/hero/hero"
import { Section } from "../../components/primitives/section/section"
import { SiteHeader } from "../../components/site-header/site-header"
import { StatsRow } from "../../components/stats-row/stats-row"
import { TrainerGrid } from "../../components/trainer-grid/trainer-grid"

const navLinks = [
	{ label: "Find a trainer", href: "#find" },
	{ label: "How it works", href: "#how" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Resources", href: "#resources" },
]

const headerButtons = [
	{ label: "Log in", href: "#login", variant: "ghost" as const },
	{ label: "List yourself", href: "#list", variant: "primary" as const },
]

const heroButtons = [
	{ label: "List yourself free", href: "#list", variant: "primary" as const },
	{ label: "Browse trainers", href: "#find", variant: "secondary" as const },
]

const heroStats = [
	{ value: "2,400+", label: "trainers listed" },
	{ value: "4.9", label: "avg. rating" },
	{ value: "0%", label: "listing fee" },
]

const featureSteps = [
	{
		icon: "user-plus" as const,
		title: "Create your profile",
		description: "Add your bio, specialties, rates, and availability in minutes.",
	},
	{
		icon: "share-2" as const,
		title: "Share your link",
		description: "Publish a public profile page and share it anywhere.",
	},
	{
		icon: "calendar-check" as const,
		title: "Take bookings",
		description: "Clients book and pay through Werkowt. You keep coaching.",
	},
]

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
	{
		href: "#dan",
		name: "Dan Whitfield",
		location: "Leeds",
		specialties: ["Powerlifting"],
		rating: 4.7,
		reviews: 63,
		price: 38,
		verified: false,
		available: true,
	},
	{
		href: "#aisha",
		name: "Aisha Bello",
		location: "Bristol",
		specialties: ["Pre/postnatal", "Strength"],
		rating: 4.9,
		reviews: 151,
		price: 50,
		verified: true,
		available: true,
	},
	{
		href: "#marco",
		name: "Marco Silva",
		location: "London",
		specialties: ["Boxing", "Conditioning"],
		rating: 4.8,
		reviews: 88,
		price: 48,
		verified: true,
		available: false,
	},
]

const faqItems = [
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
]

function MarketingLandingPage() {
	return (
		<div className="min-h-screen bg-background">
			<Section
				as="header"
				width="content"
				spacing="none"
				background="none"
				border="bottom"
				layout="none"
				className="sticky top-0 z-50 bg-background/85 backdrop-blur-[10px]"
			>
				<SiteHeader navLinks={navLinks} buttons={headerButtons} />
			</Section>

			<Section spacing={{ top: "sm", bottom: "sm" }} width="content" layout="stack">
				<Hero
					eyebrow="For personal trainers"
					title="Coaching, minus the admin."
					subtitle="List your services, share resources, and take bookings — all from one calm dashboard. Get discovered by clients who fit."
					buttons={heroButtons}
				/>
				<StatsRow stats={heroStats} />
			</Section>

			<Section
				id="how"
				background="secondary"
				border="y"
				spacing="sm"
				innerSpacing="none"
			>
				<FeatureSteps
					eyebrow="How it works"
					title="Everything you need to run your coaching, in one place."
					steps={featureSteps}
				/>
			</Section>

			<Section id="find" spacing={{ top: "sm", bottom: "xs" }}>
				<TrainerGrid
					eyebrow="Featured trainers"
					title="Find a trainer who fits."
					trainers={trainers}
					viewAllLabel="View all"
					viewAllHref="#all"
				/>
			</Section>

			<Section spacing="sm">
				<FaqAccordion
					eyebrow="FAQ"
					title="Common questions from trainers."
					items={faqItems}
				/>
			</Section>

			<Section spacing={{ top: "none", bottom: "md" }}>
				<CtaBand
					title="Ready to fill your schedule?"
					subtitle="Join thousands of trainers building their business on Werkowt. Free to list — no card required."
					buttons={[{ label: "List yourself free", href: "#list", variant: "inverse" }]}
				/>
			</Section>
		</div>
	)
}

const meta = {
	title: "Pages/Marketing",
	component: MarketingLandingPage,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof MarketingLandingPage>

export default meta
type Story = StoryObj<typeof meta>

export const Landing: Story = {}

export const Dark: Story = {
	decorators: [
		(Story) => (
			<div className="dark">
				<Story />
			</div>
		),
	],
}
