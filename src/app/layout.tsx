import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: '福山市AI不動産査定 - 地域密着型の不動産価値分析',
  description: '福山市の地域特性と都市計画データを学習したAIと、地域精通のプロフェッショナルによる、より正確で将来を見据えた不動産価値分析を提供します。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Fontsはnext/font/googleで統一済みなので、重複<link>は削除 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Pacificoフォントのみ追加で必要な場合は<link>残す */}
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        {/* RemixiconはCDNでOK */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" />
        {/* EChartsはnext/scriptで非同期読み込み */}
      </head>
      <body className={notoSansJP.className}>
        {/* ECharts CDNスクリプトを非同期で読み込み */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  )
} 