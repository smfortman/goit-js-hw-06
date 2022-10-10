function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const bgColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  bgColor.textContent = bodyEl.style.backgroundColor;
});