const adForm = document.querySelector('.ad-form');
const formFilter = document.querySelector('.map__filters');

function disableTheForm(isDisabled) {
  [adForm, formFilter].forEach((form) => {
    for (const element of form.elements) {
      element.disabled = isDisabled;
    }
  });
}

function changePageState(isDisabled) {
  adForm.classList.toggle('ad-form--disabled', isDisabled);
  formFilter.classList.toggle('ad-form--disabled', isDisabled);
  disableTheForm(isDisabled);
}

export {changePageState};
