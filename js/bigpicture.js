import { isEscEvent } from './util.js';

const bigPictureSection = document.querySelector('.big-picture');
const body = document.querySelector('body');
const pictureCansel = bigPictureSection.querySelector('#picture-cancel');


const openBigPicture = function () {

  bigPictureSection.classList.remove('.hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {

    if (isEscEvent(evt)) {
      evt.preventDefault();
      bigPictureSection.classList.add('hidden');
      body.classList.remove('modal-open');
    }

    pictureCansel.addEventListener('click', (ev) => {
      ev.preventDefault();
      bigPictureSection.classList.add('hidden');
      body.classList.remove('modal-open');
    });
  });
};

export { openBigPicture };
