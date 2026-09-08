# Workstack

シンプルなプロジェクト管理アプリです。

プロジェクトの登録・編集・削除・検索・並び替えなど、基本的な管理機能を実装しています。

React / TypeScript / Next.js を使ったフロントエンド開発の学習と、実際のアプリケーション開発の流れを経験することを目的として制作しました。

## Demo

[Portfolio Site](#)

## Features

* プロジェクトの一覧表示
* プロジェクトの追加
* プロジェクト名の編集
* プロジェクトの削除
* Active / Archived の切り替え
* プロジェクト名による検索
* プロジェクトの並び替え
* 編集中の他操作の停止

## Tech Stack

* HTML
* CSS
* JavaScript
* TypeScript
* React
* Next.js
* Zustand
* Tailwind CSS

## Development

### State Management

状態管理には Zustand を使用しています。

プロジェクト一覧やAPIの状態などをStoreで管理し、コンポーネントから状態を利用・更新できる構成にしました。

### Search

プロジェクト名を対象に、部分一致・大文字小文字を区別しない検索を実装しました。

検索文字列をstateで管理し、プロジェクト一覧をfilterすることで検索結果を表示しています。

### Sort

プロジェクト名の昇順・降順、およびステータスを考慮した並び替えを実装しました。

Active / Archived の順序を共通のルールとして定義し、複数の並び替え条件で利用できるようにしました。

### Edit

プロジェクト名をその場で編集できる機能を実装しました。

編集中のプロジェクトを `editingId` で管理し、編集中はChange / Delete / Editなどの操作を停止することで、複数の操作が同時に行われないようにしています。

### API

Next.jsのRoute Handlerを使用して、プロジェクトの取得・追加・更新・削除を行うAPIを実装しました。

## Design

UIデザインについては、これまでのWebデザイン・マークアップの経験を活かして、自分で検討しながら制作しました。

特に、

* 配色
* 余白
* ボタンの見た目
* ステータスの見せ方
* 情報の優先順位
* レスポンシブ対応

などを意識しています。

「機能を実装するだけ」ではなく、実際に使ったときに見やすく、落ち着いて操作できるUIになることを意識しました。

## AI Assistance

開発中はChatGPTを技術的な相談相手として活用しました。

React / TypeScript / Next.jsの実装方法、エラーの原因調査、コードの改善方法などについて相談しながら開発を進めました。

ただし、提案されたコードをそのまま使用するのではなく、コードの意味や処理の流れを確認し、自分で理解したうえで実装・修正することを意識しました。

また、実装中に「なぜこの書き方になるのか」を確認することで、ReactやTypeScript、Next.jsの理解を深めることも目的としました。

## What I Learned

Workstackの制作を通して、単にコードを書くことだけではなく、

* Reactでのstate管理
* TypeScriptによる型定義
* APIとのデータ連携
* コンポーネントの役割分担
* ユーザー操作を考慮したUI設計
* 検索・並び替えなどのデータ処理
* 状態によって操作を制御する設計

について実際に手を動かしながら学びました。

特に、機能を追加するたびに「この状態をどこで管理するのが自然か」「ユーザーがこの操作をしたら何が起きるか」を考えながら実装することを意識しました。

## Future Improvements

今後は、以下のような機能追加・改善にも取り組みたいと考えています。

* データの永続化
* バリデーションの強化
* UI / UXのさらなる改善
* テストの追加

## Author

Tomomi

Frontend Engineer

GitHub: [tomomap](https://github.com/tomomap)



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

