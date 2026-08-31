"use client"

import { useRouter } from "next/navigation"
import { useCallback, useTransition } from "react"
import {
	EmptyState,
	FormField,
	Input,
	Select,
	TrainerGrid,
	type TrainerGridItem,
} from "@hauscore/components"

type SpecialtyOption = { title: string; slug: string }

export function TrainersDirectory({
	initialQ,
	initialLocation,
	initialSpecialty,
	locations,
	specialties,
	trainers,
}: {
	initialQ: string
	initialLocation: string
	initialSpecialty: string
	locations: string[]
	specialties: SpecialtyOption[]
	trainers: TrainerGridItem[]
}) {
	const router = useRouter()
	const [pending, startTransition] = useTransition()

	const updateParams = useCallback(
		(patch: Record<string, string>) => {
			const params = new URLSearchParams()
			const next = {
				q: initialQ,
				location: initialLocation,
				specialty: initialSpecialty,
				...patch,
			}
			if (next.q) params.set("q", next.q)
			if (next.location) params.set("location", next.location)
			if (next.specialty) params.set("specialty", next.specialty)
			const qs = params.toString()
			startTransition(() => {
				router.push(qs ? `/find-a-trainer?${qs}` : "/find-a-trainer")
			})
		},
		[initialLocation, initialQ, initialSpecialty, router],
	)

	return (
		<div className="space-y-8">
			<div className="grid gap-3 rounded-lg border border-border bg-background-secondary p-4 shadow-sm md:grid-cols-3">
				<FormField label="Search" htmlFor="q">
					<Input
						id="q"
						defaultValue={initialQ}
						placeholder="e.g. strength, boxing, London..."
						onChange={(e) => updateParams({ q: e.target.value })}
					/>
				</FormField>
				<FormField label="Location" htmlFor="location">
					<Select
						id="location"
						defaultValue={initialLocation}
						onChange={(e) => updateParams({ location: e.target.value })}
					>
						<option value="">All locations</option>
						{locations.map((loc) => (
							<option key={loc} value={loc}>
								{loc}
							</option>
						))}
					</Select>
				</FormField>
				<FormField label="Specialty" htmlFor="specialty">
					<Select
						id="specialty"
						defaultValue={initialSpecialty}
						onChange={(e) => updateParams({ specialty: e.target.value })}
					>
						<option value="">All specialties</option>
						{specialties.map((s) => (
							<option key={s.slug} value={s.slug}>
								{s.title}
							</option>
						))}
					</Select>
				</FormField>
			</div>

			{pending ? (
				<p className="text-sm text-foreground-muted">Updating results…</p>
			) : trainers.length === 0 ? (
				<EmptyState
					title="No trainers found"
					description="Try a different search or clear your filters."
					buttons={[{ label: "Clear filters", href: "/find-a-trainer", variant: "secondary" }]}
				/>
			) : (
				<TrainerGrid title={`${trainers.length} trainer${trainers.length === 1 ? "" : "s"}`} trainers={trainers} />
			)}
		</div>
	)
}
