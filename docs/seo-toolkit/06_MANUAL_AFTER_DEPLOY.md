# 06 — Manual Steps After Deploy

Cursor cannot complete these external checks for you.

## 1. Google Search Console — 5 to 10 minutes

After deployment:

1. Open URL Inspection for:
   - `/`
   - `/codes`
   - `/pets`
   - `/gears`
   - `/beginner`
   - `/updates`
2. Check whether each URL is indexable and what canonical Google sees.
3. Request indexing for the highest-value updated URLs if appropriate.
4. Submit/resubmit sitemap.

Important: the audit's search queries did not surface sellores.site pages, so do this first.

## 2. Search appearance baseline

Record Search Console baseline for each page:

- impressions
- clicks
- CTR
- average position
- top queries

Do not judge title changes by raw CTR alone; compare CTR at similar positions/query mix.

## 3. CTR test priority

Run title/snippet iteration on these first:

1. `/codes`
2. `/`
3. `/beginner`
4. `/gears`

Codes is most volatile and most freshness-sensitive.

## 4. User behavior checks

Use your analytics to observe:

- landing page → next internal page rate
- code copy interactions
- redeemed checklist use
- table filter use
- scroll depth as diagnostic only
- exits after first useful action

A user leaving after successfully copying a code is not necessarily a bad session.

## 5. Game-data verification

Manually resolve the most important current conflicts:

- ADMINMUTATION status/reward
- FRAGMENTS status/reward
- FINALE current status
- pet roster count/details
- any new patch after Sep 7

Update source-data timestamps only when you actually check/update the content.
