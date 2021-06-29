import {generateObjects} from './data.js';
import {renderCard} from'./card.js';

const offers = generateObjects();
renderCard(offers[0]);

const map = L.map('map-canvas')
  .on('load', () => {
    'Карта инициализирована';
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
