import {File} from './../models/file.model';
const myFile=new File();
export class FileService {

    constructor(){

    }

    

    static getFile(){
        return myFile;
    }
    
    static setStockFile(element){
        myFile.result=element;
    }

    

    static saveOption(file){

        var myBoxSave = document.querySelector('.saveBox');
        var myBoxShare = document.querySelector('.shareBox');
   
        if (myBoxSave.checked) {
            console.log("you chose save");
        }
        if (myBoxShare.checked) {
            this.displaySend(file);
            console.log("you chose otherwise");
        }
        
        if (myBoxSave.checked && myBoxShare.checked){

        }
        myBoxSave.addEventListener('change', this.saveOption);
        myBoxShare.addEventListener('change', this.saveOption);

    }




}