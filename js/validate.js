import {adForm} from './data.js';

const ROOMS_FOR_GUESTS = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

adForm['room_number'].addEventListener('change', (e) => {
  const numberRooms = ROOMS_FOR_GUESTS[e.target.value];
  for (const currentCapacityItem of adForm.capacity.children) {
    currentCapacityItem.disabled = !numberRooms.includes(currentCapacityItem.value);
  }
  if (!numberRooms.includes(adForm.capacity.value)) {
    adForm.capacity.value = numberRooms[0];
  }
});

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

adForm.type.addEventListener('change', () => {
  adForm.price.min = TYPE_HOUSE[adForm.type.value].minPrice;
  adForm.price.placeholder = TYPE_HOUSE[adForm.type.value].minPrice;
});

adForm['timein'].addEventListener('change', () => {
  adForm['timeout'].value = adForm['timein'].value;
});

adForm['timeout'].addEventListener('change', () => {
  adForm['timein'].value = adForm['timeout'].value;
});
