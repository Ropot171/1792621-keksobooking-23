import './page.js';
import './map.js';
import {setUserFormSubmit, clearForm} from'./userMessages.js';
import {getData} from './api.js';

const ADS_COUNT = 10;

getData((adArrayData) => {
  const adArray = adArrayData.slice(0, ADS_COUNT);
  return adArray;
});

setUserFormSubmit(clearForm);
