import template from './edit.component.html';

export class EditComponent {

  constructor(element) {
   this.element=element

  }

  display() {
    const maPage = document.querySelector(this.element)
    maPage.innerHTML = template;

  }}







// import barreOptionHTML from './barreOption.html';
// import { displayText } from '../formatText/format-text';
// import { displaySave } from '../save/save.component';
// import { displayPreview } from '../preview/preview';

// export const barreOptionJS = (selector,screenShot) => {
//     const element = document.querySelector(selector);
//     element.innerHTML = barreOptionHTML;

//     var elems = document.querySelectorAll('.fixed-action-btn');
//     var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });

//     const aBarreOpt = document.querySelector('#aBarreOpt');
//     aBarreOpt.onclick = () => {
//         displayText(selector,imageSRC);
//         return false;
//     }

//     const aSave = document.querySelector('#aSave');
//     aSave.onclick = () => {
//         displaySave(selector,imageSRC);
//         return false;
//     }

//     const aReturn = document.querySelector('#aReturnBtn');
//     aReturn.onclick = () => {
//         displayPreview(selector,imageSRC);
//         return false;
//     }

// };