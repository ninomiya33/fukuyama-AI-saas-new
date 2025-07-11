'use client'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-primary text-white">
              <h2 className="text-2xl font-bold mb-6">お問い合わせ</h2>
              <p className="mb-8">
                AI不動産査定サービスについてのご質問や、不動産に関するご相談は、お気軽にお問い合わせください。専門スタッフが丁寧にお答えします。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-map-pin-line text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">所在地</h3>
                    <p className="text-white/80">〒720-0067 広島県福山市西町1-1-1</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-phone-line text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">電話番号</h3>
                    <p className="text-white/80">03-1234-5678（平日 9:00-18:00）</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-mail-line text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">メールアドレス</h3>
                    <p className="text-white/80">info@ai-fudosan.jp</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="font-medium mb-4">フォロー</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <i className="ri-twitter-x-line text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <i className="ri-facebook-line text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <i className="ri-instagram-line text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <i className="ri-line-line text-white"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">メッセージを送る</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">件名</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">メッセージ</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-primary text-white font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors"
                >
                  送信する
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 