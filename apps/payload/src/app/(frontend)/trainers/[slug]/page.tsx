import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
	Badge,
	Button,
	Image,
	PriceTag,
	RatingStars,
	RichText,
	Section,
	Tag,
} from "@hauscore/components"
import { SiteChrome } from "@/components/site-chrome"
import { fetchTrainerBySlug } from "@/lib/fetch-trainers"
import { toAlt, toImageSrc } from "@/lib/media"
import { richTextToHtml } from "@/lib/rich-text"
import type { Media, Specialty } from "@/payload-types"

type Args = {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
	const { slug } = await params
	const trainer = await fetchTrainerBySlug(slug)
	if (!trainer) return { title: "Trainer not found — Werkowt" }
	return {
		title: `${trainer.name} — Werkowt`,
		description: trainer.headline || `Book sessions with ${trainer.name}`,
	}
}

export default async function TrainerProfilePage({ params }: Args) {
	const { slug } = await params
	const trainer = await fetchTrainerBySlug(slug)
	if (!trainer) notFound()

	const photo = toImageSrc(trainer.photo as Media | null | undefined)
	const specialties = (trainer.specialties ?? [])
		.map((s) => (typeof s === "object" && s !== null ? (s as Specialty).title : null))
		.filter((t): t is string => Boolean(t))
	const bioHtml = richTextToHtml(trainer.bio)

	return (
		<SiteChrome>
			<main>
				<Section spacing={{ top: "md", bottom: "md" }} width="content">
					<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<div className="overflow-hidden rounded-xl border border-border bg-background-sunk">
							{photo ? (
								<Image
									src={photo}
									alt={toAlt(trainer.photo as Media | null | undefined, trainer.name)}
									className="aspect-[4/5] w-full object-cover"
									lazy={false}
								/>
							) : (
								<div className="flex aspect-[4/5] items-center justify-center font-display text-display-m font-extrabold text-brand">
									{trainer.name
										.split(/\s+/)
										.slice(0, 2)
										.map((w) => w[0])
										.join("")
										.toUpperCase()}
								</div>
							)}
						</div>

						<div className="flex flex-col gap-5">
							<div className="flex flex-wrap gap-2">
								{trainer.verified ? <Badge tone="brand">Verified</Badge> : null}
								{trainer.available ? (
									<Badge tone="success" dot>
										Available
									</Badge>
								) : null}
							</div>

							<div>
								<h1 className="font-display text-display-m font-extrabold tracking-tight text-foreground-strong">
									{trainer.name}
								</h1>
								{trainer.headline ? (
									<p className="mt-2 text-body-lg text-foreground-muted">{trainer.headline}</p>
								) : null}
								<p className="mt-2 text-sm text-foreground-muted">{trainer.location}</p>
							</div>

							{trainer.rating != null ? (
								<RatingStars value={trainer.rating} count={trainer.reviewCount ?? undefined} />
							) : null}

							{specialties.length > 0 ? (
								<div className="flex flex-wrap gap-2">
									{specialties.map((s) => (
										<Tag key={s}>{s}</Tag>
									))}
								</div>
							) : null}

							{trainer.pricePerSession != null ? (
								<div className="border-t border-border-subtle pt-5">
									<PriceTag amount={trainer.pricePerSession} unit="session" size="lg" />
								</div>
							) : null}

							{bioHtml ? <RichText html={bioHtml} className="mt-2" /> : null}

							<div className="mt-4">
								<Button href="/find-a-trainer" variant="secondary">
									Back to trainers
								</Button>
							</div>
						</div>
					</div>
				</Section>
			</main>
		</SiteChrome>
	)
}
