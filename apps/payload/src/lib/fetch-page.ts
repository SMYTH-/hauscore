import { draftMode } from "next/headers"
import { getPayload } from "payload"
import { cache } from "react"
import config from "@payload-config"

export const getPayloadClient = cache(async () => getPayload({ config }))

export const fetchPageBySlug = cache(async (slug: string) => {
	const payload = await getPayloadClient()
	const { isEnabled: isDraftMode } = await draftMode()

	const result = await payload.find({
		collection: "pages",
		where: { slug: { equals: slug } },
		limit: 1,
		depth: 3,
		draft: isDraftMode,
		overrideAccess: true,
	})

	return result.docs[0] ?? null
})
