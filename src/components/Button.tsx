import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
}: ButtonProps) {
  // iOS風の大きめ・角丸・シャドウ・タッチしやすいスタイル
  const baseClasses = 'w-full rounded-2xl font-bold text-base md:text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary active:scale-95';
  
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
    secondary: 'bg-gray-100 text-blue-600 hover:bg-gray-200 active:bg-gray-300 border border-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
  }
  
  const sizeClasses = {
    small: 'py-3 px-4 text-base',
    medium: 'py-4 px-6 text-lg',
    large: 'py-5 px-8 text-xl',
  }
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.97,
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.1, ease: "easeIn" }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1
      }}
      style={{ minHeight: 48 }}
    >
      {children}
    </motion.button>
  )
} 