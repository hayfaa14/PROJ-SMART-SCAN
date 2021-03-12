import barreOptionHTML from '../barreOption/barreOption.html';
import displayText from '../format/formatText';

export const barreOptionJS = (selector) => {
    const element = document.querySelector(selector);
    element.innerHTML = barreOptionHTML;

    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });

    const aBarreOpt = document.querySelector('#aBarreOpt');
    aBarreOpt.onclick = () => {
        displayText("body");
        return false;
    }
};