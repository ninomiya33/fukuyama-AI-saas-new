'use client';

import ReactECharts from 'echarts-for-react';

export default function PriceAnalysisTab() {
  // 価格推移チャートのオプション
  const priceTrendOption = {
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
      data: ['実績価格', '予測価格'],
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
      data: ['2020年', '2021年', '2022年', '2023年', '2024年', '2025年', '2026年', '2027年', '2028年', '2029年', '2030年'],
      axisLabel: {
        color: '#1f2937'
      }
    },
    yAxis: {
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
    series: [
      {
        name: '実績価格',
        type: 'line',
        data: [4800, 5000, 5200, 5400, 5600, 5850, null, null, null, null, null],
        smooth: true,
        symbol: 'none',
        lineStyle: {
          width: 3,
          color: 'rgba(87, 181, 231, 1)'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(87, 181, 231, 0.3)'
            }, {
              offset: 1,
              color: 'rgba(87, 181, 231, 0.1)'
            }]
          }
        }
      },
      {
        name: '予測価格',
        type: 'line',
        data: [null, null, null, null, null, 5850, 6000, 6200, 6450, 6600, 6750],
        smooth: true,
        symbol: 'none',
        lineStyle: {
          width: 3,
          type: 'dashed',
          color: 'rgba(251, 191, 114, 1)'
        }
      }
    ]
  };

  // 価格比較チャートのオプション
  const priceComparisonOption = {
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
      data: ['対象物件', 'エリア平均'],
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
      data: ['立地', '建物状態', '間取り', '日当たり', '設備', '管理状態'],
      axisLabel: {
        color: '#1f2937'
      }
    },
    yAxis: {
      type: 'value',
      name: '評価スコア',
      max: 100,
      nameTextStyle: {
        color: '#1f2937'
      },
      axisLabel: {
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
        name: '対象物件',
        type: 'bar',
        data: [90, 85, 80, 85, 75, 80],
        itemStyle: {
          color: 'rgba(87, 181, 231, 1)',
          borderRadius: [4, 4, 0, 0]
        }
      },
      {
        name: 'エリア平均',
        type: 'bar',
        data: [75, 70, 75, 70, 65, 70],
        itemStyle: {
          color: 'rgba(141, 211, 199, 1)',
          borderRadius: [4, 4, 0, 0]
        }
      }
    ]
  };

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">価格推移</h3>
        <p className="text-gray-600 mb-4">過去5年間の価格推移と今後5年間の予測価格を表示しています。福山市西町エリアの再開発計画や人口動態を考慮した予測です。</p>
        <div className="w-full h-80">
          <ReactECharts option={priceTrendOption} style={{ height: '100%' }} />
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">周辺相場との比較</h3>
        <p className="text-gray-600 mb-4">同じエリア・同条件の物件との価格比較です。対象物件は市場平均より高い評価を得ています。</p>
        <div className="w-full h-80">
          <ReactECharts option={priceComparisonOption} style={{ height: '100%' }} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-5">
          <h4 className="text-base font-medium text-gray-700 mb-2">㎡単価</h4>
          <p className="text-2xl font-bold text-gray-900 mb-1">¥ 731,250 / ㎡</p>
          <p className="text-sm text-gray-500">エリア平均: ¥ 685,000 / ㎡</p>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>エリア平均比</span>
              <span>+6.8%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill bg-primary" style={{ width: '56.8%' }}></div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h4 className="text-base font-medium text-gray-700 mb-2">築年数による減価</h4>
          <p className="text-2xl font-bold text-gray-900 mb-1">-12.5%</p>
          <p className="text-sm text-gray-500">標準減価率: -15.0%</p>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>標準比</span>
              <span>+2.5%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill bg-green-500" style={{ width: '83.3%' }}></div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h4 className="text-base font-medium text-gray-700 mb-2">立地評価</h4>
          <p className="text-2xl font-bold text-gray-900 mb-1">Aランク</p>
          <p className="text-sm text-gray-500">エリア内上位15%</p>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>評価スコア</span>
              <span>85/100</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill bg-primary" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">価格影響要因分析</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-base font-medium text-gray-700 mb-3">プラス要因</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-green-500 mt-0.5 mr-2">
                  <i className="ri-add-circle-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">駅徒歩5分の好立地</p>
                  <p className="text-sm text-gray-600">福山駅まで徒歩5分の立地は、エリア内でも希少性が高く評価されています。</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-green-500 mt-0.5 mr-2">
                  <i className="ri-add-circle-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">南向きバルコニー</p>
                  <p className="text-sm text-gray-600">日当たりの良い南向きバルコニーは、同条件物件と比較して約3%の価格上昇要因となっています。</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-green-500 mt-0.5 mr-2">
                  <i className="ri-add-circle-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">2021年内装リフォーム済み</p>
                  <p className="text-sm text-gray-600">築15年ですが、内装リフォーム済みのため、実質的な経年劣化は少なく評価されています。</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-medium text-gray-700 mb-3">マイナス要因</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-red-500 mt-0.5 mr-2">
                  <i className="ri-subtract-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">エレベーターの老朽化</p>
                  <p className="text-sm text-gray-600">マンション全体のエレベーター設備が老朽化しており、近い将来の修繕が予想されます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-red-500 mt-0.5 mr-2">
                  <i className="ri-subtract-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">駐車場の空き待ち状況</p>
                  <p className="text-sm text-gray-600">マンション内駐車場に空きがなく、現在は近隣の月極駐車場を利用する必要があります。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 