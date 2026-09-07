# SEO toolkit completion matrix (2026-09-07)

Toolkit: `docs/seo-toolkit/` (= Downloads `sellores_cursor_seo_toolkit`).

## tasks.json

| ID | Status | Notes |
|----|--------|-------|
| P0-000 Evidence policy | DONE | Ledgers for codes, pets, ores/floors/upgrades |
| P0-001 robots/sitemap/canonical | PARTIAL | Code OK; **www→apex still needs CF Redirect Rule**; CF AI bots Disallow is product choice |
| P0-002 Metadata rewrite | DONE | Spec titles incl. home with Ore Values |
| P0-003 Homepage task-first | DONE | Latest update card + task CTAs |
| P0-004 Code status model | DONE | |
| P0-005 Pets thin page | DONE | 50 roster + filters |
| P0-006 Beginner expand | DONE | Fill-slots section + checklist |
| P0-007 Updates newest-first | DONE | |
| P1-001 Codes interactions | DONE | Copy/redeemed/filter/search/hide |
| P1-002 Next-step links | DONE | |
| P1-003 Gears toolkit | DONE | |
| P1-004 Engagement tools | DONE | |
| P1-005 YouTube modules | DONE scaffold | Component + empty reviewed list; **IDs need human review** |
| P2-001 `/ores` | DONE | Single-source; blanks preserved |
| P2-002 `/mutations` | DONE | Cross-source multipliers |
| P2-003 `/upgrades` | DONE | Strategy labeled |
| P3-001 Image/schema/CWV polish | PARTIAL | dims + breadcrumbs fixed; CWV not lab-measured |
| MANUAL-001 GSC | BLOCKED | Property **not** in connected GSC account yet |

## Extra backlog shipped with evidence

| Route | Status |
|-------|--------|
| `/floors` | DONE (single-source) |
| `/guides/afk-money` | DONE (no invented $/hr) |

## Still requires you (manual)

1. Claim `sc-domain:sellores.site` (or URL prefix) in Google Search Console → submit `https://sellores.site/sitemap.xml` → URL Inspection on `/`, `/codes`, `/ores`, `/pets`, `/gears`, `/beginner`, `/updates`
2. Cloudflare Dashboard → Redirect Rules: `www.sellores.site` → `https://sellores.site` 301 (Pages `_redirects` host rules currently do not fire)
3. Optional GEO: AI Crawl Control allow GPTBot/ClaudeBot/Google-Extended if you want crawlers to match `llms.txt`
4. Paste reviewed YouTube IDs into `lib/youtube-reviewed.ts`
5. Spot-check ore/floor numbers in-game when you play; promote statuses only with recorded evidence
