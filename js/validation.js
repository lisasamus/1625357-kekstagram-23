import { hasDuplicates, firstHashTag, findSpace } from './util.js';
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');


const onHashtagStopPropagation = (evt) => {
  if (evt.keyCode === 27) {
    evt.stopPropagation();
  }
};

const onCommenttopPropagation = (evt) => {
  if (evt.keyCode === 27) {
    evt.stopPropagation();
  }
};

hashtagInput.addEventListener('keydown', onHashtagStopPropagation);
commentInput.addEventListener('keydown', onCommenttopPropagation);


const onhashtagInput = () => {
  const hashTagText = hashtagInput.value;
  const hashTags = hashTagText.split(' ');
  const anotherHashTags = hashTagText.split('#');
  if (hashTags.length > 5) {
    hashtagInput.setCustomValidity('Не больше 5 хэштегов');
  } else {
    hashtagInput.setCustomValidity('');
    for (let i = 0; i < hashTags.length; i++) {
      if (firstHashTag(hashTags)) {
        hashtagInput.setCustomValidity('начните с #');
      }
      else if (!findSpace(hashTags, anotherHashTags)) {
        hashtagInput.setCustomValidity('Пробел');
      }
      else if (!hashTags[i].match(/^#[A-Za-zА-Яа-я0-9]/)) {
        hashtagInput.setCustomValidity('Используйте русский или латинский алфавит и цифры');
      }
      else if (!hashTags[i].match(/^#[A-Za-zА-Яа-я0-9]{1,19}$/)) {
        hashtagInput.setCustomValidity('Длина одного хэштега не более 20 символов');
      }
      else if (hasDuplicates(hashTags)) {
        hashtagInput.setCustomValidity('дублирование хэштегов');
      }
      else {
        hashtagInput.setCustomValidity('');
      }
    }

  }
};

hashtagInput.addEventListener('input', onhashtagInput);

const COMMENT_LENGTH = 140;

const oncommentInput = () => {
  const valueLength = commentInput.value.length;

  if (valueLength > COMMENT_LENGTH) {
    commentInput.setCustomValidity(`Удалите лишние ${valueLength - COMMENT_LENGTH} симв.`);
  } else {
    commentInput.setCustomValidity('');
  }
};

commentInput.addEventListener('input', oncommentInput);


export {
  hashtagInput, commentInput, onHashtagStopPropagation, onCommenttopPropagation,
  onhashtagInput, oncommentInput
};
