'use client'

import { useState } from 'react'

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-primary text-2xl font-['Pacifico']">logo</span>
          <span className="ml-2 text-gray-800 font-bold">AI不動産査定</span>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-primary">ホーム</a>
          <a href="#" className="text-gray-600 hover:text-primary">サービス</a>
          <a href="#" className="text-gray-600 hover:text-primary">よくある質問</a>
          <a href="#" className="text-gray-600 hover:text-primary">お問い合わせ</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsLoginModalOpen(true)}
            className="px-4 py-2 text-primary border border-primary !rounded-button whitespace-nowrap hover:bg-primary hover:text-white transition-colors"
          >
            ログイン
          </button>
          
          <button 
            onClick={() => setIsRegisterModalOpen(true)}
            className="px-4 py-2 bg-primary text-white !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors"
          >
            会員登録
          </button>
        </div>
      </div>

      {/* ログインモーダル */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl w-full max-w-md p-8 relative">
            <button 
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">ログイン</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">パスワード</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required 
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="custom-checkbox" />
                  <label htmlFor="remember" className="text-sm text-gray-600">ログイン状態を保持</label>
                </div>
                <a href="#" className="text-sm text-primary hover:text-primary/80">パスワードをお忘れですか？</a>
              </div>
              <button type="submit" className="w-full py-2.5 bg-primary text-white font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                ログイン
              </button>
            </form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">または</span>
              </div>
            </div>
            <div className="space-y-3">
              <button className="w-full py-2.5 px-4 border border-gray-300 rounded-button flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                <i className="ri-google-fill text-[#4285F4]"></i>
                <span>Googleでログイン</span>
              </button>
              <button className="w-full py-2.5 px-4 border border-gray-300 rounded-button flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                <i className="ri-facebook-fill text-[#1877F2]"></i>
                <span>Facebookでログイン</span>
              </button>
              <button className="w-full py-2.5 px-4 border border-gray-300 rounded-button flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                <i className="ri-line-fill text-[#06C755]"></i>
                <span>LINEでログイン</span>
              </button>
            </div>
            <p className="mt-6 text-center text-sm text-gray-600">
              アカウントをお持ちでない方は<a href="#" className="text-primary hover:text-primary/80">こちら</a>
            </p>
          </div>
        </div>
      )}

      {/* 会員登録モーダル */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl w-full max-w-md p-8 relative">
            <button 
              onClick={() => setIsRegisterModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">会員登録</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
                <input 
                  type="text" 
                  id="register-name" 
                  name="name" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                <input 
                  type="email" 
                  id="register-email" 
                  name="email" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">パスワード</label>
                <input 
                  type="password" 
                  id="register-password" 
                  name="password" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="register-password-confirm" className="block text-sm font-medium text-gray-700 mb-1">パスワード確認</label>
                <input 
                  type="password" 
                  id="register-password-confirm" 
                  name="password_confirmation" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required 
                />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="register-terms" className="custom-checkbox" required />
                <label htmlFor="register-terms" className="text-sm text-gray-600">利用規約とプライバシーポリシーに同意します</label>
              </div>
              <button type="submit" className="w-full py-2.5 bg-primary text-white font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
                登録する
              </button>
            </form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">または</span>
              </div>
            </div>
            <div className="space-y-3">
              <button type="button" className="w-full py-2.5 px-4 border border-gray-300 rounded-button flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                <i className="ri-google-fill text-[#4285F4]"></i>
                <span>Googleで登録</span>
              </button>
              <button type="button" className="w-full py-2.5 px-4 border border-gray-300 rounded-button flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                <i className="ri-facebook-fill text-[#1877F2]"></i>
                <span>Facebookで登録</span>
              </button>
              <button type="button" className="w-full py-2.5 px-4 border border-gray-300 rounded-button flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                <i className="ri-line-fill text-[#06C755]"></i>
                <span>LINEで登録</span>
              </button>
            </div>
            <p className="mt-6 text-center text-sm text-gray-600">
              すでにアカウントをお持ちの方は<button type="button" className="text-primary hover:text-primary/80">こちら</button>
            </p>
          </div>
        </div>
      )}
    </header>
  )
} 