import { TakePictureComponent } from '../takePicture/take-picture.component';
import template from './home.component.html';

export class HomeComponent {

  constructor(element) {
   this.element=element

  }

  display() {
    const maPage = document.querySelector(this.element)
    maPage.innerHTML = template;

    const linkStart = document.querySelector("#Picture");
    linkStart.onclick = () => {
      this.start()
      return false;
    }

  }

  start() {
    const displayscreen = new TakePictureComponent(this.element)
    displayscreen.display()
  }
}



// import { displayEcranPicture } from '../takePicture/take-picture.component';
// import template from './home.html';

// export const displayHome= (element) =>{
//     const maPage=document.querySelector(element)
//     maPage.innerHTML = template;

//   const linkStart = document.querySelector("#Picture");
//   linkStart.onclick = ()=>{ 
//       displayEcranPicture(element);
//       return false;
//     }
// }