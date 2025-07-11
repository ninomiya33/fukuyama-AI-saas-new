'use client'

export default function CaseStudies() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">査定事例</h2>
          <p className="text-lg text-gray-600">
            実際の査定事例をご紹介します。<br />
            AIと専門家の連携による正確な査定結果が、お客様の不動産売却をサポートしています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%2520Japanese%2520apartment%2520building%2520in%2520urban%2520setting%252C%2520clean%2520architectural%2520design%252C%2520residential%2520area%252C%2520Fukuyama%2520city%252C%2520natural%2520lighting%252C%2520blue%2520sky%252C%2520no%2520people%252C%2520professional%2520real%2520estate%2520photography&width=400&height=300&seq=4&orientation=landscape" 
                alt="マンション事例" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded">マンション</div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">福山駅徒歩10分のマンション</h3>
              <p className="text-sm text-gray-600 mb-4">3LDK・75㎡・築12年・7階</p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">AI初期査定</span>
                  <span className="font-medium text-gray-900">4,850万円</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">専門家調整後</span>
                  <span className="font-medium text-gray-900">5,100万円</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">実際の売却価格</span>
                  <span className="font-medium text-primary">5,200万円</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>駅近の好立地と、駅前再開発計画の影響で価値上昇が見込まれると専門家が判断。AI査定より高い価格での売却に成功しました。</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Traditional%2520Japanese%2520house%2520with%2520modern%2520elements%252C%2520residential%2520neighborhood%252C%2520Fukuyama%2520city%252C%2520small%2520garden%252C%2520clean%2520exterior%252C%2520natural%2520lighting%252C%2520no%2520people%252C%2520professional%2520real%2520estate%2520photography&width=400&height=300&seq=5&orientation=landscape" 
                alt="戸建て事例" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded">戸建て</div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">松永エリアの戸建て住宅</h3>
              <p className="text-sm text-gray-600 mb-4">4LDK・120㎡・築18年・駐車場2台</p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">AI初期査定</span>
                  <span className="font-medium text-gray-900">3,200万円</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">専門家調整後</span>
                  <span className="font-medium text-gray-900">3,450万円</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">実際の売却価格</span>
                  <span className="font-medium text-primary">3,500万円</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>リフォーム済みの内装と広い庭が評価され、専門家の助言により適切な価格設定ができました。港湾施設拡張計画の影響も考慮されています。</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Japanese%2520traditional%2520townscape%2520in%2520Tomonoura%252C%2520historic%2520buildings%252C%2520harbor%2520view%252C%2520Fukuyama%2520city%252C%2520clear%2520sky%252C%2520traditional%2520architecture%252C%2520no%2520people%252C%2520professional%2520real%2520estate%2520photography&width=400&height=300&seq=6&orientation=landscape" 
                alt="鞆の浦事例" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded">古民家</div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">鞆の浦の歴史的古民家</h3>
              <p className="text-sm text-gray-600 mb-4">5K・150㎡・築80年・海望む立地</p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">AI初期査定</span>
                  <span className="font-medium text-gray-900">1,800万円</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">専門家調整後</span>
                  <span className="font-medium text-gray-900">2,700万円</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">実際の売却価格</span>
                  <span className="font-medium text-primary">2,850万円</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>歴史的価値と観光地としての将来性を専門家が評価。鞆の浦の景観保全事業の影響も考慮し、AI査定を大幅に上回る価格で売却できました。</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
            <span>もっと多くの事例を見る</span>
            <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  )
} 