import {adForm} from './data.js';
const formFilter = document.querySelector('.map__filters');

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

export {changePageState,changeFormState};
