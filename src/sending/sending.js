import template from './sending.html';
import { displaySave } from '../save/save';

export const displaySending= (element) =>{
    element.innerHTML = template;

    const pictureDone = document.querySelector("#Save");
    pictureDone.onclick = ()=>{ 
        displaySave(document.body);
        return false;
      }
}