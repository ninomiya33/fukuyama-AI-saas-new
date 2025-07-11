'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/real-estate/Header'
import HeroSection from '@/components/real-estate/HeroSection'
import FeaturesSection from '@/components/real-estate/FeaturesSection'
import AssessmentResult from '@/components/real-estate/AssessmentResult'
import TestimonialsSection from '@/components/real-estate/TestimonialsSection'
import CTASection from '@/components/real-estate/CTASection'
import Footer from '@/components/real-estate/Footer'
import BottomNavBar from '@/components/common/BottomNavBar'
import FloatingActionBar from '@/components/common/FloatingActionBar'
import Modal from '@/components/common/Modal'
import AssessmentForm from '@/components/real-estate/AssessmentForm'

export default function Home() {
  const [showAssessmentForm, setShowAssessmentForm] = useState(false)

  const handleStartAssessment = () => {
    setShowAssessmentForm(true)
  }
  const handleCloseModal = () => {
    setShowAssessmentForm(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection onStartAssessment={handleStartAssessment} />
      <FeaturesSection />
      {/* 査定フォームの場所にデザインを忠実に再現したブロックを表示 */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 flex justify-center">
          <motion.div 
            className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-gray-100"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              transform: "translateY(-5px)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.span 
              className="text-primary font-semibold text-base mb-3 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              AI不動産査定
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 text-center leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              あなたの不動産の価値を<br className="hidden md:block" />AIが正確に査定します
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-gray-600 mb-8 text-center leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              福山市の地域特性と最新の不動産データを活用した<br className="hidden md:block" />高精度なAI査定で、あなたの資産価値を見える化
            </motion.p>
            <motion.button
              id="start-assessment-main"
              className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold text-lg rounded-full shadow-md whitespace-nowrap hover:bg-primary/90 transition-colors flex items-center justify-center mb-7 active:scale-95"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 30px rgba(220, 38, 38, 0.4)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartAssessment}
            >
              <i className="ri-search-line mr-2 text-xl"></i>
              無料で査定を始める
            </motion.button>
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-timer-line text-primary mr-2 text-lg"></i>
                <span>たった3分で完了</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-shield-check-line text-primary mr-2 text-lg"></i>
                <span>登録不要</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-wallet-3-line text-primary mr-2 text-lg"></i>
                <span>完全無料</span>
              </motion.div>
            </motion.div>
            <motion.div 
              className="w-full mt-2 p-4 bg-primary/5 rounded-xl border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-gray-600 text-center">
                <i className="ri-information-line text-primary mr-2"></i>
                すでに<strong>2,500</strong>件以上の査定実績があり、<strong>97%</strong>のお客様にご満足いただいています
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <AssessmentResult />
      <TestimonialsSection />
      <CTASection onStartAssessment={handleStartAssessment} />
      <Footer />
      
      {/* モバイル用の下部固定ナビゲーション */}
      <div className="md:hidden">
        <BottomNavBar />
      </div>
      
      {/* モバイル用の下部固定アクションバー */}
      <div className="md:hidden">
        <FloatingActionBar 
          onStartAssessment={handleStartAssessment}
          showAssessmentButton={true}
          showContactButton={true}
          showDownloadButton={false}
        />
      </div>

      {/* モーダルでAI査定フォーム */}
      <Modal isOpen={showAssessmentForm} onClose={handleCloseModal} title="無料AI査定フォーム">
        <AssessmentForm />
      </Modal>
    </div>
  )
} 