let getRandomNumber = function (min, max) {
  if (min < 0 || min >= max) {
    return "неверный диапазон";
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomNumber(10, 1001));

let testTextLength = function (text, length) {
  if (text.length > length) {
    return false;
  }

  return true;
};
testTextLength("", 140);
