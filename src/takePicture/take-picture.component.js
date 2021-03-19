import { HomeComponent } from '../home/home.component';
import { PreviewComponent } from '../preview/preview.component';
import { TakePictureService } from '../shared/services/take-picture.service';
import template from './take-picture.component.html';


export class TakePictureComponent {
    constructor(element) {
        this.element = element
    }
    display() {
        const ecranPicturePage = document.querySelector(this.element);
        ecranPicturePage.innerHTML = template
        this.startCamera();
    }
    startCamera() {
        var video = document.querySelector("#video");
        var saveBtn = document.querySelector("#Save");
        TakePictureService.valideOpenCamera().then((stream) => {
            video.onloadedmetadata = () => video.play();
            saveBtn.addEventListener('click', () => {
                this.takePicture();
            }, false);
            if ('srcObject' in video) {
                video.srcObject = stream;
            } else {
                video.src = window.URL.createObjectURL(stream);
            }
        }).catch(
            (err) => {
                this.restart(this.element);
                console.log("Veuillez accepter l'utilisation de votre caméra pour profiter de l'application");
            })
    }

    restart() {
        const displayHome = new HomeComponent(this.element);
        displayHome.display()
    }

    takePicture() {
        var canvas = document.createElement('canvas');
        var monScan = document.querySelector(".monscan");
        var video = document.querySelector("#video");
        canvas.width = video.offsetWidth;
        canvas.height = video.offsetHeight;
        monScan.appendChild(canvas);
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        var data = canvas.toDataURL();
        monScan.innerHTML = `<img id="impressionEcran"></img>`;
        var impressionEcran = document.querySelector("#impressionEcran");
        impressionEcran.setAttribute('src', data);
        this.displayPreview(this.element, impressionEcran.src)

    }

    displayPreview(element, img) {
        const displayscreen = new PreviewComponent(element, img)
        displayscreen.display();
    }
}




// import template from './ecranPicture.html'
// import { displaySave } from '../save/save';
// import { displayPreview } from '../preview/preview';
// import { displayHome } from '../home/home.component';

// export const displayEcranPicture = (selector) => {

//     const ecranPicturePage = document.querySelector(selector);
//     ecranPicturePage.innerHTML = template

//     var constraints = { audio: false, video: true };
//     var saveBtn = document.querySelector("#Save");
//     var video = document.querySelector("#video");
//     var canvas = document.createElement('canvas');
//     var monScan = document.querySelector(".monscan");

//     function takepicture() {
//         canvas.width = video.offsetWidth;
//         canvas.height = video.offsetHeight;
//         monScan.appendChild(canvas);
//         canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
//         var data = canvas.toDataURL();
//         monScan.innerHTML = `<img id="impressionEcran"></img>`;
//         var impressionEcran = document.querySelector("#impressionEcran");
//         impressionEcran.setAttribute('src', data);
//         displayPreview(selector, impressionEcran.src);
//     }

//     navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
//         video.onloadedmetadata = () => video.play();
//         saveBtn.addEventListener('click', () => {
//             takepicture();
//         }, false);
//         if ('srcObject' in video) {
//           video.srcObject = stream;
//       } else {
//           video.src = window.URL.createObjectURL(stream);
//       }
//   }).catch(
//       (err) => { 
//         displayHome(selector);

//           console.log("Veuillez accepter l'utilisation de votre caméra pour profiter de l'application");
//       }
//   );




  // navigator.mediaDevices.getUserMedia({
  //     constraints
  // }, ).then((stream) => {
  //     video.onloadedmetadata = () => video.play();
  //     if ('srcObject' in video) {
  //         video.srcObject = stream;
  //     } else {
  //         video.src = window.URL.createObjectURL(stream);
  //     }
  //     resolve(this.stream = stream);
  // }).catch((err) => console.log("Veuillez accepter l'utilisation de votre caméra pour profiter de l'application"));

  // video.addEventListener('canplay', function(event) {
  //     if (!streaming) {
  //     }
  // }, false);


// };
    // const linkStart = document.querySelector("#Save");
    // linkStart.onclick = () => {
    //     displaySave(selector);
    //     return false;
    // }




// };