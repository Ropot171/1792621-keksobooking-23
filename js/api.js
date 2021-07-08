import {adForm} from './data.js';
import {addPoints} from'./map.js';
import {showAlert,showSuccess, showError,textAlert} from './util.js';
import {changeFormState} from './page.js';

const ADDRESS_POST = 'https://23.javascript.pages.academy/keksobooking';
const ADDRESS_GET = 'https://23.javascript.pages.academy/keksobooking/data';
const MAP_FILTERS_CLASS = '.map__filters';
const POINTS_COUNT = 10;

function retrievingAndRenderingData () {
  fetch(ADDRESS_GET)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      showAlert(textAlert);
      changeFormState(MAP_FILTERS_CLASS);
      throw Error();
    })
    .then((offers) => {
      addPoints(offers.slice(0, POINTS_COUNT));
    });
}


function postAndProcessingData() {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      ADDRESS_POST,
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        showSuccess();
      } else {
        showError();
      }})
      .catch(() => {
        showError();
      });
  });
}

export {retrievingAndRenderingData,postAndProcessingData};
