import React from 'react'

interface InputProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  type?: 'text' | 'email' | 'password' | 'number'
  required?: boolean
  disabled?: boolean
  error?: string
  className?: string
}

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = false,
  disabled = false,
  error,
  className = '',
}: InputProps) {
  return (
    <div className={`form-group w-full mb-4 ${className}`}>
      {label && (
        <label className="form-label text-base md:text-lg font-medium text-gray-800 mb-2 block">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        disabled={disabled}
        className={`w-full rounded-2xl bg-white border border-gray-200 px-5 py-4 text-base md:text-lg text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
          error ? 'border-red-500' : ''
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{ minHeight: 48 }}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
} 