import {generateObjects} from './data.js';
import {renderCard} from'./card.js';
import {changePageState} from './page.js';
import './validate.js';

const offers = generateObjects();
renderCard(offers[0]);

changePageState(true);
