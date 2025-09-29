# アプリケーション名
React Todo APP

# アプリケーション概要
React を学習するために作成した Todo アプリです。  
YouTube の動画を参考にしつつ、追加機能を実装して拡張しました。  

## 参考にした動画
https://youtu.be/nRCNL9T3J98?si=nngPrR0v0wI5Jz19

## このアプリでできること
- タスクの追加（追加ボタン / Enterキー）
  [![Image from Gyazo](https://i.gyazo.com/a8305e70f54fc076ed0d8701cdee6316.gif)](https://gyazo.com/a8305e70f54fc076ed0d8701cdee6316)

- タスクの完了 / 未完了管理（チェックボックスと横線表示）
  [![Image from Gyazo](https://i.gyazo.com/587e8f344d4aef8d82c9e16d987326f4.gif)](https://gyazo.com/587e8f344d4aef8d82c9e16d987326f4)

- タスクの編集（保存・キャンセル）
  [![Image from Gyazo](https://i.gyazo.com/357cb641f29e852619c6d8367f5c8a83.gif)](https://gyazo.com/357cb641f29e852619c6d8367f5c8a83)

- タスクの削除（ゴミ箱アイコン）
  [![Image from Gyazo](https://i.gyazo.com/4eeff7f63324ca99ddc9e4368a60a4ef.gif)](https://gyazo.com/4eeff7f63324ca99ddc9e4368a60a4ef)

- 完了タスクの一括削除 (チェックボックスと「完了タスク削除」ボタンでまとめて削除)
  [![Image from Gyazo](https://i.gyazo.com/29de8bebf89ef057526cf27ffcc23ac4.gif)](https://gyazo.com/29de8bebf89ef057526cf27ffcc23ac4)

- タスクのフィルタリング(すべて / 未完了 / 完了済み)
  [![Image from Gyazo](https://i.gyazo.com/5922cd109d10bd10466c4df1d740da32.gif)](https://gyazo.com/5922cd109d10bd10466c4df1d740da32)

- ローカルストレージ保存(ブラウザを閉じても保持)

## 自分で追加した機能
- Enterキーでのタスク追加  
- 編集機能（保存・キャンセル）  
- ゴミ箱アイコンでの削除  
- フィルタリング機能（すべて / 未完了 / 完了済み）  
- ローカルストレージ保存によるタスク永続化

# 使用技術
- React
- JavaScript
- react-icons
- uuid
- CSS

# ローカルでの動作方法
- git clone https://github.com/masaki-tec/react_project.git
- cd react_project
- npm install
- npm start