# me2021 - karyll 个人作品集

## 🚀 项目简介

**me2021** 是一个由 karyll 定制开发的个人作品集展示网站。它基于 HTML5、CSS3 和原生 JavaScript 构建，旨在以现代、响应式的设计风格，展示 UI/UX 设计作品、分享知识、记录生活点滴。

## ✨ 项目特色

-   **现代设计风格**：清爽的白色背景与动态渐变光效结合，营造沉浸式视觉体验。
-   **响应式布局**：适配不同屏幕尺寸，提供一致的用户体验。
-   **交互动画效果**：
    -   **鼠标跟随光效**：背景光效跟随鼠标移动，增强互动感。
    -   **Spline 3D 集成**：首页右侧嵌入交互式 3D 模型展示。
    -   **作品集卡片悬停效果**：鼠标悬停时卡片阴影变化。
    -   **薯条区动态效果**：包含 Figma 文件链接的弹出层、Blender 3D 练习的滚动动画、以及图片悬停放大效果。
-   **多模块内容展示**：
    -   **首屏**：包含导航栏、个人介绍、社交链接和 3D 交互展示。
    -   **作品集**：展示核心 UI/UX 项目，每个作品卡片包含描述和详情链接。
    -   **薯条区**：展示小练习、有趣作品，如 Figma 社区文件、Blender 3D 练习和视频演示。
    -   **第二大脑**：链接至个人知识库（语雀），分享学习与感悟。
    -   **影像集**：以网格形式展示摄影作品，并链接至 Unsplash 个人主页。
    -   **关于我**：详细介绍个人经历、设计理念和兴趣爱好。
    -   **联系我**：聚合多个社交平台链接，方便访客联系。
-   **SEO 优化**：完整的 Title、Description、Keywords 标签，提升搜索引擎可见性。
-   **外部服务集成**：
    -   **Google Fonts**：引入 Noto Serif SC 字体。
    -   **Howxm**：网站统计分析工具。
    -   **Spline Design**：用于 3D 交互展示。
    -   **语雀 (Yuque)**：个人知识库平台。
    -   **Unsplash**：摄影作品分享平台。
    -   **社交媒体**：Twitter, Figma, 站酷, 微博, 500px, 微信, 邮箱等。

## 🛠️ 技术栈

-   **前端**：
    -   HTML5
    -   CSS3 (原生，包含 `base.css` 和 `index.css`)
    -   JavaScript (原生，`effect.js` 实现光标跟随等交互)

## 📁 目录结构

```
me2021-main/
├── 📄 index.html                 # 主页面（唯一的HTML文件）
├── 📄 README.md                  # 项目说明文档（中文，即本文件）
├── 📄 README.en.md               # 项目说明文档（英文）
├── 📄 favicon.ico                # 网站图标
├── 📄 PROJECT_STRUCTURE.md       # 项目结构说明
├── 📁 css/                       # 样式文件夹
│   ├── base.css                  # 基础样式初始化
│   └── index.css                 # 首页主要样式
├── 📁 js/                        # 脚本文件夹
│   └── effect.js                 # 交互效果脚本（光标跟随动画）
├── 📁 image/                     # 图片资源夹
│   ├── 相关icon图标 (SVG & PNG)
│   ├── logo.png                  # 网站logo
│   ├── 背景图片
│   ├── 相册图片
│   ├── brain.png                 # 第二大脑部分图片
│   ├── mecode.png                # 微信二维码
│   ├── subcode.png               # 公众号二维码
│   └── more.svg                  # 更多图标
└── 📁 upload/                    # 上传资源夹（多媒体文件）
    ├── 项目展示图片
    └── 视频文件
```

## 📄 页面模块分析 (index.html)

### 1. 页面头部 (Head)
-   SEO 优化标签 (Title, Description, Keywords)
-   Google Fonts 字体导入
-   样式链接 (`base.css`, `index.css`)
-   脚本导入 (`effect.js`)
-   Howxm 统计代码
-   Favicon 图标

### 2. 页面主体 (Body)

#### 🌟 光效层 (Light Effect)
-   跟随鼠标的动态光效 (`#light`)
-   静态背景光效 (`.bglight`)

#### 📍 首屏区域 (First Screen)
-   **导航栏**：Logo、下载简历&作品集按钮。
-   **左侧内容**：欢迎语、姓名、个性标签、描述文本、8个社交平台链接（Twitter, Blog, 站酷, GitHub, 500px, 微信, 邮箱）。部分链接（微信、邮箱）在悬停时显示二维码或邮箱地址。
-   **右侧内容**：Spline 3D 交互式 iframe 展示。

#### 📦 作品集区域 (Portfolio Section)
-   标题与描述。
-   4个作品卡片展示，每个卡片包含作品类型、标题、描述和作品详情链接。图片通过 `background-image` 引入。

#### 🍟 薯条区域 (Chips Section)
-   标题与描述。
-   **Figma 社区文件链接**：两个卡片，悬停时显示 Figma 文件链接。
-   **Blender 3D 练习**：包含标题、描述和 3D 模型滚动动画。
-   **视频展示**：播放 `cyber.avi` 视频。
-   **图片悬停效果**：一个卡片展示图片，悬停时图片放大。
-   **Coming Soon**：一个占位卡片。

#### 🧠 第二大脑区域 (Brain Section)
-   知识库标题、文字说明和语雀知识库链接。

#### 📸 影像集区域 (Album Section)
-   9张相册图片网格展示。
-   摄影风格描述和 Unsplash 链接。

#### ℹ️ 关于我区域 (About Section)
-   个人介绍、设计理念阐述和职业发展经历。

#### 📞 联系我区域 (Contact Section)
-   社交平台链接集合，与首屏类似，部分链接悬停时显示二维码或邮箱地址。

## ⚙️ 如何运行

1.  **克隆仓库**：
    ```bash
    git clone https://github.com/your-username/me2021-main.git
    cd me2021-main
    ```
2.  **打开 `index.html`**：
    直接在浏览器中打开 `index.html` 文件即可预览网站。

## ✉️ 联系方式

-   **Twitter**: [KaryllXXD](https://x.com/KaryllXXD)
-   **Blog**: [blog.karyll.art](https://blog.karyll.art/)
-   **站酷**: [zcool.com.cn/u/26219973](https://www.zcool.com.cn/u/26219973)
-   **GitHub**: [Karyll-star](https://github.com/Karyll-star)
-   **500px**: [500px.com.cn/karyll](https://500px.com.cn/karyll)
-   **邮箱**: karyllddx@gmail.com

## 🙏 致谢

本项目基于 `me2021` 模板进行定制开发。感谢原作者提供的优秀基础。
