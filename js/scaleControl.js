const scaleControlField = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const previewImage = document.querySelector('.img-upload__preview');

let picturePercent = 100;

const scaleSizeChanger = function () {

  if (picturePercent === 25) {
    previewImage.style.transform = 'scale(0.25)';
  }
  if (picturePercent === 50) {
    previewImage.style.transform = 'scale(0.5)';
  }
  if (picturePercent === 75) {
    previewImage.style.transform = 'scale(0.75)';
  }
  if (picturePercent === 100) {
    previewImage.style.transform = 'scale(1)';
  }
};


scaleControlSmaller.addEventListener('click', () => {

  if (picturePercent > 25) {
    picturePercent -= 25;
    scaleControlField.value = (`${picturePercent}%`);
    scaleSizeChanger(picturePercent);
  }

});

scaleControlBigger.addEventListener('click', () => {

  if (picturePercent < 100) {
    picturePercent += 25;
    scaleControlField.value = (`${picturePercent}%`);
    scaleSizeChanger(picturePercent);
  }

});


