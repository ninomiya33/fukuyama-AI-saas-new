'use client'

import { useState } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'AIによる査定はどれくらい正確ですか？',
      answer: '当サービスのAI査定は、福山市の過去10年分の不動産取引データ、地域特性、都市計画情報などを学習しており、一般的な査定に比べて高い精度を実現しています。さらに、地元不動産のプロフェッショナルが査定結果を検証することで、より正確な価格評価を提供しています。実際の取引では、AI査定価格と実売却価格の誤差は平均5%以内となっています。'
    },
    {
      id: 'faq-2',
      question: '査定は本当に無料ですか？',
      answer: 'はい、AI査定サービスは完全無料でご利用いただけます。初期査定から専門家によるレビュー、詳細レポートの提供まで、すべて無料です。将来的に売却をご検討される場合に、当社の仲介サービスをご利用いただければ幸いですが、査定後の売却や仲介の依頼は任意であり、一切の強制はありません。'
    },
    {
      id: 'faq-3',
      question: '査定結果はどのように提供されますか？',
      answer: '査定結果は、基本情報入力後すぐにAI初期査定結果がオンラインで表示されます。その後、詳細情報を追加いただくと、24時間以内に専門家によるレビューを加えた詳細レポートをメールでお送りします。レポートには、査定価格の根拠、地域の市場動向、将来価値予測、売却アドバイスなどが含まれます。希望される場合は、対面またはオンラインでの説明も可能です。'
    },
    {
      id: 'faq-4',
      question: '福山市以外の物件も査定できますか？',
      answer: '現在のAIモデルは福山市の不動産市場に特化して学習しているため、最も高い精度で査定できるのは福山市内の物件です。ただし、広島県東部（尾道市、三原市など）の物件についても対応可能です。その他のエリアについては、一般的な査定モデルを使用するため、地域特化型の高精度査定とはならない点をご了承ください。今後、対応エリアは順次拡大していく予定です。'
    },
    {
      id: 'faq-5',
      question: '入力した個人情報はどのように扱われますか？',
      answer: 'お客様の個人情報は、当社のプライバシーポリシーに基づき厳重に管理されます。査定に必要な情報のみを収集し、査定サービスの提供と品質向上の目的以外には使用いたしません。第三者への情報提供は、お客様の明示的な同意がない限り行いません。また、AIの学習に使用する場合は、個人を特定できない形に匿名化した上で利用します。'
    },
    {
      id: 'faq-6',
      question: '売却タイミングの提案は具体的にどのように行われますか？',
      answer: '売却タイミングの提案は、福山市の都市計画、開発プロジェクト、季節変動、市場トレンドなどの要素を総合的に分析して行います。具体的には、今後5年間の価格予測グラフを提供し、価値上昇が見込まれる時期や、特定の開発計画が物件価値に与える影響を時系列で示します。また、物件の状態や所有者の事情も考慮した上で、専門家が最適な売却時期についてアドバイスします。'
    },
    {
      id: 'faq-7',
      question: '査定後に実際の売却を依頼することはできますか？',
      answer: 'はい、査定後に当社への売却依頼も可能です。AI査定と専門家の知見を活かした効果的な販売戦略を立案し、最適な価格での売却をサポートします。当社は福山市の不動産市場に精通しており、豊富な顧客ネットワークを持っているため、スピーディーな売却が期待できます。もちろん、査定後の売却依頼は任意であり、他社への依頼や自己売却も自由です。'
    },
    {
      id: 'faq-8',
      question: 'AIはどのようなデータを使用して査定していますか？',
      answer: '当社のAIは以下のデータを使用して査定を行っています：<br />・福山市の過去10年分の不動産取引データ<br />・地域別の人口動態、世帯数推移<br />・都市計画、再開発計画、インフラ整備計画<br />・学区、商業施設、交通機関などの生活利便性データ<br />・地形、災害リスク、環境データ<br />・季節変動や経済指標との相関データ<br />これらのデータを複合的に分析することで、単なる類似物件比較だけでなく、将来性も考慮した総合的な価値評価を行っています。'
    }
  ]

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">よくある質問</h2>
          <p className="text-lg text-gray-600">
            AI不動産査定サービスについてよくいただく質問をまとめました。<br />
            その他ご不明点はお気軽にお問い合わせください。
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-900 font-medium text-left">{item.question}</span>
                  <i className={`ri-arrow-down-s-line text-gray-600 transition-transform ${openItems.includes(item.id) ? 'rotate-180' : ''}`}></i>
                </button>
                {openItems.includes(item.id) && (
                  <div className="p-4 bg-white">
                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 