import 'materialize-css';
import { displaySave } from './save/save';
import {displaySend} from './sending/sending'
import {displayEcranPicture} from './ecranPicture/ecranPicture'
import {displayFooter} from './foot/footer'
import {tryingEvent} from './save/example'
import {displayHome} from './home/home'


// Materialize guidelines

var elems = document.querySelectorAll('.fixed-action-btn');
var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });
M.Sidenav.init(document.querySelectorAll('.sidenav'));

// Materialize guidelines

const placeBody="body";
// const placeFooter="footer";

//  displayEcranPicture(placeBody);
//   displaySave(placeBody);
// displayFooter(placeBody);
// displaySend(pos);
displaySave(placeBody);
// displaySend(placeBody);

