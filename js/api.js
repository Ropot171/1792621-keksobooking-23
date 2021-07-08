import {adForm} from './data.js';
import {addPoints} from'./map.js';
import {showAlert,showSuccess, showError,textAlert} from './userMessages.js';
import {changeFormState} from './page.js';
import {ADDRESS_POST,ADDRESS_GET,MAP_FILTERS_CLASS,POINTS_COUNT} from './map.js';

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
