const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');

const DisabledOnFormNodes = (isDisabled) => {
  [adForm, filterForm].forEach((form) => {
    for (const element of form.elements) {
      element.disabled = isDisabled;
    }
  });
};

const PageActiveState = (bool) => {
  adForm.classList.toggle('ad-form--disabled', bool);
  filterForm.classList.toggle('ad-form--disabled', bool);
  DisabledOnFormNodes(bool);
};

export {PageActiveState};
