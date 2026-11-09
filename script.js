const button = document.getElementById("buttonChangeColor");
const slider = document.querySelector("input[type='range']");

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeColor() {
  document.body.style.backgroundColor = randomColor();
}

button.addEventListener("click", changeColor);
slider.addEventListener("input", changeColor);
