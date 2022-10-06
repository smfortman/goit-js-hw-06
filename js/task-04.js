const counterValueEl = document.querySelector("#value");
const btnDecrementEl = document.querySelector("[data-action = decrement]");
const btnIncrementEl = document.querySelector("[data-action = increment]");
let counterValue = 0;

btnDecrementEl.addEventListener("click", () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
});

btnIncrementEl.addEventListener("click", () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
});