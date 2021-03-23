import template from './sending.component.html';
import {SaveComponent } from '../save/save.component';
import { FileService } from '../shared/services/file.service';

export class SendingComponent {

    constructor(element, screenShot) {
        this.element = element;
        this.screenShot = screenShot;
    }

    display() {
        const maPage = document.querySelector(this.element)
        maPage.innerHTML = template;
console.log(FileService.getFile())
        const preview = document.querySelector('.return');
        preview.onclick = (e) => {
             e.preventDefault;
             this.displaySave()
        }
    }

    displaySave() {
        const displayscreen = new SaveComponent(this.element, this.screenShot)
        displayscreen.display()
   }

}





// import sendingHTML from './sending.html';

// export const displaySend = (sendPosition) =>{
//     const sendPage=document.querySelector(sendPosition);
//     sendPage.innerHTML = sendingHTML
// }
