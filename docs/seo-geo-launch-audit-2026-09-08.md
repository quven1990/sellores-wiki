# SEO / GEO 上线验收（2026-09-08）

依据：ShipSolo `seo-launch-workflow` v2.3.0  
生产站：`https://sellores.site`

## 当前结论

- 状态：`NEEDS_REVIEW`
- 代码与页面可以上线；SEO 核心检查通过。
- 两项外部配置仍待处理：`www` 未 301 到 apex、GSC 尚未认领。
- GEO 内容基础已完成，但 Cloudflare Managed robots 仍阻止主要 AI crawler。

## 已确认

- 13 个 indexable 页面均返回 200。
- 每页恰好一个 H1，title/description 唯一。
- 每页 self-canonical 指向 `https://sellores.site`。
- sitemap 为有效 XML，完整包含 13 个真实页面且无预览域名。
- `robots.txt`、`sitemap.xml`、`llms.txt`、favicon 均返回 200。
- JSON-LD 含 WebSite、Organization、WebPage、BreadcrumbList；Codes/Beginner 另有 FAQ/HowTo。
- GA4 `G-GGQY9W5MCT`、Clarity `yenkx7w44e`、Plausible `sellores.site` 已出现在生产 HTML。
- 三个分析脚本源均返回 200。
- TypeScript、production build、IDE lint 均通过。
- Google 字体改为仓库内自托管，构建不再依赖 Google Fonts 网络。
- `llms.txt` 有站点实体、页面地图、证据等级与引用注意事项。

## 阻塞 / 待人工配置

1. `https://www.sellores.site/` 当前返回 200；应在 Cloudflare Redirect Rules 配置 301 到 `https://sellores.site/`。
2. 当前 GSC API 可见的 5 个属性中没有 `sellores.site`；需先认领，再提交 `https://sellores.site/sitemap.xml`。
3. Cloudflare Managed robots 对 GPTBot、ClaudeBot、Google-Extended、Applebot-Extended 等返回 `Disallow: /`。若目标包含 GEO/AI 引用，应在 Cloudflare AI Crawl Control 放行 reference crawlers；保留 `ai-train=no`。

## 首周监控

- GSC：抓取/索引状态、canonical、impressions、queries。
- GA4/Plausible：landing pages、内部页跳转、代码页访问。
- Clarity：移动端误触、横向表格、首屏滚动。
- Cloudflare：404、5xx、缓存命中与 crawler 状态。

