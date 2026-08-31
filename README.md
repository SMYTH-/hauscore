# Hauscore (Werkowt)

pnpm monorepo for the Werkowt trainer marketplace — Payload CMS + Postgres, design system in Storybook.

## Prerequisites

- Node.js 22+
- pnpm 10+
- Docker (for local Postgres)

## Setup

```bash
pnpm install
pnpm payload:db
cp apps/payload/.env.example apps/payload/.env   # set PAYLOAD_SECRET
cd apps/payload && pnpm db:setup                 # reset DB, migrate, seed
```

If `pnpm migrate` fails with **type already exists**, the database was auto-pushed by a previous dev session. Reset and migrate:

```bash
cd apps/payload && pnpm db:reset && pnpm migrate && pnpm seed
```

Run migrations **before** first dev boot on a fresh database. Dev auto-push is disabled (`push: false`) so schema is migration-managed only.

## Development

```bash
pnpm dev          # Payload + Next.js at http://localhost:3000
pnpm storybook    # Storybook at http://localhost:6006
```

## Structure

- `apps/payload` — Next.js + Payload CMS
- `libs/ui` — design tokens, Storybook host (`@hauscore/ui`)
- `libs/ui/components` — React component library (`@hauscore/components`)
- `libs/utils` — shared helpers (`@hauscore/utils`)

See [AGENTS.md](./AGENTS.md) for conventions.
