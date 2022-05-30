import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const list = document.querySelector(".gallery");
// tworzenie galerii
const photo = galleryItems.map((image) => `
<a class="gallery__item" href=${image.original}>
  <img class="gallery__image" src=${image.preview} alt="${image.description}" />
</a>
  `).join("");

list.insertAdjacentHTML("beforeend", photo);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, enableKeyboard: true})

console.log(galleryItems);
