import editHTML from './../edit/edit.component.html';
import { FormatTextComponent } from '../formatText/format-text.component';
import { SaveComponent } from '../save/save.component';
import { PreviewComponent } from '../preview/preview.component';
import { ModalComponent } from './modal/modal.component';
import Cropper from 'cropperjs';
import M from 'materialize-css';

export class EditComponent {

    constructor() {
        // this.selector = selector;
        // this.image = screenShot;
        // this.cropper = new Cropper(this.image, {});
    }

    display(selector, screenShot) {

        document.querySelector(selector).innerHTML = editHTML;
        const imgPreview = document.querySelector(".myScan");
        const displayFormatText = document.querySelector('#aBarreOpt');
        const displaySave = document.querySelector('#aSave');
        const displayReturn = document.querySelector('#aReturnBtn');
        const elems = document.querySelectorAll('.fixed-action-btn');

        imgPreview.src = screenShot;

        displayFormatText.onclick = () => { this.formatText(selector) };
        displaySave.onclick = () => { this.save(selector) };
        displayReturn.onclick = () => { this.return(selector) };

        this.crop(imgPreview);
        document.addEventListener('DOMContentLoaded', function() {
            M.FloatingActionButton.init(elems, { hoverEnabled: false });
        });
    }
    formatText(selector, screenShot) {
        const displayText = new FormatTextComponent();
        displayText.display(selector, screenShot);
    }
    save(selector, screenShot) {
        const displaySave = new SaveComponent();
        displaySave.display(selector, screenShot);
    }
    return (selector, screenShot) {
        const displayReturn = new PreviewComponent();
        displayReturn.display(selector, screenShot);
    }
    crop(apercu) {
        const cropper = new Cropper(apercu, {});
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
        const ref = btn.getAttribute("href").substring(1);
        new ModalComponent(ref);
    }
}