import barreOptionHTML from '../barreOption/barreOption.html';
import { displayText } from '../formatText/formatText';
// import {displaySave} from '../save/save';
// import {displayPreview} from '../preview/preview';

export const barreOptionJS = (selector) => {
    const element = document.querySelector(selector);
    element.innerHTML = barreOptionHTML;

    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });

    const aBarreOpt = document.querySelector('#aBarreOpt');
    aBarreOpt.onclick = () => {
        displayText(selector);
        return false;
    }

    const aSave = document.querySelector('#aSave');
    aSave.onclick = () => {
        displaySave(selector);
        return false;
    }

    const aReturn = document.querySelector('#aReturnBtn');
    aReturn.onclick = () => {
        displayPreview(selector);
        return false;
    }

};