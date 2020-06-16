﻿必要な機能

タグを取得
[
  {
    id: 1,
    name: "機械学習,
  }, 
  ...
]

質問内容を取得
[
  {
    id: 1,
    text: "ゼミの頻度はどれくらいがいい？"
    type: （質問の種類）
  }
]

質問の種類だけど、できれば質問の種類は一種類にしてくれると助かる。

タグ・質問から、研究室を取得
Request
{
  tags: [1,2,3], //選択されたタグのid
  questions: [true, false, true, true, ...] //質問の答えの配列。この例では全部二択の質問と仮定してる。
}

Response
[
  {
    id: 1,
    name: 森嶋研,
    text: （もりしまけんの紹介文が入る）
  }
]
