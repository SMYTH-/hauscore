import type { HTMLAttributes } from "react"
import { cn } from "@hauscore/utils"

export interface RichTextProps extends HTMLAttributes<HTMLDivElement> {
	html: string
}

/** CMS HTML content with token-based prose styling. */
export function RichText({ html, className, ...rest }: RichTextProps) {
	return (
		<div
			className={cn(
				"rich-text font-sans text-body leading-[1.65] text-foreground-muted",
				"[&_a]:font-semibold [&_a]:text-foreground-link [&_a]:no-underline hover:[&_a]:text-brand-hover",
				"[&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-brand [&_blockquote]:pl-5 [&_blockquote]:font-display [&_blockquote]:text-h3 [&_blockquote]:text-foreground-strong",
				"[&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-h2 [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground-strong",
				"[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-h3 [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-foreground-strong",
				"[&_li]:my-1.5 [&_li]:pl-1",
				"[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6",
				"[&_p]:my-4 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0",
				"[&_strong]:font-semibold [&_strong]:text-foreground",
				"[&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6",
				className,
			)}
			dangerouslySetInnerHTML={{ __html: html }}
			{...rest}
		/>
	)
}
