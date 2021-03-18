import editHTML from './edit.component.html';
import { FormatText } from '../formatText/format-text.component';
import { Save } from '../save/save.component';
import { Preview } from '../preview/preview.component';
import Cropper from 'cropperjs';

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
        const cropBtn = document.getElementById('cropBtn');

        imgPreview.src = screenShot;

        displayFormatText.onclick = () => { this.formatText(selector) };
        displaySave.onclick = () => { this.save(selector) };
        displayReturn.onclick = () => { this.return(selector) };
        cropBtn.onclick = () => { this.crop(imgPreview) };

        M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });
    }
    formatText(selector, screenShot) {
        const displayText = new FormatText();
        displayText.display(selector);
    }
    save(selector, screenShot) {
        const displaySave = new Save();
        displaySave.display(selector);
    }
    return (selector, screenShot) {
        const displayReturn = new Preview();
        displayReturn.display(selector);
    }
    crop(apercu) {
        const cropper = new Cropper(apercu, {});
        cropBtn.addEventListener('click', () => {
            var imgurl = cropper.getCroppedCanvas().toDataURL();
            var apercuCadre = document.createElement("img");
            apercuCadre.src = imgurl;
            document.getElementById("cropped_result").appendChild(apercuCadre);
        });
    }
}

// export const displayBarreOption = (selector, screenShot) => {
//     const apercu = document.querySelector(".myScan");
//     apercu.src = screenShot;
//     var cropBtn = document.querySelector("#cropBtn");
//     // Cropper.setDefaults(options);




//     const popUp = () => {
//         var popup = document.querySelector(".popup");
//         popup.classList.toggle("show");
//     }

//     const cropTheImage = () => {
//         cropper.getCroppedCanvas({
//             width: 160,
//             height: 90,
//             minWidth: 256,
//             minHeight: 256,
//             maxWidth: 4096,
//             maxHeight: 4096,
//             fillColor: '#fff',
//             imageSmoothingEnabled: false,
//             imageSmoothingQuality: 'high',
//         })
//     };


//     var elems = document.querySelectorAll('.fixed-action-btn');
//     var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });

//     // const imgIsModified = () => {
//     //     screenShot === screenShot.
//     // } En gros faire une fonction ou si le screenShot entrant est différent car il a été modifié, croppé/ rétrécit... alors c'est true.