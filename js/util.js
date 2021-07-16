const KEY_ESC = 'Escape';

const isEscEvent = (evt) => evt.key === KEY_ESC;

function debouncedMarkersRender (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(null, args), timeoutDelay);
  };
}

export {isEscEvent,debouncedMarkersRender};
