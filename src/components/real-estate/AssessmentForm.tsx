'use client'

import { useState } from 'react'

export default function AssessmentForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [propertyType, setPropertyType] = useState('')
  const [rooms, setRooms] = useState('')
  const [isPropertyTypeDropdownOpen, setIsPropertyTypeDropdownOpen] = useState(false)
  const [isRoomsDropdownOpen, setIsRoomsDropdownOpen] = useState(false)

  const propertyTypes = [
    { value: 'house', label: '戸建て' },
    { value: 'apartment', label: 'マンション' },
    { value: 'land', label: '土地' },
    { value: 'commercial', label: '商業施設' }
  ]

  const roomTypes = [
    { value: '1K', label: '1K' },
    { value: '1DK', label: '1DK' },
    { value: '1LDK', label: '1LDK' },
    { value: '2LDK', label: '2LDK' },
    { value: '3LDK', label: '3LDK' },
    { value: '4LDK', label: '4LDK以上' }
  ]

  const progressSteps = [
    { number: 1, label: '基本情報' },
    { number: 2, label: '物件詳細' },
    { number: 3, label: '査定結果' },
    { number: 4, label: 'レポート' }
  ]

  return (
    <section className="">
      <div className="">
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8">
          <div className="">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">不動産査定フォーム</h2>
            
            {/* プログレスバー */}
            <div className="mb-8">
              <div className="flex justify-between">
                {progressSteps.map((step, index) => (
                  <div key={index} className={`progress-step flex flex-col items-center w-1/4 ${index <= currentStep ? 'active' : ''}`}>
                    <div className="progress-step-circle">{step.number}</div>
                    <span className="mt-2 text-sm text-gray-600">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ステップごとに内容を切り替え */}
            {currentStep === 0 && (
              <form id="property-form" action="https://readdy.ai/api/form/d163qeg18at9t03t1qh0" method="POST" encType="application/x-www-form-urlencoded">
                <div className="mb-6">
                  <input type="hidden" id="property-type-input" name="property_type" value={propertyType} />
                  <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-2">物件種別</label>
                  <div className="relative">
                    <button 
                      type="button" 
                      onClick={() => setIsPropertyTypeDropdownOpen(!isPropertyTypeDropdownOpen)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-left text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {propertyType ? propertyTypes.find(pt => pt.value === propertyType)?.label : '物件種別を選択してください'}
                    </button>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                    {isPropertyTypeDropdownOpen && (
                      <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {propertyTypes.map((type) => (
                          <div 
                            key={type.value}
                            className="py-2 px-4 hover:bg-gray-100 cursor-pointer" 
                            onClick={() => {
                              setPropertyType(type.value)
                              setIsPropertyTypeDropdownOpen(false)
                            }}
                          >
                            {type.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="user-name" className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                  <input 
                    type="text" 
                    id="user-name" 
                    name="user_name"
                    placeholder="例：山田 太郎" 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="user-email" className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                  <input 
                    type="email" 
                    id="user-email" 
                    name="user_email"
                    placeholder="例：sample@example.com" 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700 mb-2">郵便番号</label>
                  <div className="flex space-x-2">
                    <div className="relative flex-1">
                      <input 
                        type="text" 
                        id="postal-code" 
                        placeholder="例：123-4567" 
                        className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      />
                    </div>
                    <button type="button" className="px-4 py-2.5 bg-gray-200 text-gray-700 rounded !rounded-button whitespace-nowrap hover:bg-gray-300 transition-colors">
                      住所検索
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">住所</label>
                  <input 
                    type="text" 
                    id="address" 
                    placeholder="例：東京都新宿区西新宿1-1-1" 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="building-age" className="block text-sm font-medium text-gray-700 mb-2">築年数</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        id="building-age" 
                        placeholder="例：15" 
                        className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500">年</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="floor-area" className="block text-sm font-medium text-gray-700 mb-2">床面積</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        id="floor-area" 
                        placeholder="例：80" 
                        className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500">㎡</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="floor-number" className="block text-sm font-medium text-gray-700 mb-2">階数（マンションの場合）</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        id="floor-number" 
                        placeholder="例：5" 
                        className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500">階</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="rooms" className="block text-sm font-medium text-gray-700 mb-2">間取り</label>
                    <div className="relative">
                      <input type="hidden" id="rooms-input" name="rooms" value={rooms} />
                      <button 
                        type="button" 
                        onClick={() => setIsRoomsDropdownOpen(!isRoomsDropdownOpen)}
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-left text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        {rooms ? roomTypes.find(rt => rt.value === rooms)?.label : '間取りを選択してください'}
                      </button>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                      {isRoomsDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {roomTypes.map((room) => (
                            <div 
                              key={room.value}
                              className="py-2 px-4 hover:bg-gray-100 cursor-pointer" 
                              onClick={() => {
                                setRooms(room.value)
                                setIsRoomsDropdownOpen(false)
                              }}
                            >
                              {room.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">写真アップロード（任意）</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="flex flex-col items-center">
                      <i className="ri-upload-cloud-line text-gray-400 text-3xl mb-2"></i>
                      <p className="text-sm text-gray-500 mb-2">ここにファイルをドラッグ＆ドロップ<br />または</p>
                      <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded !rounded-button whitespace-nowrap hover:bg-gray-300 transition-colors">
                        ファイルを選択
                      </button>
                      <p className="text-xs text-gray-400 mt-2">最大5枚まで、1枚あたり5MB以内</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center">
                    <input type="checkbox" id="terms" className="custom-checkbox" />
                    <label htmlFor="terms" className="text-sm text-gray-600">利用規約とプライバシーポリシーに同意します</label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button 
                    type="button" 
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="px-6 py-3 bg-primary text-white font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors"
                  >
                    次へ進む
                  </button>
                </div>
              </form>
            )}
            {currentStep === 1 && (
              <form>
                {/* 立地条件 */}
                <div className="mb-6">
                  <h3 className="text-md font-medium text-gray-800 mb-3">立地条件</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">最寄り駅</label>
                      <div className="flex space-x-3">
                        <input type="text" placeholder="例：福山駅" className="flex-1 px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                        <div className="relative w-24">
                          <input type="number" placeholder="分" className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500">分</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">日当たり・眺望</label>
                      <div className="flex space-x-3">
                        <div className="relative flex-1">
                          <select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-8">
                            <option>南向き</option>
                            <option>東向き</option>
                            <option>西向き</option>
                            <option>北向き</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <i className="ri-arrow-down-s-line text-gray-400"></i>
                          </div>
                        </div>
                        <div className="relative flex-1">
                          <select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-8">
                            <option>眺望良好</option>
                            <option>普通</option>
                            <option>一部遮蔽物あり</option>
                            <option>眺望なし</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <i className="ri-arrow-down-s-line text-gray-400"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 周辺施設 */}
                <div className="mb-6">
                  <h3 className="text-md font-medium text-gray-800 mb-3">周辺施設（複数選択可）</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <label className="flex items-center bg-white border border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="checkbox" className="hidden" />
                      <span className="checkbox-mark mr-3"></span>
                      <div className="flex items-center">
                        <i className="ri-shopping-basket-line text-gray-500 mr-2"></i>
                        <span className="text-sm">スーパー</span>
                      </div>
                    </label>
                    <label className="flex items-center bg-white border border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="checkbox" className="hidden" />
                      <span className="checkbox-mark mr-3"></span>
                      <div className="flex items-center">
                        <i className="ri-hospital-line text-gray-500 mr-2"></i>
                        <span className="text-sm">病院</span>
                      </div>
                    </label>
                    <label className="flex items-center bg-white border border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="checkbox" className="hidden" />
                      <span className="checkbox-mark mr-3"></span>
                      <div className="flex items-center">
                        <i className="ri-school-line text-gray-500 mr-2"></i>
                        <span className="text-sm">学校</span>
                      </div>
                    </label>
                    <label className="flex items-center bg-white border border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="checkbox" className="hidden" />
                      <span className="checkbox-mark mr-3"></span>
                      <div className="flex items-center">
                        <i className="ri-park-line text-gray-500 mr-2"></i>
                        <span className="text-sm">公園</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* 建物仕様 */}
                <div className="mb-6">
                  <h3 className="text-md font-medium text-gray-800 mb-3">建物仕様</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">構造種別</label>
                      <div className="relative">
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-8">
                          <option>鉄筋コンクリート</option>
                          <option>鉄骨造</option>
                          <option>木造</option>
                          <option>軽量鉄骨</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <i className="ri-arrow-down-s-line text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">階数/所在階</label>
                      <div className="flex space-x-2 items-center">
                        <div className="relative flex-1">
                          <input type="number" placeholder="例：10" className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500">階建</span>
                          </div>
                        </div>
                        <span className="text-gray-500">中</span>
                        <div className="relative flex-1">
                          <input type="number" placeholder="例：7" className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500">階</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">駐車場</label>
                      <div className="flex space-x-3">
                        <label className="flex items-center">
                          <input type="radio" name="parking" className="hidden" />
                          <span className="radio-mark mr-2"></span>
                          <span className="text-sm">あり</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="parking" className="hidden" />
                          <span className="radio-mark mr-2"></span>
                          <span className="text-sm">なし</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* リフォーム履歴 */}
                <div className="mb-6">
                  <h3 className="text-md font-medium text-gray-800 mb-3">リフォーム履歴</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">実施年</label>
                      <div className="relative">
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-8">
                          <option>2023年</option>
                          <option>2022年</option>
                          <option>2021年</option>
                          <option>2020年</option>
                          <option>2019年以前</option>
                          <option>なし</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <i className="ri-arrow-down-s-line text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">工事内容</label>
                      <div className="relative">
                        <select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-8">
                          <option>全面リフォーム</option>
                          <option>水回りのみ</option>
                          <option>内装のみ</option>
                          <option>設備交換のみ</option>
                          <option>その他</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <i className="ri-arrow-down-s-line text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">費用</label>
                      <div className="relative">
                        <input type="number" placeholder="例：200" className="w-full px-4 py-2.5 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <span className="text-gray-500">万円</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button type="button" onClick={() => setCurrentStep(currentStep - 1)} className="px-6 py-3 bg-gray-200 text-gray-700 font-medium !rounded-button whitespace-nowrap hover:bg-gray-300 transition-colors">戻る</button>
                  <button type="button" onClick={() => setCurrentStep(currentStep + 1)} className="px-6 py-3 bg-primary text-white font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">次へ進む</button>
                </div>
              </form>
            )}
            {currentStep === 2 && (
              <form>
                {/* 査定結果 */}
                <div className="mb-8 text-center">
                  <p className="text-gray-600 mb-2">AI査定結果</p>
                  <h3 className="text-4xl font-bold text-primary mb-2">¥ 58,500,000</h3>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <span>価格帯: </span>
                    <span className="ml-1 text-gray-700 font-medium">¥ 55,000,000 〜 ¥ 62,000,000</span>
                  </div>
                  <div className="mt-4 flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    <span className="text-sm text-gray-600">信頼性スコア: 高 (92%)</span>
                  </div>
                </div>

                {/* 査定方法選択 */}
                <div className="mb-8">
                  <h4 className="text-md font-medium text-gray-800 mb-3">査定方法選択</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center bg-white border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="radio" name="assessment-method" className="hidden" defaultChecked />
                      <span className="radio-mark mr-3"></span>
                      <div>
                        <div className="text-sm font-medium">取引事例比較法</div>
                        <div className="text-xs text-gray-500 mt-1">類似物件の取引価格から算出</div>
                      </div>
                    </label>
                    <label className="flex items-center bg-white border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="radio" name="assessment-method" className="hidden" />
                      <span className="radio-mark mr-3"></span>
                      <div>
                        <div className="text-sm font-medium">収益還元法</div>
                        <div className="text-xs text-gray-500 mt-1">将来の収益から現在価値を算出</div>
                      </div>
                    </label>
                    <label className="flex items-center bg-white border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="radio" name="assessment-method" className="hidden" />
                      <span className="radio-mark mr-3"></span>
                      <div>
                        <div className="text-sm font-medium">原価法</div>
                        <div className="text-xs text-gray-500 mt-1">建物の再建築費用から算出</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* エリア相場推移 */}
                <div className="mb-8">
                  <h4 className="text-md font-medium text-gray-800 mb-3">エリア相場推移</h4>
                  <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                    <i className="ri-line-chart-line text-3xl mr-2"></i>
                    <span>グラフ（サンプル）</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h5 className="text-xs font-medium text-gray-500 mb-1">平均取引価格</h5>
                      <p className="text-lg font-bold text-gray-900">5,240万円</p>
                      <p className="text-xs text-green-500 mt-1 flex items-center">
                        <i className="ri-arrow-up-s-line mr-1"></i>
                        <span>前年比 +2.3%</span>
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h5 className="text-xs font-medium text-gray-500 mb-1">平均㎡単価</h5>
                      <p className="text-lg font-bold text-gray-900">68.5万円</p>
                      <p className="text-xs text-green-500 mt-1 flex items-center">
                        <i className="ri-arrow-up-s-line mr-1"></i>
                        <span>前年比 +1.8%</span>
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h5 className="text-xs font-medium text-gray-500 mb-1">取引件数</h5>
                      <p className="text-lg font-bold text-gray-900">187件</p>
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <i className="ri-arrow-down-s-line mr-1"></i>
                        <span>前年比 -5.1%</span>
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h5 className="text-xs font-medium text-gray-500 mb-1">平均販売日数</h5>
                      <p className="text-lg font-bold text-gray-900">45日</p>
                      <p className="text-xs text-red-500 mt-1 flex items-center">
                        <i className="ri-arrow-up-s-line mr-1"></i>
                        <span>前年比 +3日</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 類似物件比較 */}
                <div className="mb-8">
                  <h4 className="text-md font-medium text-gray-800 mb-3">類似物件比較</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">物件</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">築年数</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">面積</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">間取り</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">最寄駅</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">価格</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">福山市西町1-3-5</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">13年</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">78㎡</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">3LDK</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">徒歩8分</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">¥60,500,000</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">福山市東町2-4-8</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">16年</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">72㎡</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">3LDK</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">徒歩12分</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">¥56,800,000</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">福山市南町3-1-10</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">14年</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">75㎡</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">3LDK</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">徒歩10分</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">¥58,200,000</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 価格変動予測 */}
                <div className="mb-8">
                  <h4 className="text-md font-medium text-gray-800 mb-3">価格変動予測</h4>
                  <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                    <i className="ri-bar-chart-2-line text-3xl mr-2"></i>
                    <span>グラフ（サンプル）</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mt-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">価格変動要因分析</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center mr-2 text-green-500 mt-0.5">
                          <i className="ri-arrow-up-line"></i>
                        </div>
                        <span>福山駅周辺の再開発計画により、今後2年間で約3%の価格上昇が見込まれます。</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center mr-2 text-green-500 mt-0.5">
                          <i className="ri-arrow-up-line"></i>
                        </div>
                        <span>新しい商業施設の建設計画があり、利便性向上による価値増加が期待されます。</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center mr-2 text-red-500 mt-0.5">
                          <i className="ri-arrow-down-line"></i>
                        </div>
                        <span>築年数の経過により、年間約0.5%の自然減価が想定されます。</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button type="button" onClick={() => setCurrentStep(currentStep - 1)} className="px-6 py-3 bg-gray-200 text-gray-700 font-medium !rounded-button whitespace-nowrap hover:bg-gray-300 transition-colors">戻る</button>
                  <a href="/report/sample" className="px-6 py-3 bg-primary text-white font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors flex items-center justify-center">
                    <i className="ri-file-text-line mr-2"></i>
                    レポート作成
                  </a>
                </div>
              </form>
            )}
            {currentStep === 3 && (
              <form>
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">レポート作成</h3>
                  <p className="text-gray-600 mb-6">査定内容をもとにレポートを作成します。下のボタンからレポートページへ進んでください。</p>
                </div>
                <div className="flex justify-between">
                  <button type="button" onClick={() => setCurrentStep(currentStep - 1)} className="px-6 py-3 bg-gray-200 text-gray-700 font-medium !rounded-button whitespace-nowrap hover:bg-gray-300 transition-colors">戻る</button>
                  <a href="/report/sample" className="px-6 py-3 bg-primary text-white font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors flex items-center justify-center">
                    <i className="ri-file-text-line mr-2"></i>
                    レポート作成
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 