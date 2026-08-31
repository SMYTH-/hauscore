/**
 * Seed CMS marketing pages (home, for-trainers, find-a-trainer).
 *
 * Usage (with Postgres running, migrations applied, and .env set):
 *   cd apps/payload && pnpm seed:pages
 */
import "./load-env.js"
import { getPayload } from "payload"
import config from "../src/payload.config.js"
import type { Page } from "../src/payload-types.js"

const HOME_SECTIONS: NonNullable<Page["sections"]> = [
	{
		blockType: "container",
		width: "content",
		layout: "stack",
		background: "none",
		spacing: { top: "sm", bottom: "sm" },
		content: [
			{
				blockType: "hero",
				eyebrow: "For personal trainers",
				title: "Coaching, minus the admin.",
				subtitle:
					"List your services, share resources, and take bookings — all from one calm dashboard. Get discovered by clients who fit.",
				buttons: [
					{
						label: "List yourself free",
						link: { type: "custom", path: "/for-trainers/apply" },
						variant: "primary",
					},
					{
						label: "Browse trainers",
						link: { type: "custom", path: "/find-a-trainer" },
						variant: "secondary",
					},
				],
			},
			{
				blockType: "statsRow",
				stats: [
					{ value: "2,400+", label: "trainers listed" },
					{ value: "4.9", label: "avg. rating" },
					{ value: "0%", label: "listing fee" },
				],
			},
		],
	},
	{
		blockType: "container",
		background: "secondary",
		border: "y",
		width: "content",
		layout: "none",
		spacing: { top: "sm", bottom: "sm" },
		innerSpacing: { top: "none", bottom: "none" },
		content: [
			{
				blockType: "featureSteps",
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
		],
	},
	{
		blockType: "container",
		width: "content",
		layout: "none",
		background: "none",
		spacing: { top: "sm", bottom: "xs" },
		content: [
			{
				blockType: "trainerGrid",
				eyebrow: "Featured trainers",
				title: "Find a trainer who fits.",
				mode: "featured",
				limit: 6,
			},
		],
	},
	{
		blockType: "container",
		width: "content",
		layout: "none",
		background: "none",
		spacing: { top: "sm", bottom: "sm" },
		content: [
			{
				blockType: "faqAccordion",
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
		],
	},
	{
		blockType: "container",
		width: "content",
		layout: "none",
		background: "none",
		spacing: { top: "none", bottom: "md" },
		content: [
			{
				blockType: "ctaBand",
				title: "Ready to fill your schedule?",
				subtitle:
					"Join thousands of trainers building their business on Werkowt. Free to list — no card required.",
				buttons: [
					{
						label: "List yourself free",
						link: { type: "custom", path: "/for-trainers/apply" },
						variant: "inverse",
					},
				],
			},
		],
	},
]

const FOR_TRAINERS_SECTIONS: NonNullable<Page["sections"]> = [
	{
		blockType: "container",
		width: "content",
		layout: "stack",
		background: "none",
		spacing: { top: "sm", bottom: "sm" },
		content: [
			{
				blockType: "hero",
				eyebrow: "For personal trainers",
				title: "Your coaching business, in one calm place.",
				subtitle:
					"List yourself free, share a public profile, and let clients find you by location and specialty.",
				buttons: [
					{
						label: "Apply to list",
						link: { type: "custom", path: "/for-trainers/apply" },
						variant: "primary",
					},
					{
						label: "Browse trainers",
						link: { type: "custom", path: "/find-a-trainer" },
						variant: "secondary",
					},
				],
			},
			{
				blockType: "statsRow",
				stats: [
					{ value: "0%", label: "listing fee" },
					{ value: "2,400+", label: "trainers listed" },
					{ value: "4.9", label: "avg. rating" },
				],
			},
		],
	},
	{
		blockType: "container",
		background: "secondary",
		border: "y",
		width: "content",
		layout: "none",
		spacing: { top: "sm", bottom: "sm" },
		innerSpacing: { top: "none", bottom: "none" },
		content: [
			{
				blockType: "featureSteps",
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
						title: "Get discovered",
						description: "Clients browse by location and specialty to find coaches who fit.",
					},
				],
			},
		],
	},
	{
		blockType: "container",
		width: "content",
		layout: "none",
		background: "none",
		spacing: { top: "none", bottom: "md" },
		content: [
			{
				blockType: "ctaBand",
				title: "Ready to list yourself?",
				subtitle: "Free to join — no card required. We review applications within a few days.",
				buttons: [
					{
						label: "Start your application",
						link: { type: "custom", path: "/for-trainers/apply" },
						variant: "inverse",
					},
				],
			},
		],
	},
]

const FIND_A_TRAINER_SECTIONS: NonNullable<Page["sections"]> = [
	{
		blockType: "container",
		width: "content",
		layout: "none",
		background: "none",
		spacing: { top: "sm", bottom: "xs" },
		content: [
			{
				blockType: "hero",
				eyebrow: "Browse coaches",
				title: "Find a trainer",
				subtitle: "Search by name, location, or specialty. Verified profiles with clear rates and availability.",
				buttons: [
					{
						label: "List yourself",
						link: { type: "custom", path: "/for-trainers/apply" },
						variant: "secondary",
					},
					{
						label: "For trainers",
						link: { type: "custom", path: "/for-trainers" },
						variant: "ghost",
					},
				],
			},
		],
	},
]

const PAGES: { slug: string; title: string; sections: NonNullable<Page["sections"]> }[] = [
	{ slug: "home", title: "Home", sections: HOME_SECTIONS },
	{ slug: "for-trainers", title: "For trainers", sections: FOR_TRAINERS_SECTIONS },
	{ slug: "find-a-trainer", title: "Find a trainer", sections: FIND_A_TRAINER_SECTIONS },
]

async function upsertPage(
	payload: Awaited<ReturnType<typeof getPayload>>,
	page: (typeof PAGES)[number],
) {
	const existing = await payload.find({
		collection: "pages",
		where: { slug: { equals: page.slug } },
		limit: 1,
	})

	const data = {
		title: page.title,
		slug: page.slug,
		sections: page.sections,
		_status: "published" as const,
	}

	if (existing.docs[0]) {
		await payload.update({ collection: "pages", id: existing.docs[0].id, data })
		console.log(`updated ${page.slug}`)
	} else {
		await payload.create({ collection: "pages", data })
		console.log(`created ${page.slug}`)
	}
}

async function main() {
	const payload = await getPayload({ config })

	for (const page of PAGES) {
		await upsertPage(payload, page)
	}

	console.log("Pages seed complete.")
	process.exit(0)
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
