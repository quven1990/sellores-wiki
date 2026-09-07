# 08 — Engagement Plan: Lightweight Tools + YouTube

Goal: increase real user usefulness and natural session depth without manufacturing "dwell time" or slowing the site.

## Non-negotiable rules

1. Do not add interaction purely to trap users on the page.
2. Every tool must help the user finish a Sell Ores task faster.
3. Every YouTube video must be strongly relevant to the page intent.
4. Do not invent video claims, titles, creator names, stats, timestamps, or game facts.
5. Store YouTube videos in a small reviewed data file. Only embed IDs/URLs manually reviewed by the site owner or backed by an explicit source record.
6. Do not autoplay.
7. Do not load full YouTube iframes above the fold.
8. Prefer click-to-load/lite embeds so third-party scripts do not hurt LCP/INP/CLS.
9. Video modules are supplementary. Core answers must remain available as text/table content for users and search engines.
10. If there is no genuinely useful video for a page, omit the module.

---

# A. Lightweight tool roadmap

## P1 — Codes utility

Page: `/codes`

Implement:
- one-click Copy button
- visible `Copied` feedback
- localStorage `redeemed` toggle
- filters for source/status
- `Hide redeemed` option
- optional text search when code count becomes large

Why it helps:
- immediate task completion
- repeat visits have continuity
- encourages users to inspect more than one code without forcing them to stay

Do not:
- fabricate redemption success
- call `cross-source` codes `verified in game`

---

## P1 — Beginner first-session checklist

Page: `/beginner`

Implement a localStorage checklist based only on existing/sourced guide steps.

Suggested UI sections:
- First 5 minutes
- First 30 minutes
- Next progression step

Examples of checklist labels may only be used if supported by the page's sourced content.

Useful behaviors:
- `Reset checklist`
- progress indicator such as `3 / 6 complete`
- contextual link beside a task, e.g. `Redeem codes →`

No login required.

---

## P1 — Gear affordability/filter helper

Page: `/gears`

Only if reliable gear-price data already exists.

Implement:
- type filter
- sort by price
- optional wallet/budget input
- highlight rows affordable under entered budget
- `Next target` may be shown only as a mathematical result from sourced prices, not as an invented strategy recommendation

If buy-order strategy is editorial, label it `Strategy` and keep sourced facts separate.

---

## P2 — Ore / mutation tools

Only build after reliable source-backed data exists.

Possible lightweight utilities:
- ore search/filter
- sort by documented base value
- mutation filter
- simple value calculator ONLY when the exact formula/multiplier is source-backed

Never reverse-engineer or guess formulas to create an SEO calculator.

---

## P2 — Update impact finder

Page: `/updates`

If update history grows enough:
- filter by `Codes`, `Pets`, `Gears`, `Floors`, etc.
- search update titles/summaries
- each update points to affected guide pages

This creates useful navigation rather than artificial page length.

---

# B. YouTube content strategy

## Best placements

### `/beginner` — HIGH priority

Place one strongly relevant beginner/gameplay video after the text-based first-session quick answer/checklist, not before it.

Suggested module heading:
`Watch a Sell Ores beginner walkthrough`

Supporting copy:
`Prefer video? This walkthrough complements the written steps above.`

Reason:
- beginner intent is highly visual
- users often want to see the actual loop/UI after reading the quick answer

### `/pets` or fusion guide — MEDIUM/HIGH priority

Only when a video clearly demonstrates pet/fusion mechanics matching the page.

Suggested heading:
`See the pet/fusion system in-game`

Do not use a generic gameplay video just to fill space.

### `/updates` — MEDIUM priority

For a major update, optionally attach a specific update showcase/trailer.

Video must correspond to that update. Do not attach one global video to every entry.

### `/gears` — MEDIUM priority

Only when a useful gear/progression demonstration exists. The price/effect table remains the primary content.

### `/codes` — LOW priority

Do NOT place a video above the codes table. Users searching codes want the codes immediately.

If a relevant redeem tutorial is useful, place it below the code table/FAQ or omit it entirely.

### Homepage — LOW priority

Do not put a heavy player in the hero.

If needed, use a compact `Watch gameplay` card below the primary task cards and latest useful content.

---

# C. YouTube implementation requirements

## Use a reviewed video data model

Create something similar to:

```ts
export type ReviewedYoutubeVideo = {
  id: string;
  page: string;
  videoId: string;
  url: string;
  title: string;
  creator?: string;
  purpose: string;
  reviewedAt: string;
  sourceNote?: string;
};
```

Important:
- populate only with manually reviewed/current values
- do not ask the model to manufacture a plausible YouTube ID
- if the repo has no reviewed video IDs, implement the component and leave the data list empty
- an empty list must render nothing, not a placeholder video

## Performance

Preferred order:
1. thumbnail/placeholder card
2. load iframe only after click
3. use `youtube-nocookie.com` where practical
4. explicit width/height or aspect-ratio wrapper to prevent CLS
5. lazy-load below-fold media
6. no autoplay
7. one embedded player visible at a time when multiple videos exist

Avoid loading the full YouTube JS/player on initial render for every video card.

## Accessibility

- descriptive button/iframe title
- keyboard accessible play control
- visible focus state
- do not rely on thumbnail text as the only description

---

# D. Recommended page engagement order

Do not optimize by making pages unnecessarily long. Use this sequence:

1. Query answer immediately
2. Core table/tool/checklist
3. Explanation/strategy
4. Optional strongly relevant YouTube module
5. FAQ / deeper detail
6. `Next useful step` internal links

This should create a natural path:

Google → answer → interact → optionally watch → continue to another relevant page

---

# E. Metrics to watch after deploy

Use Search Console / analytics if available. Do not assume engagement improvements automatically improve ranking.

Track by page:
- Search CTR
- organic clicks/impressions
- video play rate
- tool interaction rate
- internal-link click-through rate
- pages/session or next-page rate
- return visits to Codes/Updates
- Core Web Vitals after video components ship

Treat a YouTube module as successful only when it is used and does not materially damage page speed.

