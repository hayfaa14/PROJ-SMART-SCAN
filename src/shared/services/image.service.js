import {Image} from '../models/image.model';
const myImage=new Image();
export class ImageService {
    constructor(){
    }

    static getImage(){
        return myImage.img;
    }
    static setImage(screenshot){
        // const apercu = document.createElement("img")
        myImage.img=screenshot
    }
}