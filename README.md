# Workstack

## Overview
シンプルなプロジェクト管理アプリです。

プロジェクトの登録・編集・削除・検索・並び替えなど、
基本的な管理機能を実装しています。

React / TypeScript / Next.jsを使った
フロントエンド開発の学習・実践を目的として制作しました。

## Demo

[Portfolio Site](https://portfolio-rose-six-70.vercel.app/)

## Features

- プロジェクトの一覧表示
- プロジェクト名の追加
- プロジェクト名の編集
- 編集中の他操作の停止
- Active / Archived の切り替え
- プロジェクトの削除
- プロジェクト名の検索
- プロジェクトの並び替え

## Tech Stack

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Next.js
- Zustand
- Tailwind CSS

## Implementation

プロジェクトを管理するための基本的な機能と、
プロジェクト数が増えた場合にも使いやすい機能を実装しました。

### State Management

状態管理にはZustandを使用。
プロジェクト一覧などの状態をStoreで管理しています。

### Search

プロジェクト名を部分一致・大文字小文字を区別せず検索できます。

### Sort

プロジェクト名の昇順・降順、ステータスを考慮した並び替えを実装しました。
Active / Archived の順序を共通のルールとして定義しています。

### Edit

プロジェクト名をその場で編集できます。
編集中のプロジェクトを `editingId` で管理し、
編集中は他の操作をできないようにしています。

### API

Next.jsのRoute Handlerを使用して、
プロジェクトの取得・追加・更新・削除を行うAPIを実装しました。

## Design

- 配色：ブルーを基調に、ボタンごとに役割がわかる色を設定
- UI：現在のプロジェクトの状況を確認することを基本とし、表の右側に操作用のボタンを配置
- レスポンシブ：スマートフォンでは横スクロールに対応
- 操作性：スマートフォンでも操作しやすいボタンサイズを意識

## AI Assistance

開発中はChatGPTを技術的な相談相手として利用しました。

エラーの原因を確認したり、コードについて質問したりしながら、
提案された内容を理解した上で実装しています。

また、自分から実装案を提案し、AIと相談しながらブラッシュアップする形でも利用しました。

## Getting Started

```bash
npm install
npm run dev