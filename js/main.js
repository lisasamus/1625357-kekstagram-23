let getRandomNumber=function(min, max) {
    if (min<0 || min>=max) {
        console.log('неверный диапазон')
        return 'неверный диапазон'
    }
    let number=Math.random()*max;
    number=Math.round(number);
    if (number<min) {
      while (number<min) {
      number=Math.random()*max;
    number=Math.round(number);
    }
    }
    return number
}
getRandomNumber(10, 1001);



let testTextLength=function(text, length) {
    if (text.length>length) {
        console.log('напишите покороче') 
        return false
    }
    console.log('ok')
    return true
}
testTextLength('', 140);