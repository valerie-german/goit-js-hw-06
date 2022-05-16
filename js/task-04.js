let counterValue = 0;
console.log(counterValue);

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const fallValue = () => {
    counterValue -= 1;
    document.querySelector("#value").textContent = counterValue;
};
const riseValue = () => {
    counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
};

decrementButton.addEventListener("click", fallValue);
incrementButton.addEventListener("click", riseValue);