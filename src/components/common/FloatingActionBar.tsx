'use client';

import { motion } from 'framer-motion';

interface FloatingActionBarProps {
  onStartAssessment?: () => void;
  showAssessmentButton?: boolean;
  showContactButton?: boolean;
  showDownloadButton?: boolean;
}

export default function FloatingActionBar({
  onStartAssessment,
  showAssessmentButton = true,
  showContactButton = true,
  showDownloadButton = false
}: FloatingActionBarProps) {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-40"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }}
    >
      {/* 安全領域のためのパディング（iPhoneのホームインジケーター対応） */}
      <div className="pb-safe">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {showAssessmentButton && (
              <motion.button
                onClick={onStartAssessment}
                className="flex-1 max-w-xs bg-blue-500 text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.98,
                  boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.1 }
                }}
                style={{ minHeight: 56 }}
              >
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="ri-calculator-line text-xl"></i>
                </div>
                <span>無料で査定を始める</span>
              </motion.button>
            )}

            {showContactButton && (
              <motion.button
                className="bg-white border-2 border-blue-500 text-blue-600 font-bold text-base py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
                style={{ minHeight: 56 }}
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-user-voice-line"></i>
                </div>
                <span>専門家に相談</span>
              </motion.button>
            )}

            {showDownloadButton && (
              <motion.button
                className="bg-gray-100 text-gray-700 font-medium text-base py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
                style={{ minHeight: 56 }}
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-file-download-line"></i>
                </div>
                <span>資料ダウンロード</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 