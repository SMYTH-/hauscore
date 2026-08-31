import { readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

/**
 * Load apps/payload/.env for CLI scripts (seed, reset-db).
 * Does not override variables already set in the shell.
 *
 * Import this module before payload.config so secrets are available at init.
 */
function loadEnv(): void {
	const envPath = resolve(dirname(fileURLToPath(import.meta.url)), "../.env")

	try {
		const content = readFileSync(envPath, "utf8")
		for (const line of content.split("\n")) {
			const trimmed = line.trim()
			if (!trimmed || trimmed.startsWith("#")) continue

			const eq = trimmed.indexOf("=")
			if (eq === -1) continue

			const key = trimmed.slice(0, eq).trim()
			let value = trimmed.slice(eq + 1).trim()
			if (
				(value.startsWith('"') && value.endsWith('"')) ||
				(value.startsWith("'") && value.endsWith("'"))
			) {
				value = value.slice(1, -1)
			}

			if (process.env[key] === undefined) {
				process.env[key] = value
			}
		}
	} catch {
		// .env is optional when vars are exported in the shell
	}
}

loadEnv()
