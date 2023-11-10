import { galleryItems } from './galler-items';

console.log(galleryItems);

const liGallery = document.querySelector('.gallery');

function createGalleryMarkup(items) {
    return items
        .map(({ original, preview, description }) =>
            `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}"
                    alt="${description}" />
            </a>
        </li>`
        )
        .join('');
}
const addGallaryMarkup = createGalleryMarkup(galleryItems);

liGallery.innerHTML = addGallaryMarkup;

// liGallery.addEventListener('click', () =>



