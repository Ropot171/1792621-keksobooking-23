const adForm = document.querySelector('.ad-form');
const formFilter = document.querySelector('.map__filters');

function changeFormState(state) {
  [adForm, formFilter].forEach((form) => {
    for (const element of form.elements) {
      element.disabled = state;
    }
  });
}

function changePageState(isDisabled) {
  adForm.classList.toggle('ad-form--disabled', isDisabled);
  formFilter.classList.toggle('ad-form--disabled', isDisabled);
  changeFormState(isDisabled);
}

changeFormState(true);

export {changePageState};
