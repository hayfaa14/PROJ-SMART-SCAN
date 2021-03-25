import formatTextHTML from './format-text.component.html'
import { SaveComponent } from '../save/save.component';
import { EditComponent } from '../edit/edit.component';
import { Preview } from '../preview/preview.component';
import M from 'materialize-css';

export class FormatText {
    constructor(selector,screenShot) {
        this.selector = selector;
        this.image = screenShot;
    }

    display() {

        document.querySelector(this.selector).innerHTML = formatTextHTML;
        const imgPreview = document.querySelector(".myScan");
        const italicBtn = document.querySelector('.italicButton');
        const borderColor = document.querySelector('.bordercolor');
        const boldBtn = document.querySelector('.boldButton');
        const underBtn = document.querySelector('.underlineButton');
        const elems = document.querySelectorAll('.fixed-action-btn');

        imgPreview.src = this.image;

        displaySave.onclick = () => { this.save(this.selector) };
        displayReturn.onclick = () => { this.return(this.selector) };
    }
    save() {
        const displaySave = new SaveComponent(this.selector,this.image);
        displaySave.display();
    }
    return () {
        const displayReturn = new EditComponent(this.selector,this.image);
        displayReturn.display();
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