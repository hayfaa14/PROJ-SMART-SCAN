import { displayPreview } from '../preview/preview';
import { displaySend } from '../sending/sending';
import saveHTML from './save.html'

export const displaySave = (selector, screenShot) => {
    const savePage = document.querySelector(selector);
    savePage.innerHTML = saveHTML;
    const apercu = document.querySelector(".myScan");
    apercu.src = screenShot;
    const myBut = document.querySelector('.returnbut');
    myBut.onclick = (e) => {
            e.preventDefault;
            displayPreview(selector, screenShot);
        }
        //  const myBoxShare = document.querySelector('#share')
        //  myBoxShare.onclick = (e) => {
        //      e.preventDefault
        //      return True // rectify
        // const 
        //  }
};