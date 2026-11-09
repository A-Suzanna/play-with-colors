const button = document.getElementById("buttonChangeColor");
const slider = document.querySelector("input[type='range']");
const box = document.querySelector(".box");

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeColor() {
  const color = randomColor();
  box.style.backgroundColor = color;
  slider.style.accentColor = color;
  document.body.style.backgroundColor = randomColor();
}

button.addEventListener("click", changeColor);
slider.addEventListener("input", changeColor);