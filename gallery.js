import galleryItem from './gallery-items.js';
const refs = {
  galleryList: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImg: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('.lightbox__button'),
};

const createGalleryItem = picture => {
  const createGalleryList = document.createElement('li');
  createGalleryList.classList.add('gallery__item');
  const createGalleryLink = document.createElement('a');
  createGalleryLink.classList.add('gallery__link"');
  createGalleryLink.href = `${picture.original}`;
  const createGalleryImg = document.createElement('img');
  createGalleryImg.classList.add('gallery__image');
  createGalleryImg.src = `${picture.preview}`;
  createGalleryImg.alt = `${picture.description}`;
  createGalleryImg.dataset.source = ` ${picture.original}`;
  createGalleryList.append(createGalleryLink, createGalleryImg);
  return createGalleryList;
};

const galleryCard = galleryItem.map(card => createGalleryItem(card));
refs.galleryList.append(...galleryCard);
refs.galleryList.addEventListener('click', onTagsClick);
refs.closeBtn.addEventListener('click', removeLightboxLink);

function onTagsClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  refs.lightbox.classList.add('is-open');
  refs.lightboxImg.src = event.target.getAttribute('data-source');
  refs.lightboxImg.alt = event.target.alt;
  refs.lightboxImg.src = event.target.dataset.source;
  window.addEventListener('keyup', clickEscape);
}

function removeLightboxLink() {
  refs.lightbox.classList.remove('is-open'),
    (refs.lightboxImg.src = ''),
    (refs.lightboxImg.alt = '');
}

function clickEscape(event) {
  if (event.code === 'Escape') {
    removeLightboxLink();
  }
}
