import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const list = document.querySelector('.list');
const load = document.querySelector('.loading');
const btnLoad = document.querySelector('.button-more');

form.addEventListener('submit', handleImages);

function showLoadMore() {
  btnLoad.classList.add('load-more');
}
function hideLoadMore() {
  btnLoad.classList.remove('load-more');
}

function checkBtnStatus() {
  if (page >= maxPage) {
    hideLoadMore();
  } else {
    showLoadMore();
  }
}

let input;
let page = 1;
let maxPage = 0;
const pageSize = 15;

async function handleImages(e) {
  e.preventDefault();

  input = e.target.elements.search.value.trim();
  if (input === '') {
    load.classList.remove('loader');
    iziToast.error({
      backgroundColor: 'lightred',
      icon: false,
      progressBar: false,
      close: false,
      position: 'topRight',
      message: 'Please, fill the field!',
    });

    return;
  }

  list.innerHTML = '';
  let page = 1;

  load.classList.add('loader');
  try {
    const value = await getImages(input, page);

    if (value.hits && value.hits.length === 0) {
      iziToast.error({
        backgroundColor: 'red',
        progressBar: false,
        close: false,
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    maxPage = Math.ceil(value.totalHits / pageSize);
    const markup = renderImages(value.hits);
    list.insertAdjacentHTML('beforeend', markup);

    const lightbox = new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
    });
    lightbox.refresh();
  } catch (err) {
    console.error('Error occurred while fetching images:', error);
    iziToast.error({
      backgroundColor: 'red',
      icon: false,
      progressBar: false,
      close: false,
      position: 'topRight',
      message:
        'Sorry, an error occurred while fetching images. Please try again!',
    });
  }
  load.classList.remove('loader');
  checkBtnStatus();
  e.target.reset();
}

btnLoad.addEventListener('click', handleLoad);

async function handleLoad(e) {
  load.classList.add('loader');
  page += 1;

  try {
    const value = await getImages(input, page);

    if (page >= maxPage) {
      iziToast.info({
        title: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }
    const markup = renderImages(value.hits);
    list.insertAdjacentHTML('beforeend', markup);
    myScroll();
    const lightbox = new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
    });
    lightbox.refresh();
  } catch (err) {
    console.error('Error occurred while fetching images:', error);
    iziToast.error({
      backgroundColor: 'red',
      icon: false,
      progressBar: false,
      close: false,
      position: 'topRight',
      message:
        'Sorry, an error occurred while fetching images. Please try again!',
    });
  }
  load.classList.remove('loader');
  checkBtnStatus();
}

function myScroll() {
  const height = list.firstChild.getBoundingClientRect().height;
  console.log(height);
  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
