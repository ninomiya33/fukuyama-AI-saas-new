'use client'

import { motion } from 'framer-motion'

export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-map-pin-line',
      title: '地域特化型AI',
      description: '福山市の地域特性、都市計画、開発状況などのビッグデータを学習したAIが、より正確な価値分析を提供します。'
    },
    {
      icon: 'ri-calendar-check-line',
      title: '売却タイミング分析',
      description: '都市計画や地域開発の将来予測を基に、最適な売却タイミングをAIが提案。将来の資産価値の変動も考慮します。'
    },
    {
      icon: 'ri-team-line',
      title: '地元プロのサポート',
      description: '福山市の不動産に精通したプロフェッショナルが、AI分析結果を基に具体的なアドバイスを提供します。'
    },
    {
      icon: 'ri-building-line',
      title: '都市計画データ活用',
      description: '福山市の都市計画、再開発計画、インフラ整備計画などの公共データを分析に活用し、将来の資産価値の変動を予測します。'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  }

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-2 md:px-4">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">福山市特化型AI査定の特徴</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            福山市の地域特性と都市計画データを学習したAIと、地域精通のプロフェッショナルによる、より正確で将来を見据えた不動産価値分析を提供します。
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center gap-4 group cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.04,
                boxShadow: "0 24px 48px rgba(59, 130, 246, 0.10)",
                transition: { duration: 0.25, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-2 group-hover:bg-primary/20 transition-colors duration-200">
                <i className={`${feature.icon} text-primary text-3xl`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 truncate">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed break-words">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 