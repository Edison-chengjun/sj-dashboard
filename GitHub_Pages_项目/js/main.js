/* ============================================
   盛合晶微设备可视化仪表板 - 主逻辑
   ============================================ */

// 标签页切换
function switchTab(evt, tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(c => c.classList.remove('active'));
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(b => b.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// 显示导出状态
function showStatus(message) {
    const status = document.getElementById('exportStatus');
    status.textContent = message;
    status.classList.add('show');
    setTimeout(() => {
        status.classList.remove('show');
    }, 3000);
}

// 获取当前日期
function getCurrentDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

// 导出为 PDF
function exportPDF() {
    showStatus('⏳ 正在生成 PDF...');
    
    const element = document.querySelector('.container');
    const opt = {
        margin: 10,
        filename: '盛合晶微设备清单_' + getCurrentDate() + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    
    html2pdf().set(opt).from(element).save().then(() => {
        showStatus('✅ PDF 导出成功！');
    }).catch(err => {
        showStatus('❌ PDF 导出失败：' + err.message);
        console.error('PDF export error:', err);
    });
}

// 导出为 PNG
function exportPNG() {
    showStatus('⏳ 正在生成 PNG...');
    
    const element = document.querySelector('.container');
    html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = '盛合晶微设备清单_' + getCurrentDate() + '.png';
        link.click();
        showStatus('✅ PNG 导出成功！');
    }).catch(err => {
        showStatus('❌ PNG 导出失败：' + err.message);
        console.error('PNG export error:', err);
    });
}

// 导出全部（PDF + PNG）
function exportAll() {
    showStatus('⏳ 正在生成 PDF 和 PNG...');
    
    const element = document.querySelector('.container');
    const opt = {
        margin: 10,
        filename: '盛合晶微设备清单_' + getCurrentDate() + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    
    // 先导出 PDF
    html2pdf().set(opt).from(element).save().then(() => {
        // 再导出 PNG
        html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        }).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = '盛合晶微设备清单_' + getCurrentDate() + '.png';
            link.click();
            showStatus('✅ PDF 和 PNG 都已导出！');
        });
    }).catch(err => {
        showStatus('❌ 导出失败：' + err.message);
        console.error('Export error:', err);
    });
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成，仪表板已就绪');
    
    // 可以在这里添加其他初始化代码
    // 例如：加载数据、初始化事件监听器等
});

// 错误处理
window.addEventListener('error', function(event) {
    console.error('页面错误:', event.error);
});
