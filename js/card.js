const imgTemplate = document.querySelector('#card').content.querySelector('.popup__photo');

const ApartmentType = {
  PALACE: 'Дворец',
  FLAT: 'Квартира',
  HOUSE: 'Дом',
  BUNGALO: 'Бунгало',
  HOTEL: 'Отель',
};

function addPhotos(element, photos){
  element.innerHTML = '';

  if (photos && photos.length) {
    photos.forEach((item) => {
      const photo = imgTemplate.cloneNode(true);
      photo.src = item;
      element.appendChild(photo);
    });
  } else {
    element.classList.add('hidden');
  }
}

function addFeatures (element, features) {
  {
    element.innerHTML = '';
    if (features && features.length) {
      features.forEach((item) => {
        const featureItem = document.createElement('li');
        featureItem.classList.add('popup__feature');
        featureItem.classList.add(`popup__feature--${item}`);
        element.appendChild(featureItem);
      });
    } else {
      element.classList.add('hidden');
    }
  }
}

function generateRoomText(offer) {
  const room = offer.rooms;
  const guest = offer.guests;
  let result;

  if (room === 1 & guest === 1) {
    result = `${room} комната для ${guest} гостя`;
  } else if (room <= 4 & guest > 1) {
    result = `${room} комнаты для ${guest} гостей`;
  } else if ((room >=5 & guest > 1) || (room === 0 & guest === 0) ) {
    result = `${room} комнат для ${guest} гостей`;
  }
  return result;

}

function generatePriceText(card) {
  const text = `${card.offer.price} ₽/ночь`;
  return Number.isFinite(card.offer.price) ? text : undefined;
}

function generateCheckinText(card) {
  const text = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  return card.offer.checkin && card.offer.checkout ? text : undefined;
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
  setTextContent(cardElement.querySelector('.popup__text--price'),generatePriceText(card));
  setTextContent(cardElement.querySelector('.popup__type'), ApartmentType[card.offer.type.toUpperCase()]);
  setTextContent(cardElement.querySelector('.popup__text--capacity'), generateRoomText(card));
  setTextContent(cardElement.querySelector('.popup__text--time'),generateCheckinText(card));
  addFeatures(cardElement.querySelector('.popup__features'), card.offer.features);
  setTextContent(cardElement.querySelector('.popup__description'),card.offer.description);
  addPhotos(cardElement.querySelector('.popup__photos'), card.offer.photos);
  card.author.avatar ? cardElement.querySelector('.popup__avatar').src = card.author.avatar : cardElement.querySelector('.popup__avatar').classList.add('hidden');

  return cardElement;
}

export {renderCard};
