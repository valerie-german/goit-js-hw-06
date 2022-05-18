const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);
const titles = categories.querySelectorAll("h2");

titles.forEach(item => {       
    const list = item.parentElement.querySelectorAll("ul > li");   
    console.log(`Category: ${item.textContent}`);
    console.log(`Elements: ${list.length}`);      
});
