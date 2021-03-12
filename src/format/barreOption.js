import barreOptionHTML from '../format/barreOption.html';
import formatTextJS from '../format/formatTexte'


export const barreOptionJS = (selector) => {
    const aBarreOpt = document.querySelector('.aBarreOpt');
    const element = document.querySelector(selector);
    element.innerHTML = barreOptionHTML;
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });
    aBarreOpt.onclick = () => {
        formatTextJS("body");
        return false;
    }
};