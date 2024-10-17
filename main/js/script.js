//部品データベース
const partsDatabase = {
    "アッパーレシーバー": {
        "description": "銃の上部構造を指し、バレルやハンドガードが取り付けられるパーツ。内部にはボルトキャリアやチャージングハンドルが収納される。",
        "image": ""
    },
    "ロアレシーバー": {
        "description": "トリガーグループ、マガジンウェル、グリップ、ストックなどが取り付けられる下部構造。機関部を収納し、基本的な操作を行う。",
        "image": "https://image1.shopserve.jp/strikearms.jp/pic-labo/VG232RV102-1.jpg?t=20160914191837"
    },
    "バレル": {
        "description": "弾を発射する銃身のこと。",
        "image": "https://www.robertrtg.com/store/pc/catalog/hkk-226352_915_detail.jpg"
    },
    "インナーバレル": {
        "description": "外装のバレル内にある実際にBB弾を発射する細いバレル。精度に影響する。",
        "image": "https://repmart.jp/upload/save_image/1_ra09377_600.jpg"
    },
    "アウターバレル": {
        "description": "インナーバレルを包み、銃の外観を形成するバレル。",
        "image": "https://m.media-amazon.com/images/I/61TqMvAv+zL._AC_SL1500_.jpg"
    },
    "ストック": {
        "description": "肩にあてて銃を安定させる部分。固定式、調整式などがある。",
        "image": "https://sabage-archive.com/wp-content/uploads/2017/10/0518_02.jpg"
    },
    "グリップ": {
        "description": "銃を握る部分。射手が快適に銃を操作するためのもの。",
        "image": "https://dnaimg.com/2018/01/20/unique-grips-short-lnj/title.jpg"
    },
    "トリガー": {
        "description": "引き金。弾丸を発射するために操作するパーツ。",
        "image": "https://thefirearmfirm.com/wp-content/uploads/2022/08/Shutterstock_2187711967.jpg"
    },
    "マガジン": {
        "description": "弾薬を収納し、銃に供給する部分。エアソフトの場合はBB弾を装填する。",
        "image": "https://www.airgun.jp/upload/save_image/12011115_5fc5a75154b93.jpg"
    },
    //10------------------------------------------------------------------
    "ポップアップシステム": {
        "description": "BB弾にバックスピンをかけ、飛距離と精度を向上させるための機構。",
        "image": ""
    },
    "バッテリー": {
        "description": "電動ガンに電力を供給するためのもの。",
        "image": ""
    },
    "ギアボックス": {
        "description": "電動ガンの心臓部。モーターの回転をギアで制御し、ピストンを動かす。",
        "image": ""
    },
    "外装パーツ": {
        "description": "銃の外見やカスタマイズに影響するパーツ。",
        "image": ""
    },
    "ハンドガード": {
        "description": "銃の前方部分を保護し、射手が持つための部分。熱を防ぎ、レールやアクセサリーを取り付けることができる。",
        "image": ""
    },
    "M-LOKハンドガード": {
        "description": "銃の前方部分を保護し、射手が持つための部分。熱を防ぎ、レールやアクセサリーを取り付けることができる。",
        "image": ""
    },
    "keyModハンドガード": {
        "description": "KeyModシステムに対応したハンドガード。M-LOKと同様にモジュール式のアクセサリーを装着可能。",
        "image": ""
    },
    "レール付きハンドガード": {
        "description": "標準的なピカティニーレールを備えたハンドガードで、さまざまなアクセサリーを取り付けることができる。",
        "image": ""
    },
    "サイト": {
        "description": "銃の照準を合わせるための器具。",
        "image": ""
    },
    "フロントサイト": {
        "description": "銃の先端にある照準器具。",
        "image": ""
    },
    //20-----------------------------------------------------------------
    "リアサイト": {
        "description": "銃の後方にある照準器具。",
        "image": ""
    },
    "ドットサイト": {
        "description": "赤い点（ドット）を表示し、迅速なターゲット捕捉を可能にする光学照準器。",
        "image": ""
    },
    "スコープ": {
        "description": "拡大鏡で遠距離射撃の精度を上げる光学器具。",
        "image": ""
    },
    "マズル": {
        "description": "バレルの先端部分。様々なアタッチメントを装着可能。",
        "image": ""
    },
    "マズルブレーキ": {
        "description": "反動を軽減するためのアタッチメント。",
        "image": ""
    },
    "サプレッサー": {
        "description": "発射音を減少させるための装置。",
        "image": ""
    },
    "バイポット": {
        "description": "銃を安定させるための二脚。",
        "image": ""
    },
    "スリング": {
        "description": "銃を肩にかけるためのベルト。",
        "image": ""
    },
    "レールシステム": {
        "description": "ピカティニーレールや他のレールシステムにより、アクセサリーの取り付けを可能にする。",
        "image": ""
    },
    "バッテリーストレージ": {
        "description": "バッテリーを収納するスペース。",
        "image": ""
    },
    //30---------------------------------------------------------------------
    "QDスリング": {
        "description": "スリングを素早く取り外すためのクイックデタッチ機構。",
        "image": ""
    },
    "グリップテープ": {
        "description": "グリップに巻くテープで、滑りにくくするためのアクセサリー。",
        "image": ""
    },


    //内部パーツ----------------------------------------------------
    "ボルトキャリア": {
        "description": "弾薬をチャンバーに装填し、発射後に排莢する部品。",
        "image": ""
    },
    "ピストン": {
        "description": "ギアボックス内で空気を圧縮し、BB弾を発射するためのパーツ。",
        "image": ""
    },
    "シリンダー": {
        "description": " ピストンの動作によって圧縮される空間を提供。",
        "image": ""
    },
    "スプリング": {
        "description": "ピストンを押し戻すためのバネ。",
        "image": ""
    },
    "ギアセット": {
        "description": "ギアボックス内の歯車群。",
        "image": ""
    },
    "モーター": {
        "description": "電動ガンのギアを動かすための電力源。",
        "image": ""
    },


    //カスタムパーツ-------------------------------------------------
    "軽量トリガー": {
        "description": " 素早い引き金操作を可能にする。",
        "image": ""
    },
    "調整式ストック": {
        "description": "ストックの長さを調整可能。",
        "image": ""
    },
    "カスタムグリップ": {
        "description": "握りやすさを向上させるためのカスタムパーツ。",
        "image": ""
    },
    "カスタムマガジン": {
        "description": "拡張マガジンやデザインの異なるマガジン。",
        "image": ""
    },
    "ショートスクロールトリガー": {
        "description": " トリガーの動作を短縮し、発射速度を向上させる。",
        "image": ""
    },
    "精密バレル": {
        "description": "高精度な射撃を可能にするバレル。",
        "image": ""
    },
    "高出力モーター": {
        "description": "発射速度を上げるための強力なモーター。",
        "image": ""
    },
    "精密ホップアップ": {
        "description": "ホップアップの精度を向上させ、弾道をより安定させる。",
        "image": ""
    },



    //その他のパーツ-----------------------------------------------
    "補助サイト": {
        "description": "サブの照準器具。",
        "image": ""
    },
    "アンダーレール": {
        "description": " ハンドガードの下部に装着されるレール。",
        "image": ""
    },
    "フラッシュライト": {
        "description": "暗闇での照準を補助するためのライト。",
        "image": ""
    },
    "レーザーサイト": {
        "description": "精度を高めるためにターゲットにレーザーポインタを表示する装置。",
        "image": ""
    },
    "コンペンセーター": {
        "description": "銃の反動を抑制するための装置。",
        "image": ""
    },
    "アフターマーケットパーツ": {
        "description": "純正ではないが、性能を向上させるためのカスタムパーツやアクセサリー。",
        "image": ""
    },
    "クリーニングキット": {
        "description": "銃の内部を清掃するための道具。",
        "image": ""
    },
};

//検索ボタンのクリックイベント
document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input').value.trim();
    const resultContainer = document.getElementById('result-container');

    //検索結果を表示
    if (partsDatabase[searchInput]) {
        const part = partsDatabase[searchInput];
        resultContainer.innerHTML = `
        <h3>${searchInput}</h3>
        <p>${part.description}</p>
        <img src="${part.image}" alt="${searchInput}の画像" style="max-width: 300px; max-height: 300px;<img src="${part.image}" alt="${searchInput}の画像"> 
        `;
    } else {
        resultContainer.innerHTML = `<p>部品が見つかりませんでした</p>`;
    }
});