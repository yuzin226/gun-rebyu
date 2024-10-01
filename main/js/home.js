//画像の配列作成
const images =[
    "images/IMG_1905.JPG",
    "images/IMG_1419.JPG",
    "images/IMG_1986.JPG",
    "images/IMG_E1932.JPG"
];

let currentIndex = 0;//現在の画像のインデックス

//１秒ごとに画像を切り替える
setInterval(function(){
    currentIndex = (currentIndex + 1) % images.length;//次の画像
    document.getElementById("ss-img").src = images[currentIndex];//画像を変更

}, 4000);//4０００ミリ秒
