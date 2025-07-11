'use client'

export default function FinalCTA({ onStartAssessment }: { onStartAssessment: () => void }) {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">今すぐAI不動産査定を始めましょう</h2>
          <p className="text-lg text-gray-600 mb-8">
            あなたの不動産の価値を正確に知ることで、売却や投資の判断材料にできます。<br />
            完全無料で、たった3分で結果がわかります。
          </p>
          <button className="px-8 py-4 bg-primary text-white font-medium text-lg !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors" onClick={onStartAssessment}>
            無料で査定を始める
          </button>
          <p className="mt-4 text-sm text-gray-500">※ 登録不要・完全無料でご利用いただけます</p>
        </div>
      </div>
    </section>
  )
} 