window.onload = () => {
    actionMenu('none');
}

function navBarMouseOver(event) {
    const target = event.target;
    if (target.className === 'menu-item') {
        const subMenu = target.getElementsByClassName('submenu');
        subMenu[0].style.display = 'block';
    }
}

function navBarMouseOut(event) {
    const target = event.target;
    if (target.className === 'menu-item') {
        actionMenu('none');
    }
}

function actionMenu(action) {
    const subMenu = document.getElementsByClassName('submenu');
    for (let index = 0; index < subMenu.length; index++) {
        subMenu[index].style.display = action;
    }
}