import { displayBarreOption } from '../edit/edit.component';
import { displayEcranPicture } from '../ecranPicture/ecranPicture';
import { displaySave } from '../save/save.component';
import { displaySend } from '../sending/sending';
import previewHTML from './preview.component.html'

export class Preview {
    constructor() {}

    display(selector) {
        document.querySelector(selector).innerHTML = previewHTML;
    }
}
// export const displayPreview = (selector, screenShot) => {
//     const previewPage = document.querySelector(selector);
//     previewPage.innerHTML = previewHTML;
//     const apercu = document.querySelector(".myScan");
//     apercu.src = screenShot;
//     const saveButton = document.querySelector(".saveBut");
//     saveButton.onclick = (e) => {
//         e.preventDefault;
//         displaySave(selector, screenShot)
//     }
//     const myBut = document.querySelector('.returnbut');
//     myBut.onclick = (e) => {
//         e.preventDefault;
//         displayEcranPicture(selector, screenShot);
//     }
//     const editBut = document.querySelector('.editBut');
//     editBut.onclick = (e) => {
//         e.preventDefault;
//         displayBarreOption(selector, screenShot);
//     }

// }