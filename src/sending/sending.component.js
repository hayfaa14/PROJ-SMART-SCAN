import { SaveComponent } from '../save/save.component';
import { FileService } from '../shared/services/file.service';
import sendingHTML from './../sending/sending.component.html';


export class SendComponent{

            constructor(selector,file){
                this.selector=selector;
                this.file=file;
            }

          display(){
            const sendPage=document.querySelector(this.selector);
            sendPage.innerHTML = sendingHTML;

            const myBut = document.querySelector('.returnBut');
            myBut.onclick = (e) => {
                e.preventDefault;
                this.displaySave();
            }

          }

    displaySave(){
        const savePage=new SaveComponent(this.selector,FileService.getFile());
        savePage.display()
    }

}



   
// window.open('mailto:hayfaa.aukloo@gmail.com');





