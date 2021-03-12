import 'materialize-css';
import { Collapsible } from 'materialize-css';
import 'tesseract.js';
import { barreOptionJS } from './barreOption/barreOption';
import { formatTextJS } from './format/formatText';

barreOptionJS("body");


// M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'));

// formatTextJS("body");


// // const content = document.createElement('nav');
// // const navBarDiv = document.createElement('div');
// // const navBarLogoIcon = document.createElement('brand-logo');
// // const navBarul1 = document.createElement('ul');
// // const navBarli1 = document.createElement('li');
// // const navBarli1a = document.createElement('a');
// // const navBarli2 = document.createElement('li');
// // const navBarli2a = document.createElement('a');
// // const navBarli3 = document.createElement('li');
// // const navBarli3a = document.createElement('a');
// // const navBarA = document.createElement('a');
// // const navBarTextLogo = document.createTextNode('Logo');
// // const navBarTextSass = document.createTextNode('Sass');
// // const navBarTextComponents = document.createTextNode('Components');
// // const navBarTextJavascript = document.createTextNode('JavaScript');

// // navBarli3a.appendChild(navBarTextJavascript);
// // navBarli2a.appendChild(navBarTextComponents);
// // navBarli1a.appendChild(navBarTextSass);
// // navBarli3.appendChild(navBarli3a);
// // navBarli2.appendChild(navBarli2a);
// // navBarli1.appendChild(navBarli1a);
// // navBarul1.appendChild(navBarli1);
// // navBarul1.appendChild(navBarli2);
// // navBarul1.appendChild(navBarli3);
// // navBarA.appendChild(navBarTextLogo);
// // navBarDiv.appendChild(navBarA);
// // navBarDiv.appendChild(navBarul1);
// // content.appendChild(navBarDiv);


// // const displayNavBar = (selector) => {
// //     const element = document.querySelector(selector);
// //     element.innerHTML = `Ma Navbar`;
// // };

// // const afficheOu = (X) => {
// //     X.innerHTML = `<div class="fixed-action-btn topleftcorner direction-bottom click-to-toggle" style="position: relative ; width: 60px;">
// //     <a class="btn-floating btn-large waves-effect waves-light greenproject"><i class="material-icons">add</i></a>
// //     <ul>
// //         <li>
// //             <a href="rectangle_cut.php" class="btn-floating greyproject" type="button"><i class="material-icons">crop</i></a>
// //         </li>
// //         <li>
// //             <a href="cut_circle.php" class="btn-floating greyproject" type="button"><i class="material-icons">crop_rotate</i></a>
// //         </li>
// //         <li>
// //             <a href="to_delete.php" class="btn-floating greyproject" type="button"><i class="material-icons">remove_circle</i></a>
// //         </li>
// //     </ul>
// // </div>
// // <ul><a href="formatText.html" class="btn-floating btn-large waves-effect waves-light greenproject savebutton" type="button"><i class="material-icons">save</i></a></ul>
// // <br>`;
// // }

// // afficheOu(headerContent);

// // affichage.innerHTML = `<nav>
// // <div class="nav-wrapper">
// //   <a href="#" class="brand-logo">Logo</a>
// //   <ul id="nav-mobile" class="right hide-on-med-and-down">
// //     <li><a href="save.html">Sass</a></li>
// //     <li><a href="barreOption.html">Components</a></li>
// //     <li><a href="formatText.html">JavaScript</a></li>
// //   </ul>
// // </div>
// // </nav>`
// // affichage.appendChild(content);

// var stream = true;
// var video = document.querySelector('#videoElement');


// navigator.mediaDevices.getUserMedia({ video: true })
//     .then(function(stream) {
//         video.play();
//     });
// onloadedmetadata
// affichage.innerHTML = `<div id="container">
// <video autoplay="true" id="videoElement">
// </video>
// </div>`;