import 'materialize-css';

var elems = document.querySelectorAll('.fixed-action-btn');
var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });
M.Sidenav.init(document.querySelectorAll('.sidenav'));
// M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn')); 
