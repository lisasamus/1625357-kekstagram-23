const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const buttonSubmit = document.querySelector('#upload-submit');


/*buttonSubmit.addEventListener('click', () => {

  const hashTagText = hashtagInput.value;
  const hashTags = hashTagText.split(' ');
  if (hashTags.length > 5) {
    hashtagInput.setCustomValidity('Не больше 5 хэштегов');
  } else {
    hashtagInput.setCustomValidity('');
  }

  for (let i = 0; i < hashTags.length; i++) {

    if (!hashTagText.match(/^#[A-za-zА-Яа-я0-9]{1,19}$/)) {
      hashtagInput.setCustomValidity('что-то не так');
    }
    else { hashtagInput.setCustomValidity(''); }

  }

});*/


hashtagInput.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    evt.stopPropagation();
  }
});
commentInput.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    evt.stopPropagation();
  }
});


hashtagInput.addEventListener('input', () => {

  const hashTagText = hashtagInput.value;
  const hashTags = hashTagText.split(' ');
  if (hashTags.length > 5) {
    hashtagInput.setCustomValidity('Не больше 5 хэштегов');
  } else {
    hashtagInput.setCustomValidity('');

    for (let i = 0; i < hashTags.length; i++) {
      if (!hashTags[i].match(/^#[A-Za-zА-Яа-я0-9]{1,19}$/)) {
        hashtagInput.setCustomValidity('что-то не так');
      }
      else {
        hashtagInput.setCustomValidity('');
      }

    }
  }
});

const COMMENT_LENGTH = 140;
commentInput.addEventListener('input', () => {

  const valueLength = commentInput.value.length;

  if (valueLength > COMMENT_LENGTH) {
    commentInput.setCustomValidity(`Удалите лишние ${valueLength - COMMENT_LENGTH} симв.`);
  } else {
    commentInput.setCustomValidity('');
  }
});
