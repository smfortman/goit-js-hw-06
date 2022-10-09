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

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const bodyEl = document.querySelector('body')
// const txtColor = document.querySelector('.color')
// const buttonEl = document.querySelector('.change-color')

// buttonEl.addEventListener('click', changeColor)

// function changeColor(){
//   bodyEl.style.backgroundColor = getRandomHexColor();
//   txtColor.textContent = bodyEl.style.backgroundColor
 
// }