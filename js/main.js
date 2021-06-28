import {generateObjects} from './data.js';
import {renderCard} from'./card.js';
import {PageActiveState} from './activatePages.js';

const offers = generateObjects();
renderCard(offers[0]);

PageActiveState(false);
