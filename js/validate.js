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
