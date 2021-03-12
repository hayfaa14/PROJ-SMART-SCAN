import barreOptionHTML from '../format/barreOption.html'
export const barreOptionJS = (selector) => {
    const element = document.querySelector(selector);
    element.innerHTML = barreOptionJS;
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });
};