import galleryItem from './gallery-items.js';

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

// Открытие модального окна по клику на элементе галереи.

// Подмена значения атрибута src элемента img.lightbox__image.

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].

// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того,
// чтобы при следующем открытии модального окна, пока грузится изображение,
// мы не видели предыдущее.

/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>; */
// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const refs = {
  galleryList: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImg: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('.lightbox__button'),
  overlay: document.querySelector('.lightbox__overlay'),
};
const createGalleryList = document.createElement('li');
createGalleryList.classList.add('gallery__item');

const createGalleryLink = document.createElement('a');
createGalleryLink.classList.add('gallery__link"');
createGalleryLink.href =
  'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg';

const createGalleryImg = document.createElement('img');
createGalleryImg.classList.add('gallery__image');
createGalleryImg.src =
  'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg';
createGalleryImg.alt = 'Tulips';
createGalleryImg.dataset.source =
  'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg';

createGalleryList.append(createGalleryLink, createGalleryImg);

refs.galleryList.appendChild(createGalleryList);

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
console.log(refs.galleryList);
