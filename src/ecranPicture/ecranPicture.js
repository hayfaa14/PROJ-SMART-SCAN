import { displayPreview } from '../preview/preview';
import template from './ecranPicture.html'

export const displayEcranPicture = (selector) => {

    var ecranPicturePage = document.querySelector(selector);
    ecranPicturePage.innerHTML = template;
    var constraints = { audio: false, video: true };
    var saveBtn = document.querySelector("#Save");
    var video = document.querySelector("#video");
    var canvas = document.createElement('canvas');
    var monScan = document.querySelector(".monscan");

    function takepicture() {
        canvas.width = video.offsetWidth;
        canvas.height = video.offsetHeight;
        monScan.appendChild(canvas);
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        var data = canvas.toDataURL();
        monScan.innerHTML = `<img id="impressionEcran"></img>`;
        var impressionEcran = document.querySelector("#impressionEcran");
        impressionEcran.setAttribute('src', data);
        displayPreview(selector, impressionEcran.src);
    }

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        console.log("play");
        video.onloadedmetadata = () => video.play();
        saveBtn.addEventListener('click', () => {
            takepicture();
        }, false);
        if ('srcObject' in video) {
            console.log("srcObject")
            video.srcObject = stream;
        } else {
            console.log("createObjectUrl");
            video.src = window.URL.createObjectURL(stream);
        }
    }).catch(
        (err) => {
            console.log("Veuillez accepter l'utilisation de votre caméra pour profiter de l'application");
        }
    );
};