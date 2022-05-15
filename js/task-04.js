let counterValue = 0;
console.log(counterValue);

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const fallValue = () => {
    counterValue -= 1;
    document.querySelector("#value").innerHTML = counterValue;
};
const riseValue = () => {
    counterValue += 1;
    document.querySelector("#value").innerHTML = counterValue;
};

decrementButton.addEventListener("click", fallValue);
incrementButton.addEventListener("click", riseValue);