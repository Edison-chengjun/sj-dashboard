/* ============================================
   盛合晶微设备可视化仪表板 - 图表配置
   ============================================ */

let charts = {};

// 初始化所有图表
function initCharts() {
    // 各工序国产化率对比
    const processCtx = document.getElementById('processChart').getContext('2d');
    charts.process = new Chart(processCtx, {
        type: 'bar',
        data: {
            labels: ['前处理', 'TSV核心', 'RDL布线', '芯片键合', '后处理', '测试量测'],
            datasets: [{
                label: '国产化率 (%)',
                data: [27, 19, 19, 2, 22, 8],
                backgroundColor: [
                    '#27ae60', '#f39c12', '#f39c12', '#e74c3c', '#f39c12', '#e74c3c'
                ],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: v => v + '%' }
                }
            }
        }
    });
    
    // 国产设备商分布
    const vendorCtx = document.getElementById('vendorChart').getContext('2d');
    charts.vendor = new Chart(vendorCtx, {
        type: 'doughnut',
        data: {
            labels: ['华海清科', '盛美上海', '北方华创', '中微公司', '其他'],
            datasets: [{
                data: [28, 18, 22, 15, 17],
                backgroundColor: [
                    '#667eea', '#764ba2', '#f093fb', '#4facfe', '#ddd'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
    
    // 成本对比图表
    const costCtx = document.getElementById('costComparisonChart').getContext('2d');
    charts.cost = new Chart(costCtx, {
        type: 'bar',
        data: {
            labels: ['CMP', '晶圆减薄', 'TSV电镀', 'PECVD', 'PVD', 'DRIE', 'KrF光刻', '热压键合', '测试机'],
            datasets: [
                {
                    label: '进口设备价格（万元）',
                    data: [2750, 2000, 1650, 1350, 1150, 3250, 4500, 2250, 6500],
                    backgroundColor: '#e74c3c',
                    borderRadius: 6
                },
                {
                    label: '国产设备价格（万元）',
                    data: [1700, 1300, 1000, 900, 800, null, null, null, null],
                    backgroundColor: '#27ae60',
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top' }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: v => v + '万' }
                }
            }
        }
    });
    
    // 产线投资成本对比
    const productionCtx = document.getElementById('productionLineChart').getContext('2d');
    charts.production = new Chart(productionCtx, {
        type: 'bar',
        data: {
            labels: ['全进口方案', '混合方案\n（推荐）', '国产优先方案'],
            datasets: [
                {
                    label: '总投资（亿元）',
                    data: [16.5, 11.5, 8.5],
                    backgroundColor: ['#e74c3c', '#f39c12', '#27ae60'],
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: v => v + '亿' }
                }
            }
        }
    });
    
    // 国产厂商对标
    const vendorCompareCtx = document.getElementById('vendorCompareChart').getContext('2d');
    charts.vendorCompare = new Chart(vendorCompareCtx, {
        type: 'radar',
        data: {
            labels: ['CMP', 'PECVD', 'PVD', '电镀', '光刻', '键合', '测试'],
            datasets: [
                {
                    label: '华海清科',
                    data: [90, 40, 30, 20, 10, 5, 10],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)'
                },
                {
                    label: '盛美上海',
                    data: [20, 30, 40, 70, 10, 5, 5],
                    borderColor: '#764ba2',
                    backgroundColor: 'rgba(118, 75, 162, 0.1)'
                },
                {
                    label: '北方华创',
                    data: [30, 60, 50, 30, 20, 10, 10],
                    borderColor: '#f093fb',
                    backgroundColor: 'rgba(240, 147, 251, 0.1)'
                },
                {
                    label: '中微公司',
                    data: [20, 30, 20, 20, 30, 10, 10],
                    borderColor: '#4facfe',
                    backgroundColor: 'rgba(79, 172, 254, 0.1)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// 页面加载时初始化图表
document.addEventListener('DOMContentLoaded', initCharts);
