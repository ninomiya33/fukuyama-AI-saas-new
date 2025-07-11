'use client'

export default function ProcessSection({ onStartAssessment }: { onStartAssessment: () => void }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">査定プロセス</h2>
          <p className="text-lg text-gray-600">
            AIと専門家の連携による不動産査定は、簡単4ステップで完了します。<br />
            最短3分で初期査定結果が得られ、詳細な分析レポートは24時間以内に提供されます。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="process-step active bg-white p-6 rounded-lg shadow-sm text-center relative">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">基本情報入力</h3>
            <p className="text-gray-600">物件種別、所在地、築年数などの基本情報を入力します。</p>
            <div className="mt-4 text-sm text-gray-500">所要時間：約1分</div>
          </div>
          
          <div className="process-step active bg-white p-6 rounded-lg shadow-sm text-center relative">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI初期査定</h3>
            <p className="text-gray-600">AIが地域データと物件情報を分析し、初期査定結果を提供します。</p>
            <div className="mt-4 text-sm text-gray-500">所要時間：約2分</div>
          </div>
          
          <div className="process-step bg-white p-6 rounded-lg shadow-sm text-center relative">
            <div className="w-16 h-16 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">詳細情報追加</h3>
            <p className="text-gray-600">より正確な査定のため、物件の詳細情報や写真を追加できます。</p>
            <div className="mt-4 text-sm text-gray-500">所要時間：約5分（任意）</div>
          </div>
          
          <div className="process-step bg-white p-6 rounded-lg shadow-sm text-center relative">
            <div className="w-16 h-16 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">専門家レビュー</h3>
            <p className="text-gray-600">地元の不動産専門家がAI査定結果を検証し、詳細なレポートを提供します。</p>
            <div className="mt-4 text-sm text-gray-500">所要時間：24時間以内</div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="px-8 py-4 bg-primary text-white font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors" onClick={onStartAssessment}>
            無料査定を始める
          </button>
          <p className="mt-4 text-sm text-gray-500">※ 登録不要・完全無料でご利用いただけます</p>
        </div>
      </div>
    </section>
  )
} 