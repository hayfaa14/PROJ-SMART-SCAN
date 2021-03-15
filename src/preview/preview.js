import { displayEcranPicture } from '../ecranPicture/ecranPicture';
import { displaySave } from '../save/save';
import { displaySend } from '../sending/sending';
import previewHTML from './preview.html'

export const displayPreview = (selector, screenShot) => {
    const previewPage = document.querySelector(selector);
    previewPage.innerHTML = previewHTML
    const apercu = document.querySelector(".myScan");
    apercu.src = screenShot;
    const saveButton = document.querySelector(".saveBut");
    saveButton.onclick = (e) => {
        e.preventDefault;
        displaySave(selector)
    }
    const myBut = document.querySelector('.returnbut');
    myBut.onclick = (e) => {
        e.preventDefault;
        displayEcranPicture(selector);
    }

}