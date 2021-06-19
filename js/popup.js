import {generateObjects} from './data.js';
const userDialog = document.querySelector('.map__canvas');
const similarListElement = userDialog.querySelector('.map__filters-container');
const similarTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

function getPhoto() {
    photos.forEach((element) => {
        const img = document.createElement("img");
        img.src = element;
        img.width = '45';
        img.height = '40';
        document.getElementById(card).appendChild(img)
    }
};

function getPlace() {
var place = offer.type;
switch (place) {
    case 'flat':
        console.log('Квартира');
        break;
    case 'bungalow': 
        console.log('Бунгало');
        break;
    case 'house':
        console.log('Дом');
        break; // В конце расположен break, поэтому выполнение не перейдёт к случаю 'case 2:'
    case 'palace':
        console.log('Дворец');
        break;
    case 'hotel':
        console.log('Отель');
        break;
}
return place;
};

function getFeatures() {
    plaseListElement = document.querySelector('.popup__features');
  const modifers = features.map((features) => popup__features--${features});
  plaseListElement.querySelectorAll('.popup__features').forEach((item) => {
      const modifer = item.classList[1];
      if (!modifers.includes(modifer)) {
          item.remove();
      }
  })
};

function getSumRooms() {
var room = offer.rooms;
var guest = offer.guests;
    if (room === 1 & guest === 1) {
        console.log(room + 'комната для' + guest + 'гостя');
        break;
    }else if (room <= 4 & guest > 1){
        console.log(room + 'комнаты для' + guest + 'гостей');
        break;
    }else if ((room >=5 & guest > 1) || (room === 0 & guest === 0) ) {
        console.log(room + 'комнат для' + guest + 'гостей');
        break;
    }
}
function generateTemplate () {
 generateObjects.forEach(() => {
const popElement = similarTemplate.cloneNode(true);
popElement.querySelector('.popup__title').textContent = offer.title;
popElement.querySelector('.popup__text--address').picture.src = offer.address;
popElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
popElement.querySelector('.popup__type').textContent = getPlace();
popElement.querySelector('.popup__text--capacity').textContent = getSumRooms();
popElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
popElement.querySelector('.popup__features').textContent = getFeatures();
popElement.querySelector('.popup__description').textContent = offer.description;
popElement.querySelector('.popup__photos').picture.src = getPhoto ();
similarListElement.appendChild(popElement);
});
};
export {generateTemplate};
