# 盛合晶微 2D/3D 封装工艺设备清单可视化

> 关键设备国产化替代情况深度分析 | 交互式可视化仪表板

## 📊 项目概述

本项目是一个专业的数据可视化仪表板，用于展示盛合晶微（SJ Semiconductor）2D/3D 封装工艺中关键设备的国产化替代情况。

### 🎯 核心功能

- **📈 国产化率分析** - 各工序国产化率对比
- **💰 成本对比** - 国产 vs 进口设备价格分析
- **⏱️ 时间表** - 国产化发展路线图
- **🏭 厂商对标** - 国产设备商能力评估
- **⚠️ 风险评估** - 关键设备风险预警
- **📥 导出功能** - 支持 PDF 和 PNG 导出

## 🚀 快速开始

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/YOUR_USERNAME/sj-semiconductor-dashboard.git
cd sj-semiconductor-dashboard

# 使用 Python 启动本地服务器
python3 -m http.server 8000

# 访问 http://localhost:8000
```

### GitHub Pages 部署

1. **Fork 或创建新仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/sj-semiconductor-dashboard.git
   git push -u origin main
   ```

2. **启用 GitHub Pages**
   - 进入仓库 Settings
   - 找到 Pages 选项
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main / (root)"
   - 点击 Save

3. **访问你的网站**
   ```
   https://YOUR_USERNAME.github.io/sj-semiconductor-dashboard/
   ```

## 📁 项目结构

```
sj-semiconductor-dashboard/
├── index.html              # 主页面
├── README.md               # 项目说明
├── LICENSE                 # MIT 许可证
├── css/
│   └── style.css          # 样式表
├── js/
│   ├── main.js            # 主逻辑
│   └── charts.js          # 图表配置
└── assets/
    └── data.json          # 数据文件（可选）
```

## 🎨 技术栈

- **前端框架**: HTML5 + CSS3 + JavaScript (ES6+)
- **图表库**: Chart.js 4.4.0
- **导出工具**: html2pdf.js + html2canvas
- **样式**: 响应式设计，支持移动端

## 📊 数据来源

本项目数据基于以下来源：

- 盛合晶微官方网站
- 北方华创、华海清科等国产设备商官网
- 行业研究报告和技术文献
- 公开的市场分析数据

## 🔧 自定义配置

### 修改颜色主题

编辑 `css/style.css` 中的颜色变量：

```css
/* 主色调 */
--primary-color: #667eea;
--secondary-color: #764ba2;

/* 状态颜色 */
--success-color: #27ae60;
--warning-color: #f39c12;
--danger-color: #e74c3c;
```

### 更新数据

编辑 `js/charts.js` 中的数据配置：

```javascript
datasets: [{
    label: '国产化率 (%)',
    data: [27, 19, 19, 2, 22, 8],  // 修改这里的数据
    backgroundColor: [...]
}]
```

## 📱 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- 移动浏览器（iOS Safari, Chrome Mobile）

## 📥 导出功能

### PDF 导出
- 点击 "📄 导出为 PDF" 按钮
- 自动生成 `盛合晶微设备清单_YYYY-MM-DD.pdf`
- 支持打印和分享

### PNG 导出
- 点击 "🖼️ 导出为 PNG" 按钮
- 自动生成 `盛合晶微设备清单_YYYY-MM-DD.png`
- 高清截图，便于社交媒体分享

### 全部导出
- 点击 "📦 导出全部" 按钮
- 同时生成 PDF 和 PNG 文件

## 🔐 隐私和安全

- 本项目不收集任何用户数据
- 所有处理都在客户端进行
- 导出功能完全本地化，不上传任何数据

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题或建议，请通过以下方式联系：

- 📧 Email: your-email@example.com
- 🐙 GitHub Issues: [提交 Issue](https://github.com/YOUR_USERNAME/sj-semiconductor-dashboard/issues)

## 🙏 致谢

感谢以下项目和资源的支持：

- [Chart.js](https://www.chartjs.org/) - 图表库
- [html2pdf.js](https://github.com/parallax/html2pdf.js) - PDF 导出
- [html2canvas](https://html2canvas.hertzen.com/) - 截图工具

## 📈 更新日志

### v1.0.0 (2026-03-26)
- ✅ 初始版本发布
- ✅ 完整的可视化仪表板
- ✅ PDF/PNG 导出功能
- ✅ 响应式设计

---

**最后更新**: 2026-03-26  
**版本**: 1.0.0  
**作者**: Technology Analysis Team
