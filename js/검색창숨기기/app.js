//검색박스 (입력창 + 버튼)
const search = document.querySelector(".search");
const btn = document.querySelector(".btn"); //버튼
const input = document.querySelector(".input"); //입력창

//버튼 클릭시 searh에 active클래스 토글
btn.addEventListener("click", function () {
  search.classList.toggle("active"); //active 클래스를 있으면 제거 없으면 추가1
  input.focus(); //입력창 포커스 커서
});
