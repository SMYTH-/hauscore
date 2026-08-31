import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import path from "path"
import { buildConfig } from "payload"
import pg from "pg"
import { fileURLToPath } from "url"
import sharp from "sharp"

import { Media } from "./collections/Media"
import { Pages } from "./collections/Pages"
import { Specialties } from "./collections/Specialties"
import { TrainerApplications } from "./collections/TrainerApplications"
import { Trainers } from "./collections/Trainers"
import { Users } from "./collections/Users"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [Users, Media, Pages, Specialties, Trainers, TrainerApplications],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URL || "",
		},
		// Migration-managed schema — dev must not auto-push or migrate will conflict.
		push: false,
		pg,
	}),
	sharp,
})
