const userDialog = document.querySelector('.map__canvas');
const similarListElement = userDialog.querySelector('.map__filters-container');
const similarTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
  
  similarWizards.forEach(() => {
const popElement = similarTemplate.cloneNode(true);
popElement.querySelector('.popup__title').textContent = offer.title;
popElement.querySelector('.popup__text--address').picture.src = offer.address;
popElement.querySelector('.popup__text--price').textContent = offer.price + '₽/ночь';
popElement.querySelector('.popup__type').textContent = offer.type;
popElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
popElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
popElement.querySelectorAll('.popup__features');
popElement.querySelector('.popup__description').textContent = offer.description;
popElement.querySelector('.popup__photos').picture.src = offer.photos;
similarListElement.appendChild(popElement);
)};
