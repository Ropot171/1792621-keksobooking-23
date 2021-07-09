import {adForm} from './data.js';
import {resetDataMap} from './map.js';
import {sendData} from './api.js';
import {showMessageSendSuccess, showMessageSendError} from './userMessages.js';


const formFilter = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');

const clearForm = () => {
  formFilter.reset();
  adForm.reset();
  resetDataMap();
};
resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearForm();
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  sendData(
    showMessageSendSuccess,
    showMessageSendError,
    formData);
});

function changeFormState(isDisabled) {
  [adForm, formFilter].forEach((form) => {
    for (const element of form.elements) {
      element.disabled = isDisabled;
    }
  });
}

function changePageState(isDisabled) {
  adForm.classList.toggle('ad-form--disabled', isDisabled);
  formFilter.classList.toggle('ad-form--disabled', isDisabled);
  changeFormState(isDisabled);
}

changeFormState(true);

export {changePageState,changeFormState, clearForm}; //enableForm,
