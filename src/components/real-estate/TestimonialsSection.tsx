export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5.0,
      comment: '「松永地区のマンションを売却する際に利用しました。地域の再開発計画も考慮した査定で、将来性まで分かりやすく説明してもらえました。実際の売却価格もAI査定とほぼ同じで驚きました。」',
      name: '木村 誠一さん',
      location: '福山市松永町在住 / 45歳'
    },
    {
      rating: 4.5,
      comment: '「駅前の実家を相続することになり、将来の価値を知りたかったのです。このAIサービスでは福山駅周辺の開発計画も考慮した将来予測が見られ、売却のタイミングを考える上でとても参考になりました。」',
      name: '中村 優子さん',
      location: '福山市伏見町在住 / 38歳'
    },
    {
      rating: 4.0,
      comment: '「鞆の浦エリアで不動産投資を検討していました。観光開発の計画も加味した分析で、エリアの将来性が具体的に分かり助かりました。地元の不動産事情に詳しいAIだと感じました。」',
      name: '高橋 直樹さん',
      location: '福山市鞆町在住 / 52歳'
    }
  ]

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="ri-star-fill"></i>)
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="ri-star-half-fill"></i>)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-${i}`} className="ri-star-line"></i>)
    }

    return stars
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI不動産査定サービスをご利用いただいたお客様からの声をご紹介します。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="ml-2 text-gray-600">{testimonial.rating}</span>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.comment}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  <i className="ri-user-line"></i>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 