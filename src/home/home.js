import { displayEcranPicture } from '../ecranPicture/ecranPicture';
import template from './home.html';

export const displayHome= (element) =>{
    element.innerHTML = template;

  const linkStart = document.querySelector("#Picture");
  linkStart.onclick = ()=>{ 
      displayEcranPicture(document.body);
      return false;
    }
}