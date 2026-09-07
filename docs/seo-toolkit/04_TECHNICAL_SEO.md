# 04 — Technical SEO Checklist

Cursor should inspect the actual implementation and adapt these checks to the framework.

## Crawl / Index

- [ ] Production root returns 200.
- [ ] Intended pages return 200, not soft 404.
- [ ] `robots.txt` is reachable.
- [ ] `robots.txt` does not block public content or required JS/CSS.
- [ ] sitemap is reachable and valid XML.
- [ ] sitemap lists canonical production URLs only.
- [ ] no staging/preview URLs in sitemap.
- [ ] no accidental `noindex` on content pages.
- [ ] canonical URL is self-referencing.
- [ ] canonical protocol/host are `https://sellores.site`.
- [ ] one URL style for trailing slash.
- [ ] redirect non-canonical host/protocol variants permanently.

## Metadata

- [ ] unique `<title>` per route.
- [ ] unique meta description per route.
- [ ] H1 aligns with page intent.
- [ ] Open Graph title/description/url/image.
- [ ] Twitter card if supported.
- [ ] site name consistently `Sell Ores Wiki`.

## Internal architecture

- [ ] all primary pages linked from a crawlable HTML nav or hub.
- [ ] no JS-only invisible navigation requirement.
- [ ] breadcrumbs on inner pages.
- [ ] related/next links use descriptive anchor text.
- [ ] no broken internal links.

## Structured data

Conservative only:

- [ ] `WebSite` on home (if framework patterns support it).
- [ ] `BreadcrumbList` on inner pages.
- [ ] `Article` on actual guide/editorial pages with genuine dates/author only.
- [ ] no fake ratings/reviews.
- [ ] no misleading `dateModified` that updates every build.

## Performance / Core Web Vitals

Targets for real-world UX:

- LCP: <= 2.5s
- INP: <= 200ms
- CLS: <= 0.1

Implementation checks:

- [ ] set image dimensions/aspect ratio.
- [ ] optimize/LCP-preload only the actual above-fold critical image if needed.
- [ ] lazy-load below-fold images.
- [ ] avoid giant client JS bundles for static content.
- [ ] avoid blocking third-party scripts.
- [ ] avoid layout shift from fonts/buttons/images.
- [ ] keep interactive filters cheap and local.

## Mobile UX

- [ ] code copy buttons >= comfortable touch target.
- [ ] dense tables scroll horizontally without breaking layout.
- [ ] no fixed overlay hiding content.
- [ ] headings and intro fit small screens.
- [ ] external Play Roblox CTA does not dominate over content tasks.

## Image SEO / UX

Replace awkward or keyword-stuffed alt text with natural descriptions.

Examples:

Bad:
`Sell Ores Reality Ore sell panel in-game`

Better:
`Sell Ores in-game sell station and ore panel`

Bad:
`Sell Ores coal versus Crystalite drone mining comparison`

Better:
`Coal and Crystalite ores being mined by Sell Ores drones`

Do not add `Sell Ores Roblox` to every alt attribute.
