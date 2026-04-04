# 🏴‍☠️ 赛博要饭总部

基于 Hugo 构建的赛博朋克风格个人博客 + 打赏系统，部署在 GitHub Pages 上。

## 🚀 快速开始

### 1. 启用 GitHub Pages

1. 进入仓库的 **Settings → Pages**
2. Source 选择 **GitHub Actions**
3. 推送代码到 `main` 分支即自动构建部署

> **注意**：如果希望网站地址为 `https://bigpang1992.github.io/`，需要将仓库重命名为 `bigpang1992.github.io`。当前仓库名 `bigpang1992` 对应的地址为 `https://bigpang1992.github.io/bigpang1992/`。

### 2. 添加收款二维码

将微信和支付宝的收款码图片放入对应目录：

```
static/medias/reward/wechat.png   ← 微信收款码
static/medias/reward/alipay.png   ← 支付宝收款码
```

然后在 `hugo.toml` 中确认路径正确：

```toml
[params.donate]
  wechatQR = "/medias/reward/wechat.png"
  alipayQR = "/medias/reward/alipay.png"
```

### 3. 写文章

在 `content/posts/` 目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
date: 2026-04-05
draft: false
categories: ["技术分享"]
tags: ["Hugo", "教程"]
cover: "/medias/banner/0.jpg"
description: "文章简介"
---

正文内容...
```

推送到 `main` 分支后自动发布。

### 4. 可视化管理（Decap CMS）

网站内置了 Decap CMS 后台，访问 `/admin/` 即可使用。

**首次使用需要配置 GitHub OAuth：**

1. 在 GitHub 创建 OAuth App：**Settings → Developer settings → OAuth Apps → New**
2. Homepage URL 填写你的网站地址
3. Authorization callback URL 填写 `https://api.netlify.com/auth/done`
4. 在 Netlify 注册并创建站点，配置 GitHub OAuth
5. 在 `static/admin/config.yml` 中添加 `site_domain` 配置

> 如果不想配置 CMS，也可以直接通过 GitHub 网页端编辑 markdown 文件。

## 📁 项目结构

```
├── .github/workflows/    # GitHub Actions 部署工作流
├── archetypes/           # Hugo 文章模板
├── content/              # 文章和页面内容
│   ├── posts/            # 博客文章 (Markdown)
│   ├── donate/           # 打赏页面
│   └── about/            # 关于页面
├── layouts/              # Hugo 页面模板
│   ├── _default/         # 默认模板
│   ├── donate/           # 打赏页模板
│   └── partials/         # 公共组件
├── static/               # 静态资源
│   ├── css/              # 样式表
│   ├── js/               # JavaScript
│   ├── images/           # 图片
│   ├── medias/           # 媒体文件（头像、banner等）
│   └── admin/            # Decap CMS 管理后台
└── hugo.toml             # Hugo 配置文件
```

## ⚙️ 自定义配置

### 修改站点信息

编辑 `hugo.toml`：

```toml
title = "你的网站标题"

[params]
  description = "你的网站描述"
  author = "你的名字"
  avatar = "/medias/avatars/avatar.jpg"
```

### 修改社交链接

```toml
[[params.social]]
  name = "GitHub"
  url = "https://github.com/你的用户名"
  icon = "github"
```

### 添加打赏者到感恩墙

```toml
[[params.donors]]
  name = "张三"
  amount = "￥66.6"
  message = "加油！"
```

### 修改谄媚语句

编辑 `hugo.toml` 中的 `[params.donate].messages` 数组。

## 🖥️ 本地预览

安装 [Hugo](https://gohugo.io/installation/)（需要 extended 版本），然后：

```bash
hugo server -D
```

访问 `http://localhost:1313` 即可预览。

## 📝 License

MIT
