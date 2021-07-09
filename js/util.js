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

function getRandomArray(list) {
  const maxLength = list.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];
  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomNumber(0, maxLength - 1);
    const el = list[indexOfEl];
    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

function getRandomElement(list) {
  return list[getRandomNumber(0, list.length - 1)];
}

const KEY_ESC = 'Escape';
const isEscEvent = (evt) => evt.key === KEY_ESC;

export {getRandomNumber, getRandomFloat,getRandomArray, getRandomElement,isEscEvent};
