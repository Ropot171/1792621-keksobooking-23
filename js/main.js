function getRandomNumber(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  if ( maxNumber < minNumber){
    throw new RangeError('Значение максильного числа не должно быть меньше значения минимального числа');
  } else if (maxNumber === minNumber) {
    throw new RangeError('Максимальное значение числа не должно быть равно минимальному значению числа. Результат + min');
  } else {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
}
function getRandomFloat(minParameter, maxParameter, quantity) {
  if ( maxParameter < minParameter){
    throw new RangeError('Максимальное значение не должно быть меньше минимального значения');
  } else if (maxParameter === minParameter) {
    throw new RangeError('Максимальное значение не должно быть равно минимальному значению. Результат + minParameter');
  } else {
    const result =  Math.random() * (maxParameter - minParameter) + minParameter;
    return Number(result.toFixed(quantity));
  }
}
const arrPhotos =['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

function getRandomPlace() {
  const arr = ['palace', 'flat', 'house', 'bungalow','hotel'];
  const index = getRandomNumber(0, 3);
  return arr[index];
}
function getRandomTime () {
  const arr = ['12:00', '13:00', '14:00'];
  const index = getRandomNumber(0, 2);
  return arr[index];
}
function GenerateObjects() {
  const result = [];
  for (let index = 0; index < 10; index++){
    const objects = {
      author: {
        avatar: /*/img/avatars/user*/`0${getRandomNumber(1,8)}`,/*.png*/
        /*не знаю, как правильно вывести эту строку, постоянно выпадает ошибка,буду благодарна совету*/
      },
      offer: {
        title: 'Заголовок предложения',
        address: 'location.lat, location.lng',
        /*Я не очень понимаю, что тут имеется в виду, добавила функцию, но не сработало
          function getAdress(location) {
           return ${location.lat},${location.lng}
          }*/
        price:getRandomNumber(0, 1000000),
        type: getRandomPlace(),
        rooms: getRandomNumber(0, 1000000),
        guests: getRandomNumber(0, 1000000),
        checkin: getRandomTime(),
        checkout: getRandomTime(),
        features: 'wifi, dishwasher, parking, washer, elevator, conditioner',
        description: 'Очень красивое и светлое помещение, заезжайте',
        photos: arrPhotos.join(', '),
      },
      location:{
        lat: getRandomFloat(35.65000, 35.70000,5),
        lng: getRandomFloat(139.70000, 139.80000,5),
      },
    };
    result.push(objects);
  }
  return result;
}
GenerateObjects();
