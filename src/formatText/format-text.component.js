import formatTextHTML from '../formatText/format-text.component.html'
import {SaveComponent} from './../save/save.component';
// import {displaySave} from '../save/save'

export class FormatTextComponent {

    constructor(selector, screenshot) {
        this.selector = selector;
        this.screenshot = screenshot;
    }
    display(){
        const textPage=document.querySelector(this.selector);
        textPage.innerHTML=formatTextHTML

        const saveButton=document.querySelector("#aSave");
        saveButton.onclick=(e)=>{
            e.preventDefault;
            this.displaySave();
        }
    }
    displaySave(){
        const savePage=new SaveComponent(this.selector,this.screenshot);
        savePage.display()
    }
}

export const displayText = (selector) => {
    const element = document.querySelector(selector);
    element.innerHTML = formatTextHTML;

    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });
};