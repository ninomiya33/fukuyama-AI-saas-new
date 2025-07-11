'use client';

export default function PropertySummary() {
  return (
    <section className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">広島県福山市西町1-1-1</h2>
            <p className="text-gray-600">マンション / 3LDK / 80㎡ / 築15年 / 5階</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-sm text-gray-500">査定日: 2025年6月13日</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
            <div className="flex flex-col items-center">
              <p className="text-gray-600 mb-2">推定査定価格</p>
              <h3 className="text-4xl font-bold text-primary mb-2">¥ 58,500,000</h3>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>価格帯: </span>
                <span className="ml-1 text-gray-700 font-medium">¥ 55,000,000 〜 ¥ 62,000,000</span>
              </div>
              <div className="w-full max-w-md">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>最低価格</span>
                  <span>最高価格</span>
                </div>
                <div className="relative w-full h-2 bg-gray-200 rounded-full mb-4">
                  <div className="absolute top-0 left-0 h-full bg-primary/20 rounded-full" style={{ width: '100%' }}></div>
                  <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: '60%', left: '20%' }}></div>
                  <div className="absolute top-0 left-0 h-4 w-4 bg-primary rounded-full -mt-1" style={{ left: '20%' }}></div>
                  <div className="absolute top-0 right-0 h-4 w-4 bg-primary rounded-full -mt-1" style={{ right: '20%' }}></div>
                  <div className="absolute top-0 left-0 h-4 w-4 bg-white border-2 border-primary rounded-full -mt-1" style={{ left: '45%' }}></div>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2">
                  <i className="ri-check-line text-white text-xs"></i>
                </div>
                <span className="text-sm text-gray-600">信頼性スコア: 高 (92%)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">物件基本情報</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-600">物件種別</span>
                <span className="font-medium text-gray-900">マンション</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">間取り</span>
                <span className="font-medium text-gray-900">3LDK</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">専有面積</span>
                <span className="font-medium text-gray-900">80㎡</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">築年数</span>
                <span className="font-medium text-gray-900">15年</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">階数</span>
                <span className="font-medium text-gray-900">5階 / 10階建</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">駐車場</span>
                <span className="font-medium text-gray-900">あり</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 