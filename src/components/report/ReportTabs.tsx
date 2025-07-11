'use client';

import { useState } from 'react';
import PriceAnalysisTab from './tabs/PriceAnalysisTab';
import AreaEnvironmentTab from './tabs/AreaEnvironmentTab';
import FuturePredictionTab from './tabs/FuturePredictionTab';
import MarketTrendsTab from './tabs/MarketTrendsTab';

type TabType = 'price-analysis' | 'area-environment' | 'future-prediction' | 'market-trends';

export default function ReportTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('price-analysis');

  const tabs = [
    { id: 'price-analysis' as TabType, label: '価格分析' },
    { id: 'area-environment' as TabType, label: '周辺環境' },
    { id: 'future-prediction' as TabType, label: '将来予測' },
    { id: 'market-trends' as TabType, label: '市場動向' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'price-analysis':
        return <PriceAnalysisTab />;
      case 'area-environment':
        return <AreaEnvironmentTab />;
      case 'future-prediction':
        return <FuturePredictionTab />;
      case 'market-trends':
        return <MarketTrendsTab />;
      default:
        return <PriceAnalysisTab />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden">
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'text-primary border-primary'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        {renderTabContent()}
      </div>
    </div>
  );
} 