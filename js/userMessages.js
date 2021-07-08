const ALERT_SHOW_TIME = 5000;
const textAlert = 'Не удалось получить объявления. Попробуйте ещё раз';

const showAlert = (message) => {
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
  }, ALERT_SHOW_TIME);
};

const KEY_ESC = 'Escape';

const showSuccess = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successContainer = successTemplate.cloneNode(true);
  document.body.append(successContainer);

  document.body.addEventListener('keydown', (evt) => {
    if (evt.key === KEY_ESC) {
      successContainer.remove();
      document.body.removeEventListener('keydown',successContainer);
    }
  });

  document.body.addEventListener('click', () => {
    successContainer.remove();
    document.body.removeEventListener('click',successContainer);
  });
};

const showError = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorContainer = errorTemplate.cloneNode(true);
  const errorButton = errorTemplate.querySelector('.error__button');
  document.body.append(errorContainer);

  document.body.addEventListener('keydown', (evt) => {
    if (evt.key === KEY_ESC) {
      errorContainer.remove();
      document.body.removeEventListener('keydown',errorContainer);
    }
  });

  document.body.addEventListener('click', () => {
    errorContainer.remove();
    document.body.removeEventListener('click',errorContainer);
  });

  errorButton.addEventListener('click', () => {
    errorContainer.remove();
    errorButton.removeEventListener('click',errorContainer);
  });
};

export {showAlert,showSuccess, showError,textAlert};
