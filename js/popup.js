import { isEscEvent } from './util.js';
import './scaleControl.js';
import './filters.js';
import './validation.js';

const startForm = document.querySelector('.img-upload__start');
const redactorPhoto = document.querySelector('.img-upload__overlay');
const redactPhotoCansel = redactorPhoto.querySelector('.img-upload__cancel');
const uploadFile = redactorPhoto.querySelector('#upload-file');

const body = document.querySelector('body');


startForm.addEventListener('click', (ev) => {
  redactorPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      ev.preventDefault();
      redactorPhoto.classList.add('hidden');
      uploadFile.value = '';
    }
  });


  redactPhotoCansel.addEventListener('click', () => {
    ev.preventDefault();
    redactorPhoto.classList.add('hidden');
    uploadFile.value = '';
    body.classList.remove('modal-open');
  });

});


