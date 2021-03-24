// import { displayEcranPicture } from '../ecranPicture/ecranPicture';
// import { displayHome } from '../home/home';
// import { displaySend } from '../sending/sending';
// import { displayPreview } from '../preview/preview.component';
import saveHTML from './../save/save.component.html'
import html2pdf from 'html2pdf.js';
import { PreviewComponent } from '../preview/preview.component';
import { File } from '../shared/models/file.model';
import {Image} from '../shared/models/image.model';
import { SendComponent } from '../sending/sending.component';
import { FileService } from '../shared/services/file.service';
import {SaveService} from '../shared/services/save.service';
// import html2canvas from '/../../node_modules/html2canvas';

export class SaveComponent {

    constructor(selector, screenshot) {
        this.selector = selector
        this.screenshot = screenshot
    }

    display() {
        const savePage = document.querySelector(this.selector)
        savePage.innerHTML = saveHTML

        const myBut = document.querySelector('.returnbut');
        myBut.onclick = (e) => {
            e.preventDefault;
            this.displayPreview();
        }
        const myFormatList = document.querySelectorAll('.btnformat');
        myFormatList.forEach((element) => {
                element.onclick= (e) => {
                    e.preventDefault
                    this.chooseFormat(element);}
            });
            // displaySend(selector);
    }

    saveOption(file) {
     var myBoxSave = document.querySelector('.saveBox');
     var myBoxShare = document.querySelector('.shareBox');

     if (myBoxSave.checked) {
         console.log("you chose save");
     }
     if (myBoxShare.checked) {
         this.displaySend(file);
         console.log("you chose otherwise");
     }
     
     if (myBoxSave.checked && myBoxShare.checked){

     }
     myBoxSave.addEventListener('change', this.saveOption);
     myBoxShare.addEventListener('change', this.saveOption);
// };
    }

    chooseFormat(choice) {
        
        SaveService.saveFormat(choice)
        // const myFile = new File();
        // var text = choice.textContent;
        
        // if (text === "PDF") {
        //     var fichier=html2pdf(apercu);
        //     FileService.setStockFile(fichier);
        //     // console.log(`${FileService.getFile()}`)
        //     this.saveOption(fichier)
        // }
        // else if (text === "Word Document") {
        //     console.log("WORD");
        //     this.saveOption(FileService.setStockFile(html2pdf(apercu)))
        // }
        // else if (text === "Open Document") {
        //     console.log("OPENDOC");
        //     this.saveOption(FileService.setStockFile(html2pdf(apercu)))
        // }
        // else if (text === "BlocNote") {
        //     console.log("BLOCNOTE");
        //     this.saveOption(FileService.setStockFile(html2pdf(apercu)))
        // }
    }

    displayPreview() {
    const prevPage = new PreviewComponent(this.selector, this.screenshot);
    prevPage.display();
    }

    displaySend(file) {
        const sendPage = new SendComponent(this.selector,file)
        sendPage.display();

    }


}

// export const displaySave = (selector, screenShot) => {

//     // Retrieving whole page
//     const savePage = document.querySelector(selector);
//     savePage.innerHTML = saveHTML;

//     //  Retrieving the image of the document hence screenshot
//     const apercu = document.createElement("img")
//     apercu.src = screenShot;

//     //    Return button takes me back to preview
//     const myBut = document.querySelector('.returnbut');
//     myBut.onclick = (e) => {
//         e.preventDefault;
//         displayPreview(selector, screenShot);
//         // displaySend(selector);
//     }
//     mySaveFormat(screenShot);
// };

// var mySaveFormat = (screenshot) => {
//     const apercu = document.createElement("img")
//     apercu.src = screenshot;

//     const myFile = new File();

//     const myFormatList = document.querySelectorAll('.btnformat');

//     myFormatList.forEach((element) => {
//         element.addEventListener('click', () => {
//             var text = element.textContent;
//             if (text === "PDF") {
//                 myFile.result = html2pdf(apercu);
//                 console.log(myFile.result);
//             }
//             else if (text === "Word Document") {
//                 console.log("WORD");
//             }
//             else if (text === "Open Document") {
//                 console.log("OPENDOC");
//             }
//             else if (text === "BlocNote") {
//                 console.log("BLOCNOTE");
//             }
//         })
//     });

// };

// var checkOptions = (myFile, screenshot) => {
//     var myBoxSave = document.querySelector('.saveBox');
//     var myBoxShare = document.querySelector('.shareBox');

//     if (myBoxSave.checked) {
//         myFile = html2pdf(screenshot)
//         console.log("you chose save");
//     }
//     if (myBoxShare.checked) {
//         myFile = html2pdf(screenshot);
//         // displaySend(selector,myFile);
//         console.log("you chose otherwise");
//     }
//     myBoxSave.addEventListener('change', checkOptions);
//     myBoxShare.addEventListener('change', checkOptions);
// };
