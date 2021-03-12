import barreOptionHTML from '../format/barreOption.html';
import displayText from './formatText/formatText'


export const barreOptionJS = (selector) => {
    const aBarreOpt = document.querySelector('.aBarreOpt');
    const element = document.querySelector(selector);
    element.innerHTML = barreOptionHTML;
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });
    aBarreOpt.onclick = () => {
        displayText("body");
        return false;
    }
};