# Sell Ores Wiki — ShipSolo 全站验收（2026-09-07）

Skills 来源：`~/.hermes/skills/shipsolo`（安装版 `2026.06.05.1`）  
站点：`/Users/xuehao/Sites/sea/sellores-wiki`  
预览：`http://localhost:3456`｜生产域名：**https://sellores.site**（已确定）

## 结论

**CONDITIONAL_GO（本地可继续开发，不可正式公开发布）**

按 ShipSolo 硬闸门：schema / 生产证据 / 上游文档未齐 → 不能给 `GO`。

## 分技能得分（0–10）

| Skill | 分 | 一句话 |
|---|---|---|
| student-site-qa-acceptance | 8 | 8 路由 200、H1 唯一、Codes 任务可完成 |
| frontend-site-automation | 7 | 构建通过、移动端已修；缺 schema/埋点/部署 |
| seo-launch-workflow | 4 | 有矩阵/robots/sitemap；缺 JSON-LD、og:image、llms.txt、GSC |
| student-site-compliance-pipeline | 6 | Privacy/Terms/免责有；Cookie 页与素材口径偏弱 |
| site-copywriting-student | 6 | 主词文案齐；Pets 薄、meta「Working」与 Reported 不一致 |
| site-design-student | 6 | 已贴游戏色与实机图；无 Visual Style Rationale / handoff 包 |
| site-ops-growth-launch | 1 | 未部署、无外链计划、无 IndexNow/GSC |
| product-definition-prd / orchestrator | 1 | 无 PRD、无 project-control、无 SEO-Copy Freeze 文件 |
| site-pricing-calibration | N/A | 信息站无付费（可跳过） |
| backend-auto-site | N/A | 纯静态（可跳过） |
| site-data-review-iteration | N/A | 未上线（可跳过） |

## 用户任务抽检（QA）

| 任务 | 结果 |
|---|---|
| 打开首页并进 Codes | PASS |
| 复制兑换码 | PASS（Copy 按钮） |
| 按步骤兑换说明 | PASS（How to redeem） |
| 看 Beginner 循环 + 实机图 | PASS |
| 看 Gears 价格表 | PASS（桌面表 / 移动卡片） |
| 看 Pets 完整实体表 | FAIL / 骨架 |
| Privacy / Terms 可从 footer 进 | PASS |
| 404 | PASS（`/nope` → 404） |
| `pnpm build` | PASS（生产 canonical 现应对齐 `https://sellores.site`） |

## P0（阻断上线）

1. **无 JSON-LD schema**（WebSite / WebPage / BreadcrumbList / FAQPage / HowTo）— frontend + SEO 均视为 P0 表面  
2. **域名未购买 / 未部署** — 无生产 URL 证据，GSC/HTTPS 无法验收  
3. **上游闸门文档缺失** — 无 PRD、SEO-Copy Freeze、设计 handoff、`project-control.md`

## P1（修完再复测）

1. 无 `og:image` / `twitter:image`（却声明 `summary_large_image`）  
2. 无 `public/llms.txt`（GEO；对比 merge-a-nuke 有）  
3. `/pets` 薄内容（自承 skeleton）— 索引污染风险  
4. 首页 meta「Working Sell Ores codes」与正文 Reported 口径冲突  
5. Privacy 联系邮箱占位；无 Cookie 页（当前无埋点可暂缓，但要写清「无 Cookie」）  
6. sitemap 含 privacy/terms 优先级偏高（可降到 0.3）

## P2（可上线后跟）

1. 移动菜单未链 Privacy/Terms（footer 有）  
2. 无 GA4/Clarity/Plausible 实现（与「later」草案一致）  
3. title/desc 长度未全部落在理想区间  
4. 游戏宣传素材使用：Terms 有通用 IP 声明，建议加一句「screenshots used under fair-use fan guide」

## 合规速览

- Fan disclaimer：有（footer + terms）  
- Place ID 防串：有  
- 高风险「保证/官方合作/必火」：未见  
- 「Official Discord」属来源描述，可保留  
- Cookie/分析：未上线埋点；Privacy 写了假设句，需在上线前改成事实口径

## 流水线缺口（Orchestrator）

硬闸门要求顺序：关键词 → PRD → 定价/合规 → SEO-Copy Freeze → 设计真源 → 实现 → SEO/合规复核 → QA → Owner Review → Launch  

当前实际：研究报告 + 直接前端实现。缺文件：

- `docs/02-prd.md` / Route Contract  
- `docs/05-seo-copy-freeze.md`  
- 设计 Visual Style Rationale + handoff  
- `project-control.md` / Kanban  

研究侧已有：`../research/runs/2026-09-07-sell-ores/{report,site-brief,site-copy}.md`

## 下一步（按优先级）

1. 补 schema + og:image + llms.txt + meta 口径  
2. 充实 `/pets` 或暂时 `noindex`  
3. 买域名 → Cloudflare Pages 部署 → GSC/Bing  
4. 回填最小 docs（PRD 一页纸 + SEO freeze + project-control）  
5. Owner Review 后再公开发布

---

状态标签：**[NEEDS_REVIEW]**（本地 CONDITIONAL_GO；公开发布 NO_GO）
