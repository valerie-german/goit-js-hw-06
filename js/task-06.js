const textInput = document.querySelector("#validation-input");
const dataLength = Number.parseInt(textInput.getAttribute("data-length"));
const changeBorderColor = () => { 
    if (textInput.value.length !== dataLength) {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    } else {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");    
    }
}

textInput.addEventListener("blur", changeBorderColor);