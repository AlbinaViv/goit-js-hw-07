import { galleryItems } from './galler-items.js';

console.log(galleryItems);

const ulEl = document.querySelector('.gallery');


function createGalleryMarkup(items) {
    return items
        .map(({ original, preview, description }) =>
            `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}"
                    alt="${description}" />
            </a>
        </li>`
        ).join('');
};

ulEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

// createGalleryMarkup(galleryItems);



// ulEl.innerHTML = createGalleryMarkup(galleryItems);


// liGallery.addEventListener('click', () =>



