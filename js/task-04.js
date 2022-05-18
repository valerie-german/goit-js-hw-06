let counterValue = 0;
console.log(counterValue);

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");

const fallValue = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
};
const riseValue = () => {
    counterValue += 1;
    counter.textContent = counterValue;
};

decrementButton.addEventListener("click", fallValue);
incrementButton.addEventListener("click", riseValue);