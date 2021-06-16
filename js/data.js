import {getRandomNumber, getRandomFloat,getRandomArray, getRandomElement} from './util.js';

const placeTypes = ['palace', 'flat', 'house', 'bungalow','hotel'];

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const time = ['12:00', '13:00', '14:00'];

function generateObjects() {
  const result = [];
  for (let index = 0; index < 10; index++){
    const location = {
      lat: getRandomFloat(35.65000, 35.70000,5),
      lng: getRandomFloat(139.70000, 139.80000,5),
    };
    const object = {
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
        checkin: getRandomElement(time) ,
        checkout: getRandomElement(time) ,
        features: getRandomArray(features),
        description: 'Очень красивое и светлое помещение, заезжайте',
        photos: getRandomArray(photos),
      },
      location: location,
    };
    result.push(object);
  }
  return result;
}
export {generateObjects};
