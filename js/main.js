import {generateObjects} from './data.js';
import {renderCard} from'./card.js';
import {activateThePage} from './activatePages.js';
import './validate.js';

const offers = generateObjects();
renderCard(offers[0]);

activateThePage(false);
