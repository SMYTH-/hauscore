"use client"

import { useState, type FormEvent } from "react"
import {
	Alert,
	Button,
	FormField,
	Input,
	Textarea,
} from "@hauscore/components"

export function TrainerApplicationForm() {
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
	const [error, setError] = useState<string | null>(null)

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setStatus("loading")
		setError(null)

		const form = new FormData(event.currentTarget)
		const body = {
			name: String(form.get("name") || ""),
			email: String(form.get("email") || ""),
			location: String(form.get("location") || ""),
			specialties: String(form.get("specialties") || ""),
			message: String(form.get("message") || ""),
		}

		try {
			const res = await fetch("/api/trainer-application", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			})
			if (!res.ok) {
				const data = (await res.json().catch(() => null)) as { error?: string } | null
				throw new Error(data?.error || "Something went wrong. Please try again.")
			}
			setStatus("success")
			event.currentTarget.reset()
		} catch (err) {
			setStatus("error")
			setError(err instanceof Error ? err.message : "Something went wrong.")
		}
	}

	return (
		<form onSubmit={onSubmit} className="mx-auto flex max-w-narrow flex-col gap-5">
			{status === "success" ? (
				<Alert tone="success" title="Application received">
					Thanks — we&apos;ll review your application and get back to you soon.
				</Alert>
			) : null}
			{status === "error" && error ? (
				<Alert tone="danger" title="Could not submit">
					{error}
				</Alert>
			) : null}

			<FormField label="Full name" htmlFor="name" required>
				<Input id="name" name="name" required placeholder="Maya Okafor" />
			</FormField>
			<FormField label="Email" htmlFor="email" required>
				<Input id="email" name="email" type="email" required placeholder="you@studio.com" />
			</FormField>
			<FormField label="Location" htmlFor="location" required>
				<Input id="location" name="location" required placeholder="London" />
			</FormField>
			<FormField label="Specialties" htmlFor="specialties" helper="Comma-separated, e.g. Strength, Mobility">
				<Input id="specialties" name="specialties" placeholder="Strength, Mobility" />
			</FormField>
			<FormField label="Message" htmlFor="message">
				<Textarea id="message" name="message" rows={5} placeholder="Tell us about your coaching practice…" />
			</FormField>

			<Button type="submit" loading={status === "loading"} fullWidth>
				Submit application
			</Button>
		</form>
	)
}
