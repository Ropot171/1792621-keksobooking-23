const adForm = document.querySelector('.ad-form');
const formFilter = document.querySelector('.map__filters');

const DisabledOnFormNodes = (isDisabled) => {
  [adForm, formFilter].forEach((form) => {
    for (const element of form.elements) {
      element.disabled = isDisabled;
    }
  });
};

const PageActiveState = (bool) => {
  adForm.classList.toggle('ad-form--disabled', bool);
  formFilter.classList.toggle('ad-form--disabled', bool);
  DisabledOnFormNodes(bool);
};

export {PageActiveState};
