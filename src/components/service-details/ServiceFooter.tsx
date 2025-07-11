'use client'

import Link from 'next/link'

export default function ServiceFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-white text-2xl font-['Pacifico']">logo</span>
              <span className="ml-2 font-bold">AI不動産査定</span>
            </div>
            <p className="text-gray-400 text-sm">
              最新のAI技術を活用した不動産査定サービス。正確かつスピーディーにあなたの不動産の価値を把握できます。
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="ri-facebook-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="ri-line-line text-xl"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">不動産査定</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">詳細レポート</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">専門家相談</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">市場動向分析</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">会社概要</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">プライバシーポリシー</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">利用規約</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">お問い合わせ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="ri-map-pin-line mt-1 mr-2"></i>
                <span>〒720-0067 広島県福山市西町1-1-1</span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                <span>03-1234-5678</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                <span>info@ai-fudosan.jp</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">© 2025 AI不動産査定 All Rights Reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <i className="ri-visa-line text-2xl text-gray-400"></i>
            <i className="ri-mastercard-line text-2xl text-gray-400"></i>
            <i className="ri-paypal-line text-2xl text-gray-400"></i>
            <i className="ri-alipay-line text-2xl text-gray-400"></i>
          </div>
        </div>
      </div>
    </footer>
  )
} 