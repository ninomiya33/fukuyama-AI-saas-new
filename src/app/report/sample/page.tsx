'use client';

import { useState } from 'react'
import Link from 'next/link'

export default function ReportSamplePage() {
  return (
    <section className="py-8 md:py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-2 md:px-4 max-w-3xl">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">不動産査定レポート</h1>
          <p className="text-center text-gray-500 mb-6">AIとプロの分析による詳細レポート</p>
          <div className="mb-8 text-center">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-4 py-1 rounded-full mb-2">サンプル</span>
            <h2 className="text-3xl font-bold text-primary mb-2">¥ 58,500,000</h2>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <span>価格帯: </span>
              <span className="ml-1 text-gray-700 font-medium">¥ 55,000,000 〜 ¥ 62,000,000</span>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2">
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <span className="text-sm text-gray-600">信頼性スコア: 高 (92%)</span>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">物件情報</h3>
            <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-xl p-4">
              <div>
                <div className="text-xs text-gray-500">所在地</div>
                <div className="text-base text-gray-900 font-medium">広島県福山市西町1-1-1</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">種別</div>
                <div className="text-base text-gray-900 font-medium">マンション</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">築年数</div>
                <div className="text-base text-gray-900 font-medium">15年</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">面積</div>
                <div className="text-base text-gray-900 font-medium">75㎡</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">間取り</div>
                <div className="text-base text-gray-900 font-medium">3LDK</div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">エリア相場推移</h3>
            <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 mb-4">
              <i className="ri-line-chart-line text-3xl mr-2"></i>
              <span>グラフ（サンプル）</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <h5 className="text-xs font-medium text-gray-500 mb-1">平均取引価格</h5>
                <p className="text-lg font-bold text-gray-900">5,240万円</p>
                <p className="text-xs text-green-500 mt-1 flex items-center">
                  <i className="ri-arrow-up-s-line mr-1"></i>
                  <span>前年比 +2.3%</span>
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <h5 className="text-xs font-medium text-gray-500 mb-1">平均㎡単価</h5>
                <p className="text-lg font-bold text-gray-900">68.5万円</p>
                <p className="text-xs text-green-500 mt-1 flex items-center">
                  <i className="ri-arrow-up-s-line mr-1"></i>
                  <span>前年比 +1.8%</span>
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <h5 className="text-xs font-medium text-gray-500 mb-1">取引件数</h5>
                <p className="text-lg font-bold text-gray-900">187件</p>
                <p className="text-xs text-red-500 mt-1 flex items-center">
                  <i className="ri-arrow-down-s-line mr-1"></i>
                  <span>前年比 -5.1%</span>
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <h5 className="text-xs font-medium text-gray-500 mb-1">平均販売日数</h5>
                <p className="text-lg font-bold text-gray-900">45日</p>
                <p className="text-xs text-red-500 mt-1 flex items-center">
                  <i className="ri-arrow-up-s-line mr-1"></i>
                  <span>前年比 +3日</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">類似物件比較</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">物件</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">築年数</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">面積</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">間取り</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">最寄駅</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">価格</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">福山市西町1-3-5</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">13年</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">78㎡</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">3LDK</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">徒歩8分</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">¥60,500,000</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">福山市東町2-4-8</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">16年</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">72㎡</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">3LDK</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">徒歩12分</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">¥56,800,000</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">福山市南町3-1-10</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">14年</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">75㎡</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">3LDK</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">徒歩10分</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">¥58,200,000</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">価格変動予測</h3>
            <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 mb-4">
              <i className="ri-bar-chart-2-line text-3xl mr-2"></i>
              <span>グラフ（サンプル）</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="text-sm font-medium text-gray-700 mb-2">価格変動要因分析</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 text-green-500 mt-0.5">
                    <i className="ri-arrow-up-line"></i>
                  </div>
                  <span>福山駅周辺の再開発計画により、今後2年間で約3%の価格上昇が見込まれます。</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 text-green-500 mt-0.5">
                    <i className="ri-arrow-up-line"></i>
                  </div>
                  <span>新しい商業施設の建設計画があり、利便性向上による価値増加が期待されます。</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 text-red-500 mt-0.5">
                    <i className="ri-arrow-down-line"></i>
                  </div>
                  <span>築年数の経過により、年間約0.5%の自然減価が想定されます。</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">レポート出力</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center text-primary mb-2">
                  <i className="ri-file-pdf-line text-2xl"></i>
                </div>
                <span className="text-sm font-medium">PDF出力</span>
              </button>
              <button className="flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center text-primary mb-2">
                  <i className="ri-mail-line text-2xl"></i>
                </div>
                <span className="text-sm font-medium">メール送信</span>
              </button>
              <button className="flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center text-green-500 mb-2">
                  <i className="ri-line-fill text-2xl"></i>
                </div>
                <span className="text-sm font-medium">LINE共有</span>
              </button>
              <button className="flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center text-primary mb-2">
                  <i className="ri-link text-2xl"></i>
                </div>
                <span className="text-sm font-medium">URL生成</span>
              </button>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400">
            <p>※このレポートはAIによる査定結果であり、実際の取引価格を保証するものではありません。</p>
            <p>※詳細な査定結果や市場分析については、担当者にお問い合わせください。</p>
          </div>
        </div>
        <div className="text-center">
          <Link href="/" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-full shadow-md hover:bg-primary/90 transition-colors mt-2">
            トップに戻る
          </Link>
        </div>
      </div>
    </section>
  )
} 