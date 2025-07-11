'use client';

export default function ExpertComment() {
  return (
    <section className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">専門家コメント</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-3">
              <i className="ri-user-3-line text-4xl"></i>
            </div>
            <h3 className="font-medium text-gray-900 text-center">佐藤 健太</h3>
            <p className="text-sm text-gray-500 text-center mb-2">福山市不動産鑑定士</p>
            <div className="flex text-yellow-400">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="bg-gray-50 rounded-lg p-5 mb-4">
              <h4 className="font-medium text-gray-900 mb-3">物件の特徴と市場評価</h4>
              <p className="text-gray-600 mb-3">この物件は福山駅から徒歩5分という好立地にあり、3LDKの間取りと80㎡の広さは、ファミリー層にとって非常に魅力的です。築15年ですが、2021年に内装リフォームが行われており、実質的な経年劣化は少なく、市場での評価は高いと言えます。</p>
              <p className="text-gray-600">特に、南向きバルコニーからの眺望と日当たりの良さは、同エリアの物件と比較しても優位性があります。また、5階部分は騒音も少なく、プライバシー面でもバランスの取れた位置にあります。</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-5 mb-4">
              <h4 className="font-medium text-gray-900 mb-3">改善ポイント</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mt-0.5 mr-2">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">キッチン設備の更新</p>
                    <p className="text-sm text-gray-600">内装リフォーム済みですが、キッチン設備は築年数相応です。最新の設備に更新することで、さらに市場価値を高められる可能性があります。</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mt-0.5 mr-2">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">収納スペースの最適化</p>
                    <p className="text-sm text-gray-600">現在の収納は標準的ですが、ウォークインクローゼットなどの収納拡充工事を検討すると、特にファミリー層からの評価が上がる可能性があります。</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-5">
              <h4 className="font-medium text-gray-900 mb-3">売却戦略のアドバイス</h4>
              <p className="text-gray-600 mb-3">福山駅周辺の再開発が2026年から2028年にかけて進行することを考慮すると、資産価値の最大化を目指す場合は、再開発完了後の2028年以降の売却がおすすめです。</p>
              <p className="text-gray-600 mb-3">ただし、すぐに売却を希望される場合でも、現在の西町エリアは需要が供給を上回る売り手市場であり、適正価格での取引が期待できます。その場合は、春から初夏（4月〜6月）の不動産取引が活発になる時期に売り出すことをお勧めします。</p>
              <p className="text-gray-600">また、物件の強みである「駅近」「日当たり良好」「内装リフォーム済み」をアピールポイントとして前面に出し、ターゲットをファミリー層に絞った販売戦略が効果的でしょう。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 