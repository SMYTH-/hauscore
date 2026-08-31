import { cache } from "react"
import type { Where } from "payload"
import { getPayloadClient } from "./fetch-page"
import type { Trainer } from "../payload-types"

export type TrainerFilters = {
	q?: string
	location?: string
	limit?: number
	featured?: boolean
}

export const fetchTrainers = cache(async (filters: TrainerFilters = {}): Promise<Trainer[]> => {
	const payload = await getPayloadClient()
	const and: Where[] = []

	if (filters.q) {
		and.push({
			or: [
				{ name: { contains: filters.q } },
				{ headline: { contains: filters.q } },
				{ location: { contains: filters.q } },
			],
		})
	}
	if (filters.location) {
		and.push({ location: { equals: filters.location } })
	}
	if (filters.featured) {
		and.push({ featured: { equals: true } })
	}

	const result = await payload.find({
		collection: "trainers",
		where: and.length ? { and } : undefined,
		limit: filters.limit ?? 24,
		depth: 2,
		sort: "-updatedAt",
		draft: false,
	})

	return result.docs
})

export const fetchTrainerBySlug = cache(async (slug: string): Promise<Trainer | null> => {
	const payload = await getPayloadClient()
	const result = await payload.find({
		collection: "trainers",
		where: { slug: { equals: slug } },
		limit: 1,
		depth: 2,
		draft: false,
	})
	return result.docs[0] ?? null
})

export const fetchSpecialties = cache(async () => {
	const payload = await getPayloadClient()
	const result = await payload.find({
		collection: "specialties",
		limit: 100,
		sort: "title",
	})
	return result.docs
})

export const fetchTrainerLocations = cache(async (): Promise<string[]> => {
	const trainers = await fetchTrainers({ limit: 200 })
	return [...new Set(trainers.map((t) => t.location).filter(Boolean))].sort()
})
