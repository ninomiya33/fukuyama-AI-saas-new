'use client'

import { useState, useEffect } from 'react'
import ReactECharts from 'echarts-for-react'
import { motion } from 'framer-motion'

export default function AssessmentResult() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  // 価格推移チャートのオプション
  const priceChartOption = {
    animation: true,
    animationDuration: 2000,
    animationEasing: 'cubicOut',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: '#eee',
      borderWidth: 1,
      textStyle: { color: '#1f2937' }
    },
    grid: {
      top: 10,
      right: 10,
      bottom: 30,
      left: 60
    },
    xAxis: {
      type: 'category',
      data: ['2023年', '2024年', '2025年', '2026年', '2027年', '2028年', '2029年'],
      axisLabel: { color: '#1f2937' }
    },
    yAxis: {
      type: 'value',
      name: '価格 (万円)',
      nameTextStyle: { color: '#1f2937' },
      axisLabel: {
        formatter: '{value}万円',
        color: '#1f2937'
      },
      splitLine: { lineStyle: { color: '#eee' } }
    },
    series: [{
      name: '推定価格',
      data: [5200, 5400, 5850, 6100, 6400, 6700, 7000],
      type: 'line',
      smooth: true,
      markArea: {
        itemStyle: { color: 'rgba(87, 181, 231, 0.1)' },
        data: [[{ name: '予測値', xAxis: '2025年' }, { xAxis: '2029年' }]]
      },
      lineStyle: { width: 3, color: 'rgba(87, 181, 231, 1)' },
      symbol: 'none',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(87, 181, 231, 0.3)' },
            { offset: 1, color: 'rgba(87, 181, 231, 0.1)' }
          ]
        }
      }
    }]
  }

  // 比較チャートのオプション
  const comparisonChartOption = {
    animation: true,
    animationDuration: 2000,
    animationEasing: 'cubicOut',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: '#eee',
      borderWidth: 1,
      textStyle: { color: '#1f2937' }
    },
    legend: {
      data: ['対象物件', '周辺平均'],
      bottom: 0,
      textStyle: { color: '#1f2937' }
    },
    grid: {
      top: 10,
      right: 10,
      bottom: 50,
      left: 60
    },
    xAxis: {
      type: 'category',
      data: ['築年数', '面積', '階数', '日当たり', '駅距離', '設備'],
      axisLabel: { color: '#1f2937' }
    },
    yAxis: {
      type: 'value',
      name: 'スコア',
      max: 100,
      nameTextStyle: { color: '#1f2937' },
      axisLabel: { color: '#1f2937' },
      splitLine: { lineStyle: { color: '#eee' } }
    },
    series: [{
      name: '対象物件',
      type: 'bar',
      data: [75, 85, 90, 70, 85, 80],
      itemStyle: {
        color: 'rgba(87, 181, 231, 1)',
        borderRadius: [4, 4, 0, 0]
      }
    }, {
      name: '周辺平均',
      type: 'bar',
      data: [65, 70, 75, 65, 70, 65],
      itemStyle: {
        color: 'rgba(141, 211, 199, 1)',
        borderRadius: [4, 4, 0, 0]
      }
    }]
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">査定結果サンプル</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AIによる査定結果のサンプルをご覧ください。実際の査定では、より詳細な情報と分析結果が提供されます。
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ 
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="p-6 md:p-8">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900">広島県福山市西町1-1-1</h3>
                <p className="text-gray-600">マンション / 3LDK / 80㎡ / 築15年 / 5階</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-sm text-gray-500">査定日: 2025年6月11日</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 rounded-lg p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col items-center">
                <p className="text-gray-600 mb-2">推定査定価格</p>
                <motion.h4 
                  className="text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  ¥ 58,500,000
                </motion.h4>
                <div className="flex items-center text-sm text-gray-500">
                  <span>価格帯: </span>
                  <span className="ml-1 text-gray-700 font-medium">¥ 55,000,000 〜 ¥ 62,000,000</span>
                </div>
                <div className="mt-4 flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <i className="ri-check-line text-white text-xs"></i>
                  </div>
                  <span className="text-sm text-gray-600">信頼性スコア: 高 (92%)</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">価格推移</h4>
              <div className="w-full h-64">
                <ReactECharts 
                  option={priceChartOption} 
                  style={{ height: '100%', width: '100%' }}
                  opts={{ renderer: 'canvas' }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">周辺相場との比較</h4>
              <div className="w-full h-64">
                <ReactECharts 
                  option={comparisonChartOption} 
                  style={{ height: '100%', width: '100%' }}
                  opts={{ renderer: 'canvas' }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gray-50 rounded-lg p-4"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <h5 className="text-sm font-medium text-gray-700 mb-2">㎡単価</h5>
                <p className="text-xl font-bold text-gray-900">¥ 731,250 / ㎡</p>
              </motion.div>
              <motion.div 
                className="bg-gray-50 rounded-lg p-4"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <h5 className="text-sm font-medium text-gray-700 mb-2">築年数による減価</h5>
                <p className="text-xl font-bold text-gray-900">-12.5%</p>
              </motion.div>
              <motion.div 
                className="bg-gray-50 rounded-lg p-4"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <h5 className="text-sm font-medium text-gray-700 mb-2">立地評価</h5>
                <p className="text-xl font-bold text-gray-900">Aランク</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="/report/sample" 
                className="px-6 py-3 bg-primary text-white font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors inline-flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-file-text-line mr-2"></i>
                詳細レポートを見る
              </motion.a>
              <motion.button 
                onClick={() => setIsConsultationModalOpen(true)}
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium !rounded-button whitespace-nowrap hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-user-line mr-2"></i>
                専門家に相談する
              </motion.button>
              <motion.button 
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium !rounded-button whitespace-nowrap hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-share-line mr-2"></i>
                結果を共有する
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 専門家相談モーダル */}
      {isConsultationModalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-xl w-full max-w-lg p-8 relative"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button 
              onClick={() => setIsConsultationModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">専門家に相談する</h3>
            <p className="text-gray-600 mb-6">不動産の専門家があなたの査定結果について詳しく解説します</p>
            <form className="space-y-6">
              <div>
                <label htmlFor="consultation-content" className="block text-sm font-medium text-gray-700 mb-1">ご相談内容</label>
                <textarea 
                  id="consultation-content" 
                  name="content" 
                  rows={4} 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  placeholder="ご相談内容をご記入ください"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">希望する連絡方法</label>
                <div className="grid grid-cols-3 gap-4">
                  <label className="flex items-center p-3 border border-gray-200 rounded cursor-pointer hover:border-primary">
                    <input type="radio" name="contact_method" value="phone" className="hidden" />
                    <i className="ri-phone-line text-xl text-gray-400 mr-2"></i>
                    <span>電話</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-200 rounded cursor-pointer hover:border-primary">
                    <input type="radio" name="contact_method" value="email" className="hidden" />
                    <i className="ri-mail-line text-xl text-gray-400 mr-2"></i>
                    <span>メール</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-200 rounded cursor-pointer hover:border-primary">
                    <input type="radio" name="contact_method" value="line" className="hidden" />
                    <i className="ri-message-3-line text-xl text-gray-400 mr-2"></i>
                    <span>LINE</span>
                  </label>
                </div>
              </div>
              <div className="flex space-x-4">
                <button 
                  type="button"
                  onClick={() => setIsConsultationModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                >
                  キャンセル
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                >
                  送信する
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
} 