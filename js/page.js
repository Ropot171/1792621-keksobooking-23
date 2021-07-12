import {adForm} from './data.js';
import {clearPage} from './map.js';
import {sendData} from './api.js';
import {showMessageSendSuccess, showMessageSendError} from './userMessages.js';


const formFilter = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');

const clearForm = () => {
  formFilter.reset();
  adForm.reset();
  clearPage();
};

function handleReset(evt) {
  evt.preventDefault();
  clearForm();
}

function handleSubmit (evt){
  evt.preventDefault();
  const formData = new FormData(evt.target);

  sendData(
    showMessageSendSuccess,
    showMessageSendError,
    formData);
}

function changeFormState(isDisabled) {
  [adForm, formFilter].forEach((form) => {
    for (const element of form.elements) {
      element.disabled = isDisabled;
    }
  });
  if (isDisabled) {
    adForm.removeEventListener('submit', handleSubmit);
    resetButton.removeEventListener('click', handleReset);
  } else {
    adForm.addEventListener('submit', handleSubmit);
    resetButton.addEventListener('click', handleReset);
  }
}

function changePageState(isDisabled) {
  adForm.classList.toggle('ad-form--disabled', isDisabled);
  formFilter.classList.toggle('ad-form--disabled', isDisabled);
  changeFormState(isDisabled);
}

export {changePageState,changeFormState, clearForm};
