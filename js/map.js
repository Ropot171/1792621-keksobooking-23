let adForm = document.querySelector('.ad-form');
let adFormFieldsets = document.querySelectorAll('.ad-form__element');
let adFormHeader = document.querySelector('.ad-form-header');
let resetBtn = document.querySelector('.ad-form__reset');
let filter = document.querySelector('.map__filters');

let activateForm = function () {
  adForm.classList.remove('ad-form--disabled');
  for (let i = 0; i < adFormFieldsets.length; i++) {
    adFormFieldsets[i].disabled = false;
  }
  adFormHeader.disabled = false;
};

let deactivateForm = function () {
  adForm.reset();
  for (let i = 0; i < adFormFieldsets.length; i++) {
    adFormFieldsets[i].disabled = true;
  }
  adFormHeader.disabled = true;
};

deactivateForm();
window.filter.deactivate();
