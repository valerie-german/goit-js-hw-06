function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector("button.change-color");


const changesBodyColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  document.querySelector("span.color").textContent = getRandomHexColor();
}
btn.addEventListener("click",changesBodyColor);