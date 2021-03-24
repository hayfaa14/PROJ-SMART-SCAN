import { HomeComponent } from '../home/home.component';
import { PreviewComponent } from '../preview/preview.component';
import { ImageService } from '../shared/services/image.service';
import takePictureHTML from './../takePicture/take-picture.component.html'

export class TakePictureComponent{
    
    constructor(selector){
        this.selector=selector;
        // this.video=document.querySelector("#video");
    }

    display() {
        document.querySelector(this.selector).innerHTML=takePictureHTML;
        this.startCamera();
    }

    startCamera(){
        var video=document.querySelector("#video")
        var saveBtn = document.querySelector("#Save");
        var constraints = { audio: false, video: true };
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            console.log("play");
            video.onloadedmetadata = () => video.play();
            saveBtn.addEventListener('click', () => {
                this.takePicture();
            }, false);
            if ('srcObject' in video) {
                console.log("srcObject")
                video.srcObject = stream;
            } else {
                console.log("createObjectUrl")
                video.src = window.URL.createObjectURL(stream);
            }
            console.log("over");
        }).catch(
            (err) => {
                console.log("Veuillez accepter l'utilisation de votre camÃ©ra pour profiter de l'application");
                this.restart();
            })
    }

    restart(){
        const homepage=new HomeComponent(this.selector);
        homepage.display()
    }

    takePicture(){
        var video=document.querySelector("#video")
        var canvas = document.createElement('canvas');
        var monScan = document.querySelector(".monscan");
        canvas.width = video.offsetWidth;
        canvas.height = video.offsetHeight;
        console.log(canvas.width);
        console.log(canvas.height);
        monScan.appendChild(canvas);
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        var data = canvas.toDataURL();
        monScan.innerHTML = `<img id="impressionEcran"></img>`;
        var impressionEcran = document.querySelector("#impressionEcran");
        impressionEcran.setAttribute('src', data);
        ImageService.setImage(impressionEcran.src)
        const previewpage=new PreviewComponent(this.selector,impressionEcran.src)
        previewpage.display()
        // displayPreview(selector, impressionEcran.src);
    }



}


// CHARLIE

// export const displayEcranPicture = (selector) => {

//     var ecranPicturePage = document.querySelector(selector);
//     ecranPicturePage.innerHTML = template;
//     var constraints = { audio: false, video: true };
//     var saveBtn = document.querySelector("#Save");
//     var video = document.querySelector("#video");
//     var canvas = document.createElement('canvas');
//     var monScan = document.querySelector(".monscan");

//     function takepicture() {
//         canvas.width = video.offsetWidth;
//         canvas.height = video.offsetHeight;
//         console.log(canvas.width);
//         console.log(canvas.height);
//         monScan.appendChild(canvas);
//         canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
//         var data = canvas.toDataURL();
//         monScan.innerHTML = `<img id="impressionEcran"></img>`;
//         var impressionEcran = document.querySelector("#impressionEcran");
//         impressionEcran.setAttribute('src', data);
//         displayPreview(selector, impressionEcran.src);
//     }

//     navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
//         console.log("play");
//         video.onloadedmetadata = () => video.play();
//         saveBtn.addEventListener('click', () => {
//             takepicture();
//         }, false);
//         if ('srcObject' in video) {
//             console.log("srcObject")
//             video.srcObject = stream;
//         } else {
//             console.log("createObjectUrl")
//             video.src = window.URL.createObjectURL(stream);
//         }
//         console.log("over");
//     }).catch(
//         (err) => {
//             console.log("Veuillez accepter l'utilisation de votre camÃ©ra pour profiter de l'application");
//         }
//     );
//     navigator.mediaDevices.getUserMedia({
//         constraints
//     }, ).then((stream) => {
//         video.onloadedmetadata = () => video.play();
//         if ('srcObject' in video) {
//             video.srcObject = stream;
//         } else {
//             video.src = window.URL.createObjectURL(stream);
//         }
//         resolve(this.stream = stream);
//     }).catch((err) => console.log("Veuillez accepter l'utilisation de votre camÃ©ra pour profiter de l'application"));

//     video.addEventListener('canplay', function(event) {
//         if (!streaming) {
//         }
//     }, false);


// };


// // HAYFAA




// // import template from './ecranPicture.html'

// // const restartCamera = () => {

// //     navigator.mediaDevices.getUserMedia({ audio: false, video: true })
// //             .then((stream) => {
// //                 const video = document.querySelector(".videoPlay");
// //                 video.srcObject = stream;
// //                 video.play();
// //                 /* use the stream */
// //             })
// //             .catch((err) => {
// //                 // const reloadBut=document.querySelector(selector);
// //                 const toto = document.querySelector(".mybuttons");
// //                 toto.innerHTML = ` <a class="btn-floating btn-large waves-effect waves-light greenproject clic offset-s6 reloadBut" > TEST</a>`;
// //                 const reloadButton = document.querySelector(".reloadBut");
// //                 //  pictureAutho.onclick()
// //                 reloadButton.onclick = () => {
// //                 restartCamera();
// //                 }
// //                 /* handle the error */
// //             })
// // }
// // export const displayEcranPicture = (selector) => {

// //     var ecranPicturePage = document.querySelector(selector);
// //     ecranPicturePage.innerHTML = template
// //     const pictureAutho = document.querySelector(".patate");
// //     pictureAutho.onclick = () => {
// //         restartCamera();
// //         // displayPreview(selector)
        
// //     }
// // }

// // const takePicture=()=> {
// // // cadre.width=width
// // // cadre.height=height;
// // var canvas = document.querySelector(".canvas");
// // canvas.width=video.offsetWidth;
// // canvas.height=video.offsetHeight

// // }