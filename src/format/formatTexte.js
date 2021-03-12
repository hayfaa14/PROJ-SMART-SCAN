export const formatTextJS = (selector) => {
    const element = document.querySelector(selector);
    element.innerHTML = `
    <div class="fixed-action-btn direction-bottom click-to-toggle">
        <button class="btn-floating btn-large waves-effect waves-light greenproject topleftcorner"><i class="material-icons">add</i></button>
        <ul>
            <li>
                <a href="underline.php" class="btn-floating greyproject underlineButton" type="button"><i class="material-icons">format_underlined</i></a>
            </li>
            <li>
                <a href="bold.php" class="btn-floating greyproject boldButton" type="button"><i class="material-icons">format_bold</i></a>
            </li>
            <li>
                <a href="italic.php" class="btn-floating greyproject italicButton" type="button"><i class="material-icons">format_italic</i></a>
            </li>
            <li>
                <a href="bordercolor.php" class="btn-floating greyproject bordercolor" type="button" ><i class="material-icons">border_color</i></a>
            </li>
        </ul>
    </div>
`
};

var elems = document.querySelectorAll('.fixed-action-btn');
var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });