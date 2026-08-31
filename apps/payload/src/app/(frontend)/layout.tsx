import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./styles.css"

const GOOGLE_FONTS =
	"https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300..800;1,400..600&family=Schibsted+Grotesk:wght@400..900&family=Space+Mono:wght@400;700&display=swap"

export const metadata: Metadata = {
	title: "Werkowt",
	description: "Coaching, minus the admin.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href={GOOGLE_FONTS} rel="stylesheet" />
			</head>
			<body>{children}</body>
		</html>
	)
}
