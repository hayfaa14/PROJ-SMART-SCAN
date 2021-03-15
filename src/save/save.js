import { displayEcranPicture } from '../ecranPicture/ecranPicture';
import { displaySend } from '../sending/sending';
import saveHTML from './save.html'

export const displaySave = (selector) => {

    const savePage =document.querySelector(selector);
    savePage.innerHTML=saveHTML

    const myBut = document.querySelector('.returnbut');
    myBut.onclick = (e) => {
         e.preventDefault;
         displayEcranPicture(selector);
    }
    //  const myBoxShare = document.querySelector('#share')
    //  myBoxShare.onclick = (e) => {
    //      e.preventDefault
    //      return True // rectify
    // const 
    //  }
};

