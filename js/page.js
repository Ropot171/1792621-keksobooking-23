import {resetMap} from './map.js';
import {sendData} from './api.js';
import {showMessageSendSuccess, showMessageSendError} from './userMessages.js';

const adForm = document.querySelector('.ad-form');
const formFilter = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');

const ROOMS_FOR_GUESTS = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const TYPE_HOUSE = {
  flat: {
    name: 'Квартира',
    minPrice: 1000,
  },
  bungalow: {
    name: 'Бунгало',
    minPrice: 0,
  },
  house: {
    name: 'Дом',
    minPrice: 5000,
  },
  palace: {
    name: 'Дворец',
    minPrice: 10000,
  },
  hotel: {
    name: 'Отель',
    minPrice: 3000,
  },
};

function clearForm() {
  formFilter.reset();
  adForm.reset();
  resetMap();
}

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

function handleChangeRoomsNumber (e) {
  const numberRooms = ROOMS_FOR_GUESTS[e.target.value];
  for (const currentCapacityItem of adForm.capacity.children) {
    currentCapacityItem.disabled = !numberRooms.includes(currentCapacityItem.value);
  }
  if (!numberRooms.includes(adForm.capacity.value)) {
    adForm.capacity.value = numberRooms[0];
  }
}

function handleTypeChange () {
  adForm.price.min = TYPE_HOUSE[adForm.type.value].minPrice;
  adForm.price.placeholder = TYPE_HOUSE[adForm.type.value].minPrice;
}

function handleTimeInChange () {
  adForm['timeout'].value = adForm['timein'].value;
}

function handleTimeOutChange () {
  adForm['timein'].value = adForm['timeout'].value;
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
    adForm['room_number'].removeEventListener('change', handleChangeRoomsNumber);
    adForm.type.removeEventListener('change', handleTypeChange);
    adForm['timein'].removeEventListener('change', handleTimeInChange);
    adForm['timeout'].removeEventListener('change', handleTimeOutChange);
  } else {
    adForm.addEventListener('submit', handleSubmit);
    resetButton.addEventListener('click', handleReset);
    adForm['room_number'].addEventListener('change', handleChangeRoomsNumber);
    adForm.type.addEventListener('change', handleTypeChange);
    adForm['timein'].addEventListener('change', handleTimeInChange);
    adForm['timeout'].addEventListener('change', handleTimeOutChange);
  }
}

function changePageState(isDisabled) {
  adForm.classList.toggle('ad-form--disabled', isDisabled);
  formFilter.classList.toggle('ad-form--disabled', isDisabled);
  changeFormState(isDisabled);
}

export {changePageState, changeFormState, clearForm, adForm};
