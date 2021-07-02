import {ads} from './data.js';
import {renderCard} from './card.js';
import {changePageState} from './page.js';
const adForm = document.querySelector('.ad-form');

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

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (ad) => {
  const marker = L.marker(
    ad.location,
    {
      icon: additionalIcon,
    },
  );
  return marker;
};

ads.forEach((ad) => {
  const marker = createMarker(ad);
  marker
    .addTo(markerGroup)
    .bindPopup(
      renderCard(ad),
      {
        keepInView: true,
      },
    );
});

export {map};
