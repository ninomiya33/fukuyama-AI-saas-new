# Fukuyama App

Next.jsとReactを使用したiOSネイティブアプリ風のウェブアプリケーションです。

## 機能

- iOSネイティブアプリ風のUIデザイン
- レスポンシブデザイン
- モーダル機能
- ボトムナビゲーション
- Tailwind CSSによるスタイリング

## 技術スタック

- **Next.js 14** - Reactフレームワーク
- **React 18** - UIライブラリ
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **PostCSS** - CSS処理

## セットアップ

1. 依存関係をインストール:
```bash
npm install
```

2. 開発サーバーを起動:
```bash
npm run dev
```

3. ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認

## 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクションビルドを作成
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - ESLintでコードをチェック

## プロジェクト構造

```
src/
├── app/
│   ├── globals.css      # グローバルスタイル
│   ├── layout.tsx       # ルートレイアウト
│   └── page.tsx         # メインページ
├── components/          # 再利用可能なコンポーネント
└── lib/                # ユーティリティ関数
```

## デザインシステム

このアプリケーションはiOSネイティブアプリ風のデザインを採用しています：

- 丸みを帯びたコーナー
- シャドウ効果
- 大きなタッチターゲット（44px以上）
- タップ時の色変化
- グループ化されたフィールド

## ライセンス

MIT 