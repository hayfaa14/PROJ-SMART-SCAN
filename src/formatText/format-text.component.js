import formatTextHTML from './format-text.component.html'
import { displaySave } from '../save/save.component';
import { displayPreview } from '../preview/preview.component';
import { displayBarreOption } from '../edit/edit.component'

export class FormatText {
    constructor() {}

    display(selector, screenShot) {
        const element = document.querySelector(selector);
        element.innerHTML = formatTextHTML;
    }

}
// export const displayText = (selector, screenShot) => {

//     var elems = document.querySelectorAll('.fixed-action-btn');
//     var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });

//     const aSave = document.querySelector('#aSave');
//     aSave.onclick = () => {
//         displaySave(selector, screenShot);
//         return false;
//     }
//     const aReturn = document.querySelector('#aReturnBtn');
//     aReturn.onclick = () => {
//         displayBarreOption(selector, screenShot);
//         return false;
//     }
// };