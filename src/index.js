import 'materialize-css';
import { EditComponent } from './edit/edit.component'
// import { barreOptionJS } from './barreOption/barreOption';
// import { formatTextJS } from './formatText/formatText';
// import { displaySave } from './save/save';
// import {displaySend} from './sending/sending'
// import {displayEcranPicture} from './ecranPicture/ecranPicture'
// import {displayFooter} from './foot/footer'
// import {tryingEvent} from './save/example'
// import {displayHome} from './home/home'
// import {displayPreview} from './preview/preview.component'
// // Materialize guidelines

// // var elems = document.querySelectorAll('.fixed-action-btn');
// // var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });
// // M.Sidenav.init(document.querySelectorAll('.sidenav'));

// // Materialize guidelines
const placeBody = "body";

// displayHome(placeBody);
const screenShot = "https://raw.githubusercontent.com/seeren-training/Agile/master/wiki/resources/03/12-Refactoring.png";
const displayEdit = new EditComponent();
displayEdit.display(placeBody, screenShot);