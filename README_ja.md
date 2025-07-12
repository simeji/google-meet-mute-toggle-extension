# Google Meet Mute Toggle Chrome Extension (日本語)

## 概要
このChrome拡張機能は、Google Meetでのマイクのミュート/ミュート解除をグローバルショートカットキーで切り替えることを可能にします。

## 機能
- グローバルショートカットキーによるGoogle Meetのマイクミュート/ミュート解除の切り替え。
- ショートカットキーはユーザーがカスタマイズ可能。

## インストール方法

1.  このリポジトリをクローンまたはダウンロードします。
    ```bash
    git clone https://github.com/your-username/google-meet-mute-toggle-extension.git
    ```
2.  Chromeブラウザを開き、アドレスバーに `chrome://extensions` と入力してEnterを押します。
3.  右上の「デベロッパーモード」をオンにします。
4.  「パッケージ化されていない拡張機能を読み込む」ボタンをクリックします。
5.  クローンまたはダウンロードしたリポジトリのディレクトリ（`google-meet-mute-toggle-extension`）を選択します。

## ショートカットキーの設定

1.  `chrome://extensions` ページで、左上のメニューアイコン（三本線）をクリックし、「キーボード ショートカット」を選択します。
2.  「Google Meet Mute Toggle」の項目を探します。
3.  「Toggle mute in Google Meet」のショートカットキーの右側にある鉛筆アイコンをクリックし、お好みのショートカットキーを設定します。
4.  ショートカットキーの適用範囲を「グローバル」に設定することで、Chromeがアクティブなウィンドウでなくても機能するようになります。

## 使用方法
Google Meetの会議中に、設定したショートカットキーを押すと、マイクのミュート/ミュート解除が切り替わります。

## 技術スタック
- JavaScript
- Chrome Extensions API (Manifest V3)
