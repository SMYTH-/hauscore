import { getPayload } from "payload"
import config from "@payload-config"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
	try {
		const body = (await request.json()) as {
			name?: string
			email?: string
			location?: string
			specialties?: string
			message?: string
		}

		const name = body.name?.trim()
		const email = body.email?.trim()
		const location = body.location?.trim()

		if (!name || !email || !location) {
			return NextResponse.json({ error: "Name, email, and location are required." }, { status: 400 })
		}

		const payload = await getPayload({ config })
		await payload.create({
			collection: "trainer-applications",
			data: {
				name,
				email,
				location,
				specialties: body.specialties?.trim() || undefined,
				message: body.message?.trim() || undefined,
				status: "new",
			},
		})

		return NextResponse.json({ ok: true })
	} catch {
		return NextResponse.json({ error: "Unable to save application." }, { status: 500 })
	}
}
