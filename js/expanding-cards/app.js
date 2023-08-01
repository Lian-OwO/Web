const panels = document.querySelectorAll(".panel");

// for (let i = 0; i < panels.length; i++) {
//   panels[i].addEventListener()
// }
//for문보다 편하게
panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    // console.log(panel);
    //모든 패널에서 active 클래스 제거하기
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  //패널에 있는 모든 액티브 클래스를 제거
  // panels[0].classList.remove("active");
  // panels[1].classList.remove("active");
  // panels[2].classList.remove("active");
  // panels[3].classList.remove("active");
  // panels[4].classList.remove("active");

  //반복문으로 지우기
  panels.forEach(function (p) {
    p.classList.remove("active");
  });
  // panels.forEach((panel) => {
  //   panel.classList.remove("active");
  // });
}
