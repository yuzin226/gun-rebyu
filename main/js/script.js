//部品データベース
const partsDatabase = {
    "バレル": {
        "description": "エアガンの銃身部分。精度に大きく影響します。カスタムでバレルの先にねじがついているものがあり、これはサプレッサー(消音機)などが取り付けられる。ねじは様々な大きさがある（14mm逆ねじが一般）",
        "image": "images/image.png" // バレルの画像URL
    },
    "トリガー": {
        "description": "引き金の部分。カスタマイズ可能なパーツも多い。",
        "image": "" // トリガーの画像URL
    },
    "グリップ": {
        "description": "銃を握る部分。握りやすさが操作性に影響。",
        "image": "" // グリップの画像URL
    },
    "サイト": {
        "description": "照準器。狙いを定めるための重要な部品。アイアンサイト、ドットサイト、ホロサイト、スコープがある。",
        "image": "" // サイトの画像URL
    },
    "マガジン": {
        "description": "弾を装填する部分。種類によって弾数が異なります。",
        "image": "" // マガジンの画像URL
    },
    "ストック": {
        "description": "銃の肩当て部分。安定性を向上させます。",
        "image": "" // ストックの画像URL
    },
    "ドットサイト": {
        "description": "赤い点を表示して照準を合わせる光学機器。コンパクトで安いのがメリット。ハンドガンにも取り付けられる。",
        "image": "" // ストックの画像URL
    },
    "ホロサイト": {
        "description": "赤い点を表示して照準を合わせる光学機器。大きく高価ではあるが、精度がよく狙いやすい。アサルトライフルやサブマシンガンでよく使われる",
        "image": "" // ストックの画像URL
    },
    "m-loockハンドガード": {
        "description": "ハンドガードの一種。カスタムの幅が普通のハンドガードより高く軽くなる。",
        "image": "" // ストックの画像URL
    },
};

//検索ボタンのクリックイベント
document.getElementById('search-button').addEventListener('click',function(){
    const searchInput = document.getElementById('search-input').value.trim();
    const resultContainer = document.getElementById('result-container');

    //検索結果を表示
    if(partsDatabase[searchInput]){
        const part = partsDatabase[searchInput];
        resultContainer.innerHTML = `
        <h3>${searchInput}</h3>
        <p>${part.description}</p>
        <img src="${part.image}" alt="${searchInput}の画像" style="max-width: 300px; max-height: 300px;<img src="${part.image}" alt="${searchInput}の画像"> 
        `;
    }else{
        resultContainer.innerHTML = `<p>部品が見つかりませんでした</p>`;
    }
});