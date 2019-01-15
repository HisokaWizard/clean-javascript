document.getElementById('nav').onmouseover = (event) => {
    const target = event.target;
    if (target.className === 'menu-item') {
        const subMenu = target.getElementsByClassName('submenu');
        closeMenu();
        subMenu[0].style.display = 'block';
    }
}

document.onmouseover = (event) => {
    const target = event.target;
    if (target.className !== 'menu-item' && target.className !== 'submenu') {
        closeMenu();
    }
}

function closeMenu() {
    const subMenu = document.getElementsByClassName('submenu');
    for (let index = 0; index < subMenu.length; index++) {
        subMenu[index].style.display = 'none';
    }
}