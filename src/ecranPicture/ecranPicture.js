import template from './ecranPicture.html';
import {displaySave} from '../save/save'

export const displayEcranPicture= (element) =>{
    element.innerHTML = template;

  const pictureDone = document.querySelector("#Save");
  pictureDone.onclick = ()=>{ 
        displaySave(document.body);
        return false;
    }
}