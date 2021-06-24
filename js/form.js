const adForm = document.querySelector('.ad-form');
const roomForGuest = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

adForm['room_number'].addEventListener('change', (e) => {
  const numberRooms = roomForGuest[e.target.value];
  for (const currentCapacityItem of adForm.capacity.children) {
    currentCapacityItem.disabled = !numberRooms.includes(currentCapacityItem.value);
  }
  adForm.capacity.value = numberRooms[0];
});
