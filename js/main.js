//Первая функция 
function getRandomNumber(min, max) {
    let min = Math.ceil(min);
    let max = Math.floor(max);
   if ( max < min){
  console.log('Значение максильного числа не должно быть меньше значения минимального числа')
  }
  if (max === min) {
  console.log('Нет интервала для вывода рандомного значения, ответ = + min'); 
  }
  else {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  } 
  } 
  /*написала функцию с помощью документации
   https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   */
   //Вторая  функция 
   function getRandomCoordinates(minNumber, maxNumber, quantity) {
    if ( maxNumber < minNumber){
    console.log('Значение максильных координат не должно быть меньше значения минимальных координат')
    }
    else if (maxNumber === minNumber) {
    console.log ('Нет интервала для вывода рандомного значения')
    }
    else {
    const result =  Math.random() * (maxNumber - minNumber) + minNumber;
    return Number(result.toFixed(quantity)); 
    /*Про number и как распарсить в число подсказал разработчик на работе
     и взяла из документации про
      .toFixed https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
      */
    }
    }
