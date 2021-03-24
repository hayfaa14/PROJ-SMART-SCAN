import editHTML from './edit.component.html';
import { FormatText } from '../formatText/format-text.component';
import { SaveComponent } from '../save/save.component';
import { PreviewComponent } from '../preview/preview.component';
import { ModalComponent } from './modal/modal.component';
import Cropper from 'cropperjs';
import M from 'materialize-css';

export class EditComponent {

    constructor(selector, screenshot) {
        this.selector = selector;
        this.screenshot = screenshot;
    }

    display() {
        // document.querySelector(selector).innerHTML = editHTML;
        const editPage = document.querySelector(this.selector);
        editPage.innerHTML = editHTML;
        const imgPreview = document.querySelector(".myScan");
        const displayFormatText = document.querySelector('#aBarreOpt');
        const displaySave = document.querySelector('#aSave');
        const displayReturn = document.querySelector('#aReturnBtn');
        const elems = document.querySelectorAll('.fixed-action-btn');

        imgPreview.src = this.screenshot;

        displayFormatText.onclick = () => { this.formatText(this.selector) };
        displaySave.onclick = () => { this.save(this.selector) };
        displayReturn.onclick = () => { this.return(this.selector) };

        this.crop(imgPreview);
        document.addEventListener('DOMContentLoaded', () => {
            const instance = M.FloatingActionButton.init(elems, { hoverEnabled: false });
        });
    }
    formatText() {
        const displayText = new FormatText(this.selector, this.screenshot);
        displayText.display();
    }
    save() {
        const displaySave = new SaveComponent(this.selector, this.screenshot);
        displaySave.display();
    }
    return () {
        const displayReturn = new PreviewComponent(this.selector, this.screenshot);
        displayReturn.display();
    }
    crop() {
        const imgPreview = document.querySelector(".myScan");
        imgPreview.src = this.screenshot;
        const cropper = new Cropper(imgPreview, {});
        const cropBtn = document.getElementById("cropBtn");
        cropBtn.addEventListener('click', () => {
            var imgurl = cropper.getCroppedCanvas().toDataURL();
            var apercuCadre = document.createElement("img");
            apercuCadre.src = imgurl;
            const cropedRslt = document.getElementById("cropped_result");
            cropedRslt.innerHTML = "";
            cropedRslt.appendChild(apercuCadre);
            this.displayModalImg(cropBtn);
        });
    }
    displayModalImg(btn) {
        // const btn = document.querySelector(".cropBtn");
        const ref = btn.getAttribute("href").substring(1);
        new ModalComponent(ref);
    }
}