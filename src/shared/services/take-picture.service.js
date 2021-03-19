
export class TakePictureService {
    constructor() {

    }

static valideOpenCamera(){
    var constraints = { audio: false, video: true }; 
   return navigator.mediaDevices.getUserMedia(constraints)
    }
}
