import {FileService} from '../services/file.service'
import {Image} from '../models/image.model';
import html2pdf from './../../../node_modules/html2pdf.js';

import { ImageService } from './image.service';
export class SaveService {

    constructor(){

    }
    static saveFormat(choice){
        const apercu = document.createElement("img")
        var a=ImageService.setImage(apercu.src)
        var text = choice.textContent;
        if (text === "PDF") {
             var fichier=html2pdf(a);
             FileService.setStockFile(fichier);
            console.log(`${FileService.getFile()}`)
            // this.saveOption(fichier)
        }
        else if (text === "Word Document") {
            console.log("WORD");
            // this.saveOption(FileService.setStockFile(html2pdf(apercu)))
        }
        else if (text === "Open Document") {
            console.log("OPENDOC");
            // this.saveOption(FileService.setStockFile(html2pdf(apercu)))
        }
        else if (text === "BlocNote") {
            console.log("BLOCNOTE");
            // this.saveOption(FileService.setStockFile(html2pdf(apercu)))
        }
    
    }

}



