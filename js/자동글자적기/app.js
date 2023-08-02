// id text , id speed 객체
const textEl = document.querySelector("#text");
const speedEl = document.querySelector("#speed");

const text = "안녕하세요 👾✨";

let idx = 1; //문자열 인덱스 번호 1 초기값

let speed = 300 / speedEl.value; //문자열 출력속도

writeText(); //초기 실행하면 계속실행됨

function writeText() {
  textEl.textContent = text.slice(0, idx); //첫번째 문자부터 idx까지 잘라내기
  // idx 1씩 증가
  idx++;

  if (idx > text.length) {
    idx = 1;
    //idx가 텍스트 문자열보다 클 경우 idx값을 1로 초기화
  }

  setTimeout(writeText, speed);

  //문자열 속도 변경시

  speedEl.addEventListener("change", function (e) {
    speed = 300 / speedEl.value;
  });
}
