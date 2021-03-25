import { PreviewComponent } from '../preview/preview.component';
import { SendingComponent } from '../sending/sending.component';
import template from './save.component.html';
import { File } from '../shared/models/file.model';
import html2pdf from 'html2pdf.js';
import { FileService } from '../shared/services/file.service';

export class SaveComponent {

     constructor(element, screenShot) {
          this.element = element;
          this.screenShot = screenShot;
     }

     display() {
          const maPage = document.querySelector(this.element)
          maPage.innerHTML = template;

          const apercu = document.createElement("img")
          apercu.src = this.screenShot;

          const myBut = document.querySelector('.return');
          myBut.onclick = (e) => {
               e.preventDefault;
               this.displayPreview()
          }


          const myFormatList = document.querySelectorAll('.btnsaving');

          myFormatList.forEach((element) => {
               element.addEventListener('click', () => {
                    var text = element.textContent;
                    //console.log(text)
                    this.chooseFormat(text);
               })
          })
     }

     displayPreview() {
          const displayscreen = new PreviewComponent(this.element, this.screenShot)
          displayscreen.display()
     }

     chooseFormat(text) {

          const apercu = document.createElement("img")
          apercu.src = this.screenShot;

          var opt = {
               margin : [1, 0.5, 1, 0.5],
               filename: 'my_file_pdf.pdf',
               image: { type: 'jpeg', quality: 0.98 },
               html2canvas: { scale: 2 },
               jsPDF: { unit: 'in', format:"a4", orientation: 'portrait' }
          };

          // const myFile = new File();
          if (text === "PDF") {
               // FileService.setStockFile(html2pdf().set(opt).from(apercu).save())
               // myFile.result = html2pdf().set(opt).from(apercu).save();
               var Tested = this.saveOption();
               if (Tested === 'Danse') {
                    FileService.setStockFile(html2pdf().set(opt).from(apercu).save());
                    this.displaySend();
               }
               if (Tested === 'salsa') {
                    FileService.setStockFile(html2pdf().set(opt).from(apercu).save());
               }
               if (Tested === 'tango') {
                    FileService.setStockFile(html2pdf().set(opt).from(apercu).save());
                    this.displaySend();
               }
          }
          else if (text === "Word Document") {
               console.log("WORD");
          }
          else if (text === "Open Document") {
               console.log("OPENDOC");
          }
          else if (text === "BlocNote") {
               console.log("BLOCNOTE");
          }
     }


     saveOption() {
          var myBoxSave = document.querySelector('.saveBox');
          var myBoxShare = document.querySelector('.shareBox');

          if (myBoxSave.checked && myBoxShare.checked) {
               var tes1 = 'Danse';
               return tes1;
          }

          if (myBoxSave.checked) {
               var tes2 = 'salsa';
               return tes2;
               console.log("you chose save");

          }
          if (myBoxShare.checked) {
               var tes1 = 'tango';
               return tes1;
                console.log("you chose otherwise");
          }

          myBoxSave.addEventListener('change', this.saveOption);
          myBoxShare.addEventListener('change', this.saveOption);
     }

     displaySend() {
          const displaySending = new SendingComponent(this.element, this.screenShot)
          displaySending.display()
     }
}







// import { displayEcranPicture } from '../takePicture/take-picture.component';
// import { displaySend } from '../sending/sending';
// import saveHTML from './save.html';
// import html2pdf from 'html2pdf.js'
// import { barreOptionJS } from '../edit/edit.component';


// export const displaySave = (selector, screenShot) => {

//      const savePage = document.querySelector(selector);
//      savePage.innerHTML = saveHTML

//      const list =document.querySelectorAll(".btnsaving");
//      console.log(list);

//      const apercu = document.createElement('img');
//      apercu.src = screenShot;

// // const test= document.querySelector('.btnsaving');
// // const texttest=test.textContent;

// // test.onclick = (e) => {
// //      // const texttest=test.className;
// // console.log(texttest)
// //  const constante='waves-effect waves-light btn col s4 offset-s4 btnsaving';
// //  console.log(constante +' pdfpdf')

// // if (constante+' pdfpdf'===texttest){
// //      var worker = html2pdf().from(apercu).save();
// //      // displaySend(selector);
// //      return false;
// // }
// // if ('fixed-action-btn retour returnbut btnsaving'===texttest)
// // {e.preventDefault;
// // displayEcranPicture(selector);}
// // }

//      const pdfpdf = document.querySelector('.pdfpdf');

//      // console.log(pdfpdf.textContent)==PDF
//      pdfpdf.onclick = () => {
//           var worker = html2pdf().from(apercu).save();
//           // displaySend(selector);
//           return false;
//      }

//      const myBut = document.querySelector('.returnbut');
//      myBut.onclick = (e) => {
//           e.preventDefault;
//           displayEcranPicture(selector);
//      }
//       const myBoxShare = document.querySelector('#share')
//       myBoxShare.onclick = (e) => {
//           e.preventDefault
//           return True // rectify

//       }
// }; 