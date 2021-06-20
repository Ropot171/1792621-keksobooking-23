import './data.js';

var getPhotos = function (data) {
    var photos = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
      var photo = document.createElement('img');
      photo.src = data[i];
      photo.style = 'width:' + '70px';
      photo.style = 'height:' + '70px';
      photos.appendChild(photo);
    }
    return photos;
  };

var ApartmentType = {
    PALACE: 'Дворец',
    FLAT: 'Квартира',
    HOUSE: 'Дом',
    BUNGALO: 'Бунгало',
    HOTEL: 'Отель'
  };

function getFeatures(data) {
    plaseListElement = document.querySelector('.popup__features');
  const modifers = features.map((features) => `popup__features--${features}`);
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

function getCards (data) {
    var card = document.querySelector('template').content.querySelector('.map__card');
    closeCards();
    var popElement = card.cloneNode(true);
popElement.querySelector('.popup__title').textContent = data.offer.title;
popElement.querySelector('.popup__text--address').textContent = data.offer.address;
popElement.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;
popElement.querySelector('.popup__type').textContent = ApartmentType[data.offer.type.toUpperCase()];;
popElement.querySelector('.popup__text--capacity').appendChild(getSumRooms());
popElement.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
popElement.querySelector('.popup__features').appendChild(getFeatures(data.offer.features));
popElement.querySelector('.popup__description').textContent = data.offer.description;
popElement.querySelector('.popup__photos').appendChild(getPhotos(data.offer.photos));
popElement.querySelector('.popup__avatar').src = data.author.avatar;
window.map.mapSection.insertBefore(popElement, document.querySelector('.map__filters-container'));
    document.addEventListener('keydown', cardСloseKeydownHandler);
    document.addEventListener('click', cardCloseClickHandler);
    return popElement;
};

window.card = {
    getCards: getCards,
    closeCards: closeCards
  };


export {getCards};
