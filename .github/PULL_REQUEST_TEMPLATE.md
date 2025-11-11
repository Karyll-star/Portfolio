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
