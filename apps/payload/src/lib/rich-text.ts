import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"

/**
 * Minimal Lexical → HTML for marketing rich text.
 * Handles paragraph, text marks, lists, and links.
 */
export function richTextToHtml(data: SerializedEditorState | null | undefined): string {
	if (!data?.root?.children) return ""

	const walk = (nodes: unknown[]): string =>
		nodes
			.map((node) => {
				const n = node as {
					type?: string
					tag?: string
					text?: string
					format?: number
					url?: string
					children?: unknown[]
					listType?: string
					value?: number
				}

				if (n.type === "text") {
					let text = escapeHtml(n.text ?? "")
					const format = n.format ?? 0
					if (format & 1) text = `<strong>${text}</strong>`
					if (format & 2) text = `<em>${text}</em>`
					if (format & 8) text = `<u>${text}</u>`
					return text
				}

				const children = n.children ? walk(n.children) : ""

				if (n.type === "paragraph") return `<p>${children}</p>`
				if (n.type === "heading") return `<${n.tag ?? "h2"}>${children}</${n.tag ?? "h2"}>`
				if (n.type === "list") {
					const tag = n.listType === "number" ? "ol" : "ul"
					return `<${tag}>${children}</${tag}>`
				}
				if (n.type === "listitem") return `<li>${children}</li>`
				if (n.type === "link" || n.type === "autolink") {
					const href = escapeAttr(n.url ?? "#")
					return `<a href="${href}">${children}</a>`
				}
				if (n.type === "linebreak") return "<br />"
				return children
			})
			.join("")

	return walk(data.root.children as unknown[])
}

function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
}

function escapeAttr(value: string): string {
	return escapeHtml(value).replaceAll("'", "&#39;")
}
