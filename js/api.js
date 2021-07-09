import {addPoints} from'./map.js';
import {textAlert} from './userMessages.js';
import {ADDRESS_POST,ADDRESS_GET} from './map.js';

function getData(onSuccess, onFail) {
  fetch(ADDRESS_GET)
    .then((response) => response.json())
    .then((offers) => onSuccess(offers))
    .then((offers) => addPoints(offers))
    .catch(() => onFail(textAlert));
};


function sendData(onSuccess,onError,body) {
  fetch(
    ADDRESS_POST,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onError();
    }})
    .catch(() => {
      onError();
    });
}

export {getData,sendData};
