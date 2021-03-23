import formatTextHTML from '../formatText/formatText.html'
// import {displaySave} from '../save/save'

export const displayText = (selector) => {
    const element = document.querySelector(selector);
    element.innerHTML = formatTextHTML;

    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });

    const aSave = document.querySelector('#aSave');
    aSave.onclick = () => {
        displaySave(selector);
        return false;
    }
};