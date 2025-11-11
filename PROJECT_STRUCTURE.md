# me2021 项目结构目录

## 📋 项目概述

**项目名称**: me2021 (三秋十李个人网站)  
**项目类型**: 个人作品集展示网站  
**主要用途**: UI设计师个人网站，展示作品、分享知识、记录生活  
**技术栈**: HTML5 + CSS3 + JavaScript (原生)  
**设计特色**: 现代设计风格、响应式布局、交互动画效果

---

## 📁 完整目录结构

```
me2021-main/
├── 📄 index.html                 # 主页面（唯一的HTML文件）
├── 📄 README.md                  # 项目说明文档（中文）
├── 📄 README.en.md               # 项目说明文档（英文）
├── 📄 favicon.ico                # 网站图标
├── 📄 PROJECT_STRUCTURE.md       # 本文件（项目结构说明）
├── 📁 css/                       # 样式文件夹
│   ├── base.css                  # 基础样式初始化
│   └── index.css                 # 首页主要样式（1111行）
├── 📁 js/                        # 脚本文件夹
│   └── effect.js                 # 交互效果脚本（光标跟随动画）
├── 📁 image/                     # 图片资源夹
│   ├── 相关icon图标 (SVG & PNG)
│   │   ├── twitter.svg / twitter0.svg
│   │   ├── figma.svg / figma0.svg
│   │   ├── zhanku.svg / zhanku0.svg
│   │   ├── weibo.svg / weibo0.svg
│   │   ├── jike.svg / jike0.svg
│   │   ├── unsplash.svg / unsplash0.svg
│   │   ├── weixin.svg / weixin0.svg
│   │   ├── youxiang.svg / youxiang0.svg
│   │   └── gongzhonghao.svg / gongzhonghao0.svg
│   ├── logo.png                  # 网站logo
│   ├── 背景图片
│   │   ├── bglight.png           # 首屏背景光效
│   │   ├── drawbg.png            # 绘画相关背景
│   │   ├── drawman.png           # 绘画人物
│   │   ├── emailbg.png           # 邮箱背景
│   │   ├── photobg.png           # 摄影背景
│   │   └── photoman.png          # 摄影人物
│   ├── 相册图片
│   │   ├── album1.png ~ album8.png  # 作品相册8张
│   │   └── myalbum.png              # 个人相册
│   ├── brain.png                 # 第二大脑部分图片
│   ├── mecode.png                # 微信二维码
│   ├── subcode.png               # 公众号二维码
│   └── more.svg                  # 更多图标
└── 📁 upload/                    # 上传资源夹（多媒体文件）
    ├── 项目展示图片
    │   ├── 3d.png
    │   ├── coming.png
    │   ├── cyber.png
    │   ├── qs.png
    │   ├── kaopeixia.png
    │   ├── traffic.png
    │   ├── website.png
    │   ├── zouyue.png
    │   ├── zuopinji.jpg
    │   └── wholesnow.PNG
    └── 视频文件
        ├── cyber.avi             # 3D动画视频演示
        └── （其他视频资源）
```

---

## 🎨 页面结构分析

### HTML页面构成（index.html）

#### 1. **页面头部 (Head)**
- SEO优化三大标签：Title、Description、Keywords
- 字体导入：Google Fonts（Noto Serif SC）
- 样式链接：base.css、index.css
- 脚本导入：effect.js
- 分析工具：Howxm统计代码
- favicon图标

#### 2. **页面主体 (Body)**

##### 🌟 光效层 (Light Effect)
- 跟随鼠标的动态光效
- 静态背景光效

##### 📍 首屏区域 (First Screen) - 720px高
- **导航栏**
  - Logo
  - 下载简历&作品集按钮

- **左侧内容**
  - 欢迎语 (你好👋)
  - 姓名 (我是李三秋)
  - 个性标签 (产品设计界的攀登者)
  - 描述文本
  - 社交链接 (9个平台)
    - Twitter
    - Jike (即刻)
    - Figma
    - 站酷 (ZCOOL)
    - 微博
    - 微信公众号
    - Unsplash
    - 个人微信
    - 邮箱

- **右侧内容**
  - Spline 3D交互式iframe展示

##### 📦 作品集区域 (Portfolio Section)
- 标题与描述
- 4个作品卡片展示：
  1. **Queen Studios 官方商城-视觉重构** (UI-小程序)
  2. **"考培侠"移动端 5.0** (UI-H5-Mobile)
  3. **十李's 2020 个人作品集** (UI-App-Web-运营)
  4. **概念版K歌App"奏乐"** (UI-App)

##### 🍟 薯条区域 (Chips Section) - 小练习和有趣作品
- Figma社区文件链接 (2个)
- **Blender 3D练习**
  - 3D模型展示
- **视频展示**
  - cyber.avi 演示视频

##### 🧠 第二大脑区域 (Brain Section)
- 知识库标题
- 文字说明
- 语雀知识库链接

##### 📸 影像集区域 (Album Section)
- 9张相册图片网格展示
- 摄影风格描述
- Unsplash链接

##### ℹ️ 关于我区域 (About Section)
- 个人介绍
- 设计理念阐述
- 职业发展经历

##### 📞 联系我区域 (Contact Section)
- 社交平台链接集合

---

## 🎯 核心功能模块

### 1. **光标跟随效果** (effect.js)
```javascript
功能: 使背景光效跟随鼠标移动
实现: 监听 document.onmousemove 事件
效果: 创建沉浸式交互体验
```

### 2. **样式系统** (CSS)
- **base.css**: 全局重置和基础样式
  - 元素初始化（margin, padding清零）
  - 常用元素默认样式
  - 浏览器兼容性处理

- **index.css**: 业务样式（1111行）
  - 光效视觉效果
  - 各个页面区域样式
  - 布局和响应式设计
  - 交互效果（hover, 动画等）

### 3. **内容构成**
- 个人品牌展示
- 作品集展示（4个主要项目）
- 知识分享（语雀知识库）
- 摄影作品（Unsplash）
- 社交媒体整合

---

## 🔗 外部资源引用

### CDN资源
- Google Fonts：字体库
- Spline Design：3D交互演示

### 第三方服务
- Howxm：网站统计分析
- 语雀 (Yuque)：知识库
- Unsplash：摄影作品平台
- Figma：设计文件分享
- 站酷 (ZCOOL)：设计作品平台
- 社交媒体：Twitter、微博、Jike等

---

## 📊 文件统计

| 类型 | 数量 | 说明 |
|------|------|------|
| HTML文件 | 1 | index.html |
| CSS文件 | 2 | base.css, index.css |
| JS文件 | 1 | effect.js |
| 图片文件 | 40+ | SVG图标、PNG背景、相册 |
| 视频文件 | 1 | cyber.avi |
| 文档文件 | 3 | README.md, README.en.md, favicon.ico |

---

## 🎨 设计特色

1. **现代极简风格**：清爽的白色背景配合渐变光效
2. **交互动画**：鼠标跟随动效，提升沉浸感
3. **多平台整合**：聚合社交、作品、知识多个维度
4. **3D展示**：使用Spline制作交互式3D模型
5. **视觉层次**：通过颜色、大小、间距清晰划分内容区域
6. **响应式设计**：适配不同屏幕尺寸

---

## 🚀 技术亮点

- ✅ 原生JavaScript（无框架依赖）
- ✅ 现代CSS3特性（渐变、模糊、z-index等）
- ✅ SEO优化（完整的TDK标签）
- ✅ 外部API集成（Spline、Howxm等）
- ✅ 多媒体支持（图片、视频、iframe）
- ✅ 跨平台兼容性考虑

---

## 📌 项目适用场景

- 个人作品集展示
- 设计师个人品牌建设
- 创意工作室展示
- 个人简历+作品集融合页面

---

*项目结构分析生成于 2025年11月11日*
