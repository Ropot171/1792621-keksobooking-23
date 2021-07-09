import {textAlert} from './userMessages.js';
import {ADDRESS_POST,ADDRESS_GET} from './map.js';
import {clearForm} from './page.js';

const getData = (onSuccess, onFail) => {
  fetch(ADDRESS_GET)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((ads) => {
      onSuccess(ads);
    })
    .catch((error) => {
      onFail(`${textAlert}: "${error}"`);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    ADDRESS_POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        clearForm();
      } else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    })
    .catch((error) => {
      onFail(error);
    });
};

export {getData, sendData};
