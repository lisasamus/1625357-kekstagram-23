import { userPhotos } from './util.js';
import { openBigPicture } from './bigpicture.js';

const picturesBlock = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');


const photoElements = userPhotos;
const photoListFragment = document.createDocumentFragment();

photoElements.forEach(({ url, likes, comment }) => {
  const photoElement = templatePicture.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comment.length;
  photoElement.addEventListener('click', () => {
    openBigPicture();
  });
  picturesBlock.appendChild(photoElement);
});

picturesBlock.appendChild(photoListFragment);


