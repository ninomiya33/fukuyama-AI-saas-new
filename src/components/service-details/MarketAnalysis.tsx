'use client'

import ReactECharts from 'echarts-for-react'

export default function MarketAnalysis() {
  const areaPriceOption = {
    animation: false,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: '#eee',
      borderWidth: 1,
      textStyle: { color: '#1f2937' }
    },
    grid: { top: 10, right: 10, bottom: 30, left: 60 },
    xAxis: {
      type: 'category',
      data: ['福山駅周辺', '松永地区', '鞆の浦', '神辺地区', '東部地区', '北部地区', '西部地区'],
      axisLabel: { color: '#1f2937', interval: 0, rotate: 30 }
    },
    yAxis: {
      type: 'value',
      name: '平均価格 (万円/㎡)',
      nameTextStyle: { color: '#1f2937' },
      axisLabel: { formatter: '{value}万円', color: '#1f2937' },
      splitLine: { lineStyle: { color: '#eee' } }
    },
    series: [
      {
        name: 'マンション',
        type: 'bar',
        data: [65, 48, 52, 42, 45, 40, 43],
        itemStyle: { color: 'rgba(87, 181, 231, 1)', borderRadius: [4, 4, 0, 0] }
      },
      {
        name: '戸建て',
        type: 'bar',
        data: [45, 38, 55, 35, 32, 30, 33],
        itemStyle: { color: 'rgba(141, 211, 199, 1)', borderRadius: [4, 4, 0, 0] }
      }
    ]
  }
  const priceTrendOption = {
    animation: false,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: '#eee',
      borderWidth: 1,
      textStyle: { color: '#1f2937' }
    },
    legend: {
      data: ['マンション', '戸建て', '土地'],
      bottom: 0,
      textStyle: { color: '#1f2937' }
    },
    grid: { top: 10, right: 10, bottom: 60, left: 60 },
    xAxis: {
      type: 'category',
      data: ['2020年', '2021年', '2022年', '2023年', '2024年', '2025年'],
      axisLabel: { color: '#1f2937' }
    },
    yAxis: {
      type: 'value',
      name: '価格指数 (2020=100)',
      nameTextStyle: { color: '#1f2937' },
      axisLabel: { color: '#1f2937' },
      splitLine: { lineStyle: { color: '#eee' } }
    },
    series: [
      {
        name: 'マンション',
        type: 'line',
        smooth: true,
        data: [100, 102, 108, 115, 122, 130],
        lineStyle: { width: 3, color: 'rgba(87, 181, 231, 1)' },
        symbol: 'none'
      },
      {
        name: '戸建て',
        type: 'line',
        smooth: true,
        data: [100, 103, 106, 112, 118, 123],
        lineStyle: { width: 3, color: 'rgba(141, 211, 199, 1)' },
        symbol: 'none'
      },
      {
        name: '土地',
        type: 'line',
        smooth: true,
        data: [100, 105, 112, 120, 128, 135],
        lineStyle: { width: 3, color: 'rgba(251, 191, 114, 1)' },
        symbol: 'none'
      }
    ]
  }
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">福山市の不動産市場分析</h2>
          <p className="text-lg text-gray-600">
            福山市の地域別不動産市場動向と将来予測をAIが分析。<br />
            地域特性を考慮した正確な査定の基盤となるデータです。
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">地域別平均価格（2025年6月現在）</h3>
            <ReactECharts option={areaPriceOption} style={{ height: '400px', width: '100%' }} />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">福山市の不動産価格推移（2020-2025）</h3>
            <ReactECharts option={priceTrendOption} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">福山市の主要開発計画と不動産価値への影響</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">開発計画名</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">地域</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">完了予定</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">価格影響予測</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">影響範囲</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">福山駅前再開発プロジェクト</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">福山駅周辺</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2027年</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+15〜20%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">駅から徒歩15分圏内</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">鞆の浦歴史的景観保全事業</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">鞆町</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2026年</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+10〜15%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">鞆町全域</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">松永港湾施設拡張計画</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">松永地区</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2028年</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+5〜10%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">松永地区および周辺</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">福山ICアクセス道路整備</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">福山IC周辺</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2026年</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+8〜12%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">IC周辺3km圏内</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">新幹線福山駅周辺整備計画</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">福山駅</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2029年</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+12〜18%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">駅から徒歩20分圏内</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center">
          <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
            <span>福山市不動産市場の詳細レポートを見る</span>
            <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  )
} 