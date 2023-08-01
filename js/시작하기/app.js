//대화 상자 함수
// let age = prompt("나이를 입력해 주세요!", 100);
// alert(`당신의 나이는${age}입니다!`);

// let result = confirm("당신이 주인인가요?");

// alert(result);

// let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
// let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

// alert(+a + +b); //12

//if문
// let 사과 = 10,
//   바나나 = 11;
// if (사과 > 바나나) {
//   console.log("사과가 바나나보다 많습니다");
// } else if (바나나 > 사과) {
//   console.log("바나나가 사과보다 많습니다");
// } else {
//   console.log("사과와 바나나는 같습니다.");
// }

//for 반복문
//1에서 100까지 콘솔에 출력하라
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if ((i % 3 == 0) & (i % 5 == 0)) {
//     console.log("삼삼오오");
//   } else if (i % 3 == 0) {
//     console.log("삼삼");
//   } else if (i % 5 == 0) {
//     console.log("오오");
//   } else {
//     console.log(i);
//     sum = sum + i;
//   }
// }
// console.log("1부터 100까지합계:" + sum);

//함수 선언 function
// let user = "홍길동";
// function showMessage() {
//   let message = "안녕";
//   alert(user + "님" + message);
// }
//함수 호출(실행)
// showMessage();

//지역변수, 전역변수
// let b = "b";
// {
//   let a = "a";
//   var c = "c";
//   console.log(a);
//   console.log(b);
// }
// console.log(c);
// console.log(a);
// console.log(b);

//함수의 인수
function showMessage(who, text) {
  who = "😀" + who + "누구";
  alert(who + ":" + text);
}

//함수의 리턴(반환값)
function 더하기(a, b) {
  return a + b;
}
function 곱하기(a, b) {
  return a * b;
}
console.log(곱하기(1, 1));
let result = 곱하기(7, 6);
