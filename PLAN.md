# PLAN.md

> 基于 `me2021-main` 项目，按用户确认的决策（保留原字体、保留右侧 Spline iframe、作品详情使用外部链接、支持移动端访问、上线时间暂无）制定的精确实施清单与 PR 模板。

---

## 一、概览

目标：在保留原站视觉与交互特色（光效、配色风格、3D iframe）的基础上，替换为你的个人信息与作品，完善响应式、性能、可访问性，并准备可部署的静态站点。

输出物：更新后的代码分支 `feat/portfolio-yourname`、`index.html` 与 `css/*`、`js/*` 的具体修改、资源优化、`PLAN.md`（本文件）、PR 模板与部署说明。


## 二、确认的项目决策（已确认）
1. 字体：保留 `Noto Serif SC`（在 `index.html` 中的 Google Fonts 引入）。
2. 右侧 3D：保留 `Spline` iframe（`index.html` 中 `.fsright iframe`）。
3. 作品详情：保持为外部链接（Figma / 站酷 / Unsplash 等）。
4. 移动端：支持访问并进行断点优化（`css/index.css`）。
5. 上线时间：未定，按合理工作计划推进。


## 三、实施清单（逐项细化到文件级）

注意：所有变更在新分支 `feat/portfolio-yourname` 上进行，变更完成后发起 PR -> `main`。

### 1) 仓库备份与分支（执行者）
- 操作：在本地/远程备份当前 `main` 分支；创建并切换到 `feat/portfolio-yourname`。
- 命令参考（Windows PowerShell）:

```powershell
git checkout -b feat/portfolio-yourname
git push -u origin feat/portfolio-yourname
```


### 2) 收集素材（你负责提供，或我用占位符）
- 需要：名字、简介、头像/Logo（PNG/SVG）、简历 PDF、至少4个作品（每个含：标题、类别、描述、封面图、外链）、社交链接、首屏替代图（如不换Spline）。


### 3) 修改 `index.html`（P0）
- 文件路径：`index.html`
- 修改点（逐项）：
  - <title>：替换为你的个人页标题。
  - meta description / keywords：替换为与你相关的SEO信息。
  - 导航栏：把 `下载简历&作品集` 按钮的 `href` 指向你的简历（例如 `assets/yourname_resume.pdf` 或外链）。
  - 首屏文本：在 `.fsleft` 区域替换姓名、个人简介与副标题。
  - 社交链接：替换多处 `a` 标签的 `href` 为你的社交链接（Twitter、Figma、站酷、微博、Unsplash、邮箱等），并更新二维码图片（`image/mecode.png`, `image/subcode.png`）。
  - 作品卡：替换四个 `.portfoliocard` 的图片类（或新增 `img`），标题、描述与外链（保留 `a target="_blank"`）。
  - 视频/iframe：保留 `.fsright iframe`（Spline），如要替换请把 `src` 修改为你的 Spline 链接或其他 URL。
  - 图片 `alt`：为所有静态图片添加或更新 `alt` 文本。

- 验收：本地打开 `index.html` 可见你的信息与作品卡（外链可点开）。


### 4) 视觉主题化与 CSS 改造（P0/P1）
- 文件路径：`css/index.css`、`css/base.css`（少量修改）。
- 修改点：
  - 在 `css/index.css` 顶部新增 CSS 变量：

```css
:root {
  --primary-color: #F3C03D; /* 示例，按需替换 */
  --accent-color: #c81623;
  --bg-color: #fff;
  --text-color: #666;
}
```

  - 保留 Google 字体导入；确保 `body` font-family 保持 `Noto Serif SC` 为首选。
  - 将硬编码颜色替换为变量引用（优先替换主色与重点色）。
  - 响应式断点：
    - `@media (max-width: 1200px) { .w { width: 100%; padding: 0 20px; } }`
    - `@media (max-width: 768px) { .firstScreen { height: auto; } .fsleft, .fsright { width: 100%; float: none; } }`
  - 导航在移动端：简易方案为隐藏右侧按钮并把下载按钮放入顶部；可选后续实现汉堡菜单。

- 验收：调整窗口宽度测试主要断点，首屏左右列在 768px 下纵向堆叠。


### 5) 交互脚本优化（P1）
- 文件路径：`js/effect.js`
- 修改点：
  - 用 `requestAnimationFrame` 优化鼠标跟随，避免每次 `mousemove` 都触发样式改写。
  - 增加检测（`prefers-reduced-motion` 或 `data-light-enabled="false"`）以允许用户或移动设备关闭重动画。
  - 实现示例：在 `index.html` 的 `<body>` 上添加 `data-light-enabled="true"`，JS 检查后决定是否绑定事件。

- 示例逻辑（不直接修改，此为实施参考）：
  - 把当前 `document.onmousemove` 监听替换为节流函数，使用 `requestAnimationFrame` 更新 `#light` 的位置。

- 验收：在桌面和手机浏览器（或模拟）上观察光效跟随，且在切换 `data-light-enabled="false"` 时无跟随。


### 6) 图片优化与懒加载（P1）
- 文件路径：`image/`、`upload/`
- 修改点：
  - 对大图片使用工具压缩（建议使用 Squoosh、ImageMagick 或在线工具），并额外生成 WebP 版本（例如 `project1-cover.webp`）。
  - 在 HTML 中替换为 `<picture>` 或直接 `<img src="..." loading="lazy" alt="...">`。
  - 对 video 使用 `poster` 并不自动 autoplay（除非结构化展示）。

- 验收：通过 Network 面板检查图片大小与 lazy-loading 是否生效（首次加载仅加载首屏资源）。


### 7) 可访问性与 SEO（P1）
- 文件路径：`index.html`
- 修改点：
  - 所有 `img` 添加 `alt`，所有链接有可辨识文本。
  - 在 `head` 中添加 Open Graph meta（`og:title`, `og:description`, `og:image`, `og:url`）。
  - 确认页面语义元素（nav、header、main、footer）存在或可改造。

- 验收：使用 Lighthouse 检查 Accessibility 得分并修复高影响项。


### 8) 测试、PR 与部署（P0）
- 测试：在本地使用 Chrome/Edge/Firefox 检查视觉与交互（桌面 + 手机断点）。
- Lighthouse：运行并记录 Performance/Accessibility/Best Practices/SEO 得分。
- 提交 PR：合并前确保所有变更通过自测。

PR 模板（见下）将用于提交。

部署建议：
- GitHub Pages：简单，将 `index.html` 发布到 Repo 的 `gh-pages` 或 `main`分支（通过 Settings）。
- Vercel：更简单，连接 GitHub、选择分支 `feat/portfolio-yourname` 或 `main`。


## 四、PR 模板（复制到 `.github/PULL_REQUEST_TEMPLATE.md` 或在发起 PR 时填写）

Title: [feat] Customize portfolio - yourname

Description:
- 本 PR 基于 `me2021-main` 模板，将页面定制为个人作品集（替换个人信息、作品卡、社交链接等）。

Changed files:
- `index.html` - 替换文案与社交链接
- `css/index.css` - 添加 CSS 变量与响应式规则
- `js/effect.js` - 光效节流与开关
- `image/` - 新增/替换封面图、二维码

How to test:
1. 切换到本分支，打开 `index.html`（或在本地静态服务器中运行）。
2. 检查首屏姓名与简介是否为你的内容。
3. 点击作品卡查看外链是否正确打开新标签页。
4. 在窗口宽度 375px/768px/1200px 下检查布局是否合理。
5. 检查光效：在桌面可见，若设置 `data-light-enabled="false"` 则应关闭。

Checklist:
- [ ] 已在 `feat/portfolio-yourname` 分支工作
- [ ] 已备份 `main` 分支
- [ ] 已更新 `index.html` 的 meta 信息
- [ ] 已测试移动端布局
- [ ] 图片已做压缩与 lazy-loading
- [ ] PR 描述包含测试步骤与截图

Reviewers:
- @yourself (或者指定同事)


## 五、部署与回滚简要步骤

推荐：使用 Vercel（自动从 GitHub 部署）或 GitHub Pages（静态发布）。

Vercel（推荐）：
1. 在 vercel.com 登录并连接 GitHub
2. 选择仓库与分支 `feat/portfolio-yourname`（或 `main`）
3. 部署后检查环境变量与 Build & Output 设置（静态站无需额外配置）
4. 若出现问题，回滚：在 Vercel 仪表盘选择之前的部署并恢复

GitHub Pages：
1. 将 `feat/portfolio-yourname` 合并到 `main`（或将构建输出推送到 `gh-pages` 分支）
2. 在仓库 Settings -> Pages 中选择发布分支
3. 若需要回滚，revert 合并的 PR 并重新部署


## 六、验收标准
- 首页展示你的姓名、简介与至少 4 个作品（外链正确）。
- 移动端断点下布局良好，首屏与作品列表可读。
- 性能与可访问性通过基本检查（Lighthouse 中等或以上）。
- 光效在桌面可见且可关闭。
- 部署成功并在公网访问。


## 七、后续建议（可选）
- 添加多语言支持（中/英切换按钮与多语言内容文件）。
- 使用小型构建流水线（npm + imagemin + precommit hooks）以便自动压缩图片并保证样式一致性。
- 将作品数据抽离为 JSON 并编写小脚本批量更新 `index.html`（便于维护大量作品）。


---

如需我现在开始按清单逐项修改代码并提交 PR，请回复“开始执行”。

已保存：`c:\Users\karyl\Documents\web\me2021-main\PLAN.md`。
