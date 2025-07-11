'use client'

import Link from 'next/link'

export default function ServiceHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-primary text-2xl font-['Pacifico']">logo</span>
          <span className="ml-2 text-gray-800 font-bold">AI不動産査定</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-primary">ホーム</Link>
          <Link href="/service-details" className="text-primary font-medium">サービス</Link>
          <Link href="#faq" className="text-gray-600 hover:text-primary">よくある質問</Link>
          <Link href="#contact" className="text-gray-600 hover:text-primary">お問い合わせ</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-primary border border-primary !rounded-button whitespace-nowrap hover:bg-primary hover:text-white transition-colors">ログイン</button>
          <button className="px-4 py-2 bg-primary text-white !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">会員登録</button>
        </div>
      </div>
    </header>
  )
} 