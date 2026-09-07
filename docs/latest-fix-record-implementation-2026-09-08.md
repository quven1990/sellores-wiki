# Latest fix record — implementation result

Source: `/Users/xuehao/Downloads/sellores_latest_fix_record.md`  
Date: 2026-09-08

## Fixed

- Removed hand-written numbers inside all ordered lists on Codes, Beginner, and AFK pages.
- Removed duplicated mobile-card + desktop-table item DOM from Codes, Ores, Pets, and Gears.
  Each tool now renders one semantic, horizontally scrollable table.
- Added keyboard-focusable labels to each scrollable table region.
- Replaced all-Gear `Needs check` labels with `Cross-source` after verifying the same 11
  prices/effects against AllThings.How and Sportskeeda.
- Added Gear provenance ledger at `docs/source-ledger-gears.md`.
- Strengthened contextual links:
  - Beginner → AFK & Money
  - Pets → Floors & Fusion
- Changed sitemap `lastmod` to a per-route explicit map. Dates change only after a material
  content update; missing route dates now fail type-checking instead of silently falling back.
- Added a real `Affordable only` Gear filter, enabled after entering a valid wallet amount.
- Migrated the removed Next.js `next lint` command to ESLint CLI and added a `typecheck` script.

## Confirmed without code changes

- Sitemap contains all 13 intended indexable routes and no test/staging routes.
- Core pages return 200 with unique self-canonical URLs and `index,follow`.
- YouTube embeds remain click-to-load, use `youtube-nocookie.com`, and do not autoplay.
- Codes copy/redeemed state, Beginner checklist, and Gear budget/sort helpers remain local tools.
- Existing titles were not rewritten.
- No new page or unsupported game fact was added.

## Not changed

- Popular Ore/Pet rows remain Single-source. No sufficiently independent second source was
  established in this pass, so no row was promoted to Cross-source or Gameplay observed.
- No new calculator or recommendation algorithm was added.

## Needs manual verification

- Google Search Console property claim and sitemap submission.
- In-game spot checks for Ore/Pet/Gear promotion to stronger evidence levels.
- Cloudflare `www` → apex redirect remains an external dashboard rule issue.

