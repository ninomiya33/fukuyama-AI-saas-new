'use client';

import ReactECharts from 'echarts-for-react';

export default function AreaEnvironmentTab() {
  // 周辺環境レーダーチャートのオプション
  const environmentRadarOption = {
    animation: false,
    tooltip: {
      trigger: 'item',
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
    radar: {
      indicator: [
        { name: '交通アクセス', max: 100 },
        { name: '買い物環境', max: 100 },
        { name: '教育施設', max: 100 },
        { name: '医療施設', max: 100 },
        { name: '公共施設', max: 100 },
        { name: '治安', max: 100 }
      ],
      radius: '65%',
      splitNumber: 5,
      axisName: {
        color: '#1f2937'
      },
      splitLine: {
        lineStyle: {
          color: '#eee'
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      }
    },
    series: [
      {
        name: '環境評価',
        type: 'radar',
        data: [
          {
            value: [90, 85, 80, 75, 85, 85],
            name: '対象物件',
            areaStyle: {
              color: 'rgba(87, 181, 231, 0.1)'
            },
            lineStyle: {
              color: 'rgba(87, 181, 231, 1)',
              width: 2
            },
            itemStyle: {
              color: 'rgba(87, 181, 231, 1)'
            }
          },
          {
            value: [75, 70, 65, 70, 75, 75],
            name: 'エリア平均',
            areaStyle: {
              color: 'rgba(141, 211, 199, 0.1)'
            },
            lineStyle: {
              color: 'rgba(141, 211, 199, 1)',
              width: 2
            },
            itemStyle: {
              color: 'rgba(141, 211, 199, 1)'
            }
          }
        ]
      }
    ]
  };

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">交通アクセス評価</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-5">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <i className="ri-train-line text-primary"></i>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">最寄り駅</h4>
                <p className="text-gray-600">福山駅（JR山陽本線）</p>
              </div>
            </div>
            <div className="pl-13">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">徒歩距離</span>
                <span className="font-medium text-gray-900">400m（徒歩5分）</span>
              </div>
              <div className="progress-bar mb-3">
                <div className="progress-bar-fill bg-primary" style={{ width: '90%' }}></div>
              </div>
              <p className="text-sm text-gray-600">エリア内の物件の中でも駅に近く、通勤・通学に非常に便利な立地です。</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-5">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <i className="ri-bus-line text-primary"></i>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">バス停</h4>
                <p className="text-gray-600">西町バス停</p>
              </div>
            </div>
            <div className="pl-13">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">徒歩距離</span>
                <span className="font-medium text-gray-900">150m（徒歩2分）</span>
              </div>
              <div className="progress-bar mb-3">
                <div className="progress-bar-fill bg-primary" style={{ width: '95%' }}></div>
              </div>
              <p className="text-sm text-gray-600">複数路線が通るバス停が近く、市内各所へのアクセスが便利です。</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <h4 className="font-medium text-gray-900 mb-3">主要施設へのアクセス時間</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-2">
                  <i className="ri-government-line"></i>
                </div>
                <p className="text-gray-600">福山市役所</p>
              </div>
              <p className="font-medium text-gray-900 ml-7">徒歩15分 / 車5分</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-2">
                  <i className="ri-hospital-line"></i>
                </div>
                <p className="text-gray-600">福山市民病院</p>
              </div>
              <p className="font-medium text-gray-900 ml-7">バス15分 / 車10分</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <div className="w-5 h-5 flex items-center justify-center text-primary mr-2">
                  <i className="ri-shopping-bag-line"></i>
                </div>
                <p className="text-gray-600">福山駅前商店街</p>
              </div>
              <p className="font-medium text-gray-900 ml-7">徒歩8分 / 車3分</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">生活利便施設</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-medium text-gray-900 mb-3">買い物施設</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mt-0.5 mr-2">
                  <i className="ri-store-2-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">イオン福山店</p>
                  <p className="text-sm text-gray-600">徒歩10分（800m）</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mt-0.5 mr-2">
                  <i className="ri-store-2-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">西町スーパーマーケット</p>
                  <p className="text-sm text-gray-600">徒歩3分（250m）</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mt-0.5 mr-2">
                  <i className="ri-store-2-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">ドラッグストア</p>
                  <p className="text-sm text-gray-600">徒歩5分（400m）</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-medium text-gray-900 mb-3">教育施設</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mt-0.5 mr-2">
                  <i className="ri-school-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">福山市立西小学校</p>
                  <p className="text-sm text-gray-600">徒歩8分（650m）</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mt-0.5 mr-2">
                  <i className="ri-school-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">福山市立中央中学校</p>
                  <p className="text-sm text-gray-600">徒歩12分（950m）</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-primary mt-0.5 mr-2">
                  <i className="ri-school-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">福山市立図書館</p>
                  <p className="text-sm text-gray-600">徒歩10分（800m）</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">治安・災害リスク評価</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-medium text-gray-900 mb-3">治安状況</h4>
            <div className="flex items-center mb-3">
              <div className="w-5 h-5 flex items-center justify-center text-green-500 mr-2">
                <i className="ri-shield-check-line"></i>
              </div>
              <p className="text-gray-900">治安評価: <span className="font-medium">良好</span></p>
            </div>
            <p className="text-sm text-gray-600 mb-3">福山市西町エリアは市内でも比較的治安の良いエリアです。過去3年間の犯罪発生率は市平均を下回っています。</p>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">安全スコア</span>
              <span>85/100</span>
            </div>
            <div className="progress-bar">
              <div className="progress-bar-fill bg-green-500" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-medium text-gray-900 mb-3">災害リスク</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-yellow-500 mt-0.5 mr-2">
                  <i className="ri-flood-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">洪水リスク: <span className="text-yellow-600">中程度</span></p>
                  <p className="text-sm text-gray-600">想定最大規模の降雨時に0.5m未満の浸水の可能性があります。</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center text-green-500 mt-0.5 mr-2">
                  <i className="ri-earthquake-line"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">地震リスク: <span className="text-green-600">低い</span></p>
                  <p className="text-sm text-gray-600">地盤は比較的安定しており、建物の耐震性能も基準を満たしています。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">周辺環境スコア</h3>
        <div className="w-full h-80">
          <ReactECharts option={environmentRadarOption} style={{ height: '100%' }} />
        </div>
      </div>
    </div>
  );
} 