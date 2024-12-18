# 資格勉強×タイピング

![ヘッダー画像](/docs/img/header/header.png)

<br />

## サービスのURL

https://www.learn-by-typing.com

※一部ブラウザ、キーボード形式では正常に動作しない可能性があります。

<br />

## 概要

タイピングゲームを楽しみながら、資格試験の勉強を行うことができるWebアプリケーションです。  
現在は以下の２つのモードを実装しています。

1. 暗記モード  
資格試験に関連する文章をそのままタイピングする

2. 解答モード  
文章が穴埋め形式になっており正しいものを考えて入力する

<br />

## サービスへの想い

タイピングゲームに夢中になって、気づいたら時間が過ぎていたという経験をお持ちの方も多いのではないでしょうか。また、タイピングした文章が自然と記憶に残っていることもあるのではないでしょうか。  
このプロダクトは、私自身のこうした経験をもとに「タイピングゲームと資格勉強を組み合わせたら、もっと有意義な学習体験が提供できるのでは？」という考えから開発しました。  
学生時代から自分自身が欲しいと思っていたサービスを形にしたWebアプリケーションです。


<br />

## アプリケーションのイメージ

![画面イメージ](/docs/img/image-mov/screen-image.gif)

<br />

## 機能一覧

| トップ画面 |　資格選択画面 |
| ---- | ---- |
| ![トップ画面](/docs/img/function-list/top.png) | ![資格選択画面](/docs/img/function-list/select-exam.png) |
| サービス概要とお問い合わせ方法を掲載しています。 | 学習したい資格を選択する画面です。 |

| タイピング「暗記モード」 |　タイピング「解答モード」 |
| ---- | ---- |
| ![タイピング画面1](/docs/img//function-list/typing_nomal.png) | ![タイピング画面](/docs/img/function-list/typing_filling.png) |
| 資格試験に関する文章をタイピングして理解を深める「暗記モード」 | 隠された文章を考えて埋めることで知識を定着させる「解答モード」 |

|　結果画面 | お問い合わせ画面 |
| ---- | ---- |
| ![結果画面](/docs/img/function-list/result.png) | ![お問い合わせ画面](/docs/img//function-list/inquiry.png) |
| タイピング結果（速度、正確性など）を表示しています。 | 要望や不具合連絡を受け付ける画面です。 |



<br />

## 使用技術

- **フロントエンド** 
  - angular 17.3.10
  - TypeScript
  - HTML
  - CSS/SCSS
- **バックエンド** 
  - Spring Boot
  - Java17
- **データベース** 
  - MySQL
- **ビルドツール** 
  - Node.js
- **インフラ**
  - AWS（EC2, RDS, S3, CloudFront, ELB, Route53）
- **その他** 
  - Figma
  - Notion 

<br />

## 今後の展望

さらなる学習体験の向上を目指し、以下の機能追加を予定しています。

- **ログイン機能**
  - ログイン機能を追加し、ユーザーの学習履歴を保存することでモチベーションの向上を図ります。
- **新しいタイピング機能**
  - ビジュアル形式、問題形式など学習効率を高めるタイピング機能を追加予定です。

<br />  

## おまけ

- **UI設計**
  - 画面デザインはFigmaで行いました。

![画面遷移図](/docs/img/ui-figma/ui-figma.png)

## 使用したnpmライブラリ

https://www.npmjs.com/package/xng-breadcrumb?activeTab=readme
