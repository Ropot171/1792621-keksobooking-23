import {ADDRESS_POST,ADDRESS_GET,adForm} from './data.js';
import {addPoints} from'./map.js';
import {showAlert,showSuccess, showError} from './util.js';
import {changeFormState} from './page.js';

const MAP_FILTERS_CLASS = '.map__filters';
const POINTS_COUNT = 10;

function getData () {
  fetch(ADDRESS_GET)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      showAlert('Не удалось получить объявления. Попробуйте ещё раз');
      changeFormState(MAP_FILTERS_CLASS);
      throw Error();
    })
    .then((offers) => {
      addPoints(offers.slice(0, POINTS_COUNT));
    });
}


function setData() {

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
      }
    })
      .catch(() => {
        showError();
      });
  });
}

export {getData,setData};
