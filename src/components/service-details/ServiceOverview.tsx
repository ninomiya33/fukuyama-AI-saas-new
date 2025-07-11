'use client'

import ReactECharts from 'echarts-for-react'

export default function ServiceOverview() {
  // regionOption
  const regionOption = {
    animation: false,
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: '#eee',
      borderWidth: 1,
      textStyle: { color: '#1f2937' }
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      textStyle: { color: '#1f2937' }
    },
    series: [
      {
        name: '地域データ分析',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: { show: false, position: 'center' },
        emphasis: {
          label: { show: true, fontSize: '16', fontWeight: 'bold' }
        },
        labelLine: { show: false },
        data: [
          { value: 35, name: '取引履歴', itemStyle: { color: 'rgba(87, 181, 231, 1)' } },
          { value: 25, name: '地域特性', itemStyle: { color: 'rgba(141, 211, 199, 1)' } },
          { value: 20, name: '都市計画', itemStyle: { color: 'rgba(251, 191, 114, 1)' } },
          { value: 20, name: '経済指標', itemStyle: { color: 'rgba(252, 141, 98, 1)' } }
        ]
      }
    ]
  }
  // predictionOption
  const predictionOption = {
    animation: false,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: '#eee',
      borderWidth: 1,
      textStyle: { color: '#1f2937' }
    },
    legend: {
      data: ['予測価格', '最適売却期間'],
      bottom: 0,
      textStyle: { color: '#1f2937' }
    },
    grid: { top: 10, right: 30, bottom: 60, left: 60 },
    xAxis: {
      type: 'category',
      data: ['現在', '半年後', '1年後', '1.5年後', '2年後', '2.5年後', '3年後'],
      axisLabel: { color: '#1f2937' }
    },
    yAxis: {
      type: 'value',
      name: '価格 (万円)',
      nameTextStyle: { color: '#1f2937' },
      axisLabel: { formatter: '{value}万円', color: '#1f2937' },
      splitLine: { lineStyle: { color: '#eee' } }
    },
    series: [
      {
        name: '予測価格',
        type: 'line',
        smooth: true,
        data: [3200, 3250, 3400, 3650, 3900, 4100, 4200],
        lineStyle: { width: 3, color: 'rgba(87, 181, 231, 1)' },
        symbol: 'none',
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(87, 181, 231, 0.3)' },
              { offset: 1, color: 'rgba(87, 181, 231, 0.1)' }
            ]
          }
        }
      },
      {
        name: '最適売却期間',
        type: 'line',
        smooth: true,
        lineStyle: { width: 0 },
        symbol: 'none',
        areaStyle: { color: 'rgba(251, 191, 114, 0.2)' },
        markArea: {
          itemStyle: { color: 'rgba(251, 191, 114, 0.2)' },
          data: [[{ name: '最適売却期間', xAxis: '1.5年後' }, { xAxis: '2.5年後' }]]
        },
        data: [3200, 3250, 3400, 3650, 3900, 4100, 4200]
      }
    ]
  }
  return (
    <section id="service-details" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI不動産査定サービスとは</h2>
          <p className="text-lg text-gray-600">
            最新のAI技術と地元不動産のプロフェッショナルが連携し、福山市の地域特性や都市計画データを活用した、より正確で将来を見据えた不動産価値分析を提供するサービスです。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">地域特化型AIの強み</h3>
            <p className="text-gray-600 mb-6">
              一般的な不動産査定サービスとは異なり、福山市の地域特性、都市計画、開発状況などのビッグデータを学習したAIが分析を行います。地域に特化したデータを活用することで、より正確な価値分析と将来予測が可能になります。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                  <i className="ri-check-line text-primary"></i>
                </div>
                <span className="text-gray-700">福山市の地域別不動産取引データを分析</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                  <i className="ri-check-line text-primary"></i>
                </div>
                <span className="text-gray-700">都市計画や再開発情報を考慮した将来予測</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                  <i className="ri-check-line text-primary"></i>
                </div>
                <span className="text-gray-700">地域の人口動態や経済指標を反映</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                  <i className="ri-check-line text-primary"></i>
                </div>
                <span className="text-gray-700">福山市特有の価値要因（港湾、工業地域、観光地など）を考慮</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <ReactECharts option={regionOption} style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 bg-gray-100 p-6 rounded-lg">
            <ReactECharts option={predictionOption} style={{ height: '400px', width: '100%' }} />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">売却タイミングの最適化</h3>
            <p className="text-gray-600 mb-6">
              単なる現在価値の査定だけでなく、福山市の都市計画や地域開発の将来予測を基に、最適な売却タイミングをAIが提案します。将来の資産価値の変動を予測し、最も有利なタイミングでの売却をサポートします。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                  <i className="ri-check-line text-primary"></i>
                </div>
                <span className="text-gray-700">今後5年間の価格予測グラフを提供</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                  <i className="ri-check-line text-primary"></i>
                </div>
                <span className="text-gray-700">福山市の開発計画に基づく価値変動予測</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                  <i className="ri-check-line text-primary"></i>
                </div>
                <span className="text-gray-700">季節変動や市場トレンドを考慮した売却時期の提案</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">地元プロによるサポート</h3>
            <p className="text-gray-600 mb-6">
              AIによる分析だけでなく、福山市の不動産市場に精通したプロフェッショナルが、AI分析結果を基に具体的なアドバイスを提供します。テクノロジーと人間の専門知識を組み合わせることで、より信頼性の高いサービスを実現しています。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                  <i className="ri-check-line text-primary"></i>
                </div>
                <span className="text-gray-700">地元不動産のプロによる査定結果の検証</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                  <i className="ri-check-line text-primary"></i>
                </div>
                <span className="text-gray-700">物件の特性に合わせた具体的なアドバイス</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                  <i className="ri-check-line text-primary"></i>
                </div>
                <span className="text-gray-700">オンラインまたは対面での無料相談サービス</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                  <i className="ri-check-line text-primary"></i>
                </div>
                <span className="text-gray-700">売却・購入に関する総合的なサポート</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%2520Japanese%2520real%2520estate%2520agents%2520in%2520a%2520modern%2520office%2520environment%252C%2520discussing%2520property%2520details%2520with%2520digital%2520screens%2520showing%2520property%2520data%2520and%2520AI%2520analysis%252C%2520clean%2520professional%2520setting%252C%2520business%2520attire%252C%2520natural%2520lighting%252C%2520minimalist%2520Japanese%2520office%2520design&width=600&height=400&seq=3&orientation=landscape" 
              alt="地元プロによるサポート" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 