/**
 * Drop and recreate the public schema so migrations can run on a clean database.
 *
 * Use when dev auto-push has already created tables/enums and `pnpm migrate` fails
 * with "type ... already exists".
 *
 * Usage:
 *   cd apps/payload && pnpm db:reset
 */
import "./load-env.js"
import pg from "pg"

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
	console.error("DATABASE_URL is not set. Copy .env.example to .env and try again.")
	process.exit(1)
}

async function main() {
	const client = new pg.Client({ connectionString })
	await client.connect()

	try {
		console.log("Dropping public schema…")
		await client.query("DROP SCHEMA IF EXISTS public CASCADE")
		await client.query("CREATE SCHEMA public")
		await client.query("GRANT ALL ON SCHEMA public TO public")
		console.log("Database reset complete. Run: pnpm migrate")
	} finally {
		await client.end()
	}
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
