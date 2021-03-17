import formatTextHTML from '../formatText/formatText.html'
import { displaySave } from '../save/save';
import { displayPreview } from '../preview/preview';
import { displayBarreOption } from '../barreOption/barreOption'

export const displayText = (selector, screenShot) => {
    const element = document.querySelector(selector);
    element.innerHTML = formatTextHTML;

    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });

    const aSave = document.querySelector('#aSave');
    aSave.onclick = () => {
        displaySave(selector, screenShot);
        return false;
    }
    const aReturn = document.querySelector('#aReturnBtn');
    aReturn.onclick = () => {
        displayBarreOption(selector, screenShot);
        return false;
    }
};