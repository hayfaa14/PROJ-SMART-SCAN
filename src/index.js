import 'materialize-css';

import {HomeComponent} from './home/home.component'


// Materialize guidelines

var elems = document.querySelectorAll('.fixed-action-btn');
var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });
M.Sidenav.init(document.querySelectorAll('.sidenav'));

// Materialize guidelines
const placeBody="body";

const display=new HomeComponent(placeBody);
display.display()
 


