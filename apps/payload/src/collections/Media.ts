import type { CollectionConfig } from "payload"

function webp(quality: number) {
	return {
		format: "webp" as const,
		options: { quality, smartSubsample: true },
	}
}

export const Media: CollectionConfig = {
	slug: "media",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
		},
		{
			name: "caption",
			type: "text",
		},
	],
	upload: {
		imageSizes: [
			{ name: "thumbnail", width: 400, formatOptions: webp(75) },
			{ name: "card", width: 800, formatOptions: webp(80) },
			{ name: "medium", width: 1200, formatOptions: webp(80) },
			{ name: "large", width: 1920, formatOptions: webp(85) },
		],
		adminThumbnail: "thumbnail",
	},
}
