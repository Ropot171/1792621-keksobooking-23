const imgTemplate = document.querySelector('#card').content.querySelector('.popup__photo');

const getPhotos = function (element, array){
  element.innerHTML = '';

  array.forEach((item) => {
    const photo = imgTemplate.cloneNode(true);
    photo.src = item;
    element.appendChild(photo);
  });
};

const ApartmentType = {
  PALACE: 'Дворец',
  FLAT: 'Квартира',
  HOUSE: 'Дом',
  BUNGALO: 'Бунгало',
  HOTEL: 'Отель',
};

const getFeatures = function (element, array) {
  {
    element.innerHTML = '';

    array.forEach((item) => {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature');
      featureItem.classList.add(`popup__feature--${item}`);
      element.appendChild(featureItem);
    });
  }
};

function generateRoomText({offer}) {
  const room = offer.rooms;
  const guest = offer.guests;
  let result = null;

  if (room === 1 & guest === 1) {
    result = `${room} комната для ${guest} гостя`;
  } else if (room <= 4 & guest > 1) {
    result = `${room} комнаты для ${guest} гостей`;
  } else if ((room >=5 & guest > 1) || (room === 0 & guest === 0) ) {
    result = `${room} комнат для ${guest} гостей`;
  }
  return result;

}

function setTextContent(element, textContent) {
  if (textContent) {
    element.textContent = textContent;
  } else {
    element.classList.add('hidden');
  }
}

function renderCard(card) {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const cardElement = cardTemplate.cloneNode(true);
  setTextContent(cardElement.querySelector('.popup__title'), card.offer.title);
  setTextContent(cardElement.querySelector('.popup__text--address'), card.offer.address);
  setTextContent(cardElement.querySelector('.popup__text--price'),`${card.offer.price} ₽/ночь`);
  setTextContent(cardElement.querySelector('.popup__type'), ApartmentType[card.offer.type.toUpperCase()]);
  setTextContent(cardElement.querySelector('.popup__text--capacity'), generateRoomText(card));
  setTextContent(cardElement.querySelector('.popup__text--time'),`Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);
  getFeatures(cardElement.querySelector('.popup__features'), card.offer.features);
  setTextContent(cardElement.querySelector('.popup__description'),card.offer.description);
  getPhotos(cardElement.querySelector('.popup__photos'), card.offer.photos);
  setTextContent(cardElement.querySelector('.popup__avatar'),card.author.avatar);
  document.querySelector('#map-canvas').appendChild(cardElement);

  return cardElement;
}

export {renderCard};
