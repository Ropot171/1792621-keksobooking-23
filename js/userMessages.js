import {isEscEvent} from './util.js';

const SERVER_ERROR_TEXT = 'Произошла ошибка сервера, попробуйте еще раз';

const SHOW_TIME = 5000;

const deleteMessage = (evt) => {
  const message = document.querySelector('.message');
  if (message) {
    if (isEscEvent(evt) || evt.type === 'click') {
      evt.preventDefault();
      message.remove();
      document.removeEventListener('keydown', deleteMessage);
      document.removeEventListener('click', deleteMessage);
    }
  }
};

const showMessageSendSuccess = () => {
  const body = document.querySelector('body');
  const successMessage = document.querySelector('#success').content.querySelector('.success');
  const messageElement = successMessage.cloneNode(true);
  messageElement.classList.add('message');
  body.append(messageElement);

  document.addEventListener('keydown', deleteMessage);
  document.addEventListener('click', deleteMessage);
};

const showMessageSendError = (error) => {
  const body = document.querySelector('body');
  const errorMessage = document.querySelector('#error').content.querySelector('.error');
  const messageElement = errorMessage.cloneNode(true);
  const errorButton = messageElement.querySelector('.error__button');
  const errorMessageText = messageElement.querySelector('.error__message');
  messageElement.classList.add('message');
  body.append(messageElement);

  if (error) {
    errorMessageText.innerHTML += `<br>"${error}"`;
  }
  document.addEventListener('keydown', deleteMessage);
  document.addEventListener('click', deleteMessage);
  errorButton.addEventListener('click', deleteMessage);
};

const showMessageGetError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, SHOW_TIME);
};

export { showMessageGetError, showMessageSendSuccess, showMessageSendError,SERVER_ERROR_TEXT };
