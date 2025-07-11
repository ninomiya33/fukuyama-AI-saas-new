'use client'

import { useEffect, useState } from 'react'
import ServiceHeader from './ServiceHeader'
import ServiceHero from './ServiceHero'
import ServiceOverview from './ServiceOverview'
import ProcessSection from './ProcessSection'
import MarketAnalysis from './MarketAnalysis'
import CaseStudies from './CaseStudies'
import FAQSection from './FAQSection'
import ContactSection from './ContactSection'
import FinalCTA from './FinalCTA'
import ServiceFooter from './ServiceFooter'
import BottomNavBar from '@/components/common/BottomNavBar'
import FloatingActionBar from '@/components/common/FloatingActionBar'
import Modal from '@/components/common/Modal'
import AssessmentForm from '@/components/real-estate/AssessmentForm'

export default function ServiceDetailsPage() {
  const [showAssessmentForm, setShowAssessmentForm] = useState(false)
  const handleStartAssessment = () => setShowAssessmentForm(true)
  const handleCloseModal = () => setShowAssessmentForm(false)

  useEffect(() => {
    // EChartsの初期化は各コンポーネント内で行う
  }, [])

  return (
    <div className="bg-gray-50">
      <ServiceHeader />
      <ServiceHero onStartAssessment={handleStartAssessment} />
      <ServiceOverview />
      <ProcessSection onStartAssessment={handleStartAssessment} />
      <MarketAnalysis />
      <CaseStudies />
      <FAQSection />
      <ContactSection />
      <FinalCTA onStartAssessment={handleStartAssessment} />
      <ServiceFooter />
      
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
          showDownloadButton={true}
        />
      </div>
      {/* 査定フォームモーダル */}
      <Modal isOpen={showAssessmentForm} onClose={handleCloseModal} title="無料AI査定フォーム">
        <AssessmentForm />
      </Modal>
    </div>
  )
} 