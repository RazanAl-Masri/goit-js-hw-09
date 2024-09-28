const galleryItems = [
  { preview: 'small-image1.jpg', original: 'large-image1.jpg', description: 'Image 1' },
  { preview: 'small-image2.jpg', original: 'large-image2.jpg', description: 'Image 2' },
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
