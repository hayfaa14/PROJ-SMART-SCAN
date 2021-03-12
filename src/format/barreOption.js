export const barreOptionJS = (selector) => {
    const element = document.querySelector(selector);
    element.innerHTML = `
    <div class="fixed-action-btn direction-bottom click-to-toggle topleftcorner">
        <a class="btn-floating btn-large waves-effect waves-light greenproject"><i class="material-icons">add</i></a>
            <ul>
                <li>
                    <a href="rectangle_cut.php" class="btn-floating greyproject" type="button"><i class="material-icons">crop</i></a>
                </li>
                <li>
                    <a href="cut_circle.php" class="btn-floating greyproject" type="button"><i class="material-icons">crop_rotate</i></a>
                </li>
                <li>
                    <a href="to_delete.php" class="btn-floating greyproject" type="button"><i class="material-icons">remove_circle</i></a>
                </li>
            </ul>
    </div>
    <a href="formatText.js" class="btn-floating btn-large waves-effect waves-light greenproject savebutton" type="button"><i class="material-icons">save</i></a>
    </div>
    <br>
    `
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, { direction: 'bottom', hoverEnabled: false });
};