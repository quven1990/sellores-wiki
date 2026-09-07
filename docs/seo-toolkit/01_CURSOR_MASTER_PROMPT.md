# Cursor Agent Master Prompt — SellOres.site SEO / CTR / Engagement Upgrade

You are modifying the existing repository for https://sellores.site/.

## Objective

Improve organic search readiness, search-result CTR, usefulness, and natural user engagement while preserving factual integrity and the existing visual identity.

This is a Roblox fan wiki. Do not fabricate facts, test results, player counts, code status, pet stats, ore values, or “verified in game” claims.


## HARD CONTENT-SAFETY GATE — read before any content work

Before creating or expanding any factual game content, read `07_CONTENT_EVIDENCE_POLICY.md` and treat it as mandatory.

**Do not use your own model knowledge as a source for Sell Ores facts.** Only use facts already present in the repository or facts backed by source material that can be recorded in the source ledger. If evidence is missing, omit the claim, label it unverified, or leave the page in backlog.

For any new page, do not create the route just because it appears in the backlog. First prove there is enough reliable content to make it useful without fabricated numbers/data. If not, do not publish it.

"SEO completeness" is never a reason to invent content.

---

## First: inspect the repo

Before editing:

1. Identify framework/build system and routing.
2. Locate global metadata/layout/head implementation.
3. Locate robots/sitemap generation.
4. Locate content/data files for codes, gears, pets, updates, and guide pages.
5. Identify reusable UI components and design tokens.
6. Run the current build/lint/test if available.

Then implement the tasks below in priority order.

---

# P0 — Must do

## 1. Crawl/index hygiene

Ensure every intended public page has:

- one canonical URL pointing to the production sellores.site URL
- no accidental `noindex`
- consistent trailing-slash policy
- unique title and meta description
- Open Graph title/description/url/image where framework support exists

Ensure robots and sitemap are valid:

- allow public content
- block only genuinely non-public/technical routes if necessary
- sitemap contains all indexable pages
- sitemap excludes privacy/terms only if the project's SEO policy intentionally excludes them; otherwise valid legal pages can remain indexable
- no localhost/staging URLs
- `lastmod` must reflect real content changes rather than every build

Do not invent Search Console status.

## 2. Metadata rewrite

Use the exact specs in `02_PAGE_SPECS.md`.

If page content does not yet support a title claim, either improve the page first or use the safer fallback title listed in the spec.

## 3. Homepage first-screen rewrite

Keep H1 `Sell Ores Wiki` or a close equivalent.

Replace the current disclaimer-heavy first screen with:

- a concise value proposition
- freshness/status strip
- task cards / buttons for the top player intents

Move Place ID + source methodology to a compact trust block below the first useful content section.

Do not remove the affiliation disclaimer from the site footer.

## 4. Codes page freshness/status model

Refactor code status to support these states:

- `in-game`
- `cross-source`
- `conflicted`
- `expired`
- `needs-check`

Render a clear human label and tooltip/explainer.

Do not automatically mark anything `in-game`.

Current audit requires re-evaluating at minimum:

ADMINMUTATION, FRAGMENTS, ROBLOXSERVERS, ALMIGHTY, SORRYFORDATA, BALANCE, PETFUSION, EXPANSION, RELEASE, FINALE.

If the repo contains no source-of-truth update for these values, preserve the raw data and create an obvious TODO/data-review note rather than inventing facts.

Add:

- copy button feedback
- localStorage `redeemed` state
- status filter
- `Last checked` display driven by content data, not current build time

## 5. Fix thin/placeholder presentation

### Pets

If a real pet roster exists elsewhere in repo/data, surface it with search/filter/status.

If no real roster exists, do NOT create fake pet rows. Improve the page into a useful system/fusion explainer and visibly mark the roster as incomplete. Consider removing it from “complete list” style metadata until data is ready.

### Beginner

Remove duplicated copy.

Add a first-session structure:

- first 5 minutes
- first 30 minutes
- what to buy first
- what to avoid early
- where codes fit
- bottleneck decision guide
- next useful pages

Do not invent numeric upgrade costs if not sourced in repository data.

### Updates

Sort newest-first.

Update card fields:

- date
- title
- summary
- player impact
- affected content links
- evidence/source status

---

# P1 — Engagement + internal linking

## 6. Add reusable “Next useful step” component

At the end of each content page, show 2–4 context-aware internal links, not generic nav repetition.

Examples:

Codes → Beginner upgrade order / Gears / Updates
Gears → Mutations / Beginner / Ores
Pets → Fusion guide / Beginner / Updates
Beginner → Codes / Gears / Ores
Updates → affected pages

Do not link to a route until it exists.

## 7. Add lightweight interactive utilities

Keep them client-side where practical.

Codes:
- copy
- redeemed checklist
- filters

Gears:
- type filter
- sortable price table
- optional wallet input that only uses existing gear-price data

Beginner:
- localStorage checklist

Pets:
- search/filter only when roster data exists

These features must remain usable without sign-in.

## 8. Improve tables for mobile

For dense tables:

- sticky header only if it does not hurt mobile UX
- horizontal overflow container if required
- readable row spacing
- no CLS caused by late font/image/layout changes
- copy/action buttons large enough for touch

---

## 9. Engagement modules: tools + YouTube

Read `08_ENGAGEMENT_TOOLS_AND_YOUTUBE.md` and implement its P1 items where compatible with existing sourced data.

Priority order:
1. lightweight on-page tools that directly help the user's task
2. contextual internal links
3. optional strongly relevant YouTube modules

YouTube requirements:
- never autoplay
- never place a heavy YouTube iframe above the primary answer/table
- prefer click-to-load/lite embeds
- never invent a video ID/title/creator
- only render videos from a reviewed data list; if no reviewed videos exist, render no video module
- video is supplementary; do not replace indexable written answers with video

Do not sacrifice Core Web Vitals merely to increase time-on-page.

# P2 — Add pages only if reliable data/content is available

Read `03_NEW_PAGE_BACKLOG.md`.

Highest priority:

1. `/ores`
2. `/mutations`
3. `/upgrades` or `/guides/upgrades`
4. `/floors` or `/guides/floors`
5. `/guides/fuser-mega-ores`
6. `/guides/afk-money`

Do not mass-generate all pages if data is missing.

Each new page must have:

- a unique player job-to-be-done
- answer-first opening
- useful table/tool/checklist where relevant
- source/status handling
- 3+ contextual internal links
- unique title/description
- breadcrumbs in UI

---

# P3 — Technical polish

## 9. Images

For all content images:

- descriptive natural alt text, not keyword stuffing
- explicit dimensions/aspect-ratio to reduce CLS
- lazy-load below-fold images
- keep first meaningful/LCP image optimized and not unnecessarily lazy
- modern format if existing pipeline supports it

Fix awkward alt strings such as `Sell Ores Reality Ore sell panel in-game` if present.

## 10. Structured data

If absent, add conservative valid JSON-LD where appropriate:

- WebSite on home
- BreadcrumbList on inner pages
- Article on long-form guides if author/date data is genuine

Do not add fake Review/AggregateRating markup.
Do not expect FAQ markup to create a rich result for this fan wiki.

## 11. Accessibility / UX

- one H1 per page
- logical heading order
- visible keyboard focus
- buttons use semantic button elements
- link text describes destination
- do not use intrusive interstitials/popups

---

# Quality bar

Before finishing:

1. Run build.
2. Run lint/tests if present.
3. Inspect generated routes.
4. Verify metadata for every public route.
5. Verify there are no broken internal links.
6. Verify no unverified facts were upgraded to “verified.”
7. Verify mobile layout for tables/buttons.
8. Provide a final report:
   - changed files
   - implemented P0/P1/P2/P3 tasks
   - data/content items that need manual verification
   - commands run and results

Do not redesign the entire visual style unless technically necessary. Favor high-impact, low-risk changes.
