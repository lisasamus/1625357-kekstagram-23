/* eslint-disable no-use-before-define */
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

const makeUniqueRandomIntegerGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};


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
const userCommentСount = 5;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createComment = () => ({
  commentId: getRandomNumber(1, 25),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(message),
  userName: getRandomArrayElement(names),
});
const getRandomId = makeUniqueRandomIntegerGenerator(1, 25);
const getRandomUrl = makeUniqueRandomIntegerGenerator(1, 25);


const createPhoto = () => ({
  id: getRandomId(),
  url: `photos/${getRandomUrl()}.jpg`,
  description: getRandomArrayElement(description),
  likes: getRandomNumber(15, 200),
  comment: new Array(getRandomNumber(1, userCommentСount))
    .fill(null)
    .map(() => createComment()),
});

const userPhotos = new Array(userPhotoСount)
  .fill(null)
  .map(() => createPhoto());

// eslint-disable-next-line no-console
console.log(userPhotos);

