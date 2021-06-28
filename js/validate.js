const adForm = document.querySelector('.ad-form');
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

const TypeHouse = {
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
  adForm.price.min = TypeHouse[adForm.type.value].minPrice;
  adForm.price.placeholder = TypeHouse[adForm.type.value].minPrice;
});

const selectTime = {
  '12:00':['12:00'],
  '13:00':['13:00'],
  '14:00':['14:00'],
};
adForm['timein'].addEventListener('change', (e) => {
  const numberTimes = selectTime[e.target.value];
  for (const currentTimeoutItem of adForm.timeout.children) {
    currentTimeoutItem.disabled = !numberTimes.includes(currentTimeoutItem.value);
  }
  adForm.timeout.value = numberTimes[0];
});
