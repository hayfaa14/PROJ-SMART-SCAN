import 'materialize-css';
import { displayBarreOption } from './barreOption/barreOption';
import { displayEcranPicture } from './ecranPicture/ecranPicture';
import { displayFormatText } from './formatText/formatText';
import { displayHome } from './home/home';
import { displaySave } from './save/save';
import { displaySending } from './sending/sending';

var elems = document.querySelectorAll('.fixed-action-btn');
var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });
M.Sidenav.init(document.querySelectorAll('.sidenav'));
// M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'));*/ 


displayHome(document.body);




