import {adForm} from './data.js';
import {renderCard} from './card.js';
import {changePageState} from './page.js';

const ADDRESS_POST = 'https://23.javascript.pages.academy/keksobooking';
const ADDRESS_GET = 'https://23.javascript.pages.academy/keksobooking/data';
const MAP_FILTERS_CLASS = '.map__filters';
const POINTS_COUNT = 10;

const map = L.map('map-canvas')
  .on('load', () => {
    changePageState(false);
  })
  .setView({
    lat: 35.6804,
    lng: 139.769,
  }, 14);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon({ //маркеру создаем иконку правильную
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const additionalIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker( //добавляем метку, координаты токио
  {
    lat: 35.6804,
    lng: 139.769,
  },
  {
    draggable: true, //можно перемещаться по карте
    icon: mainIcon,
  },
);

mainMarker.addTo(map);

function addressValue (marker) {
  const coordinates = `${marker.getLatLng().lat.toFixed(5)},${marker.getLatLng().lng.toFixed(5)}`;
  return coordinates;
}

adForm.address.value = addressValue(mainMarker);

mainMarker.on('mousemove', (evt) => {
  adForm.address.value = addressValue(evt.target);
});

const addPoints = (ads) => {
  ads.forEach((item) => {
    const pinMarker = L.marker(item.location, {
      draggable: true,
      icon: additionalIcon,
    });
    pinMarker.addTo(map).bindPopup(renderCard(item));
  });
};

export {addPoints,ADDRESS_POST,ADDRESS_GET,MAP_FILTERS_CLASS,POINTS_COUNT};
