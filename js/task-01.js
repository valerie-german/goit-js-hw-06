const categories = document.querySelectorAll(".item");
console.log(categories);
console.log(`Number of categories: ${categories.length}`);

const items = document.querySelectorAll("h2");

items.forEach(item => {    
    // const list = item.nextElementSibling;
    const list = item.parentElement.querySelectorAll("ul > li");
   
    console.log(`Category: ${item.textContent}`);
    console.log(`Elements: ${list.length}`);   
    
});
