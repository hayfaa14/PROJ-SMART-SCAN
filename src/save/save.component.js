import { displayPreview } from '../preview/preview.component';
import { displaySend } from '../sending/sending';
import saveHTML from './save.component.html'


export class Save {
    constructor() {}
    display(selector, screenShot) {
        const element = document.querySelector(selector);
        element.innerHTML = saveHTML;
    }
}
// export const displaySave = (selector, screenShot) => {
//     const savePage = document.querySelector(selector);
//     savePage.innerHTML = saveHTML;
//     const apercu = document.querySelector(".myScan");
//     apercu.src = screenShot;
//     const myBut = document.querySelector('.returnbut');
//     myBut.onclick = (e) => {
//             e.preventDefault;
//             displayPreview(selector, screenShot);
//         }
//         //  const myBoxShare = document.querySelector('#share')
//         //  myBoxShare.onclick = (e) => {
//         //      e.preventDefault
//         //      return True // rectify
//         // const 
//         //  }
// };