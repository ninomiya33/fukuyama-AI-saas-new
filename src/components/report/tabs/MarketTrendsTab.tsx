'use client';

import ReactECharts from 'echarts-for-react';

export default function MarketTrendsTab() {
  // エリア別価格推移チャートのオプション
  const areaPriceOption = {
    animation: false,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: '#eee',
      borderWidth: 1,
      textStyle: {
        color: '#1f2937'
      }
    },
    legend: {
      data: ['西町エリア', '福山駅前エリア', '松永エリア'],
      bottom: 0,
      textStyle: {
        color: '#1f2937'
      }
    },
    grid: {
      top: 10,
      right: 10,
      bottom: 50,
      left: 60
    },
    xAxis: {
      type: 'category',
      data: ['2022年Q1', '2022年Q2', '2022年Q3', '2022年Q4', '2023年Q1', '2023年Q2', '2023年Q3', '2023年Q4', '2024年Q1', '2024年Q2', '2025年Q1'],
      axisLabel: {
        color: '#1f2937',
        interval: 2
      }
    },
    yAxis: {
      type: 'value',
      name: '価格 (万円/㎡)',
      nameTextStyle: {
        color: '#1f2937'
      },
      axisLabel: {
        formatter: '{value}万円',
        color: '#1f2937'
      },
      splitLine: {
        lineStyle: {
          color: '#eee'
        }
      }
    },
    series: [
      {
        name: '西町エリア',
        type: 'line',
        data: [66.5, 67.2, 68.0, 68.5, 69.0, 69.5, 70.0, 70.5, 71.0, 71.5, 72.0],
        smooth: true,
        symbol: 'none',
        lineStyle: {
          width: 3,
          color: 'rgba(87, 181, 231, 1)'
        }
      },
      {
        name: '福山駅前エリア',
        type: 'line',
        data: [72.0, 73.0, 74.0, 74.5, 75.0, 75.8, 76.5, 77.0, 77.5, 78.2, 79.0],
        smooth: true,
        symbol: 'none',
        lineStyle: {
          width: 3,
          color: 'rgba(251, 191, 114, 1)'
        }
      },
      {
        name: '松永エリア',
        type: 'line',
        data: [62.0, 62.5, 63.0, 63.2, 63.5, 64.0, 64.5, 64.8, 65.2, 65.8, 66.3],
        smooth: true,
        symbol: 'none',
        lineStyle: {
          width: 3,
          color: 'rgba(141, 211, 199, 1)'
        }
      }
    ]
  };

  // 売却タイミングチャートのオプション
  const timingOption = {
    animation: false,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: '#eee',
      borderWidth: 1,
      textStyle: {
        color: '#1f2937'
      }
    },
    legend: {
      data: ['予測価格', '市場流動性'],
      bottom: 0,
      textStyle: {
        color: '#1f2937'
      }
    },
    grid: {
      top: 10,
      right: 10,
      bottom: 50,
      left: 60
    },
    xAxis: {
      type: 'category',
      data: ['2025年', '2026年', '2027年', '2028年', '2029年', '2030年'],
      axisLabel: {
        color: '#1f2937'
      }
    },
    yAxis: [
      {
        type: 'value',
        name: '価格 (万円)',
        nameTextStyle: {
          color: '#1f2937'
        },
        axisLabel: {
          formatter: '{value}万円',
          color: '#1f2937'
        },
        splitLine: {
          lineStyle: {
            color: '#eee'
          }
        }
      },
      {
        type: 'value',
        name: '流動性指数',
        nameTextStyle: {
          color: '#1f2937'
        },
        min: 0,
        max: 100,
        axisLabel: {
          color: '#1f2937'
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '予測価格',
        type: 'bar',
        data: [5850, 6000, 6200, 6450, 6600, 6750],
        itemStyle: {
          color: 'rgba(87, 181, 231, 1)',
          borderRadius: [4, 4, 0, 0]
        }
      },
      {
        name: '市場流動性',
        type: 'line',
        yAxisIndex: 1,
        data: [75, 78, 82, 90, 85, 80],
        smooth: true,
        symbol: 'none',
        lineStyle: {
          width: 3,
          color: 'rgba(252, 141, 98, 1)'
        }
      }
    ],
    markArea: {
      itemStyle: {
        color: 'rgba(251, 191, 114, 0.2)'
      },
      data: [
        [{
          name: '最適売却期間',
          xAxis: '2028年'
        }, {
          xAxis: '2029年'
        }]
      ]
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">エリア別取引価格推移</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-600 mb-4">福山市内の主要エリアにおける過去3年間のマンション取引価格の推移です。西町エリアは安定した上昇傾向を示しています。</p>
          <div className="w-full h-80">
            <ReactECharts option={areaPriceOption} style={{ height: '100%' }} />
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded p-4 shadow-sm">
              <h5 className="text-sm font-medium text-gray-900 mb-1">西町エリア平均</h5>
              <p className="text-xl font-bold text-gray-900">71.5万円/㎡</p>
              <p className="text-xs text-gray-600">前年比 <span className="text-green-600">+3.8%</span></p>
            </div>
            <div className="bg-white rounded p-4 shadow-sm">
              <h5 className="text-sm font-medium text-gray-900 mb-1">福山駅前エリア平均</h5>
              <p className="text-xl font-bold text-gray-900">78.2万円/㎡</p>
              <p className="text-xs text-gray-600">前年比 <span className="text-green-600">+4.5%</span></p>
            </div>
            <div className="bg-white rounded p-4 shadow-sm">
              <h5 className="text-sm font-medium text-gray-900 mb-1">松永エリア平均</h5>
              <p className="text-xl font-bold text-gray-900">65.8万円/㎡</p>
              <p className="text-xs text-gray-600">前年比 <span className="text-green-600">+2.1%</span></p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">需要と供給のバランス分析</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">需要指標</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">問い合わせ率</span>
                  <span className="font-medium text-gray-900">高い（市平均の1.3倍）</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill bg-primary" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">内見申込率</span>
                  <span className="font-medium text-gray-900">高い（市平均の1.5倍）</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill bg-primary" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">平均販売期間</span>
                  <span className="font-medium text-gray-900">短い（市平均の0.7倍）</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill bg-primary" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded shadow-sm">
              <p className="text-sm text-gray-600">西町エリアは駅近の利便性の高さから、常に安定した需要があります。特に3LDKの間取りは、ファミリー層からの人気が高く、需要が供給を上回る状況が続いています。</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">供給指標</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">新規物件供給数</span>
                  <span className="font-medium text-gray-900">少ない（市平均の0.6倍）</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill bg-yellow-500" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">在庫物件数</span>
                  <span className="font-medium text-gray-900">少ない（市平均の0.5倍）</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill bg-yellow-500" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">価格調整率</span>
                  <span className="font-medium text-gray-900">低い（市平均の0.8倍）</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill bg-green-500" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded shadow-sm">
              <p className="text-sm text-gray-600">西町エリアは開発余地が少なく、新規物件の供給が限られています。既存物件の流通も少ないため、売り手市場の傾向が強く、価格交渉の余地は比較的小さいです。</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">売却適時期の提案</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="w-full h-80 mb-6">
            <ReactECharts option={timingOption} style={{ height: '100%' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-3">
                  <i className="ri-time-line"></i>
                </div>
                <h5 className="font-medium text-gray-900">短期（1年以内）</h5>
              </div>
              <p className="text-sm text-gray-600 mb-3">現在の市場は売り手優位であり、早期売却を希望する場合でも好条件での取引が期待できます。</p>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-500">おすすめ度</span>
                <span className="text-gray-900">75/100</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill bg-yellow-500" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                  <i className="ri-calendar-line"></i>
                </div>
                <h5 className="font-medium text-gray-900">中期（2〜3年）</h5>
              </div>
              <p className="text-sm text-gray-600 mb-3">福山駅周辺の再開発が進み、資産価値の上昇が期待できます。中期的な売却がおすすめです。</p>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-500">おすすめ度</span>
                <span className="text-gray-900">85/100</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill bg-primary" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                  <i className="ri-calendar-check-line"></i>
                </div>
                <h5 className="font-medium text-gray-900">長期（4〜5年）</h5>
              </div>
              <p className="text-sm text-gray-600 mb-3">再開発完了後の2028年以降は、エリアの価値が最大化し、最も高い売却価格が期待できます。</p>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-500">おすすめ度</span>
                <span className="text-gray-900">90/100</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill bg-green-500" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 