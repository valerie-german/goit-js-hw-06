function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divList = document.querySelector("#boxes");
const input = document.querySelector("input");

let inputValue = 0;
// ---------
function createBoxes(amount) { 
  let boxesArray = [];  
   for (let i = 1; i <= amount; i+=1) {
    const div = `<div style="background-color: ${getRandomHexColor()}; width:${30*i}px; height: ${30*i}px"></div>`;
    boxesArray.push(div);
   }
  console.log(boxesArray);
  return boxesArray;
}
// -----------
btnCreate.addEventListener("click", (event) => {

  divList.innerHTML = createBoxes(input.value).join("");
});

btnDestroy.addEventListener("click", (event) => {
  inputValue = event.currentTarget.value;
  console.log(inputValue);

  divList.innerHTML = "";

});






