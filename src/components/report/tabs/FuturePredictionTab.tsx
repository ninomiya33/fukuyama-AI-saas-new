'use client';

import ReactECharts from 'echarts-for-react';

export default function FuturePredictionTab() {
  // 人口動態チャートのオプション
  const populationOption = {
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
      data: ['西町エリア', '福山市平均'],
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
      name: '人口密度 (人/km²)',
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
        name: '西町エリア',
        type: 'line',
        data: [12000, 12100, 12250, 12350, 12500, 12700, 12900, 13200, 13500, 13650, 13800],
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
        name: '福山市平均',
        type: 'line',
        data: [8800, 8850, 8900, 8950, 9000, 9050, 9100, 9150, 9200, 9250, 9300],
        smooth: true,
        symbol: 'none',
        lineStyle: {
          width: 3,
          color: 'rgba(141, 211, 199, 1)'
        }
      }
    ]
  };

  // 資産価値変動チャートのオプション
  const assetValueOption = {
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
      data: ['予測価格', '売却最適期'],
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
      data: ['2025年', '2026年', '2027年', '2028年', '2029年', '2030年', '2031年', '2032年', '2033年', '2034年', '2035年'],
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
        name: '予測価格',
        type: 'line',
        data: [5850, 6000, 6200, 6450, 6600, 6750, 6850, 6950, 7000, 7050, 7100],
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
        },
        markArea: {
          itemStyle: {
            color: 'rgba(251, 191, 114, 0.2)'
          },
          data: [
            [{
              name: '売却最適期',
              xAxis: '2028年'
            }, {
              xAxis: '2030年'
            }]
          ]
        }
      }
    ]
  };

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">地域開発計画の影響分析</h3>
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-2/3">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">福山駅周辺再開発プロジェクト（2026-2028年）</h4>
              <p className="text-gray-600 mb-4">福山駅周辺で進行中の再開発プロジェクトは、対象物件の資産価値に好影響を与えると予測されます。商業施設の拡充や公共空間の整備により、エリアの利便性と魅力が向上します。</p>
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-2">
                  <i className="ri-information-line"></i>
                </div>
                <p className="text-sm font-medium text-gray-900">予想される価格影響: <span className="text-primary">+5〜8%</span></p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-4 h-4 flex items-center justify-center text-primary mt-0.5 mr-2">
                    <i className="ri-check-line"></i>
                  </div>
                  <span>新たな商業施設の建設（2026年完成予定）</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 flex items-center justify-center text-primary mt-0.5 mr-2">
                    <i className="ri-check-line"></i>
                  </div>
                  <span>駅前広場の拡張と緑化（2027年完成予定）</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 flex items-center justify-center text-primary mt-0.5 mr-2">
                    <i className="ri-check-line"></i>
                  </div>
                  <span>新たな文化施設の建設（2028年完成予定）</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 w-full">
              <div className="bg-white rounded p-4 shadow-sm">
                <h5 className="text-sm font-medium text-gray-900 mb-2">開発完了後の予想価格</h5>
                <p className="text-2xl font-bold text-primary mb-1">¥ 63,180,000</p>
                <p className="text-xs text-gray-500">現在価格から +8% の上昇</p>
                <div className="mt-3">
                  <div className="progress-bar">
                    <div className="progress-bar-fill bg-primary" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>現在</span>
                    <span>開発完了後</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-2/3">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">西町エリア道路拡張計画（2027年）</h4>
              <p className="text-gray-600 mb-4">西町エリアの主要道路拡張工事が2027年に予定されています。これにより交通アクセスが改善され、周辺の利便性が向上すると予測されます。</p>
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-2">
                  <i className="ri-information-line"></i>
                </div>
                <p className="text-sm font-medium text-gray-900">予想される価格影響: <span className="text-primary">+2〜3%</span></p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-4 h-4 flex items-center justify-center text-primary mt-0.5 mr-2">
                    <i className="ri-check-line"></i>
                  </div>
                  <span>西町大通りの4車線化（2027年完成予定）</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 flex items-center justify-center text-primary mt-0.5 mr-2">
                    <i className="ri-check-line"></i>
                  </div>
                  <span>歩道の拡張と自転車レーンの設置</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 flex items-center justify-center text-primary mt-0.5 mr-2">
                    <i className="ri-check-line"></i>
                  </div>
                  <span>バス停の改良と増設</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 w-full">
              <div className="bg-white rounded p-4 shadow-sm">
                <h5 className="text-sm font-medium text-gray-900 mb-2">開発完了後の予想価格</h5>
                <p className="text-2xl font-bold text-primary mb-1">¥ 60,255,000</p>
                <p className="text-xs text-gray-500">現在価格から +3% の上昇</p>
                <div className="mt-3">
                  <div className="progress-bar">
                    <div className="progress-bar-fill bg-primary" style={{ width: '55%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>現在</span>
                    <span>開発完了後</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">人口動態予測</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-600 mb-4">福山市西町エリアの人口動態予測です。再開発の影響もあり、今後5年間で人口増加が見込まれています。</p>
          <div className="w-full h-80">
            <ReactECharts option={populationOption} style={{ height: '100%' }} />
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded p-4 shadow-sm">
              <h5 className="text-sm font-medium text-gray-900 mb-1">現在の人口密度</h5>
              <p className="text-xl font-bold text-gray-900">12,500人/km²</p>
              <p className="text-xs text-gray-500">福山市平均の1.4倍</p>
            </div>
            <div className="bg-white rounded p-4 shadow-sm">
              <h5 className="text-sm font-medium text-gray-900 mb-1">5年後の予測人口</h5>
              <p className="text-xl font-bold text-primary">13,800人/km²</p>
              <p className="text-xs text-gray-500">+10.4%の増加</p>
            </div>
            <div className="bg-white rounded p-4 shadow-sm">
              <h5 className="text-sm font-medium text-gray-900 mb-1">世帯年収中央値</h5>
              <p className="text-xl font-bold text-gray-900">580万円</p>
              <p className="text-xs text-gray-500">福山市平均の1.1倍</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">将来の資産価値変動予測</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-600 mb-4">地域開発計画、人口動態、経済予測を考慮した今後10年間の資産価値変動予測です。</p>
          <div className="w-full h-80">
            <ReactECharts option={assetValueOption} style={{ height: '100%' }} />
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
            <div className="flex items-start">
              <div className="w-6 h-6 flex items-center justify-center text-blue-500 mt-0.5 mr-3">
                <i className="ri-lightbulb-line"></i>
              </div>
              <div>
                <h5 className="text-base font-medium text-gray-900 mb-1">専門家のアドバイス</h5>
                <p className="text-sm text-gray-600">福山駅周辺の再開発が2028年に完了する予定であることを考慮すると、資産価値の最大化を目指す場合は、2028年以降の売却がおすすめです。ただし、個人の事情や市場状況によって最適なタイミングは変わりますので、定期的な査定をお勧めします。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 