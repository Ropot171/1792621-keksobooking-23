function getRandomNumber(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  if ( maxNumber < minNumber){
    throw new RangeError('Значение максильного числа не должно быть меньше значения минимального числа');
  } else if (maxNumber === minNumber) {
    console.warn(min); //можно вернуть minNumber, но этим мы можем запутать пользователя
  } else {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  } 
}  
  /*написала функцию с помощью документации
   https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   */

function getRandomCoordinates(minParameter, maxParameter, quantity) {
  if ( maxParameter < minParameter){
    throw new RangeError('Значение максильных координат не должно быть меньше значения минимальных координат');
  } else if (maxParameter === minParameter) {
    console.warn(minParameter);
  } else {
    const result =  Math.random() * (maxParameter - minParameter) + minParameter;
    return Number(result.toFixed(quantity)); 
    /*Про number и как распарсить в число подсказал разработчик на работе
     и взяла из документации про
      .toFixed https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
      */
  }
}
