# 07 — Content Evidence Policy (MANDATORY)

This file is a hard gate for every factual edit and every new page.

## Non-negotiable rule

**Never invent game facts to make a page look complete.**

This includes, but is not limited to:

- ore names
- ore values
- roll/drop odds
- rarity tiers
- pet names
- pet buffs
- pet counts
- fusion recipes or outcomes
- gear prices
- gear effects
- mutation multipliers
- floor unlock costs
- upgrade costs
- cooldowns
- rewards
- code status
- update dates
- player counts / visits / likes
- "tested in game" / "verified" claims
- formulas used by calculators

If reliable evidence is missing, **do not fill the gap with an estimate, pattern guess, competitor-looking number, or LLM-generated value.**

---

## Evidence levels

Every factual data point added by Cursor should fit one of these levels.

### Level A — First-party / strongest
Examples:
- game UI or in-game text captured/provided in the repo
- official Roblox game description
- official developer/group announcement
- official Discord announcement if already provided as source material
- official patch/update notes

Allowed label examples:
- `Official`
- `In-game source`

Do not write `In-game verified by us` unless the repo contains an explicit human test record.

### Level B — Cross-source public evidence
Use when 2+ reasonably recent, independent public sources agree.

Examples:
- two current guide sites list the same active code/reward
- multiple current sources agree on the same mechanic/value

Allowed label:
- `Cross-source`

Never silently upgrade this to `Official` or `In-game`.

### Level C — Single-source / needs caution
Only one credible public source is available.

Allowed handling:
- use only if the page genuinely benefits
- add a compact `Source status: single-source` note
- avoid absolute wording such as `always`, `exact`, `confirmed`, `all`

### Level D — Conflicted
Sources disagree.

Required handling:
- display `Conflicted` or omit the disputed numeric claim
- explain the conflict briefly if it materially affects the player
- never average conflicting numbers

### Level E — Unknown / not enough evidence
Required handling:
- do not publish a factual value
- use `Unknown`, `Needs verification`, or omit the field entirely
- keep the page in backlog if missing data makes the page thin

---

## New-page publication gate

A new SEO page may be created **only when it can be useful without invented facts**.

Before creating `/ores`, `/mutations`, `/upgrades`, `/floors`, a calculator, tier list, or other new route, Cursor must answer:

1. What distinct player question does this page answer?
2. Which facts are already supported by repository data or cited sources?
3. Is there enough supported content to make the main section genuinely useful?
4. Can the page still be useful if all unsupported numbers are removed?

If the answer to #3 or #4 is **no**:

> **Do not create/index the page. Leave it in backlog and add a TODO explaining the missing evidence.**

Do not create a thin page merely to occupy a keyword.

---

## Forbidden SEO behavior

Cursor must NOT:

- create placeholder/skeleton pages and index them
- fabricate tables from competitor layouts
- copy a competitor's numbers just because they look plausible
- infer missing game values from naming patterns
- generate "best" rankings without enough evidence/criteria
- write fake first-person testing language
- set `Last updated` to build/deploy time when content was not actually reviewed
- add a current month/year to titles if the underlying page has not actually been checked that month
- generate calculators with guessed formulas
- create `FAQPage`, Review, AggregateRating, or other structured data using invented content
- claim completeness (`All Pets`, `Complete Ore List`, `Every Mutation`) unless the dataset is demonstrably complete

---

## Strategy vs fact

Strategy content is allowed when it is clearly distinguished from game facts.

Good:
- `Strategy: prioritize the upgrade that removes your current bottleneck.`
- `Practical tip: if your drones are idle, buying more roll speed may not help.`

Bad:
- `Drill Speed is always the best first upgrade.`

unless there is sourced evidence or a transparent calculation proving it.

---

## How to handle missing content

Prefer one of these:

1. **Omit unsupported rows/fields.**
2. **Explain the system without precise numbers.**
3. **Show source-status badges.**
4. **Add a visible “Data still being verified” note.**
5. **Keep the route unpublished/backlogged.**

Never solve missing content by asking the LLM to "fill in realistic values".

---

## Source ledger requirement

For any new factual dataset or substantial factual section, add/update a small source ledger in the repo (JSON/TS/MD is fine) containing, where practical:

- fact/data group
- source URL or source identifier
- source type (`official`, `in-game`, `cross-source`, `single-source`)
- checked date
- notes/conflict status

The UI does not need to expose every URL, but the repository should make factual provenance auditable.

---

## Final safety check before commit

Search the diff for claims containing words such as:

`all`, `complete`, `confirmed`, `verified`, `exact`, `best`, `%`, `x`, `$`, `cost`, `odds`, `chance`, `multiplier`, `cooldown`, `working`, `active`, `expired`, `updated`

For each factual claim, verify evidence exists.

If evidence cannot be found, weaken/remove the claim before committing.
