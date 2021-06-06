function getRandomNumber(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  if ( maxNumber < minNumber){
    throw new RangeError('Значение максильного числа не должно быть меньше значения минимального числа');
  } else if (maxNumber === minNumber) {
    throw new RangeError('Максимальное значение числа не должно быть равно минимальному значению числа. Результат + min');
  } else {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
}
getRandomNumber(500, 600);
function getRandomFloat(minParameter, maxParameter, quantity) {
  if ( maxParameter < minParameter){
    throw new RangeError('Максимальное значение не должно быть меньше минимального значения');
  } else if (maxParameter === minParameter) {
    throw new RangeError('Максимальное значение не должно быть равно минимальному значению. Результат + minParameter');
  } else {
    const result =  Math.random() * (maxParameter - minParameter) + minParameter;
    return Number(result.toFixed(quantity));
  }
}
getRandomFloat(135.38490, 138.32789, 3);
