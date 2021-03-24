import { TakePictureComponent } from '../takePicture/take-picture.component';
import previewHTML from '../preview/preview.component.html'
import { SaveComponent } from '../save/save.component';
import { EditComponent } from '../edit/edit.component';

export class PreviewComponent {

    constructor(selector, screenshot) {
        this.selector = selector;
        this.screenshot = screenshot;
    }

    display() {
        document.querySelector(this.selector).innerHTML = previewHTML;

        const apercu = document.querySelector(".myScan")
        apercu.src = this.screenshot;

        const saveButton = document.querySelector(".saveBut");
        saveButton.onclick = (e) => {
            e.preventDefault; 
            this.savePicture()
        }
        const editButton = document.querySelector(".editBut")
        editButton.onclick=(e)=>{
            e.preventDefault;
            this.editPicture();
        }

        const returnButton = document.querySelector(".returnBut")
        returnButton.onclick=(e)=>{
            e.preventDefault;
            this.displayPicture();
        }

    }

    editPicture() {
        const editPage = new EditComponent(this.selector,this.screenshot);
        editPage.display();
    }

    savePicture() {
        const savePage = new SaveComponent(this.selector, this.screenshot);
        savePage.display();
    }

    displayPicture() {
        const picturePage = new TakePictureComponent(this.selector);
        picturePage.display();
    }
    
}