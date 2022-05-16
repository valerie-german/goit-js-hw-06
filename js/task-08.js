const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  
    let object = { email: email.value, password: password.value };

  if (email.value === "" || password.value === "") {
    return alert(`Пожалуйста, не оставляйте поля пустыми. Им грустно 😢`);
  }

  console.log(object);
  event.currentTarget.reset();  
    
}
