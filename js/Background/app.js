// alert(1);

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");

function handleClick() {
  console.log("클릭");
}

function handleChange() {
  // console.log("색바꿈");
  //바디에 리니어그라디언트 배경색을 하려면 색깔 2개가 필요
  let c1 = color1.value; //유저가 선택한 색
  let c2 = color2.value;
  body.style.background = `linear-gradient(to right, ${c1}, ${c2})`;
}
