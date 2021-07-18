const KEY_ESC = 'Escape';

const RERENDER_DELAY = 500;

function isEscEvent(evt) {
  return evt.key === KEY_ESC;
}

function debouncedMarkersRender (callback, timeoutDelay = RERENDER_DELAY) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(null, args), timeoutDelay);
  };
}

export {isEscEvent,debouncedMarkersRender};
