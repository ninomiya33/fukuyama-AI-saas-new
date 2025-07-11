'use client';

export default function FixedActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-4 px-4 z-40">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        <button className="px-6 py-3 bg-primary text-white font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors flex items-center">
          <div className="w-5 h-5 flex items-center justify-center mr-2">
            <i className="ri-user-voice-line"></i>
          </div>
          <span>専門家に相談する</span>
        </button>
        <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium !rounded-button whitespace-nowrap hover:bg-gray-100 transition-colors flex items-center">
          <div className="w-5 h-5 flex items-center justify-center mr-2">
            <i className="ri-file-download-line"></i>
          </div>
          <span>資料をダウンロード</span>
        </button>
        <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium !rounded-button whitespace-nowrap hover:bg-gray-100 transition-colors flex items-center">
          <div className="w-5 h-5 flex items-center justify-center mr-2">
            <i className="ri-share-line"></i>
          </div>
          <span>シェア</span>
        </button>
      </div>
    </div>
  );
} 