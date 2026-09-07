# Sell Ores Wiki — ShipSolo 全站复验（2026-09-07 晚）

Skills：`student-site-qa-acceptance` / `seo-launch-workflow` / `student-site-compliance-pipeline` / `frontend-site-automation` / `site-copywriting-student` / `site-ops-growth-launch`  
生产 URL：**https://sellores.site**  
源码：`/Users/xuehao/Sites/sea/sellores-wiki` · GitHub：`quven1990/sellores-wiki`  
Pages 项目：`sellores-wiki` → `sellores-wiki-dsz.pages.dev`  
当前生产部署 Source commit：`311e7f0`（HEAD `acd1202` 仅加 CI workflow，内容与线上一致）

## 结论

**CONDITIONAL_GO**

- **可以**：内部试用、软上线观察、继续补内容；apex `https://sellores.site` 已可访问，核心 Codes 任务可完成。
- **不能给完整 GO / 不能冷启动外发**：ShipSolo 硬闸门仍缺上游文档与 Owner Review；GSC/Bing 未接入；`www` 证书校验仍 pending；Pets 仍为骨架。

对比早间审计：原 SEO 技术 P0（JSON-LD / og:image / llms.txt / Reported 口径 / 域名未部署）**已关闭**。

## 分技能得分（0–10）

| Skill | 分 | 一句话 |
|---|---|---|
| student-site-qa-acceptance | 8 | 生产 8 路由 200；Codes/Beginner 任务 PASS；Pets 任务 FAIL |
| frontend-site-automation | 8 | 已 commit+push+deploy+smoke；移动端 CTA/卡片可用；缺品牌化 404 |
| seo-launch-workflow | 7 | schema/canonical/og/llms/sitemap 齐；GSC 未认领；www pending；CF Managed robots 挡 AI bot |
| student-site-compliance-pipeline | 7 | Privacy/Terms/免责齐全；无 analytics cookie；缺联系邮箱与独立 Cookie 页 |
| site-copywriting-student | 7 | Reported 口径对齐；首页 dense codes 无 status 徽章；Pets 薄 |
| site-design-student | 6 | 线上视觉可用；仍无 Visual Style Rationale / handoff 包 |
| site-ops-growth-launch | 2 | 未达外发门槛；无目录/社区提交 |
| product-definition-prd / orchestrator | 2 | 仍无 PRD / SEO-Copy Freeze / project-control |
| site-pricing-calibration | N/A | 信息站 |
| backend-auto-site | N/A | 纯静态 |
| site-data-review-iteration | N/A | 无埋点/无 GSC |

## 生产实查证据

| 检查项 | 结果 |
|---|---|
| `https://sellores.site/` | **200**，H1=`Sell Ores Wiki`，canonical 正确 |
| `/codes` `/gears` `/beginner` `/updates` `/privacy` `/terms` | **200** |
| `/pets` | **200** + `noindex, follow`；robots Disallow；不在 sitemap |
| `/sitemap.xml` | 7 URLs，无 `/pets` |
| `/robots.txt` | 含 CF Managed Content-Signal + 站点 `Disallow: /pets` + Sitemap |
| `/llms.txt` `/brand/og.png` | **200**；llms 与仓库 hash 一致 |
| JSON-LD | 全站 WebSite/Organization/WebPage/Breadcrumb；`/codes` +FAQ/HowTo/ItemList；`/beginner` +HowTo |
| og:image | `https://sellores.site/brand/og.png` 1200×630 |
| HTTP→HTTPS | **301** → `https://sellores.site/` |
| 404 `/not-a-page` | **404** + robots noindex（默认 Next 文案） |
| Pages 自定义域 | `sellores.site` **active**；`www.sellores.site` **pending**（validation） |
| GSC properties | 当前账号 **无** `sellores.site` |
| 移动首屏截图 | 汉堡菜单 + 全宽 CTA + Place ID callout 可见 |

### 用户任务

| 任务 | 结果 |
|---|---|
| 首页进 Codes / 复制码 | PASS（生产有 Copy 按钮与 reported 列表） |
| 兑换步骤 | PASS（Settings → Codes → Redeem） |
| Beginner 循环 | PASS |
| Pets 完整表 | **FAIL**（骨架 + noindex） |
| Privacy/Terms footer | PASS |
| 高风险「保证可用/官方 wiki」 | PASS（未见）；「Official Discord」仅为来源 |

## P0（阻断完整 GO / 外发）

1. **上游硬闸门文档缺失**：无 PRD / Route Contract / SEO-Copy Freeze / 设计 handoff / `project-control.md`（orchestrator 要求）。
2. **未做 Owner Review Gate**：无书面确认可公开发布。
3. **`www.sellores.site` 仍 pending**（apex 已 active）。应用 www→apex 301 或完成证书激活，避免双域分裂。

> 注：若只做「软上线观察 apex」，P0-1/2 可记为流程债；技术上 apex 已可访问。完整 ShipSolo GO 仍需补齐。

## P1（修完再复测）

1. **GSC / Bing 未认领**，sitemap 未提交。
2. **`/pets` 骨架仍在主导航**（虽 noindex）：补实体表或降导航权重/改为 Coming soon。
3. **Privacy 无公开联系邮箱**；仍有「later analytics」假设句。
4. **首页 codes dense 预览无 status 列**，与 Reported 口径弱对齐。
5. **CF Managed robots 屏蔽 GPTBot/ClaudeBot 等**，与 `llms.txt` GEO 意图冲突——需产品决定是否放行 AI 抓取。
6. **GitHub Actions deploy** 曾因 token 权限失败；需确认 secret 具备 Pages Edit，保证「同 commit 再部署」闭环。
7. **生产部署 Source 停在 `311e7f0`**：后续内容改动需再 `pnpm deploy` 或修好 CI。

## P2（可上线后跟）

1. 品牌化 `not-found` 页 + 回首页 CTA  
2. 移动菜单补 Privacy/Terms  
3. Terms 补 fan-guide 截图/素材使用句  
4. 无独立 Cookie 页（当前无 cookie 可暂缓）  
5. Gears 全部 `verifiedInGame: false` 需 spot-check  
6. 首页 description ~156 字符略长，可压到 ≤155  
7. 埋点（Plausible/GA4）未装——与 Privacy「无 analytics cookies」一致，装之前先改 Privacy  

## 相对早间审计的关闭项

| 原 P0/P1 | 现状 |
|---|---|
| 无 JSON-LD | **已关闭**（生产可解析） |
| 无 og:image | **已关闭** |
| 无 llms.txt | **已关闭** |
| meta Working vs Reported | **已关闭** |
| 域名未部署 | **apex 已关闭**；www 仍 pending |
| pets 索引风险 | **已缓解**（noindex + robots + 出 sitemap） |

## 验收清单自检

- [x] 生产 URL 可访问（apex）
- [x] commit + push + deploy 证据存在
- [x] 核心页 title/H1/meta/canonical/schema
- [x] sitemap 不含 noindex 页
- [x] 移动端首屏可操作
- [ ] GSC 验证 + sitemap 提交
- [ ] www 激活或强制跳转
- [ ] Owner Review 签字
- [ ] 上游 PRD / SEO-Copy Freeze 补档（或书面豁免）

## 下游交接

- **可做**：补 Pets 表、Privacy 邮箱、www 跳转、GSC 认领、品牌 404。  
- **不可做**（需学员确认）：目录站投稿、社区发帖、付费外链、IndexNow 群发。  
- **建议下一动作排序**：① www→apex 301 ② GSC ③ Pets 内容或降权 ④ 流程文档补档后 Owner Review → 再谈冷启动。
