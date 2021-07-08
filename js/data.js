import {getRandomNumber, getRandomFloat,getRandomArray, getRandomElement} from './util.js';

const ADDRESS_POST = 'https://23.javascript.pages.academy/keksobooking';
const ADDRESS_GET = 'https://23.javascript.pages.academy/keksobooking/data';

<<<<<<< HEAD
=======
const adForm = document.querySelector('.ad-form');

>>>>>>> b56c6749a6dc24637549f496bd83dfebe3f98a34
const placeTypes = ['palace', 'flat', 'house', 'bungalow','hotel'];

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const time = ['12:00', '13:00', '14:00'];

const getAuthor = () => ({
  avatar: `/img/avatars/user0${getRandomNumber(1,8)}.png`,
});

const getLocation =  () => ({
  lat: getRandomFloat(35.65000, 35.70000,5),
  lng: getRandomFloat(139.70000, 139.80000,5),
});

const generateObjects = (location) => ({
  title: 'Заголовок предложения',
  address: `${location.lat  }, ${  location.lng}`,
  price:getRandomNumber(0, 1000000),
  type: getRandomElement(placeTypes),
  rooms: getRandomNumber(0, 1000000),
  guests: getRandomNumber(0, 1000000),
  checkin: getRandomElement(time) ,
  checkout: getRandomElement(time) ,
  features: getRandomArray(features),
  description: 'Очень красивое и светлое помещение, заезжайте',
  photos: getRandomArray(photos),
});

<<<<<<< HEAD
export {adForm};
=======
export {adForm,ADDRESS_POST,ADDRESS_GET};
>>>>>>> b56c6749a6dc24637549f496bd83dfebe3f98a34
