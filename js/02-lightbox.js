import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector('.gallery');


function createGalleryMarkup(items) {
    return items
        .map(({ original, preview, description }) =>
            `<li class= "gallery__item" >
        <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a></li>`
        ).join('');

};

ulEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));


const lightbox = new SimpleLightbox('.gallery__item a', {
    captionsData: "alt",
    captionDelay: 250,
});


