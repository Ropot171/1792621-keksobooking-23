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

const location = {
  lat: getRandomFloat(35.65000, 35.70000,5),
  lng: getRandomFloat(139.70000, 139.80000,5),
};

const placeTypes = ['palace', 'flat', 'house', 'bungalow','hotel'];

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

function getRandomFeatures(features) {
  const maxLength = features.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];
  for(let i = 0;i < lengthOfArray;i++) {
    const indexOfEl = getRandomNumber(0, 5);
    const el = features[indexOfEl];
    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function getRandomPhotos(photos) {
  const maxLength = photos.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];
  for(let i = 0;i < lengthOfArray;i++) {
    const indexOfEl = getRandomNumber(0, 2);
    const el = photos[indexOfEl];
    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

function getRandomElement(list) {
  return list[Math.floor((Math.random()*list.length))];
}

function getRandomTime () {
  const arr = ['12:00', '13:00', '14:00'];
  const index = getRandomNumber(0, 2);
  return arr[index];
}

function generateObjects() {
  const result = [];
  for (let index = 0; index < 10; index++){
    const objects = {
      author: {
        avatar: `/img/avatars/user0${getRandomNumber(1,8)}.png`,
      },
      offer: {
        title: 'Заголовок предложения',
        address: `${location.lat}, ${location.lng}`,
        price:getRandomNumber(0, 1000000),
        type: getRandomElement(placeTypes),
        rooms: getRandomNumber(0, 1000000),
        guests: getRandomNumber(0, 1000000),
        checkin: getRandomTime(),
        checkout: getRandomTime(),
        features: getRandomFeatures(features),
        description: 'Очень красивое и светлое помещение, заезжайте',
        photos: getRandomPhotos(photos),
      },
      location: location,
    };
    result.push(objects);
  }
  return result;
}

generateObjects();
