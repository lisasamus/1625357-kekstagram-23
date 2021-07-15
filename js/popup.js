import { isEscEvent } from './util.js';
import './scaleControl.js';
import './filters.js';
import './validation.js';
import {
  hashtagInput, commentInput, onHashtagStopPropagation, onCommenttopPropagation,
  onhashtagInput, oncommentInput
} from './validation.js';

const startForm = document.querySelector('.img-upload__start');
const redactorPhoto = document.querySelector('.img-upload__overlay');
const redactPhotoCansel = redactorPhoto.querySelector('.img-upload__cancel');
const uploadFile = redactorPhoto.querySelector('#upload-file');

const body = document.querySelector('body');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    redactorPhoto.classList.add('hidden');
    uploadFile.value = '';
  }
};


startForm.addEventListener('click', () => {
  redactorPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
});


redactPhotoCansel.addEventListener('click', (ev) => {
  ev.preventDefault();
  redactorPhoto.classList.add('hidden');
  uploadFile.value = '';
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  hashtagInput.removeEventListener('keydown', onHashtagStopPropagation);
  commentInput.removeEventListener('keydown', onCommenttopPropagation);
  commentInput.removeEventListener('input', oncommentInput);
  hashtagInput.removeEventListener('input', onhashtagInput);
});


