import { galleryItems } from './gallery-items.js';

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

ulEl.addEventListener('click', imgContainerClick);

function imgContainerClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);

    instance.show();

    ulEl.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            instance.close();
        }
    });
}
