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

const url = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];

const userPhotoСount = 25;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createComment = () => ({
  commentId: getRandomNumber(0, 25),
  avatar: `img/avatar-${getRandomNumber(0, 6)}.svg`,
  message: getRandomArrayElement(message),
  userName: getRandomArrayElement(names),
});
const createPhoto = () => ({
  id: getRandomNumber(0, 25),
  url: getRandomArrayElement(url),
  description: getRandomArrayElement(description),
  likes: getRandomNumber(15, 200),
  comment: createComment(),
});

const userPhotos = new Array(userPhotoСount)
  .fill(null)
  .map(() => createPhoto());
console.log(userPhotos);
