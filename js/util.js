import { description, message, names, userPhotoСount, userCommentСount } from './data.js';

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

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

function hasDuplicates(hashTags) {
  return (new Set(hashTags)).size !== hashTags.length;
}

const getSpace = function (anotherHashTags) {
  for (let i = 1; i < anotherHashTags.length; i++) {
    if (!anotherHashTags[i].match(/^#\s$/)) {
      return true;
    }
  }
};

const firstHashTag = function (hashTags) {
  for (let i = 0; i < hashTags.length; i++) {
    if (!hashTags[i].match(/^#/)) {
      return true;
    }
  }
};

const findSpace = function (hashTags, anotherHashTags) {
  if (hashTags.length === anotherHashTags.length - 1) {
    return true;
  }

};
export { userPhotos, isEscEvent, hasDuplicates, getSpace, firstHashTag, findSpace };
