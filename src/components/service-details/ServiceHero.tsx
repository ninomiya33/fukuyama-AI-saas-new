'use client'

import Link from 'next/link'

export default function ServiceHero({ onStartAssessment }: { onStartAssessment: () => void }) {
  return (
    <section 
      className="hero-section py-16 md:py-24" 
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=A%2520modern%2520Japanese%2520house%2520with%2520clean%2520architectural%2520lines%252C%2520minimalist%2520design%252C%2520natural%2520lighting%252C%2520wooden%2520elements%252C%2520large%2520windows%252C%2520surrounded%2520by%2520greenery%252C%2520with%2520a%2520city%2520skyline%2520of%2520Fukuyama%2520in%2520the%2520background%252C%2520high-quality%2520real%2520estate%2520photography%252C%2520soft%2520lighting%252C%2520no%2520people%252C%2520left%2520side%2520with%2520clean%2520white%2520space%2520for%2520text&width=1600&height=800&seq=2&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 w-full">
        <div className="hero-content flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              AIと専門家の連携による<br />不動産査定サービス
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              福山市の地域特性と都市計画データを活用した<br />
              最先端のAI分析と地元不動産のプロによる<br />
              正確で将来を見据えた不動産価値分析を提供します。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-primary text-white font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors" onClick={onStartAssessment}>
                無料で査定を始める
              </button>
              <Link 
                href="#service-details" 
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium !rounded-button whitespace-nowrap hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 