import { displayEcranPicture } from '../ecranPicture/ecranPicture';
import { displaySave } from '../save/save';
import { displaySend } from '../sending/sending';
import previewHTML from './preview.html'

export const displayPreview = (selector) => { 
    const previewPage = document.querySelector(selector);
    previewPage.innerHTML=previewHTML
    
    const saveButton = document.querySelector(".saveBut");
    saveButton.onclick = (e) => {
        e.preventDefault;
        displaySave(selector)
    }
    
}