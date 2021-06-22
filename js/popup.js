import './data.js';

function getPhotos (card) {
  var photos = document.createDocumentFragment();
  for (var i = 0; i < card.length; i++) {
    var photo = document.createElement('img');
    photo.src = card[i];
    photo.style = 'width:' + '70px';
    photos.appendChild(photo);
  }
  return photos;
};

const ApartmentType = {
  PALACE: 'Дворец',
  FLAT: 'Квартира',
  HOUSE: 'Дом',
  BUNGALO: 'Бунгало',
  HOTEL: 'Отель'
};

function getFeatures (card) {
  var features = document.createDocumentFragment();
  for (var i = 0; i < card.length; i++) {
    var feature = document.createElement('li');
    feature.classList.add('feature');
    feature.classList.add('feature--' + card[i]);
    features.appendChild(feature);
  }
  return features;
};

function getSumRooms() {
  var room = offer.rooms;
  var guest = offer.guests;
  var result = ;
  if (room === 1 & guest === 1) {
    result = room + 'комната для' + guest + 'гостя';
  }else if (room <= 4 & guest > 1){
    result = room + 'комнаты для' + guest + 'гостей';
      
  }else if ((room >=5 & guest > 1) || (room === 0 & guest === 0) ) {
    result = room + 'комнат для' + guest + 'гостей';
  }
  return result;

}

var KEYCODE_ESC = 27;

var removeActiveClass = function () {
  var activePin = document.querySelector('.map__pin--active');
  if (activePin) {
    activePin.classList.remove('map__pin--active');
  }
};

var closeCards = function () {
  var card = window.map.mapSection.querySelector('.map__card');
  if (card) {
    card.remove();
    removeActiveClass();
  }
  document.removeEventListener('keydown', cardСloseKeydownHandler);
};

var cardCloseClickHandler = function (evt) {
  if (evt.target.classList.contains('popup__close')) {
    closeCards();
  }
};

var cardСloseKeydownHandler = function (evt) {
  if (evt.keyCode === KEYCODE_ESC) {
    closeCards();
  }
};

function renderCard(card) {
  var cardе = document.querySelector('#card').content.querySelector('.map__card');
  closeCards();
  var popElement = cardе.cloneNode(true);
  popElement.querySelector('.popup__title').textContent = card.offer.title;
  popElement.querySelector('.popup__text--address').textContent = card.offer.address;
  popElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  popElement.querySelector('.popup__type').textContent = ApartmentType[card.offer.type.toUpperCase()];;
  popElement.querySelector('.popup__text--capacity').appendChild(getSumRooms());
  popElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  popElement.querySelector('.popup__features').appendChild(getFeatures(card.offer.features));
  popElement.querySelector('.popup__description').textContent = card.offer.description;
  popElement.querySelector('.popup__photos').appendChild(getPhotos(card.offer.photos));
  popElement.querySelector('.popup__avatar').src = card.author.avatar;
  window.map.mapSection.insertBefore(popElement, document.querySelector('.map__filters-container'));
  document.addEventListener('keydown', cardСloseKeydownHandler);
  document.addEventListener('click', cardCloseClickHandler);
  return popElement;
};

export {renderCard};
