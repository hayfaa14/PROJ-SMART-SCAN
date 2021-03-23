import {FileService} from '../services/file.service'
export class SaveService {

    constructor(){

    }
    static saveFormat(choice){
        var text = choice.textContent;
        if (text === "PDF") {
             var fichier=html2pdf(apercu);
             FileService.setStockFile(fichier);
            console.log(`${FileService.getFile()}`)
            this.saveOption(fichier)
        }
        else if (text === "Word Document") {
            console.log("WORD");
            this.saveOption(FileService.setStockFile(html2pdf(apercu)))
        }
        else if (text === "Open Document") {
            console.log("OPENDOC");
            this.saveOption(FileService.setStockFile(html2pdf(apercu)))
        }
        else if (text === "BlocNote") {
            console.log("BLOCNOTE");
            this.saveOption(FileService.setStockFile(html2pdf(apercu)))
        }
    
    }

}



