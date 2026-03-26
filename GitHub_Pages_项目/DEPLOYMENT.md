# GitHub Pages 部署完整指南

## 📋 目录

1. [前置要求](#前置要求)
2. [本地开发](#本地开发)
3. [GitHub 仓库设置](#github-仓库设置)
4. [部署步骤](#部署步骤)
5. [常见问题](#常见问题)
6. [自定义域名](#自定义域名)

---

## 前置要求

- ✅ GitHub 账户
- ✅ Git 已安装
- ✅ 代码编辑器（VS Code 推荐）
- ✅ 本项目文件

## 本地开发

### 1. 启动本地服务器

```bash
# 进入项目目录
cd sj-semiconductor-dashboard

# 使用 Python 3 启动服务器
python3 -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000

# 或使用 Node.js (需要先安装 http-server)
npm install -g http-server
http-server
```

### 2. 访问本地网站

打开浏览器访问：
```
http://localhost:8000
```

### 3. 测试功能

- ✅ 检查所有图表是否正常显示
- ✅ 测试标签页切换功能
- ✅ 测试 PDF/PNG 导出功能
- ✅ 在不同浏览器中测试

---

## GitHub 仓库设置

### 1. 创建新仓库

**方式一：在 GitHub 网站创建**

1. 登录 GitHub
2. 点击右上角 "+" → "New repository"
3. 仓库名称：`sj-semiconductor-dashboard`
4. 描述：`盛合晶微 2D/3D 封装工艺设备清单可视化`
5. 选择 "Public"（公开）
6. 点击 "Create repository"

**方式二：使用命令行**

```bash
# 初始化本地仓库
git init

# 添加所有文件
git add .

# 提交初始版本
git commit -m "Initial commit: Add SJ Semiconductor dashboard"

# 添加远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/sj-semiconductor-dashboard.git

# 重命名分支为 main（如果需要）
git branch -M main

# 推送到 GitHub
git push -u origin main
```

### 2. 验证文件结构

确保你的仓库包含以下文件：

```
✅ index.html
✅ README.md
✅ LICENSE
✅ .gitignore
✅ css/style.css
✅ js/main.js
✅ js/charts.js
```

---

## 部署步骤

### 步骤 1：启用 GitHub Pages

1. 进入你的仓库
2. 点击 "Settings"（设置）
3. 在左侧菜单找到 "Pages"
4. 在 "Source" 下拉菜单选择：
   - Branch: `main`
   - Folder: `/ (root)`
5. 点击 "Save"

### 步骤 2：等待部署

GitHub 会自动部署你的网站，通常需要 1-2 分钟。

你会看到一条消息：
```
Your site is published at https://YOUR_USERNAME.github.io/sj-semiconductor-dashboard/
```

### 步骤 3：访问你的网站

打开浏览器访问：
```
https://YOUR_USERNAME.github.io/sj-semiconductor-dashboard/
```

---

## 常见问题

### Q1: 网站显示 404 错误

**解决方案：**
- 检查仓库名称是否正确
- 确认 GitHub Pages 已启用
- 检查分支是否为 `main`
- 等待 2-3 分钟后刷新

### Q2: 样式和图表没有加载

**解决方案：**
- 检查文件路径是否正确
- 确保 CSS 和 JS 文件在正确的文件夹中
- 清除浏览器缓存（Ctrl+Shift+Delete）
- 在浏览器控制台检查错误信息

### Q3: 导出功能不工作

**解决方案：**
- 确保使用的是现代浏览器
- 检查浏览器是否允许下载
- 查看浏览器控制台的错误信息
- 尝试在不同浏览器中测试

### Q4: 如何更新网站内容

**解决方案：**
```bash
# 修改文件后
git add .
git commit -m "Update content"
git push origin main

# GitHub 会自动重新部署
# 通常需要 1-2 分钟
```

---

## 自定义域名

### 使用自己的域名（可选）

1. 在你的域名提供商处配置 DNS：
   - 添加 CNAME 记录
   - 指向 `YOUR_USERNAME.github.io`

2. 在 GitHub 仓库设置中：
   - Pages → Custom domain
   - 输入你的域名
   - 点击 Save

3. 等待 DNS 生效（通常 24 小时内）

---

## 性能优化建议

### 1. 启用 GZIP 压缩

GitHub Pages 自动启用 GZIP 压缩，无需配置。

### 2. 使用 CDN

项目已使用 CDN 加载外部库：
- Chart.js 来自 jsDelivr
- html2pdf.js 来自 cdnjs
- html2canvas 来自 cdnjs

### 3. 缓存优化

添加 `.nojekyll` 文件以禁用 Jekyll 处理：

```bash
touch .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll to disable Jekyll"
git push origin main
```

---

## 监控和维护

### 检查部署状态

1. 进入仓库 → "Actions"
2. 查看最近的部署日志
3. 确保所有检查都通过

### 定期更新

```bash
# 定期拉取最新更改
git pull origin main

# 进行必要的更新
# ...

# 推送更新
git add .
git commit -m "Update: [描述你的更改]"
git push origin main
```

---

## 安全建议

- ✅ 不要在代码中存储敏感信息
- ✅ 定期更新依赖库
- ✅ 使用 HTTPS（GitHub Pages 自动启用）
- ✅ 定期备份重要数据

---

## 获取帮助

- 📖 [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- 🐛 [GitHub Issues](https://github.com/YOUR_USERNAME/sj-semiconductor-dashboard/issues)
- 💬 [GitHub Discussions](https://github.com/YOUR_USERNAME/sj-semiconductor-dashboard/discussions)

---

**祝你部署顺利！** 🚀
