'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection({ onStartAssessment }: { onStartAssessment: () => void }) {
  return (
    <section 
      className="hero-section pt-8 pb-6 px-2 md:pt-16 md:pb-12 md:px-4 bg-white relative overflow-hidden flex flex-col items-center"
    >
      {/* お城画像を上部中央に大きく表示 */}
      <div className="w-full flex justify-center mb-6 md:mb-10">
        <img
          src="/hero-castle.png"
          alt="福山城イラスト"
          className="rounded-3xl shadow-xl object-contain"
          style={{ width: '90vw', maxWidth: 400, height: 'auto' }}
        />
      </div>
      <motion.div
        className="w-full max-w-md mx-auto flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
          福山市の不動産価値を<br />AIとプロの目線で分析
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
          地域特性と都市計画データを活用したAI分析で<br />最適な売却タイミングまでアドバイス。地元のプロが全面サポート。
        </p>
        <button
          className="w-full py-4 mb-4 bg-primary text-white font-bold text-lg rounded-2xl shadow-lg active:scale-95 transition-all duration-200"
          style={{ minHeight: 48 }}
          onClick={onStartAssessment}
        >
          <i className="ri-search-line mr-2 text-xl"></i>
          無料で査定を始める
        </button>
        <div className="flex flex-col gap-2 w-full mb-4">
          <div className="flex items-center justify-center gap-2 text-gray-600 text-base">
            <i className="ri-timer-line text-primary"></i>
            <span>たった3分で完了</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 text-base">
            <i className="ri-shield-check-line text-primary"></i>
            <span>登録不要</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 text-base">
            <i className="ri-wallet-3-line text-primary"></i>
            <span>完全無料</span>
          </div>
        </div>
        <div className="w-full mt-2 p-3 bg-primary/5 rounded-xl border border-primary/10 text-sm text-gray-600 text-center">
          <i className="ri-information-line text-primary mr-2"></i>
          すでに<strong>2,500</strong>件以上の査定実績があり、<strong>97%</strong>のお客様にご満足いただいています
        </div>
      </motion.div>
    </section>
  )
} 