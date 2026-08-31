/**
 * Seed specialties + sample trainers for local marketplace demos.
 *
 * Usage (with Postgres running and .env set):
 *   cd apps/payload && pnpm seed:trainers
 */
import "./load-env.js"
import { getPayload } from "payload"
import config from "../src/payload.config.js"

const SPECIALTIES = [
	"Strength",
	"Mobility",
	"Hypertrophy",
	"Nutrition",
	"Yoga",
	"Boxing",
	"Conditioning",
	"Powerlifting",
	"Pre/postnatal",
]

const TRAINERS = [
	{
		name: "Maya Okafor",
		slug: "maya-okafor",
		location: "London",
		specialties: ["Strength", "Mobility"],
		headline: "Strength coach with a calm, sustainable approach.",
		rating: 4.9,
		reviewCount: 128,
		pricePerSession: 45,
		verified: true,
		available: true,
		featured: true,
	},
	{
		name: "Tom Reyes",
		slug: "tom-reyes",
		location: "Manchester",
		specialties: ["Hypertrophy", "Nutrition"],
		headline: "Hypertrophy programming without the noise.",
		rating: 4.8,
		reviewCount: 94,
		pricePerSession: 40,
		verified: true,
		available: false,
		featured: true,
	},
	{
		name: "Priya Shah",
		slug: "priya-shah",
		location: "London",
		specialties: ["Yoga", "Mobility"],
		headline: "Mobility-first coaching for busy professionals.",
		rating: 5.0,
		reviewCount: 212,
		pricePerSession: 55,
		verified: true,
		available: true,
		featured: true,
	},
	{
		name: "Dan Whitfield",
		slug: "dan-whitfield",
		location: "Leeds",
		specialties: ["Powerlifting"],
		headline: "Competitive powerlifting coach.",
		rating: 4.7,
		reviewCount: 63,
		pricePerSession: 38,
		verified: false,
		available: true,
		featured: false,
	},
	{
		name: "Aisha Bello",
		slug: "aisha-bello",
		location: "Bristol",
		specialties: ["Pre/postnatal", "Strength"],
		headline: "Pre- and postnatal strength coaching.",
		rating: 4.9,
		reviewCount: 151,
		pricePerSession: 50,
		verified: true,
		available: true,
		featured: true,
	},
	{
		name: "Marco Silva",
		slug: "marco-silva",
		location: "London",
		specialties: ["Boxing", "Conditioning"],
		headline: "Boxing-inspired conditioning for all levels.",
		rating: 4.8,
		reviewCount: 88,
		pricePerSession: 48,
		verified: true,
		available: false,
		featured: true,
	},
]

async function main() {
	const payload = await getPayload({ config })

	const specialtyIds = new Map<string, number | string>()
	for (const title of SPECIALTIES) {
		const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
		const existing = await payload.find({
			collection: "specialties",
			where: { slug: { equals: slug } },
			limit: 1,
		})
		if (existing.docs[0]) {
			specialtyIds.set(title, existing.docs[0].id)
			continue
		}
		const created = await payload.create({
			collection: "specialties",
			data: { title, slug },
		})
		specialtyIds.set(title, created.id)
	}

	for (const trainer of TRAINERS) {
		const existing = await payload.find({
			collection: "trainers",
			where: { slug: { equals: trainer.slug } },
			limit: 1,
		})
		if (existing.docs[0]) {
			console.log(`skip ${trainer.slug}`)
			continue
		}

		await payload.create({
			collection: "trainers",
			data: {
				name: trainer.name,
				slug: trainer.slug,
				location: trainer.location,
				headline: trainer.headline,
				specialties: trainer.specialties
					.map((s) => specialtyIds.get(s))
					.filter((id): id is number => typeof id === "number"),
				rating: trainer.rating,
				reviewCount: trainer.reviewCount,
				pricePerSession: trainer.pricePerSession,
				verified: trainer.verified,
				available: trainer.available,
				featured: trainer.featured,
				_status: "published",
			},
		})
		console.log(`created ${trainer.slug}`)
	}

	console.log("Seed complete.")
	process.exit(0)
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
