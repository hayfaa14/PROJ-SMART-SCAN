import barreOptionHTML from '../barreOption/barreOption.html';
import { displayText } from '../formatText/formatText';
import { displaySave } from '../save/save';
import { displayPreview } from '../preview/preview';
import Cropper from 'cropperjs';

export const displayBarreOption = (selector, screenShot) => {
    const element = document.querySelector(selector);
    element.innerHTML = barreOptionHTML;
    const apercu = document.querySelector(".myScan");
    apercu.src = screenShot;
    var cropBtn = document.querySelector("#cropBtn");
    // Cropper.setDefaults(options);
    const cropper = new Cropper(apercu, {});

    cropBtn.addEventListener('click', () => {
        var imgurl = cropper.getCroppedCanvas().toDataURL();
        var apercu = document.createElement("img");
        apercu.src = imgurl;
        const divCreate = document.createElement('div').setAttribute('class', 'preview');
        document.getElementById("cropped_result").appendChild(apercu);
        document.getElementById("cropped_result").appendChild(apercu);
    });

    const cropTheImage = () => {
        cropper.getCroppedCanvas({
            width: 160,
            height: 90,
            minWidth: 256,
            minHeight: 256,
            maxWidth: 4096,
            maxHeight: 4096,
            fillColor: '#fff',
            imageSmoothingEnabled: false,
            imageSmoothingQuality: 'high',
        })
    };
    // screenShot.cropper({
    //     built: () => {
    //         cropBtn.on('click', () => {
    //             var data = screenShot.cropper('getData');
    //             console.log(data);
    //         })
    //     }
    // });


    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });

    // const imgIsModified = () => {
    //     screenShot === screenShot.
    // } En gros faire une fonction ou si le screenShot entrant est différent car il a été modifié, croppé/ rétrécit... alors c'est true.  

    const aBarreOpt = document.querySelector('#aBarreOpt');
    aBarreOpt.onclick = () => {
        displayText(selector, screenShot);
        // image.src à modifier
        return false;
    }

    const aSave = document.querySelector('#aSave');
    aSave.onclick = () => {
        if (imgIsModified) {
            displaySave(selector, imgModified)
            return false;
        }
        displaySave(selector, screenShot);
        return true
    }

    const aReturn = document.querySelector('#aReturnBtn');
    aReturn.onclick = () => {
        displayPreview(selector, screenShot);
        return false;
    }

};