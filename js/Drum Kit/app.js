//alert("hi");
const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    const key = e.target.textContent;
    //내가 클릭한 드럼의 글자색을 흰색으로 변경
    e.target.style.color = "white";
    //내가 클릭한 드럼의 소리를 냄!
    drumPlay(key);
  });
}

document.addEventListener("keydown", function (e) {
  const key = e.key;
  drumPlay(key);
});

function drumPlay(key) {
  if (key === "w") {
    const audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (key === "a") {
    const audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (key === "s") {
    const audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (key === "d") {
    const audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (key === "j") {
    const audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (key === "k") {
    const audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (key === "l") {
    const audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}
