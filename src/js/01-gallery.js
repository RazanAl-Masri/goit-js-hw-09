import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItems = [
  { preview: 'https://placekitten.com/200/300', original: 'https://placekitten.com/800/1200', description: 'Cute Kitten 1' },
  { preview: 'https://placekitten.com/210/300', original: 'https://placekitten.com/810/1200', description: 'Cute Kitten 2' },
  { preview: 'https://placekitten.com/220/300', original: 'https://placekitten.com/820/1200', description: 'Cute Kitten 3' }
];

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>`
  )
  .join('');
galleryContainer.innerHTML = galleryMarkup;

// Initialize SimpleLightbox after items are added to the DOM
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
