# 盛合晶微设备可视化仪表板 - GitHub Pages 部署指南

## 📦 项目结构

```
sj-semiconductor-dashboard/
├── index.html                 # 主页面
├── README.md                  # 项目说明
├── LICENSE                    # 许可证
├── css/
│   └── style.css             # 样式文件
├── js/
│   ├── main.js               # 主逻辑
│   └── charts.js             # 图表配置
└── assets/
    └── data.json             # 数据文件
```

## 🚀 快速开始

### 1. 创建 GitHub 仓库

```bash
# 创建本地目录
mkdir sj-semiconductor-dashboard
cd sj-semiconductor-dashboard

# 初始化 git
git init
git add .
git commit -m "Initial commit"

# 添加远程仓库（替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/sj-semiconductor-dashboard.git
git branch -M main
git push -u origin main
```

### 2. 启用 GitHub Pages

在 GitHub 仓库设置中：
- Settings → Pages
- Source: Deploy from a branch
- Branch: main / (root)
- Save

### 3. 访问你的网站

```
https://YOUR_USERNAME.github.io/sj-semiconductor-dashboard/
```

## 📝 文件清单

下面是完整的文件代码，你可以逐个创建。
