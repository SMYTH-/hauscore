# Agent guide — hauscore (Werkowt)

pnpm workspace monorepo: React 19, Tailwind CSS 4, Storybook 10 (react-vite), Payload CMS 3 + Postgres.
The component library lives in `libs/ui` (`@hauscore/ui`); shared helpers in `libs/utils` (`@hauscore/utils`, exports `cn`).

## Where things go

- Components: `libs/ui/components/` (`@hauscore/components`, re-exported as `@hauscore/ui/components`).
  - Reusable primitives → `libs/ui/components/primitives/<name>/<name>.tsx`
  - Composed components → `libs/ui/components/<name>/<name>.tsx`
  - Export everything from `libs/ui/components/index.ts`.
  - Stories are colocated (`<name>.stories.tsx`); story titles use `Primitives/<Name>` or `Components/<Name>`.
- Class merging: `import { cn } from "@hauscore/utils"` — never hand-roll clsx/twMerge.
- New runtime deps go in the owning workspace `package.json` + `pnpm install`.

## Design tokens — the hard rule

Style **only** with tokens from `libs/ui/tokens/globals.css`. Never hardcode a design value in a component.

- Werkowt brand: jade `#157A54`, warm paper `#FBFBF9`, near-black ink `#171B1F`.
- Fonts: Schibsted Grotesk (display), Hanken Grotesk (body), Space Mono (mono/stats).
- Default radius: 12px (`rounded-md` / `rounded-button`). Pill for badges.
- Container widths: `max-w-content` (1200px), `max-w-narrow` (760px).
- Section padding: `pt-section-xs` through `pt-section-lg` (40–96px scale).
- If a design value has no token, add it to `globals.css` first, then use it.

## Component API conventions (CMS-driven site)

Props must be flat, CMS-serialisable data — strings, numbers and plain objects, not ReactNode.

- Buttons: any component with buttons takes `buttons?: ButtonLink[]`. `ButtonLink` is exported from the Button primitive: `{ label, href, target?, variant? }`.
- Headings: expose `headingLevel?: "h1" | … | "h6"` on components that render a heading.
- Optional content must degrade gracefully when omitted.

## Primitives — always reuse, never re-implement

- **Button** (`primitives/button`): Werkowt variants primary/secondary/ghost/danger/inverse; renders `<a>` when `href` is set.
- **Icon** (`primitives/icon`): Lucide outline icons via `lucide-react`.
- **Badge** (`primitives/badge`): mono uppercase status labels.
- **Section** (`primitives/section`): layout container — gutters, max-width, spacing bands, borders. Maps to CMS container block.

## Payload CMS — schema change protocol

The project is **migration-managed** in production. Any field added/removed/changed in a Payload block or collection config requires:

```bash
cd apps/payload
pnpm payload migrate:create --name <short_description>
```

Commit both the generated `.ts` file and updated `migrations/index.ts`.

**Links:** Use `linkField()` from `fields/link.ts` for internal (pages/trainers/specialties), custom paths, or external URLs. Resolve at render time with `resolveLinkHref()` from `lib/resolve-link.ts`. Button arrays use `buttonLinksField()` which embeds the shared link group.

## Dev commands

```bash
pnpm payload:db    # start Postgres
pnpm dev           # Payload admin at :3000
pnpm storybook     # Storybook at :6006
pnpm typecheck     # components TS check
```

## Storybook story titles

`Primitives/<Name>` and `Components/<Name>`. Sort order: Pages → Patterns → Components → Primitives → Tools.

Add a Dark story (wrap in `<div className="dark">`) when semantic tokens are used.
