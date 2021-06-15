
const getRandomNumber = function (min, max) {
  if (min < 0 || min >= max) {
    return 'неверный диапазон';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumber(0, 1000);

const testTextLength = function (text, length) {

  if (text.length > length) {
    return false;
  }

  return true;
};

testTextLength('', 140);

const description = ['хорошо', 'плохо', 'розово', 'нормально'];
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const userPhotoСount = 25;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createComment = () => ({
  commentId: getRandomNumber(1, 25),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(message),
  userName: getRandomArrayElement(names),
});
const createPhoto = () => ({
  id: getRandomNumber(1, 25),
  url: `photos/${getRandomNumber(1, 25)}.jpg`,
  description: getRandomArrayElement(description),
  likes: getRandomNumber(15, 200),
  comment: createComment(),
});

const userPhotos = new Array(userPhotoСount)
  .fill(null)
  .map(() => createPhoto());

userPhotos();

