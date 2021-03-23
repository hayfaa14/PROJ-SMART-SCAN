import { File } from '../models/file.model';

const myFile = new File();

export class FileService {

    constructor() {

    }

    static getFile() {
        return myFile;
    }

    static setStockFile(element) {
        myFile.result = element;
    }
}