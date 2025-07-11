declare module 'echarts' {
  export interface EChartsOption {
    animation?: boolean
    tooltip?: {
      trigger?: string
      backgroundColor?: string
      borderColor?: string
      borderWidth?: number
      textStyle?: {
        color?: string
      }
    }
    grid?: {
      top?: number
      right?: number
      bottom?: number
      left?: number
    }
    xAxis?: {
      type?: string
      data?: any[]
      axisLabel?: {
        color?: string
      }
    }
    yAxis?: {
      type?: string
      name?: string
      nameTextStyle?: {
        color?: string
      }
      axisLabel?: {
        formatter?: string
        color?: string
      }
      splitLine?: {
        lineStyle?: {
          color?: string
        }
      }
      max?: number
    }
    legend?: {
      data?: string[]
      bottom?: number
      textStyle?: {
        color?: string
      }
    }
    series?: Array<{
      name?: string
      data?: any[]
      type?: string
      smooth?: boolean
      markArea?: {
        itemStyle?: {
          color?: string
        }
        data?: any[]
      }
      lineStyle?: {
        width?: number
        color?: string
      }
      symbol?: string
      areaStyle?: {
        color?: any
      }
      itemStyle?: {
        color?: string
        borderRadius?: number[]
      }
    }>
  }
} 