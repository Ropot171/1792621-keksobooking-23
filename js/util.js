const KEY_ESC = 'Escape';

const DEBOUNCE_DELAY = 500;

function isEscEvent(evt) {
  return evt.key === KEY_ESC;
}

function debounce (callback, timeoutDelay = DEBOUNCE_DELAY) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(null, args), timeoutDelay);
  };
}

export {isEscEvent,debounce};
