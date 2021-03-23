import editHTML from './../edit/edit.component.html';
// import { displayText } from '../formatText/formatText';
import { PreviewComponent } from '../preview/preview.component';
import { SaveComponent } from '../save/save.component';
import {FormatTextComponent} from './../formatText/format-text.component';
// import {displaySave} from '../save/save';
// import {displayPreview} from '../preview/preview';


export class EditComponent{

        constructor(selector,screenshot){
            this.selector=selector;
            this.screenshot=screenshot;
        }

        display(){
            const editPage=document.querySelector(this.selector);
            editPage.innerHTML=editHTML
            const aReturn = document.querySelector('#aReturnBtn');
            aReturn.onclick=(e)=>{
                e.preventDefault;
                this.displayPreview();
            }
            const editText = document.querySelector('#aBarreOpt');
            editText.onclick = (e) => {
                e.preventDefault;
                this.displayFormatText();
            }
        }

        cropPicture(){

        }
        
        displaySave(){
            const savePage=new SaveComponent(this.selector,this.screenshot);
            savePage.display()
        }

        displayPreview(){
      
       const previewPage=new PreviewComponent(this.selector,this.screenshot);
       previewPage.display();

        }

        displayFormatText(){
            const formatTextPage=new FormatTextComponent(this.selector,this.screenshot);
            formatTextPage.display();
        }

}
// export const barreOptionJS = (selector) => {
//     const element = document.querySelector(selector);
//     element.innerHTML = barreOptionHTML;

//     var elems = document.querySelectorAll('.fixed-action-btn');
//     var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });

//     const aBarreOpt = document.querySelector('#aBarreOpt');
//     aBarreOpt.onclick = () => {
//         displayText(selector);
//         return false;
//     }

//     const aSave = document.querySelector('#aSave');
//     aSave.onclick = () => {
//         displaySave(selector);
//         return false;
//     }
// }
//     const aReturn = document.querySelector('#aReturnBtn');
//     aReturn.onclick = () => {
//         displayPreview(selector);
//         return false;
//     }

// };