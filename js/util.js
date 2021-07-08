const ALERT_SHOW_TIME = 5000;

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
const textAlert = 'Не удалось получить объявления. Попробуйте ещё раз';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showSuccess = () => {
  const buttonEsc = 'Escape';
  const buttonEsc2 = 27;
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successContainer = successTemplate.cloneNode(true);
  document.body.append(successContainer);

  document.body.addEventListener('keydown', (evt) => {
    if (evt.key === buttonEsc || evt.key === buttonEsc2) {
      successContainer.remove();
      document.body.removeEventListener('keydown',successContainer);
    }
  });

  document.body.addEventListener('click', () => {
    successContainer.remove();
    document.body.removeEventListener('click',successContainer);
  });
};

const showError = () => {
  const buttonEsc = 'Escape';
  const buttonEsc2 = 27;
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorContainer = errorTemplate.cloneNode(true);
  const errorButton = errorTemplate.querySelector('.error__button');
  document.body.append(errorContainer);

  document.body.addEventListener('keydown', (evt) => {
    if (evt.key === buttonEsc || evt.key === buttonEsc2) {
      errorContainer.remove();
      document.body.removeEventListener('keydown',errorContainer);
    }
  });

  document.body.addEventListener('click', () => {
    errorContainer.remove();
    document.body.removeEventListener('click',errorContainer);
  });

  errorButton.addEventListener('click', () => {
    errorContainer.remove();
    errorButton.removeEventListener('click',errorContainer);
  });
};

export {getRandomNumber, getRandomFloat,getRandomArray, getRandomElement, showAlert,showSuccess, showError,textAlert};
