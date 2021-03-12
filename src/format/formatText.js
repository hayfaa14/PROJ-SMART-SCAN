import formatTextHTML from '../format/formatText.html'
// import displaySave from '../save/save.js'

export const displayText = (selector) => {
    const aSaveOpt = document.querySelector('.aSaveOpt');
    const element = document.querySelector(selector);
    element.innerHTML = formatTextHTML;
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });
    aSaveOpt.onclick = () => {
        displaySave("body");
        return false;
    }
};