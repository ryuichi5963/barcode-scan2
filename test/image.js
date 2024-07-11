// Imageコンストラクタ
// https://developer.mozilla.org/ja/docs/Web/API/HTMLImageElement/Image

// 画像のURL
const imageUrl = "http://books.google.com/books/content?id=dhdfEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api";

// 新しい HTMLImageElement インスタンスを作成
const myImage = new Image();
myImage.src = imageUrl;

// 画像を読み込んだ後の処理
myImage.onload = function () {
  // 画像が読み込まれた後に実行したい処理をここに記述
  console.log("画像が読み込まれました！");
};

// 画像を変数に代入
const imageElement = myImage;
console.log(imageElement);
