function getPhotos (card) {
  const photos = document.createDocumentFragment();
  for (let i = 0; i < card.length; i++) {
    const photo = document.createElement('img');
    photo.src = card[i];
    photo.style = 'width: 70px';
    photos.appendChild(photo);
  }
  return photos;
}

const ApartmentType = {
  PALACE: 'Дворец',
  FLAT: 'Квартира',
  HOUSE: 'Дом',
  BUNGALO: 'Бунгало',
  HOTEL: 'Отель',
};

function getFeatures (card) {
  const features = document.createDocumentFragment();
  for (let i = 0; i < card.length; i++) {
    const feature = document.createElement('li');
    feature.classList.add('feature');
    feature.classList.add(`feature--${  card[i]}`);
    features.appendChild(feature);
  }
  return features;
}

function generateRoomText({ offer }) {
  const room = offer.rooms;
  const guest = offer.guests;
  let result = null;

  if (room === 1 & guest === 1) {
    result = `${room  } комната для ${  guest  } гостя`;
  }else if (room <= 4 & guest > 1){
    result = `${room  } комнаты для ${  guest  } гостей`;
  }else if ((room >=5 & guest > 1) || (room === 0 & guest === 0) ) {
    result = `${room  } комнат для ${  guest  } гостей`;
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
  const cardTemplate = document.querySelector('#card');
  const cardElement = cardTemplate.cloneNode(true).content;
  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  setTextContent(cardElement.querySelector('.popup__title'), card.offer.title);
  cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  setTextContent(cardElement.querySelector('.popup__text--address'), card.offer.address);
  cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  setTextContent(cardElement.querySelector('.popup__text--price'), card.offer.price);
  cardElement.querySelector('.popup__type').textContent = ApartmentType[card.offer.type.toUpperCase()];
  setTextContent(cardElement.querySelector('.popup__type'), card.offer.type);
  cardElement.querySelector('.popup__text--capacity').textContent = (generateRoomText(card));
  setTextContent(cardElement.querySelector('.popup__text--capacity'), generateRoomText(card));
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  setTextContent(cardElement.querySelector('.popup__text--time'),card.offer.checkout);
  cardElement.querySelector('.popup__features').appendChild(getFeatures(card.offer.features));
  cardElement.querySelector('.popup__description').textContent = card.offer.description;
  setTextContent(cardElement.querySelector('.popup__description'),card.offer.description);
  cardElement.querySelector('.popup__photos').appendChild(getPhotos(card.offer.photos));
  cardElement.querySelector('.popup__avatar').src = card.author.avatar;
  setTextContent(cardElement.querySelector('.popup__avatar'),card.author.avatar);
  document.querySelector('#map-canvas').appendChild(cardElement);
}

export { renderCard };
