import { draftMode } from "next/headers"
import { redirect } from "next/navigation"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
	const { searchParams } = request.nextUrl
	const secret = searchParams.get("secret")
	const path = searchParams.get("path")
	const expected = process.env.PREVIEW_SECRET || process.env.PAYLOAD_SECRET || ""

	if (!secret || secret !== expected || !path || !path.startsWith("/")) {
		return new Response("Invalid preview request", { status: 401 })
	}

	const draft = await draftMode()
	draft.enable()
	redirect(path)
}
