'use client';

import { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  // モーダル表示時はbodyスクロール禁止
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-all">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-3 md:p-5 animate-fadeInUp max-h-[90vh] overflow-y-auto">
        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl focus:outline-none"
          aria-label="閉じる"
        >
          <i className="ri-close-line"></i>
        </button>
        {title && (
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
        )}
        <div>{children}</div>
      </div>
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s cubic-bezier(0.25,0.46,0.45,0.94);
        }
      `}</style>
    </div>
  );
} 