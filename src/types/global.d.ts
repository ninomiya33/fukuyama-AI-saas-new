declare global {
  interface Window {
    echarts: any
  }
}

declare module 'echarts-for-react' {
  import { EChartsOption } from 'echarts'
  import React from 'react'

  interface ReactEChartsProps {
    option: EChartsOption
    style?: React.CSSProperties
    opts?: {
      renderer?: 'canvas' | 'svg'
    }
    onEvents?: Record<string, Function>
    notMerge?: boolean
    lazyUpdate?: boolean
    theme?: string | object
    onChartReady?: (instance: any) => void
    loadingOption?: object
    showLoading?: boolean
  }

  const ReactECharts: React.FC<ReactEChartsProps>
  export default ReactECharts
}

export {} 