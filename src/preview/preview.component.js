import template from './preview.component.html';
import { TakePictureComponent } from '../takePicture/take-picture.component';
import { EditComponent } from '../edit/edit.component';
import { SaveComponent } from '../save/save.component';

export class PreviewComponent {
    constructor(element, screenShot) {
        this.element = element
        this.screenShot = screenShot
    }
    display() {
        const previewPage = document.querySelector(this.element);
        previewPage.innerHTML = template;

        const apercu = document.querySelector(".myScan");
        apercu.src = this.screenShot;

        const saveButton = document.querySelector(".saveBut");
        saveButton.onclick = (e) => {
            e.preventDefault;
            this.savePicture();
        }
        const editButton = document.querySelector(".editBut");
            editButton.onclick = (e) => {
                e.preventDefault;
                this.editPicture();
            }
            const returnButton = document.querySelector(".return");
            returnButton.onclick = (e) => {
                e.preventDefault;
                this.displayPicture();
            }
    }
    editPicture() {
        const displayEdit = new EditComponent();
        displayEdit.display(this.element, this.screenShot)
    }

    savePicture() {
        const displaySave = new SaveComponent(this.element, this.screenShot)
        displaySave.display()
    }

    displayPicture(){
        const displayscreen = new TakePictureComponent(this.element)
        displayscreen.display()
    }
}









// import { displayEcranPicture } from '../takePicture/take-picture.component';
// import { displaySave } from '../save/save';
// import { barreOptionJS } from '../edit/edit';

// import previewHTML from './preview.html'

// export const displayPreview = (selector, screenShot) => {
//     const previewPage = document.querySelector(selector);
//     previewPage.innerHTML = previewHTML;

//     const apercu = document.querySelector(".myScan");
//     apercu.src = screenShot;

//     const saveButton = document.querySelector(".saveBut");
//     saveButton.onclick = (e) => {
//         e.preventDefault;
//         displaySave(selector,screenShot);
//     }
//     const editButton = document.querySelector(".editBut");
//     editButton.onclick = (e) => {
//         e.preventDefault;
//         barreOptionJS(selector,screenShot);
//     }
// }