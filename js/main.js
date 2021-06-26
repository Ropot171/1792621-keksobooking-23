import {generateObjects} from './data.js';
import {renderCard} from'./card.js';
import {togglePageActiveState} from './activatePages.js';

const offers = generateObjects();
renderCard(offers[0]);

togglePageActiveState(false);
