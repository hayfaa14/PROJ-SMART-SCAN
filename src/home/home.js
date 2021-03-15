import { displayEcranPicture } from './../ecranPicture/ecranPicture';
import template from './home.html';

export const displayHome= (element) =>{
    console.log(template)
    const maPage=document.querySelector(element)
    maPage.innerHTML = template;

  const linkStart = document.querySelector("#Picture");
  linkStart.onclick = ()=>{ 
      displayEcranPicture(element);
      return false;
    }
}