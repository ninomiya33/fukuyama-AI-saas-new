'use client';

import Link from 'next/link';

export default function ReportHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 flex items-center justify-center text-primary mr-1">
              <i className="ri-arrow-left-line"></i>
            </div>
            <span className="text-gray-700">戻る</span>
          </Link>
        </div>
        
        <h1 className="text-xl font-bold text-gray-900">不動産査定詳細レポート</h1>
        
        <div className="flex items-center">
          <button className="flex items-center px-4 py-2 text-primary border border-primary !rounded-button whitespace-nowrap hover:bg-primary/5 transition-colors">
            <div className="w-5 h-5 flex items-center justify-center mr-1">
              <i className="ri-file-download-line"></i>
            </div>
            <span>PDFダウンロード</span>
          </button>
        </div>
      </div>
    </header>
  );
} 