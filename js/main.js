import {generateObjects} from './data.js';
import {renderCard} from'./card.js';
import {noActivateThePage} from './activatePages.js';
import './validate.js';

const offers = generateObjects();
renderCard(offers[0]);

noActivateThePage(true);
