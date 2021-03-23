import homeHTML from './home.component.html'
import {TakePictureComponent} from './../takePicture/take-picture.component';

export class HomeComponent {
             
        constructor(selector) {
          this.selector=selector
}

display(){
  document.querySelector(this.selector).innerHTML=homeHTML;
  const linkStart = document.querySelector("#Picture");
  linkStart.onclick=(e)=>{
    e.preventDefault
    this.start()}
}
  
start(){
    const picturePage=new TakePictureComponent(this.selector);
    picturePage.display();
}
}
