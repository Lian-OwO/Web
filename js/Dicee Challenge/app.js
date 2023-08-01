//alert(1);
//이미지요소(엘리먼트)를 선택
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

//이미지객체에 src속성의 값은 입력
img1.setAttribute("src", "images/dice6.png");
img2.setAttribute("src", "images/dice1.png");

//랜덤 넘버 1에서 6
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);
console.log(randomNumber2);

//이미지객체에 src속성의 값은 입력
img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

//누가 이겼는지 판단
// h1.innerText = "누가 이겼음👾";
if (randomNumber1 > randomNumber2) {
  h1.innerText = "플레이어1 이겼음👾";
} else if (randomNumber1 < randomNumber2) {
  h1.innerText = "플레이어2 이겼음👾";
} else {
  h1.innerText = "비겼음";
}
