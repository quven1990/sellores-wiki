# 00 — Audit Summary

## Executive diagnosis

The site is clean and honest, but it currently behaves more like a **small launch hub** than the **best answer for Sell Ores players**.

The biggest opportunities are not “more SEO text.” They are:

1. Improve title/snippet copy so each result exactly matches a high-intent query.
2. Put the answer first and move verification caveats lower so the first screen feels useful, not defensive.
3. Remove/finish placeholder-like pages, especially Pets and Updates.
4. Add missing high-intent entities/tasks: Ores, Mutations, Upgrades, Floors/Fuser, AFK/Money.
5. Add small interactive utilities that make the site more useful than a static article.
6. Make internal navigation task-based so every page has an obvious useful next click.
7. Verify indexing immediately; the audit's exact-domain/site searches did not surface sellores.site pages, while multiple competitors surfaced.

---

# P0 findings

## P0-1 — Search visibility/indexing needs verification now

During this audit, exact-domain/site queries did not return sellores.site pages in the search results used for research, although direct page fetches work.

This may simply be because the domain/pages are very new, but do not assume indexing is fine.

### Cursor action

Verify/generate:

- `/robots.txt`
- `/sitemap.xml` (or framework equivalent)
- self-referencing canonical on every indexable page
- no accidental `noindex`
- no environment/staging canonical
- no duplicate http/www/trailing-slash URL variants
- sitemap contains every intended indexable URL
- sitemap `lastmod` changes only when content materially changes

### Manual action after deploy

Use Google Search Console URL Inspection on `/`, `/codes`, `/pets`, `/gears`, `/beginner`, `/updates`; submit sitemap.

---

## P0-2 — Homepage first screen is too cautious and not useful enough

Observed homepage structure:

- H1: `Sell Ores Wiki`
- opening copy asks whether the user needs codes, pet buffs, or the game loop
- hero contains `Open codes`, `Beginner loop`, and `Play on Roblox`
- immediately after that, the page tells users to confirm Place ID and warns that codes are media-reported/unverified

The verification policy is good, but putting it this early makes the page feel like a disclaimer before it feels like a solution.

### Fix

Above the fold should answer:

- What can I get here?
- Is it current?
- What should I click first?

Move detailed verification methodology below the first task cards/table.

Recommended trust strip:

`Updated Sep 7, 2026 · Working codes · Gear prices · Beginner route · Source status shown per table`

Do not claim “verified in-game” unless it really was.

---

## P0-3 — Codes page is currently behind fresher public consensus

Current site page places `ADMINMUTATION` and `FRAGMENTS` in unconfirmed/conflicted.

Multiple recent sources currently list them as active, including Pro Game Guides (Sep 1) and Destructoid (Sep 6). Pocket Tactics also lists them. `FINALE` is genuinely conflicted because current coverage itself is inconsistent, so keeping it in a conflict bucket is reasonable.

### Fix

Create clearer statuses:

- `Confirmed in-game` — only if you personally/test automation confirms
- `Cross-source active` — 2+ reputable recent sources agree
- `Conflicted` — recent sources disagree
- `Expired` — reliable recent consensus

As of audit date, the page should at least re-evaluate:

- ADMINMUTATION
- FRAGMENTS
- ROBLOXSERVERS
- ALMIGHTY
- SORRYFORDATA
- BALANCE
- PETFUSION
- EXPANSION
- RELEASE
- FINALE (keep conflict until resolved)

Do not fabricate a working-code count unless the data source is updated with the page.

---

## P0-4 — Pets page looks like a placeholder

Current Pets page says named pet/drop-rate tables are intentionally a skeleton and then lists only generic buff categories such as Yield, Drill speed, Luck, Timed mutation, Instant grow. Most rows say `Verified in-game: no`.

This is transparent, but it does not satisfy the likely query `Sell Ores pets`.

Competitors currently expose much richer rosters (one search result presents 50 documented entries and acknowledges the 50-vs-51 conflict).

### Fix options

Preferred: complete the page with a sourced roster and useful filters.

If data cannot be responsibly assembled yet, do **not** pretend the page is complete. Either:

- quickly replace the skeleton with a useful “Pet system + fusion + known roster/status” page, or
- temporarily keep it out of the primary nav/index until it provides real value.

Do not publish dozens of unknown rows just to look complete.

---

## P0-5 — Beginner page is too shallow and contains repeated copy

The sentence about roll/place happening at base pedestals is repeated in adjacent steps.

The current guide explains the loop but not enough of the questions players actually use a beginner guide to answer:

- what to buy first
- what not to buy
- when to unlock the next floor
- what to do with code rewards
- what bottleneck to upgrade
- AFK/offline behavior
- common mistakes

### Fix

Turn this into a **first 30 minutes / first hour** route with decision points.

---

## P0-6 — Updates page is thin and chronology is confusing

Current entries are ordered Sep 1, then Sep 6, then Ongoing. That is not natural for an update log.

Only a handful of entries are present, and the page does not provide enough “what changed for me?” value.

### Fix

Newest first. Each update card should contain:

- date
- update/event name
- what changed
- affected pages (Codes / Pets / Gears / Fuser)
- player impact
- source status
- links to the affected guide pages

---

# P1 findings: CTR

## Current page titles observed

- Home: `Sell Ores Wiki - Codes, Pets, Gears & Guide`
- Codes: `Sell Ores Codes (Sep 2026) - List & Redeem`
- Pets: `Sell Ores Pets - Lucky Blocks & Buff Types`
- Gears: `Sell Ores Gears - Gems, Coatings & Costs`
- Beginner: `Sell Ores Beginner Guide - Roll, Drill, Sell`
- Updates: `Sell Ores Updates - Patches & Code Drops`

These are clean but mostly generic. Improve them by combining:

**exact query + freshness + specific payoff**.

Recommended replacements are in `02_PAGE_SPECS.md`.

### CTR rules

- Primary keyword near the start.
- One clear differentiator, not a list of every keyword.
- Use month/year on volatile pages (codes/updates), not necessarily every evergreen page.
- Avoid stale numeric claims in titles unless the number is automatically tied to page data.
- Meta descriptions should describe the actual page and include the reason to click.
- H1 and `<title>` should be aligned, not identical by force.

---

# P1 findings: engagement / useful session depth

## Static pages need small tools

The strongest competitors are not only longer; some have search/filter tools, calculators, checklists, and databases.

You do not need to clone them. Add cheap, client-side interactions:

### Codes

- Copy button with visible `Copied` state
- `Mark redeemed` localStorage checkbox
- Active / conflicted / expired filter
- last checked timestamp

### Gears

- Type filter: Growth Gem / Coating / Cleanser
- wallet input: “I have $___” → show affordable gear + next target
- sort by price/multiplier

### Pets

- search by pet name
- filter by buff type/tier
- show source/status per row

### Beginner

- `First 30 minutes` checklist stored in localStorage
- “What should I upgrade next?” decision cards

### Home

- task cards ordered by player intent
- “Most used now” section: Codes / Best upgrade order / Ores / Pets
- small site search if the content set becomes large enough

---

# P1 findings: topical coverage gap

Current SERP competitors cover far more of the player journey, including:

- ore index / values / odds
- mutations
- upgrades
- floors/unlocks
- Fuser / Mega Ores
- AFK/offline money
- pet tier/roster
- gear buy order
- calculators

Do not create all of these at once. Priority is in `03_NEW_PAGE_BACKLOG.md`.

---

# P1 findings: trust presentation

The site repeatedly uses phrases such as `Verified: no` and `reported/unverified`.

Honesty is good; repetitive negative labels are not the best UX.

Replace with a compact, consistent evidence system:

- Green: `In-game checked`
- Blue: `Cross-source`
- Amber: `Conflicted`
- Gray: `Needs check`

Add one short explainer tooltip/modal. Do not repeat a paragraph of caveat under every item.

---

# P2 — Information architecture recommendation

Recommended primary navigation after content exists:

- Codes
- Ores
- Pets
- Gears
- Mutations
- Guides
- Updates

Inside Guides:

- Beginner
- Upgrades
- Floors & Unlocks
- Fuser & Mega Ores
- AFK / Money

Do not add nav items before the page is useful.

---

# What NOT to do

- Do not add 50 AI-written 300-word pages.
- Do not fake “verified” gameplay data.
- Do not stuff titles with `Roblox Wiki Codes Guide Pets Ores 2026`.
- Do not add intrusive popups just to increase session time.
- Do not block content behind clicks/accordions without UX reason.
- Do not refresh `lastmod`/“updated today” automatically if content did not materially change.
- Do not add fake author bios or fake testing claims.
