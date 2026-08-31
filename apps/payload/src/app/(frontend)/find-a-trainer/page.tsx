import type { Metadata } from "next"
import { Section } from "@hauscore/components"
import { SiteChrome } from "@/components/site-chrome"
import { TrainersDirectory } from "@/components/trainers-directory"
import { fetchPageBySlug } from "@/lib/fetch-page"
import { fetchSpecialties, fetchTrainerLocations, fetchTrainers } from "@/lib/fetch-trainers"
import { renderContainer } from "@/lib/render-blocks"
import type { Media, Specialty, Trainer } from "@/payload-types"
import { toImageSrc } from "@/lib/media"

type Args = {
	searchParams: Promise<{ q?: string; location?: string; specialty?: string }>
}

function toCardTrainer(trainer: Trainer) {
	return {
		href: `/trainers/${trainer.slug}`,
		name: trainer.name,
		photo: toImageSrc(trainer.photo as Media | null | undefined),
		location: trainer.location,
		specialties: (trainer.specialties ?? [])
			.map((s) => (typeof s === "object" && s !== null ? (s as Specialty).title : null))
			.filter((t): t is string => Boolean(t)),
		rating: trainer.rating ?? undefined,
		reviews: trainer.reviewCount ?? undefined,
		price: trainer.pricePerSession ?? undefined,
		verified: trainer.verified ?? false,
		available: trainer.available ?? false,
	}
}

export async function generateMetadata(): Promise<Metadata> {
	const page = await fetchPageBySlug("find-a-trainer")
	return {
		title: page?.title ? `${page.title} — Werkowt` : "Find a trainer — Werkowt",
		description: "Search by name, location, or specialty.",
	}
}

export default async function FindATrainerPage({ searchParams }: Args) {
	const params = await searchParams
	const [page, trainers, specialties, locations] = await Promise.all([
		fetchPageBySlug("find-a-trainer"),
		fetchTrainers({ q: params.q, location: params.location, limit: 48 }),
		fetchSpecialties(),
		fetchTrainerLocations(),
	])

	const specialtySlug = params.specialty
	const filtered = specialtySlug
		? trainers.filter((t) =>
				(t.specialties ?? []).some(
					(s) => typeof s === "object" && s !== null && (s as Specialty).slug === specialtySlug,
				),
			)
		: trainers

	const sections = page?.sections ?? []
	const rendered = await Promise.all(
		sections.map((container, index) => renderContainer(container, `section-${index}`, index === 0)),
	)

	return (
		<SiteChrome>
			<main>
				{rendered}
				<Section width="content" spacing={{ top: "none", bottom: "md" }} layout="none">
					<TrainersDirectory
						initialQ={params.q ?? ""}
						initialLocation={params.location ?? ""}
						initialSpecialty={params.specialty ?? ""}
						locations={locations}
						specialties={specialties.map((s) => ({ title: s.title, slug: s.slug }))}
						trainers={filtered.map(toCardTrainer)}
					/>
				</Section>
			</main>
		</SiteChrome>
	)
}
