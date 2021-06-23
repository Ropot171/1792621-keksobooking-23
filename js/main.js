import {generateObjects} from './data.js';
import {renderCard} from'./card.js';

const offers = generateObjects();
renderCard(offers[0]);
