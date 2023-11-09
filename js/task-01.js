const ulEl = document.querySelector("#categories");

console.log(`Number of categories: ${ulEl.children.length}`);


[...ulEl.children].forEach(function (element) {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});

