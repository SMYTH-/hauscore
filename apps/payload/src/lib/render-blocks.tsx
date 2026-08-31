import {
	ButtonRow,
	CtaBand,
	FaqAccordion,
	FeatureSteps,
	Hero,
	RichText,
	Section,
	StatsRow,
	TrainerGrid,
	type FeatureStep,
	type IconName,
	type TrainerGridItem,
} from "@hauscore/components"

import type { ContainerBlock, Media, Specialty, Trainer } from "../payload-types"
import { fetchTrainers } from "./fetch-trainers"
import { toAlt, toImageSrc } from "./media"
import { richTextToHtml } from "./rich-text"
import { resolveLinkHref, type CmsLinkValue } from "./resolve-link"

type ContentBlock = NonNullable<ContainerBlock["content"]>[number]
type Spacing = "none" | "xs" | "sm" | "md" | "lg"
type LinkTarget = "_self" | "_blank"
type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "inverse"

const spacingProp = (spacing?: { top?: Spacing | null; bottom?: Spacing | null } | null) => {
	if (!spacing?.top && !spacing?.bottom) return "none" as const
	return { top: spacing.top ?? "none", bottom: spacing.bottom ?? "none" } as const
}

const buttonLinks = (
	buttons?:
		| {
				label: string
				link?: CmsLinkValue | null
				target?: LinkTarget | null
				variant?: ButtonVariant | null
		  }[]
		| null,
) =>
	buttons
		?.map((button) => {
			const href = resolveLinkHref(button.link)
			if (!href) return null
			return {
				label: button.label,
				href,
				target: button.target ?? undefined,
				variant: (button.variant as ButtonVariant | undefined) ?? undefined,
			}
		})
		.filter((button): button is NonNullable<typeof button> => button !== null)

function specialtyTitles(specialties: Trainer["specialties"]): string[] {
	if (!specialties) return []
	return specialties
		.map((s) => (typeof s === "object" && s !== null ? (s as Specialty).title : null))
		.filter((t): t is string => Boolean(t))
}

function trainerToGridItem(trainer: Trainer): TrainerGridItem {
	return {
		href: `/trainers/${trainer.slug}`,
		name: trainer.name,
		photo: toImageSrc(trainer.photo as Media | null | undefined),
		location: trainer.location,
		specialties: specialtyTitles(trainer.specialties),
		rating: trainer.rating ?? undefined,
		reviews: trainer.reviewCount ?? undefined,
		price: trainer.pricePerSession ?? undefined,
		verified: trainer.verified ?? false,
		available: trainer.available ?? false,
	}
}

async function resolveTrainerGrid(block: Extract<ContentBlock, { blockType: "trainerGrid" }>): Promise<TrainerGridItem[]> {
	if (block.mode === "manual" && block.trainers?.length) {
		return block.trainers
			.filter((t): t is Trainer => typeof t === "object" && t !== null)
			.map(trainerToGridItem)
	}

	const trainers = await fetchTrainers({
		featured: true,
		limit: block.limit ?? 6,
	})

	if (trainers.length > 0) return trainers.map(trainerToGridItem)

	const fallback = await fetchTrainers({ limit: block.limit ?? 6 })
	return fallback.map(trainerToGridItem)
}

export async function renderContentBlock(block: ContentBlock) {
	switch (block.blockType) {
		case "hero":
			return (
				<Hero
					key={block.id}
					eyebrow={block.eyebrow ?? undefined}
					title={block.title}
					subtitle={block.subtitle ?? undefined}
					buttons={buttonLinks(block.buttons)}
					image={toImageSrc(block.image as Media | null | undefined)}
					imageAlt={toAlt(block.image as Media | null | undefined, block.title)}
				/>
			)

		case "richText":
			return <RichText key={block.id} html={richTextToHtml(block.content)} />

		case "buttonRow":
			return <ButtonRow key={block.id} buttons={buttonLinks(block.buttons) ?? []} />

		case "statsRow":
			return (
				<StatsRow
					key={block.id}
					stats={(block.stats ?? []).map((s) => ({ value: s.value, label: s.label }))}
				/>
			)

		case "featureSteps":
			return (
				<FeatureSteps
					key={block.id}
					eyebrow={block.eyebrow ?? undefined}
					title={block.title}
					steps={(block.steps ?? []).map(
						(step): FeatureStep => ({
							icon: (step.icon as IconName) || "user-plus",
							title: step.title,
							description: step.description,
						}),
					)}
				/>
			)

		case "trainerGrid": {
			const trainers = await resolveTrainerGrid(block)
			return (
				<TrainerGrid
					key={block.id}
					eyebrow={block.eyebrow ?? undefined}
					title={block.title || "Find your trainer"}
					trainers={trainers}
					viewAllLabel="View all"
					viewAllHref="/find-a-trainer"
				/>
			)
		}

		case "faqAccordion":
			return (
				<FaqAccordion
					key={block.id}
					eyebrow={block.eyebrow ?? undefined}
					title={block.title}
					items={(block.items ?? []).map((item) => ({
						question: item.question,
						answer: item.answer,
					}))}
				/>
			)

		case "ctaBand":
			return (
				<CtaBand
					key={block.id}
					title={block.title}
					subtitle={block.subtitle ?? undefined}
					buttons={buttonLinks(block.buttons)}
				/>
			)

		default:
			return null
	}
}

export async function renderContainer(
	container: ContainerBlock,
	key: string,
	aboveFold = false,
) {
	const content = container.content ?? []
	const rendered = await Promise.all(content.map((block) => renderContentBlock(block)))

	return (
		<Section
			key={key}
			theme={container.theme === "dark" ? "dark" : undefined}
			background={container.background ?? "none"}
			spacing={spacingProp(container.spacing)}
			innerSpacing={spacingProp(container.innerSpacing)}
			border={container.border ?? "none"}
			borderColor={container.borderColor ?? "default"}
			width={container.width ?? "full"}
			layout={container.layout ?? "none"}
			gap={container.gap ?? undefined}
			bleed={container.bleed ?? true}
			mobileBleed={container.mobileBleed ?? false}
			data-above-fold={aboveFold ? "" : undefined}
		>
			{rendered}
		</Section>
	)
}
