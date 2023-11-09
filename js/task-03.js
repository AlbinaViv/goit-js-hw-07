const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

const list = document.querySelector(".gallery");
console.log(list);

const markup = images
    .map(
        ({ url, alt }) => `
            <li class ="foto">
            <img src="${url}" alt="${alt}"  width = "300">
            </li>`
    )
    .join("");
list.insertAdjacentHTML("afterbegin", markup);

list.style.display = "flex";
list.style.flexDirection = "column";
list.style.gap = "40px";
list.style.listStyle = "none";


console.log(markup);