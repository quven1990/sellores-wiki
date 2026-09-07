# 05 — Acceptance Checklist

The Cursor job is complete only when these are satisfied.

## Build quality

- [ ] Production build succeeds.
- [ ] Lint succeeds or pre-existing failures are clearly separated.
- [ ] Tests succeed where present.
- [ ] No new console errors on main routes.

## P0 content/SEO

- [ ] Home metadata updated.
- [ ] Codes metadata updated.
- [ ] Pets metadata matches actual completeness.
- [ ] Gears metadata updated.
- [ ] Beginner metadata updated.
- [ ] Updates metadata updated.
- [ ] Home hero answers user intent before long caveats.
- [ ] Beginner duplicate copy removed.
- [ ] Updates sorted newest-first.
- [ ] Code status model supports in-game/cross-source/conflicted/expired/needs-check.
- [ ] No code was falsely upgraded to in-game verified.

## Engagement

- [ ] Codes copy feedback works.
- [ ] Codes redeemed state persists locally.
- [ ] Codes filter works.
- [ ] Beginner checklist works if implemented.
- [ ] Gears filters/sort work if implemented.
- [ ] Every content page has 2–4 useful next-step internal links.

## Technical SEO

- [ ] robots reachable/valid.
- [ ] sitemap reachable/valid.
- [ ] canonical tags correct.
- [ ] no accidental noindex.
- [ ] no staging hostname leaked.
- [ ] unique page titles/descriptions.
- [ ] one H1 per page.
- [ ] no broken internal routes.

## Data integrity

- [ ] `07_CONTENT_EVIDENCE_POLICY.md` was followed for every factual edit/new page.
- [ ] No new page was published merely to target a keyword.
- [ ] Every new factual dataset has traceable source/provenance in repo or existing source material.
- [ ] No unsupported ore values, odds, pet stats, multipliers, upgrade costs, floor costs, cooldowns, rewards, counts, or formulas were added.
- [ ] No completeness claim (`all`, `complete`, exact count) exists without evidence that the dataset is complete.
- [ ] No current date/month freshness claim was generated from build time alone.
- [ ] No calculator/tier list was created from guessed formulas or guessed rankings.
- [ ] No invented game facts.
- [ ] No invented first-person test claims.
- [ ] `Last checked` comes from content data, not build time.
- [ ] “updated” dates represent real content changes.
- [ ] Strategy/opinion is labeled separately from sourced facts where needed.

## UX

- [ ] primary content visible quickly on mobile.
- [ ] tables usable on small screens.
- [ ] images have dimensions/aspect ratio.
- [ ] below-fold images lazy-load.
- [ ] no intrusive popup/interstitial.

## Tools + YouTube engagement

- [ ] Engagement work follows `08_ENGAGEMENT_TOOLS_AND_YOUTUBE.md`.
- [ ] Tools directly help a user task and do not depend on fabricated game data.
- [ ] Codes table remains above any optional codes video.
- [ ] Beginner quick answer/checklist remains above any optional beginner video.
- [ ] No YouTube autoplay.
- [ ] No invented YouTube video IDs, titles, creators, view counts, or claims.
- [ ] Videos render only from manually reviewed/source-backed video data.
- [ ] If reviewed video data is empty, the module cleanly renders nothing.
- [ ] YouTube is click-to-load/lazy-loaded where practical and does not create CLS.
- [ ] Core answers remain indexable text rather than video-only content.
- [ ] Core Web Vitals are rechecked after video work.
