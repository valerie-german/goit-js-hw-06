const text = document.querySelector("#text");
const range = document.querySelector("#font-size-control");

const textSizeControl = () => {
    text.style.fontSize = `${range.value}px`;    
 }

range.addEventListener("input", textSizeControl);