import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup } from './js/render-functions.js';
import fetchPhotos from './js/pixabay-api.js';

const imgContainer = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');
const fetchPhotosButton = document.querySelector('.photo-btn');

let page = 1;
const limit = 15;
let currentSearchQuery = '';

function showLoadMoreButton() {
  fetchPhotosButton.classList.remove('is-hidden-btn');
}

function hideLoadMoreButton() {
  fetchPhotosButton.classList.add('is-hidden-btn');
}

async function fetchAndDisplayPhotos(searchQuery, pageNumber) {
  loaderEl.classList.remove('is-hidden');
  try {
    const imagesData = await fetchPhotos(searchQuery, pageNumber);
    if (imagesData.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      const markup = createMarkup(imagesData.hits);
      imgContainer.insertAdjacentHTML('beforeend', markup);

      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsDelay: 250,
      });
      lightbox.refresh();

      const totalLoadedImages = pageNumber * limit;
      if (totalLoadedImages >= imagesData.totalHits) {
        hideLoadMoreButton();
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else {
        showLoadMoreButton();
      }
    }
  } catch (error) {
    iziToast.error({
      message: 'An error occurred while fetching images. Please try again later.',
    });
  } finally {
    loaderEl.classList.add('is-hidden');
  }
}

async function onLoadMore() {
  page++;
  await fetchAndDisplayPhotos(currentSearchQuery, page);
  scrollPage();
}

fetchPhotosButton.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();
  if (searchQuery === '') {
    hideLoadMoreButton();
    return iziToast.error({
      message: 'Please enter a search keyword first.',
    });
  }
  currentSearchQuery = searchQuery;
  imgContainer.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  try {
    page = 1;
    await fetchAndDisplayPhotos(searchQuery, page);
  } catch (error) {
    iziToast.error({
      message: 'An error occurred while fetching images. Please try again later.',
    });
  } finally {
    event.target.reset();
    loaderEl.classList.add('is-hidden');
  }
}

searchForm.addEventListener('submit', onSearch);

function scrollPage() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  });
}