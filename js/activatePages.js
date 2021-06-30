const adForm = document.querySelector('.ad-form');
const formFilter = document.querySelector('.map__filters');

const disableTheForm = (isDisabled) => {
  [adForm, formFilter].forEach((form) => {
    for (const element of form.elements) {
      element.disabled = isDisabled;
    }
  });
};

const activateThePage = (state) => {
  adForm.classList.toggle('ad-form--disabled', state);
  formFilter.classList.toggle('ad-form--disabled', state);
  disableTheForm(state);
};

export {activateThePage};
