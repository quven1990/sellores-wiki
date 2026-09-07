# SellOres.site SEO + CTR + Engagement Cursor Toolkit

Audit date: 2026-09-07
Target: https://sellores.site/

## Goal

Improve the site for three linked outcomes:

1. **Search CTR**: clearer, fresher, query-matched title/snippet copy.
2. **User satisfaction / engagement**: answer the query immediately, then give useful next actions so users naturally continue browsing.
3. **Organic ranking readiness**: stronger topical coverage, internal linking, crawl/index hygiene, and page experience.

> Important: do **not** optimize around a fake “dwell time ranking factor.” Google does not document dwell time as a direct ranking factor. Build pages that satisfy intent, are fast, and make the next useful action obvious.

## Use this toolkit

Open the repository in Cursor and paste the full contents of `01_CURSOR_MASTER_PROMPT.md` into Agent mode.

The agent should implement in this order:

- P0: indexing + metadata + thin-page fixes + codes freshness
- P1: engagement modules + internal links + page depth
- P2: new high-intent pages
- P3: polish / structured data / performance

Do not create large numbers of thin pages. New pages must have a clear player task, useful data, or a tool.

## Files

- `00_AUDIT_SUMMARY.md` — what is wrong now and why it matters
- `01_CURSOR_MASTER_PROMPT.md` — one-shot instruction for Cursor
- `02_PAGE_SPECS.md` — exact page-by-page recommendations
- `03_NEW_PAGE_BACKLOG.md` — which pages to add and in what order
- `04_TECHNICAL_SEO.md` — crawl/index/performance checks
- `05_ACCEPTANCE_CHECKLIST.md` — done criteria
- `06_MANUAL_AFTER_DEPLOY.md` — things Cursor cannot do for you
- `tasks.json` — machine-readable prioritized tasks
- `SOURCES.md` — external evidence used in the audit
- `07_CONTENT_EVIDENCE_POLICY.md` — mandatory evidence rules; no fabricated game facts
- `08_ENGAGEMENT_TOOLS_AND_YOUTUBE.md` — lightweight tools + YouTube modules for useful engagement

## Important: factual integrity

Before asking Cursor to create or expand any content page, make sure it reads `07_CONTENT_EVIDENCE_POLICY.md`.

The toolkit intentionally prefers **not publishing a page** over publishing a page with guessed Sell Ores data. New pages such as Ores, Mutations, Floors, Tier Lists, and calculators are conditional on reliable evidence being available.
