let currentIndex = 0 //現在のスライド番号
const slider = document.querySelector('.visual')//スライダ要素
const images = document.querySelectorAll('.visual img')//全画像

//スライド幅の計算
const totalvisual = images.length;
const visualwidth = images[0].clientWidth;//各画像の幅

//スライドを切り替える関数
function visualImages(){
    currentIndex++;
    if(currentIndex >= totalvisual){
        currentIndex = 0;//最後の画像の次は最初に戻る
    }
    slider.style.transform = `translateX(${-visualwidth * currentIndex}px)`;//スライド移動

}
setInterval(visualImages, 4000);