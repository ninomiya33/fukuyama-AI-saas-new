'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    id: 'home',
    label: 'ホーム',
    icon: 'ri-home-line',
    href: '/'
  },
  {
    id: 'service',
    label: 'サービス',
    icon: 'ri-service-line',
    href: '/service-details'
  },
  {
    id: 'assessment',
    label: '査定',
    icon: 'ri-calculator-line',
    href: '#assessment'
  },
  {
    id: 'profile',
    label: 'マイページ',
    icon: 'ri-user-line',
    href: '#profile'
  }
];

export default function BottomNavBar() {
  const pathname = usePathname();

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50"
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
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex flex-col items-center justify-center py-2 px-3 rounded-2xl transition-all duration-200 min-h-[60px] min-w-[60px]"
              >
                <motion.div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-1 ${
                    isActive 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: isActive 
                      ? "0 8px 25px rgba(59, 130, 246, 0.3)" 
                      : "0 4px 15px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 25 
                  }}
                >
                  <i className={`${item.icon} text-xl`}></i>
                </motion.div>
                
                <span className={`text-xs font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
} 