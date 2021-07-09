import {sendData} from './api.js';
import {adForm} from './data.js';

const textAlert = 'Произошла ошибка сервера, попробуйте еще раз';

const add = (e) => {
  e.preventDefault();
  const KEY_ESC = 'Escape';
  (e.key === KEY_ESC || e.type === 'click');{
    document.querySelector('.user-message').remove();
    document.removeEventListener('keydown', add);
  }
};

const displayMessage = (template) => {
  const message = template.cloneNode(true);
  document.body.appendChild(message);
  document.addEventListener('keydown', add);
  message.addEventListener('click', add);
};

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (e) => {
    const ERROR_MESSAGE_TEMPLATE = document.querySelector('#error').content.querySelector('.error');
    e.preventDefault();
    const formData = new FormData(e.target);
    sendData(
      () => onSuccess(),
      () => displayMessage(ERROR_MESSAGE_TEMPLATE),
      formData,
    );
  });
};

const clearForm = () => {
  const SUCCESS_MESSAGE_TEMPLATE = document.querySelector('#success').content.querySelector('.success');
  adForm.reset();
  displayMessage(SUCCESS_MESSAGE_TEMPLATE);
};

export {setUserFormSubmit, displayMessage, clearForm,textAlert};
