import {SERVER_ERROR_TEXT} from './userMessages.js';
import {clearForm} from './page.js';

const ADDRESS_POST = 'https://23.javascript.pages.academy/keksobooking';
const ADDRESS_GET = 'https://23.javascript.pages.academy/keksobooking/data';

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
      onFail(`${SERVER_ERROR_TEXT}: "${error}"`);
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
